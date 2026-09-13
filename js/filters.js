/**
 * AGRISIGHT — Filter Toolbar & Search Module
 */

const AgrisightFilters = (function () {
  let searchInputEl;
  let searchDropdownEl;
  let searchClearBtnEl;
  let provinceSelectEl;
  let clusterPills;
  let resetBtnEl;

  let activeProvince = 'ALL';
  let activeCluster = 'ALL'; // 'ALL' | 1 | 2 | 3
  let searchQuery = '';

  function init() {
    searchInputEl = document.getElementById('search-kabupaten');
    searchDropdownEl = document.getElementById('search-dropdown');
    searchClearBtnEl = document.getElementById('search-clear');
    provinceSelectEl = document.getElementById('filter-province');
    clusterPills = document.querySelectorAll('.cluster-pill');
    resetBtnEl = document.getElementById('btn-reset-filters');

    populateProvinces();
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

    // Cluster pill selection
    clusterPills.forEach(pill => {
      pill.addEventListener('click', function () {
        const cl = this.getAttribute('data-cluster');
        setClusterFilter(cl === 'ALL' ? 'ALL' : parseInt(cl, 10));
      });
    });

    // Reset filters button
    if (resetBtnEl) {
      resetBtnEl.addEventListener('click', resetAll);
    }
  }

  function setClusterFilter(clusterVal) {
    activeCluster = clusterVal;
    clusterPills.forEach(p => {
      const pillVal = p.getAttribute('data-cluster');
      if (pillVal === String(clusterVal)) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
    applyFilters();
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
    searchQuery = '';

    if (searchInputEl) searchInputEl.value = '';
    if (searchClearBtnEl) searchClearBtnEl.style.display = 'none';
    if (provinceSelectEl) provinceSelectEl.value = 'ALL';

    clusterPills.forEach(p => {
      if (p.getAttribute('data-cluster') === 'ALL') p.classList.add('active');
      else p.classList.remove('active');
    });

    hideSearchSuggestions();
    if (window.AgrisightMap) {
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
    setClusterFilter,
    applyFilters,
    updateSummaryStats,
    getActiveFilters: () => ({ province: activeProvince, cluster: activeCluster, query: searchQuery })
  };
})();
