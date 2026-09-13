/**
 * AGRISIGHT — Simulasi What-If Policy Intervention Module
 * Real-time dynamic simulator calculating IKP improvements & cluster migrations
 */

const AgrisightWhatIfModal = (function () {
  let modalEl = null;
  let backdropEl = null;
  let currentRegency = null;

  // Simulator state
  let simulatedValues = {};

  function init() {
    modalEl = document.getElementById('whatif-modal');
    backdropEl = document.getElementById('whatif-modal-backdrop');

    const btnClose = document.getElementById('btn-close-whatif-modal');
    if (btnClose) {
      btnClose.addEventListener('click', close);
    }
    if (backdropEl) {
      backdropEl.addEventListener('click', close);
    }

    // Connect top navbar tab "Simulasi What-If"
    const navWhatIf = document.querySelector('.nav-tab[data-nav="whatif"]');
    if (navWhatIf) {
      navWhatIf.addEventListener('click', function (e) {
        e.preventDefault();
        const selected = (AgrisightSidebar && AgrisightSidebar.getCurrentRegency()) || (typeof KABUPATEN_DATA !== 'undefined' ? KABUPATEN_DATA[0] : null);
        open(selected);
      });
    }

    // Region selector in what-if modal
    const regencySelect = document.getElementById('whatif-regency-select');
    if (regencySelect && typeof KABUPATEN_DATA !== 'undefined') {
      regencySelect.innerHTML = KABUPATEN_DATA.map(k => `
        <option value="${k.id}">${k.name} (${k.province})</option>
      `).join('');

      regencySelect.addEventListener('change', function (e) {
        const found = KABUPATEN_DATA.find(k => k.id === e.target.value);
        if (found) {
          open(found);
        }
      });
    }

    // Reset & Auto-Optimize buttons
    const btnReset = document.getElementById('btn-whatif-reset');
    if (btnReset) {
      btnReset.addEventListener('click', resetSliders);
    }

    const btnOptimize = document.getElementById('btn-whatif-optimize');
    if (btnOptimize) {
      btnOptimize.addEventListener('click', applyOptimization);
    }
  }

  function open(data) {
    if (!data && typeof KABUPATEN_DATA !== 'undefined') {
      data = KABUPATEN_DATA[0];
    }
    currentRegency = data;

    if (!modalEl) {
      modalEl = document.getElementById('whatif-modal');
      backdropEl = document.getElementById('whatif-modal-backdrop');
    }

    const regencySelect = document.getElementById('whatif-regency-select');
    if (regencySelect && data) {
      regencySelect.value = data.id;
    }

    resetSliders();

    if (modalEl) modalEl.classList.add('open');
    if (backdropEl) backdropEl.classList.add('open');
  }

  function close() {
    if (modalEl) modalEl.classList.remove('open');
    if (backdropEl) backdropEl.classList.remove('open');
  }

  function resetSliders() {
    if (!currentRegency) return;

    simulatedValues = {
      x2: currentRegency.x2, // Kemiskinan %
      x3: currentRegency.x3, // Pengeluaran Pangan %
      x5: currentRegency.x5, // Akses Air Bersih %
      x7: currentRegency.x7, // Nakes /1k
      x9: currentRegency.x9  // Stunting %
    };

    updateSliderInputs();
    calculateSimulation();
  }

  function applyOptimization() {
    if (!currentRegency) return;

    // Target intervention recommendations based on national benchmarks
    simulatedValues = {
      x2: Math.max(4.0, Math.round((currentRegency.x2 * 0.65) * 10) / 10), // -35% kemiskinan
      x3: Math.max(38.0, Math.round((currentRegency.x3 * 0.82) * 10) / 10), // -18% pangan ratio
      x5: Math.min(98.0, Math.round((currentRegency.x5 + 20.0) * 10) / 10), // +20% air bersih
      x7: Math.min(8.0, Math.round((currentRegency.x7 + 2.5) * 10) / 10),   // +2.5 nakes
      x9: Math.max(8.0, Math.round((currentRegency.x9 * 0.55) * 10) / 10)   // -45% stunting
    };

    updateSliderInputs();
    calculateSimulation();
    AgrisightApp.showToast('Paket Intervensi Optimal diterapkan pada simulasi.', 'success');
  }

  function updateSliderInputs() {
    const sliders = [
      { id: 'slider-x2', val: simulatedValues.x2, labelId: 'label-val-x2', unit: '%' },
      { id: 'slider-x3', val: simulatedValues.x3, labelId: 'label-val-x3', unit: '%' },
      { id: 'slider-x5', val: simulatedValues.x5, labelId: 'label-val-x5', unit: '%' },
      { id: 'slider-x7', val: simulatedValues.x7, labelId: 'label-val-x7', unit: '' },
      { id: 'slider-x9', val: simulatedValues.x9, labelId: 'label-val-x9', unit: '%' }
    ];

    sliders.forEach(s => {
      const el = document.getElementById(s.id);
      const label = document.getElementById(s.labelId);
      if (el) {
        el.value = s.val;
        // Bind input event listener once
        el.oninput = function () {
          const key = s.id.replace('slider-', '');
          simulatedValues[key] = parseFloat(this.value);
          if (label) label.textContent = `${this.value}${s.unit}`;
          calculateSimulation();
        };
      }
      if (label) label.textContent = `${s.val}${s.unit}`;
    });
  }

  function calculateSimulation() {
    if (!currentRegency) return;

    const baseIKP = currentRegency.ikp;

    // Weight formula approximating Bapanas IKP multidimensional index
    // Improvement in x5 (+air) & x7 (+nakes) adds points
    // Reduction in x2 (-miskin), x3 (-pengeluaran pangan), x9 (-stunting) adds points
    const deltaX2 = (currentRegency.x2 - simulatedValues.x2) * 0.45; // lower is better
    const deltaX3 = (currentRegency.x3 - simulatedValues.x3) * 0.25; // lower is better
    const deltaX5 = (simulatedValues.x5 - currentRegency.x5) * 0.35; // higher is better
    const deltaX7 = (simulatedValues.x7 - currentRegency.x7) * 1.50; // higher is better
    const deltaX9 = (currentRegency.x9 - simulatedValues.x9) * 0.55; // lower is better

    const totalDelta = deltaX2 + deltaX3 + deltaX5 + deltaX7 + deltaX9;
    const newIKP = Math.max(10, Math.min(100, Math.round((baseIKP + totalDelta) * 10) / 10));

    // Determine New Predicted Cluster
    let newCluster = 3;
    if (newIKP >= 74) newCluster = 1;
    else if (newIKP >= 58) newCluster = 2;

    const initialCluster = currentRegency.cluster;
    const initialMeta = CLUSTERS_META[initialCluster];
    const newMeta = CLUSTERS_META[newCluster];

    // Update UI elements
    const beforeScoreEl = document.getElementById('whatif-before-score');
    const afterScoreEl = document.getElementById('whatif-after-score');
    const deltaBadgeEl = document.getElementById('whatif-delta-badge');
    const migrationBadgeEl = document.getElementById('whatif-migration-badge');
    const impactSummaryEl = document.getElementById('whatif-impact-summary');

    if (beforeScoreEl) beforeScoreEl.textContent = baseIKP.toFixed(1);
    if (afterScoreEl) afterScoreEl.textContent = newIKP.toFixed(1);

    if (deltaBadgeEl) {
      const diff = (newIKP - baseIKP).toFixed(1);
      deltaBadgeEl.textContent = `${diff >= 0 ? '+' : ''}${diff} Poin`;
      deltaBadgeEl.style.color = diff >= 0 ? '#10b981' : '#f43f5e';
      deltaBadgeEl.style.borderColor = diff >= 0 ? 'rgba(16, 185, 129, 0.4)' : 'rgba(244, 63, 94, 0.4)';
    }

    if (migrationBadgeEl) {
      if (newCluster < initialCluster) {
        migrationBadgeEl.className = 'badge badge-cluster-1';
        migrationBadgeEl.textContent = `🚀 Upgrade: ${initialMeta.shortName} ➔ ${newMeta.shortName}`;
      } else if (newCluster > initialCluster) {
        migrationBadgeEl.className = 'badge badge-cluster-3';
        migrationBadgeEl.textContent = `⚠️ Downgrade: ${initialMeta.shortName} ➔ ${newMeta.shortName}`;
      } else {
        migrationBadgeEl.className = `badge ${newMeta.badgeClass}`;
        migrationBadgeEl.textContent = `Tetap di: ${newMeta.name}`;
      }
    }

    if (impactSummaryEl) {
      if (newIKP > baseIKP) {
        impactSummaryEl.innerHTML = `
          Intervensi simulasi berhasil meningkatkan performa agregat sebesar <strong style="color:#10b981;">+${(newIKP - baseIKP).toFixed(1)} poin</strong>. 
          Pilar pemanfaatan gizi dan perbaikan akses air bersih berkontribusi paling dominan terhadap lonjakan indeks.
        `;
      } else if (newIKP < baseIKP) {
        impactSummaryEl.innerHTML = `
          Simulasi pemburukan indikator menyebabkan penurunan performa sebesar <strong style="color:#f43f5e;">${(newIKP - baseIKP).toFixed(1)} poin</strong>.
        `;
      } else {
        impactSummaryEl.textContent = 'Geser tuas indikator di samping untuk menguji skenario dampak intervensi kebijakan.';
      }
    }
  }

  return {
    init,
    open,
    close
  };
})();
