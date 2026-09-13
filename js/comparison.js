/**
 * AGRISIGHT — Multi-Region Comparison Module
 * Compare up to 3 regencies side-by-side
 */

const AgrisightComparison = (function () {
  let selectedRegions = [];
  const MAX_REGIONS = 3;

  const trayEl = document.getElementById('comparison-tray');
  const trayChipsEl = document.getElementById('tray-selected-chips');
  const drawerEl = document.getElementById('comparison-drawer');
  const drawerBackdropEl = document.getElementById('drawer-backdrop');
  const countBadgeEl = document.getElementById('drawer-count-badge');
  const tableContainerEl = document.getElementById('comparison-table-container');

  function init() {
    // Open drawer on tray click
    const btnOpenDrawer = document.getElementById('btn-open-comparison');
    if (btnOpenDrawer) {
      btnOpenDrawer.addEventListener('click', openDrawer);
    }

    // Close drawer
    const btnCloseDrawer = document.getElementById('btn-close-drawer');
    if (btnCloseDrawer) {
      btnCloseDrawer.addEventListener('click', closeDrawer);
    }
    if (drawerBackdropEl) {
      drawerBackdropEl.addEventListener('click', closeDrawer);
    }

    // Clear all
    const btnClearAll = document.getElementById('btn-clear-comparison');
    if (btnClearAll) {
      btnClearAll.addEventListener('click', clearAll);
    }
  }

  function addRegion(regency) {
    if (!regency) return false;
    if (selectedRegions.some(r => r.id === regency.id)) {
      AgrisightApp.showToast(`${regency.name} sudah ada dalam perbandingan.`, 'info');
      return false;
    }
    if (selectedRegions.length >= MAX_REGIONS) {
      AgrisightApp.showToast(`Maksimal ${MAX_REGIONS} wilayah untuk perbandingan bersamaan.`, 'error');
      return false;
    }

    selectedRegions.push(regency);
    updateUI();
    AgrisightApp.showToast(`${regency.name} ditambahkan ke perbandingan (${selectedRegions.length}/${MAX_REGIONS})`, 'success');
    return true;
  }

  function removeRegion(id) {
    selectedRegions = selectedRegions.filter(r => r.id !== id);
    updateUI();
    if (AgrisightSidebar && AgrisightSidebar.getCurrentRegency()?.id === id) {
      AgrisightSidebar.updateCompareButtonState();
    }
    if (selectedRegions.length === 0 && isDrawerOpen()) {
      closeDrawer();
    }
  }

  function isCompared(id) {
    return selectedRegions.some(r => r.id === id);
  }

  function clearAll() {
    selectedRegions = [];
    updateUI();
    if (AgrisightSidebar) AgrisightSidebar.updateCompareButtonState();
    closeDrawer();
    AgrisightApp.showToast('Daftar perbandingan dibersihkan.', 'info');
  }

  function updateUI() {
    if (!trayEl || !trayChipsEl) return;

    if (selectedRegions.length > 0) {
      trayEl.classList.add('visible');
    } else {
      trayEl.classList.remove('visible');
    }

    trayChipsEl.innerHTML = '';
    selectedRegions.forEach(r => {
      const clusterMeta = CLUSTERS_META[r.cluster] || CLUSTERS_META[2];
      const chip = document.createElement('div');
      chip.className = 'tray-chip';
      chip.innerHTML = `
        <span style="width:8px; height:8px; border-radius:50%; background-color:${clusterMeta.color}"></span>
        <span>${r.name}</span>
        <span class="tray-chip-remove" data-id="${r.id}">&times;</span>
      `;
      chip.querySelector('.tray-chip-remove').addEventListener('click', (e) => {
        e.stopPropagation();
        removeRegion(r.id);
      });
      trayChipsEl.appendChild(chip);
    });

    if (countBadgeEl) {
      countBadgeEl.textContent = `${selectedRegions.length} Wilayah`;
    }

    if (isDrawerOpen()) {
      renderDrawerContent();
    }
  }

  function openDrawer() {
    if (selectedRegions.length === 0) {
      AgrisightApp.showToast('Pilih minimal 1 wilayah untuk dibandingkan.', 'info');
      return;
    }
    drawerEl.classList.add('open');
    if (drawerBackdropEl) drawerBackdropEl.classList.add('open');
    renderDrawerContent();
  }

  function closeDrawer() {
    drawerEl.classList.remove('open');
    if (drawerBackdropEl) drawerBackdropEl.classList.remove('open');
  }

  function isDrawerOpen() {
    return drawerEl && drawerEl.classList.contains('open');
  }

  function renderDrawerContent() {
    if (!tableContainerEl || selectedRegions.length === 0) return;

    // Build comparison table
    const keys = ['ikp', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9'];

    let html = `
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Indikator / Parameter</th>
            ${selectedRegions.map(r => `
              <th>
                <div style="font-weight:700; color:#fff;">${r.name}</div>
                <div style="font-size:0.7rem; color:#94a3b8;">${r.province}</div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:600; color:#cbd5e1;">Cluster K-Medoids</td>
            ${selectedRegions.map(r => {
              const c = CLUSTERS_META[r.cluster];
              return `<td><span class="badge ${c.badgeClass}">${c.name}</span></td>`;
            }).join('')}
          </tr>
    `;

    keys.forEach(key => {
      const meta = INDICATORS_META[key];
      html += `
        <tr>
          <td>
            <div style="font-weight:600; color:#f8fafc;">${meta.shortName}</div>
            <div style="font-size:0.7rem; color:#64748b;">${meta.description.substring(0, 50)}...</div>
          </td>
          ${selectedRegions.map(r => {
            const val = r[key];
            const isIKP = key === 'ikp';
            return `
              <td>
                <span style="font-family:var(--font-mono); font-size:1rem; font-weight:700; color:${isIKP ? '#38bdf8' : '#f8fafc'};">
                  ${val}
                </span>
                <span style="font-size:0.7rem; color:#94a3b8; margin-left:2px;">${meta.unit}</span>
              </td>
            `;
          }).join('')}
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    tableContainerEl.innerHTML = html;

    // Render comparison radar chart
    AgrisightCharts.renderComparisonRadar('comparison-radar-canvas', selectedRegions);
  }

  return {
    init,
    addRegion,
    removeRegion,
    isCompared,
    clearAll,
    openDrawer,
    closeDrawer,
    getSelectedRegions: () => selectedRegions
  };
})();
