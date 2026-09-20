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

  function getFeatureStyle(feature) {
    const data = getFeatureData(feature);
    let fillColor = '#dedecc';
    let fillOpacity = 0.82;

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
      weight: 0.8,
      opacity: 0.9,
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
    layerById.set(data.id, layer);

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
        layer.setStyle({
          weight: 2.5,
          color: '#38bdf8',
          fillOpacity: 0.92
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          layer.bringToFront();
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
    layer.setStyle({
      weight: 3.5,
      color: '#ffffff',
      fillOpacity: 1.0
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
    // Pan smoothly to polygon bounds
    map.fitBounds(layer.getBounds(), {
      paddingTopLeft: [50, 50],
      paddingBottomRight: [AgrisightSidebar.isOpen() ? 480 : 50, 50],
      maxZoom: 9,
      animate: true,
      duration: 0.6
    });
  }

  function clearHighlight() {
    if (highlightedLayer && geojsonLayer) {
      geojsonLayer.resetStyle(highlightedLayer);
      highlightedLayer = null;
    }
  }

  function selectKabupatenById(id, shouldZoom) {
    const layer = layerById.get(id);
    const data = dataById.get(id);
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

  function applyFilters({ province, cluster, query }) {
    if (!geojsonLayer) return;

    let matchedBounds = L.latLngBounds();
    let hasMatches = false;

    geojsonLayer.eachLayer(layer => {
      const data = layer.feature.properties._data;
      let match = true;

      if (province !== 'ALL' && data.province !== province) match = false;
      if (cluster !== 'ALL' && data.cluster !== cluster) match = false;
      if (query && !data.name.toLowerCase().includes(query) && !data.province.toLowerCase().includes(query)) match = false;

      if (match) {
        geojsonLayer.resetStyle(layer);
        layer.setStyle({ fillOpacity: 0.8, opacity: 1 });
        matchedBounds.extend(layer.getBounds());
        hasMatches = true;
      } else {
        layer.setStyle({
          fillOpacity: 0.06,
          weight: 0.5,
          color: 'rgba(255,255,255,0.05)'
        });
      }
    });

    if (hasMatches && province !== 'ALL') {
      map.fitBounds(matchedBounds, {
        paddingTopLeft: [40, 40],
        paddingBottomRight: [AgrisightSidebar && AgrisightSidebar.isOpen() ? 480 : 40, 40],
        maxZoom: 9,
        animate: true
      });
    }
  }

  function resetView() {
    clearHighlight();
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
        <div class="legend-item" data-cluster="1">
          <div class="legend-item-left">
            <span class="legend-color-box" style="background-color:#1b3b2b;"></span>
            <span class="legend-item-name">Klaster 1: Mandiri & Resilien</span>
          </div>
          <span class="legend-item-count">${c1Count}</span>
        </div>
        <div class="legend-item" data-cluster="2">
          <div class="legend-item-left">
            <span class="legend-color-box" style="background-color:#d97706;"></span>
            <span class="legend-item-name">Klaster 2: Berkembang & Waspada</span>
          </div>
          <span class="legend-item-count">${c2Count}</span>
        </div>
        <div class="legend-item" data-cluster="3">
          <div class="legend-item-left">
            <span class="legend-color-box" style="background-color:#b93822;"></span>
            <span class="legend-item-name">Klaster 3: Rentan & Prioritas 3T</span>
          </div>
          <span class="legend-item-count">${c3Count}</span>
        </div>
      `;
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
