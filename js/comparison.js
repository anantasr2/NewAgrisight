/**
 * AGRISIGHT — Multi-Region Comparison Module
 * Compare up to 3 regencies side-by-side
 */

const AgrisightComparison = (function () {
  let selectedRegions = [];
  const MAX_REGIONS = 3;

  function getElements() {
    return {
      trayEl: document.getElementById('comparison-tray'),
      trayChipsEl: document.getElementById('tray-chips-container') || document.getElementById('tray-selected-chips'),
      btnOpenTray: document.getElementById('btn-open-tray-compare') || document.getElementById('btn-open-comparison'),
      drawerEl: document.getElementById('comparison-drawer'),
      countBadgeEl: document.getElementById('compare-count-badge') || document.getElementById('drawer-count-badge'),
      btnCloseDrawer: document.getElementById('btn-close-comparison') || document.getElementById('btn-close-drawer'),
      btnClearAll: document.getElementById('btn-clear-comparison'),
      tableContainerEl: document.querySelector('.comparison-table-container'),
      radarCanvasId: 'comparison-radar-canvas',
      backdropEl: document.getElementById('app-modal-backdrop')
    };
  }

  function init() {
    const els = getElements();

    // Open drawer on tray button click
    if (els.btnOpenTray) {
      els.btnOpenTray.addEventListener('click', openDrawer);
    }

    // Close drawer
    if (els.btnCloseDrawer) {
      els.btnCloseDrawer.addEventListener('click', closeDrawer);
    }

    // Clear all
    if (els.btnClearAll) {
      els.btnClearAll.addEventListener('click', clearAll);
    }

    // Backdrop click
    if (els.backdropEl) {
      els.backdropEl.addEventListener('click', () => {
        if (isDrawerOpen()) closeDrawer();
      });
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
    const els = getElements();
    if (!els.trayEl) return;

    if (selectedRegions.length > 0) {
      els.trayEl.classList.add('visible');
    } else {
      els.trayEl.classList.remove('visible');
    }

    if (els.trayChipsEl) {
      els.trayChipsEl.innerHTML = '';
      selectedRegions.forEach(r => {
        const clusterMeta = CLUSTERS_META[r.cluster] || CLUSTERS_META[2];
        const chip = document.createElement('div');
        chip.className = 'tray-chip';
        chip.innerHTML = `
          <span style="width:8px; height:8px; border-radius:50%; background-color:${clusterMeta.color}"></span>
          <span>${r.name}</span>
          <span class="tray-chip-remove" data-id="${r.id}" style="cursor:pointer; margin-left:4px; font-weight:bold;">&times;</span>
        `;
        chip.querySelector('.tray-chip-remove').addEventListener('click', (e) => {
          e.stopPropagation();
          removeRegion(r.id);
        });
        els.trayChipsEl.appendChild(chip);
      });
    }

    if (els.countBadgeEl) {
      els.countBadgeEl.textContent = `${selectedRegions.length} Wilayah`;
    }

    if (isDrawerOpen()) {
      renderDrawerContent();
    }
  }

  function openDrawer() {
    const els = getElements();
    if (selectedRegions.length === 0) {
      AgrisightApp.showToast('Pilih minimal 1 wilayah untuk dibandingkan.', 'info');
      return;
    }
    if (els.drawerEl) {
      els.drawerEl.classList.add('open');
    }
    if (els.backdropEl) {
      els.backdropEl.style.opacity = '1';
      els.backdropEl.style.pointerEvents = 'auto';
    }
    renderDrawerContent();
  }

  function closeDrawer() {
    const els = getElements();
    if (els.drawerEl) {
      els.drawerEl.classList.remove('open');
    }
    if (els.backdropEl) {
      els.backdropEl.style.opacity = '0';
      els.backdropEl.style.pointerEvents = 'none';
    }
  }

  function isDrawerOpen() {
    const els = getElements();
    return els.drawerEl && els.drawerEl.classList.contains('open');
  }

  function renderDrawerContent() {
    const els = getElements();
    if (!els.tableContainerEl || selectedRegions.length === 0) return;

    const keys = ['ikp', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9'];

    let html = `
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Indikator / Parameter</th>
            ${selectedRegions.map(r => `
              <th>
                <div style="font-weight:700; color:var(--forest-900); font-size:0.9rem;">${r.name}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${r.province}</div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:700; color:var(--forest-900);">Klaster K-Medoids</td>
            ${selectedRegions.map(r => {
              const c = CLUSTERS_META[r.cluster] || CLUSTERS_META[2];
              return `<td><span class="badge ${c.badgeClass}">${c.shortName}</span></td>`;
            }).join('')}
          </tr>
    `;

    keys.forEach(key => {
      const meta = INDICATORS_META[key];
      if (!meta) return;
      html += `
        <tr>
          <td>
            <div style="font-weight:700; color:var(--forest-900);">${meta.shortName}</div>
            <div style="font-size:0.7rem; color:var(--text-muted);">${meta.description ? meta.description.substring(0, 50) + '...' : ''}</div>
          </td>
          ${selectedRegions.map(r => {
            const val = r[key];
            const isIKP = key === 'ikp';
            return `
              <td>
                <span style="font-family:var(--font-sans); font-size:1rem; font-weight:800; color:${isIKP ? 'var(--forest-800)' : 'var(--forest-900)'};">
                  ${val}
                </span>
                <span style="font-size:0.7rem; color:var(--text-muted); margin-left:2px;">${meta.unit}</span>
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

    els.tableContainerEl.innerHTML = html;

    // Render comparison radar chart
    if (document.getElementById(els.radarCanvasId)) {
      AgrisightCharts.renderComparisonRadar(els.radarCanvasId, selectedRegions);
    }
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
