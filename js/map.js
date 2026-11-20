/**
 * AGRISIGHT — Leaflet Choropleth Map Module
 * High-performance GeoJSON rendering with dynamic cluster & indicator heatmaps
 */

const AgrisightMap = (function () {
  let map = null;
  let geojsonLayer = null;
  let highlightedLayer = null;
  let activeMetric = 'cluster'; // 'cluster' | 'ikp' | 'x1' ... 'x9'

  // Lookup maps for fast indexing
  const dataById = new Map();
  const dataByName = new Map();
  const layerById = new Map();
  const layerByName = new Map();

  // Active filter state
  const activeFilters = {
    province: 'ALL',
    cluster: 'ALL', // 'ALL' | 1 | 2 | 3
    kabupatenId: 'ALL',
    query: ''
  };

  // Fallback for newly formed regencies that share geometry with parent in baseline GeoJSON
  const KABUPATEN_FALLBACK_PARENT = {
    '7412': '7403', // Konawe Kepulauan -> Konawe
    '7413': '7402', // Muna Barat -> Muna
    '7414': '7401', // Buton Selatan -> Buton
    '7415': '7401'  // Buton Tengah -> Buton
  };

  // Initial map center & bounds strictly for Indonesia archipelago
  const INDO_CENTER = [-2.5, 118.0];
  const INDO_ZOOM = 5;
  const INDO_BOUNDS = L.latLngBounds(
    L.latLng(-11.5, 94.5), // Southwest: Southern tip of Rote/Timor & Western tip of Sabang
    L.latLng(6.5, 141.5)   // Northeast: Northern tip of Aceh & Eastern border of Papua
  );

  function init() {
    buildDataLookups();
    initLeaflet();
    loadGeoJSON();
    bindControls();
    updateLegend();
  }

  function buildDataLookups() {
    if (typeof KABUPATEN_DATA === 'undefined') return;
    KABUPATEN_DATA.forEach(item => {
      dataById.set(item.id, item);
      const cleanName = item.name.toLowerCase().replace(/kabupaten|kota/g, '').trim();
      dataByName.set(cleanName, item);
    });
  }

  function initLeaflet() {
    map = L.map('indonesia-map', {
      center: INDO_CENTER,
      zoom: INDO_ZOOM,
      minZoom: 4,
      maxZoom: 10,
      maxBounds: INDO_BOUNDS,
      maxBoundsViscosity: 1.0, // Strict bounce-back boundary lock to Indonesia
      zoomControl: false, // Disabled default topleft position to avoid overlap with search toolbar
      attributionControl: false
    });

    // Add zoom control to bottomright to avoid overlapping with filter-toolbar at top-left
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Light Neutral Canvas Basemap (Esri World Light Gray - 100% Free, No API Key, Clean, Reliable)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      opacity: 0.95
    }).addTo(map);

    // Map click background clears selection
    map.on('click', function (e) {
      if (e.originalEvent.target.id === 'indonesia-map') {
        clearHighlight();
        if (AgrisightSidebar && AgrisightSidebar.isOpen()) {
          AgrisightSidebar.close();
        }
      }
    });
  }

  function loadGeoJSON() {
    if (typeof INDONESIA_GEOJSON === 'undefined') {
      console.error('INDONESIA_GEOJSON data is not defined.');
      return;
    }

    geojsonLayer = L.geoJSON(INDONESIA_GEOJSON, {
      filter: featureFilter,
      style: getFeatureStyle,
      onEachFeature: onEachFeature
    }).addTo(map);
  }

  function featureFilter(feature) {
    const rawName = (feature.properties.kabkot || '').toLowerCase();
    // Exclude auxiliary non-regency waterbodies / parks if tagged as such
    if (rawName.startsWith('danau') || rawName.startsWith('waduk') || rawName.startsWith('hutan')) {
      return false;
    }
    return true;
  }

  function getFeatureData(feature) {
    const id = feature.properties.id || feature.properties.code;
    if (dataById.has(id)) return dataById.get(id);

    const name = (feature.properties.kabkot || '').toLowerCase().trim();
    if (dataByName.has(name)) return dataByName.get(name);

    // Fallback default
    return {
      id: id || '0000',
      name: feature.properties.kabkot || 'Kabupaten',
      province: feature.properties.provinsi || 'Indonesia',
      cluster: 2,
      ikp: 65.0,
      x1: 1.4, x2: 12.0, x3: 48.0, x4: 90.0, x5: 75.0, x6: 8.8, x7: 3.0, x8: 70.5, x9: 28.0
    };
  }

  function isFeatureMatching(data) {
    if (!data) return false;
    if (activeFilters.province !== 'ALL' && data.province !== activeFilters.province) return false;
    if (activeFilters.cluster !== 'ALL' && data.cluster !== activeFilters.cluster) return false;
    if (activeFilters.kabupatenId !== 'ALL' && data.id !== activeFilters.kabupatenId) return false;
    if (activeFilters.query) {
      const q = activeFilters.query.toLowerCase().trim();
      const n = (data.name || '').toLowerCase();
      const p = (data.province || '').toLowerCase();
      if (!n.includes(q) && !p.includes(q)) return false;
    }
    return true;
  }

  function getFeatureStyle(feature) {
    const data = getFeatureData(feature);
    const isMatch = isFeatureMatching(data);

    // KETIKA FILTER DIAKTIFKAN: Daerah yang TIDAK DIPILIH benar-benar TIDAK ADA WARNANYA (abu-abu netral)
    if (!isMatch) {
      return {
        fillColor: '#ebebe5',
        weight: 0.4,
        opacity: 0.35,
        color: '#d4d4cb',
        fillOpacity: 0.15,
        className: 'geo-kabupaten-inactive'
      };
    }

    // Daerah yang cocok / aktif menampilkan warna yang jelas dan cerah
    let fillColor = '#dedecc';
    let fillOpacity = 0.88;

    if (activeMetric === 'cluster') {
      const c = data.cluster;
      fillColor = c === 1 ? '#1b3b2b' : c === 2 ? '#d97706' : '#b93822';
    } else if (activeMetric === 'ikp') {
      fillColor = getContinuousColor(data.ikp, 30, 90, true);
    } else if (INDICATORS_META[activeMetric]) {
      const meta = INDICATORS_META[activeMetric];
      fillColor = getContinuousColor(data[activeMetric], meta.min, meta.max, meta.higherIsBetter);
    }

    return {
      fillColor: fillColor,
      weight: 0.9,
      opacity: 0.95,
      color: '#ffffff',
      fillOpacity: fillOpacity,
      className: 'geo-kabupaten-polygon'
    };
  }

  function getContinuousColor(val, min, max, higherIsBetter) {
    let t = (val - min) / (max - min);
    t = Math.max(0, Math.min(1, t));
    if (!higherIsBetter) t = 1 - t; // invert so higher green = healthier

    // Color ramp: Terracotta -> Amber -> Forest Green
    if (t < 0.5) {
      const subT = t / 0.5;
      return interpolateColor('#b93822', '#d97706', subT);
    } else {
      const subT = (t - 0.5) / 0.5;
      return interpolateColor('#d97706', '#1b3b2b', subT);
    }
  }

  function interpolateColor(color1, color2, factor) {
    const hex = (c) => parseInt(c.slice(1), 16);
    const r1 = (hex(color1) >> 16) & 255;
    const g1 = (hex(color1) >> 8) & 255;
    const b1 = hex(color1) & 255;

    const r2 = (hex(color2) >> 16) & 255;
    const g2 = (hex(color2) >> 8) & 255;
    const b2 = hex(color2) & 255;

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return `rgb(${r}, ${g}, ${b})`;
  }

  function onEachFeature(feature, layer) {
    const data = getFeatureData(feature);
    feature.properties._data = data;

    // Index layer by all possible identifiers
    if (data.id) layerById.set(data.id, layer);
    if (feature.properties.id) layerById.set(feature.properties.id, layer);
    if (feature.properties.code) layerById.set(feature.properties.code, layer);
    const cleanName = data.name.toLowerCase().replace(/kabupaten|kota/g, '').trim();
    layerByName.set(cleanName, layer);

    // Tooltip
    const clusterMeta = CLUSTERS_META[data.cluster];
    const tooltipContent = `
      <div class="tooltip-title">${data.name}</div>
      <div class="tooltip-prov">Provinsi ${data.province}</div>
      <div class="tooltip-metrics">
        <span class="badge ${clusterMeta.badgeClass} tooltip-badge">${clusterMeta.shortName}</span>
        <span class="tooltip-ikp">IKP: ${data.ikp}</span>
      </div>
    `;

    layer.bindTooltip(tooltipContent, {
      className: 'custom-map-tooltip',
      sticky: true,
      direction: 'top',
      offset: [0, -10]
    });

    // Hover effect
    layer.on('mouseover', function (e) {
      if (layer !== highlightedLayer) {
        const isMatch = isFeatureMatching(data);
        if (isMatch) {
          layer.setStyle({
            weight: 2.5,
            color: '#38bdf8',
            fillOpacity: 0.95
          });
          if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
          }
        } else {
          layer.setStyle({
            weight: 1.0,
            color: '#94a3b8',
            fillOpacity: 0.25
          });
        }
      }
    });

    layer.on('mouseout', function (e) {
      if (layer !== highlightedLayer) {
        geojsonLayer.resetStyle(layer);
      }
    });

    // Click handler
    layer.on('click', function (e) {
      L.DomEvent.stopPropagation(e);
      highlightPolygon(layer, data);
      if (AgrisightSidebar) {
        AgrisightSidebar.open(data);
      }
    });
  }

  function highlightPolygon(layer, data) {
    clearHighlight();
    highlightedLayer = layer;

    // Warna highlight kuning emas cerah dengan border kontras agar langsung terlihat
    layer.setStyle({
      weight: 3.5,
      color: '#facc15',
      fillOpacity: 1.0
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }

    // Pan & zoom smoothly ke polygon bounds
    const isSidebarOpen = AgrisightSidebar && AgrisightSidebar.isOpen();
    map.fitBounds(layer.getBounds(), {
      paddingTopLeft: [60, 60],
      paddingBottomRight: [isSidebarOpen ? 460 : 60, 60],
      maxZoom: 9,
      animate: true,
      duration: 0.65
    });

    // Tampilkan tooltip secara otomatis tepat di wilayah yang dipencet
    layer.openTooltip();
  }

  function clearHighlight() {
    if (highlightedLayer && geojsonLayer) {
      geojsonLayer.resetStyle(highlightedLayer);
      highlightedLayer = null;
    }
  }

  function selectKabupatenById(id, shouldZoom) {
    let layer = layerById.get(id);
    let data = dataById.get(id);

    // Fallback to parent geometry if newly formed regency
    if (!layer && KABUPATEN_FALLBACK_PARENT[id]) {
      const parentId = KABUPATEN_FALLBACK_PARENT[id];
      layer = layerById.get(parentId);
    }

    // Fallback by clean name
    if (!layer && data) {
      const cleanName = data.name.toLowerCase().replace(/kabupaten|kota/g, '').trim();
      layer = layerByName.get(cleanName);
    }

    if (!data && id) {
      data = dataById.get(id);
    }

    if (layer && data) {
      highlightPolygon(layer, data);
      if (AgrisightSidebar) {
        AgrisightSidebar.open(data);
      }
    } else {
      AgrisightApp.showToast('Kabupaten/Kota tidak ditemukan di peta.', 'error');
    }
  }

  function setMetricMode(mode) {
    activeMetric = mode;
    if (geojsonLayer) {
      geojsonLayer.setStyle(getFeatureStyle);
    }
    updateLegend();
  }

  function applyFilters(filters = {}) {
    if (!geojsonLayer) return;

    if (filters.province !== undefined) activeFilters.province = filters.province;
    if (filters.cluster !== undefined) activeFilters.cluster = filters.cluster;
    if (filters.query !== undefined) activeFilters.query = filters.query;
    if (filters.kabupatenId !== undefined) activeFilters.kabupatenId = filters.kabupatenId;

    let matchedBounds = L.latLngBounds();
    let hasMatches = false;

    // Refresh style seluruh layer secara konsisten
    geojsonLayer.setStyle(getFeatureStyle);

    geojsonLayer.eachLayer(layer => {
      const data = layer.feature.properties._data;
      if (isFeatureMatching(data)) {
        matchedBounds.extend(layer.getBounds());
        hasMatches = true;
      }
    });

    // Jika filter kabupaten spesifik dipilih, langsung highlight
    if (activeFilters.kabupatenId && activeFilters.kabupatenId !== 'ALL') {
      selectKabupatenById(activeFilters.kabupatenId, true);
    } else if (hasMatches && activeFilters.province !== 'ALL') {
      map.fitBounds(matchedBounds, {
        paddingTopLeft: [40, 40],
        paddingBottomRight: [AgrisightSidebar && AgrisightSidebar.isOpen() ? 480 : 40, 40],
        maxZoom: 9,
        animate: true,
        duration: 0.6
      });
    }
  }

  function resetView() {
    clearHighlight();
    activeFilters.province = 'ALL';
    activeFilters.cluster = 'ALL';
    activeFilters.kabupatenId = 'ALL';
    activeFilters.query = '';

    map.setView(INDO_CENTER, INDO_ZOOM, { animate: true });
    if (geojsonLayer) {
      geojsonLayer.setStyle(getFeatureStyle);
    }
  }

  function updateLegend() {
    const legendTitleEl = document.getElementById('legend-title');
    const legendItemsEl = document.getElementById('legend-items');
    if (!legendTitleEl || !legendItemsEl) return;

    if (activeMetric === 'cluster') {
      legendTitleEl.textContent = 'Klaster K-Medoids';
      const c1Count = KABUPATEN_DATA.filter(k => k.cluster === 1).length;
      const c2Count = KABUPATEN_DATA.filter(k => k.cluster === 2).length;
      const c3Count = KABUPATEN_DATA.filter(k => k.cluster === 3).length;

      legendItemsEl.innerHTML = `
        <div class="legend-item" data-cluster="1" title="Klik untuk filter Klaster 1">
          <div class="legend-item-left">
            <span class="legend-color-box" style="background-color:#1b3b2b;"></span>
            <span class="legend-item-name">Klaster 1: Daerah Stabil Pangan</span>
          </div>
          <span class="legend-item-count">175</span>
        </div>
        <div class="legend-item" data-cluster="2" title="Klik untuk filter Klaster 2">
          <div class="legend-item-left">
            <span class="legend-color-box" style="background-color:#d97706;"></span>
            <span class="legend-item-name">Klaster 2: Daerah Potensial Pangan</span>
          </div>
          <span class="legend-item-count">150</span>
        </div>
        <div class="legend-item" data-cluster="3" title="Klik untuk filter Klaster 3">
          <div class="legend-item-left">
            <span class="legend-color-box" style="background-color:#b93822;"></span>
            <span class="legend-item-name">Klaster 3: Daerah Rentan Pangan</span>
          </div>
          <span class="legend-item-count">189</span>
        </div>
      `;

      // Bind click handlers to legend items
      legendItemsEl.querySelectorAll('.legend-item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function () {
          const cl = this.getAttribute('data-cluster');
          if (window.AgrisightFilters) {
            AgrisightFilters.setClusterFilter(cl);
          }
        });
      });
    } else {
      const meta = INDICATORS_META[activeMetric] || INDICATORS_META.ikp;
      legendTitleEl.textContent = meta.shortName;
      legendItemsEl.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:6px; font-size:0.75rem;">
          <div style="height:10px; border-radius:4px; background: linear-gradient(to right, #b93822, #d97706, #1b3b2b);"></div>
          <div style="display:flex; justify-content:space-between; color:var(--text-secondary); font-family:var(--font-sans); font-size: 11px;">
            <span>${meta.higherIsBetter ? 'Rendah' : 'Tinggi (Rentan)'}</span>
            <span style="font-weight: 700; color: var(--forest-900);">Rata-rata: ${meta.nationalAvg}</span>
            <span>${meta.higherIsBetter ? 'Tinggi (Baik)' : 'Rendah (Baik)'}</span>
          </div>
        </div>
      `;
    }
  }

  function bindControls() {
    const btnResetView = document.getElementById('btn-map-reset-view');
    if (btnResetView) {
      btnResetView.addEventListener('click', resetView);
    }
  }

  return {
    init,
    setMetricMode,
    applyFilters,
    selectKabupatenById,
    resetView,
    clearHighlight
  };
})();
