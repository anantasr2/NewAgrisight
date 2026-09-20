/**
 * AGRISIGHT — Filter Toolbar & Search Module
 */

const AgrisightFilters = (function () {
  let searchInputEl;
  let searchDropdownEl;
  let searchClearBtnEl;
  let provinceSelectEl;
  let metricSelectEl;
  let clusterPills;
  let resetBtnEl;

  let activeProvince = 'ALL';
  let activeCluster = 'ALL'; // 'ALL' | 1 | 2 | 3
  let activeMetric = 'cluster'; // 'cluster' | 'ikp' | 'x1' ... 'x9'
  let searchQuery = '';

  function init() {
    searchInputEl = document.getElementById('search-kabupaten');
    searchDropdownEl = document.getElementById('search-dropdown');
    searchClearBtnEl = document.getElementById('search-clear');
    provinceSelectEl = document.getElementById('filter-province');
    metricSelectEl = document.getElementById('filter-metric');
    clusterPills = document.querySelectorAll('.cluster-pill');
    resetBtnEl = document.getElementById('btn-reset-filters');

    populateProvinces();
    populateMetrics();
    bindEvents();
  }

  function populateProvinces() {
    if (!provinceSelectEl || typeof KABUPATEN_DATA === 'undefined') return;

    // Get unique provinces
    const provinces = Array.from(new Set(KABUPATEN_DATA.map(k => k.province))).sort((a, b) => a.localeCompare('id'));

    provinceSelectEl.innerHTML = '<option value="ALL">Semua Provinsi (38)</option>';
    provinces.forEach(prov => {
      const opt = document.createElement('option');
      opt.value = prov;
      opt.textContent = prov;
      provinceSelectEl.appendChild(opt);
    });
  }

  function populateMetrics() {
    if (!metricSelectEl) return;
    metricSelectEl.innerHTML = `
      <option value="cluster">Pewarnaan: Cluster K-Medoids</option>
      <option value="ikp">Pewarnaan: Indeks Ketahanan Pangan (IKP)</option>
      <optgroup label="Indikator Ketersediaan">
        <option value="x1">X1: NCPR (Rasio Konsumsi/Produksi)</option>
      </optgroup>
      <optgroup label="Indikator Keterjangkauan">
        <option value="x2">X2: Kemiskinan (%)</option>
        <option value="x3">X3: Pengeluaran Pangan (%)</option>
        <option value="x4">X4: Akses Listrik (%)</option>
      </optgroup>
      <optgroup label="Indikator Pemanfaatan">
        <option value="x5">X5: Akses Air Bersih (%)</option>
        <option value="x6">X6: Lama Sekolah Wanita (Thn)</option>
        <option value="x7">X7: Rasio Nakes (/1k)</option>
        <option value="x8">X8: Angka Harapan Hidup (Thn)</option>
        <option value="x9">X9: Prevalensi Stunting (%)</option>
      </optgroup>
    `;
  }

  function bindEvents() {
    // Search input typing
    if (searchInputEl) {
      searchInputEl.addEventListener('input', function (e) {
        searchQuery = e.target.value.trim().toLowerCase();
        if (searchQuery.length > 0) {
          if (searchClearBtnEl) searchClearBtnEl.style.display = 'block';
          renderSearchSuggestions(searchQuery);
        } else {
          if (searchClearBtnEl) searchClearBtnEl.style.display = 'none';
          hideSearchSuggestions();
          applyFilters();
        }
      });

      searchInputEl.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          hideSearchSuggestions();
        }
      });
    }

    if (searchClearBtnEl) {
      searchClearBtnEl.addEventListener('click', function () {
        searchInputEl.value = '';
        searchQuery = '';
        searchClearBtnEl.style.display = 'none';
        hideSearchSuggestions();
        applyFilters();
      });
    }

    // Close dropdown on click outside
    document.addEventListener('click', function (e) {
      if (searchDropdownEl && !searchDropdownEl.contains(e.target) && e.target !== searchInputEl) {
        hideSearchSuggestions();
      }
    });

    // Province filter change
    if (provinceSelectEl) {
      provinceSelectEl.addEventListener('change', function (e) {
        activeProvince = e.target.value;
        applyFilters();
      });
    }

    // Metric mode change
    if (metricSelectEl) {
      metricSelectEl.addEventListener('change', function (e) {
        activeMetric = e.target.value;
        if (window.AgrisightMap) {
          AgrisightMap.setMetricMode(activeMetric);
        }
      });
    }

    // Cluster pill selection
    clusterPills.forEach(pill => {
      pill.addEventListener('click', function () {
        clusterPills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        const cl = this.getAttribute('data-cluster');
        activeCluster = cl === 'ALL' ? 'ALL' : parseInt(cl, 10);
        applyFilters();
      });
    });

    // Reset filters button
    if (resetBtnEl) {
      resetBtnEl.addEventListener('click', resetAll);
    }
  }

  function renderSearchSuggestions(query) {
    if (!searchDropdownEl || typeof KABUPATEN_DATA === 'undefined') return;

    const matches = KABUPATEN_DATA.filter(k =>
      k.name.toLowerCase().includes(query) ||
      k.province.toLowerCase().includes(query)
    ).slice(0, 10);

    if (matches.length === 0) {
      searchDropdownEl.innerHTML = `
        <div style="padding:12px 14px; color:#64748b; font-size:0.8rem; text-align:center;">
          Tidak ditemukan kabupaten/kota untuk "${query}"
        </div>
      `;
      searchDropdownEl.style.display = 'block';
      return;
    }

    searchDropdownEl.innerHTML = '';
    matches.forEach(item => {
      const clusterMeta = CLUSTERS_META[item.cluster];
      const div = document.createElement('div');
      div.className = 'search-result-item';
      div.innerHTML = `
        <div class="search-item-info">
          <span class="search-item-name">${item.name}</span>
          <span class="search-item-prov">${item.province}</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="badge ${clusterMeta.badgeClass}" style="font-size:0.65rem;">C${item.cluster}</span>
          <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700;">IKP ${item.ikp}</span>
        </div>
      `;
      div.addEventListener('click', function () {
        hideSearchSuggestions();
        if (searchInputEl) searchInputEl.value = item.name;
        if (window.AgrisightMap) {
          AgrisightMap.selectKabupatenById(item.id, true);
        }
      });
      searchDropdownEl.appendChild(div);
    });

    searchDropdownEl.style.display = 'block';
  }

  function hideSearchSuggestions() {
    if (searchDropdownEl) searchDropdownEl.style.display = 'none';
  }

  function applyFilters() {
    if (window.AgrisightMap) {
      AgrisightMap.applyFilters({
        province: activeProvince,
        cluster: activeCluster,
        query: searchQuery
      });
    }
    updateSummaryStats();
  }

  function resetAll() {
    activeProvince = 'ALL';
    activeCluster = 'ALL';
    activeMetric = 'cluster';
    searchQuery = '';

    if (searchInputEl) searchInputEl.value = '';
    if (searchClearBtnEl) searchClearBtnEl.style.display = 'none';
    if (provinceSelectEl) provinceSelectEl.value = 'ALL';
    if (metricSelectEl) metricSelectEl.value = 'cluster';

    clusterPills.forEach(p => {
      if (p.getAttribute('data-cluster') === 'ALL') p.classList.add('active');
      else p.classList.remove('active');
    });

    hideSearchSuggestions();
    if (window.AgrisightMap) {
      AgrisightMap.setMetricMode('cluster');
      AgrisightMap.resetView();
    }
    updateSummaryStats();
    AgrisightApp.showToast('Semua filter direset.', 'info');
  }

  function updateSummaryStats() {
    if (typeof KABUPATEN_DATA === 'undefined') return;

    let filtered = KABUPATEN_DATA.filter(k => {
      if (activeProvince !== 'ALL' && k.province !== activeProvince) return false;
      if (activeCluster !== 'ALL' && k.cluster !== activeCluster) return false;
      if (searchQuery && !k.name.toLowerCase().includes(searchQuery) && !k.province.toLowerCase().includes(searchQuery)) return false;
      return true;
    });

    const c1Count = filtered.filter(k => k.cluster === 1).length;
    const c2Count = filtered.filter(k => k.cluster === 2).length;
    const c3Count = filtered.filter(k => k.cluster === 3).length;

    const statTotalEl = document.getElementById('stat-total-kab');
    const statC1El = document.getElementById('stat-c1-kab');
    const statC2El = document.getElementById('stat-c2-kab');
    const statC3El = document.getElementById('stat-c3-kab');

    if (statTotalEl) statTotalEl.textContent = `${filtered.length} Kab/Kota`;
    if (statC1El) statC1El.textContent = `${c1Count}`;
    if (statC2El) statC2El.textContent = `${c2Count}`;
    if (statC3El) statC3El.textContent = `${c3Count}`;
  }

  return {
    init,
    resetAll,
    applyFilters,
    updateSummaryStats,
    getActiveFilters: () => ({ province: activeProvince, cluster: activeCluster, metric: activeMetric, query: searchQuery })
  };
})();
