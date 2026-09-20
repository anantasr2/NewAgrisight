/**
 * AGRISIGHT — Regional Stats Panel (Slide-in Right)
 * Fully aligned with spatial.html DOM IDs
 */

const AgrisightSidebar = (function () {
  let currentRegency = null;
  let activeChartTab = 'radar'; // 'radar' | 'bar'

  function getElements() {
    return {
      panelEl: document.getElementById('regional-sidebar'),
      regencyNameEl: document.getElementById('sidebar-regency-name'),
      provinceNameEl: document.getElementById('sidebar-province'),
      provDotEl: document.getElementById('sidebar-prov-dot'),
      clusterBadgeEl: document.getElementById('sidebar-cluster-badge'),
      clusterDescEl: document.getElementById('sidebar-cluster-desc'),
      ikpScoreEl: document.getElementById('sidebar-ikp-val'),
      ikpCircleEl: document.getElementById('gauge-circle-progress'),
      policyTextEl: document.getElementById('sidebar-policy-text'),
      glowEl: document.getElementById('sidebar-glow'),
      compareBtnEl: document.getElementById('btn-sidebar-add-compare'),
      closeBtnEl: document.getElementById('btn-sidebar-close'),
      indicatorsListEl: document.getElementById('sidebar-indicators-list'),
      chartCanvasId: 'sidebar-chart-canvas',
      btnAnalysis: document.getElementById('btn-sidebar-full-analysis'),
      btnWhatif: document.getElementById('btn-sidebar-sim-whatif')
    };
  }

  function init() {
    const els = getElements();

    // Close button
    if (els.closeBtnEl) {
      els.closeBtnEl.addEventListener('click', close);
    }

    // Chart tab switch buttons
    const tabBtns = document.querySelectorAll('.chart-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        tabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        activeChartTab = this.getAttribute('data-chart') || 'radar';
        updateChartDisplay();
      });
    });

    // Add to Compare button in panel
    if (els.compareBtnEl) {
      els.compareBtnEl.addEventListener('click', function () {
        if (!currentRegency) return;
        if (AgrisightComparison.isCompared(currentRegency.id)) {
          AgrisightComparison.removeRegion(currentRegency.id);
        } else {
          AgrisightComparison.addRegion(currentRegency);
        }
        updateCompareButtonState();
      });
    }

    // In-depth Analysis Modal Trigger
    if (els.btnAnalysis) {
      els.btnAnalysis.addEventListener('click', function () {
        if (!currentRegency) return;
        if (window.AgrisightAnalysisModal) {
          AgrisightAnalysisModal.open(currentRegency);
        }
      });
    }

    // What-If Simulation Modal Trigger
    if (els.btnWhatif) {
      els.btnWhatif.addEventListener('click', function () {
        if (!currentRegency) return;
        if (window.AgrisightWhatIfModal) {
          AgrisightWhatIfModal.open(currentRegency);
        }
      });
    }
  }

  function open(data) {
    if (!data) return;
    currentRegency = data;
    const els = getElements();

    if (els.panelEl) {
      els.panelEl.classList.add('open');
    }

    // Header info
    if (els.regencyNameEl) els.regencyNameEl.textContent = data.name;
    if (els.provinceNameEl) els.provinceNameEl.textContent = `Provinsi ${data.province}`;

    // Cluster Metadata
    const clusterMeta = CLUSTERS_META[data.cluster] || CLUSTERS_META[2];
    
    if (els.provDotEl) {
      els.provDotEl.className = `stat-dot dot-c${data.cluster}`;
    }

    if (els.clusterBadgeEl) {
      els.clusterBadgeEl.className = `badge ${clusterMeta.badgeClass}`;
      els.clusterBadgeEl.textContent = clusterMeta.shortName;
    }

    if (els.clusterDescEl) {
      els.clusterDescEl.textContent = clusterMeta.description;
    }

    if (els.glowEl) {
      els.glowEl.style.backgroundColor = clusterMeta.color;
    }

    if (els.policyTextEl) {
      els.policyTextEl.textContent = clusterMeta.policyRecommendation;
    }

    // Animated IKP Score Gauge
    animateScore(data.ikp, clusterMeta.color);

    // Render Charts
    updateChartDisplay();

    // Render 9 Indicators Breakdown
    renderIndicatorsBreakdown(data);

    // Update Compare Button
    updateCompareButtonState();
  }

  function close() {
    const els = getElements();
    if (els.panelEl) {
      els.panelEl.classList.remove('open');
    }
    currentRegency = null;
    if (window.AgrisightMap) {
      AgrisightMap.clearHighlight();
    }
  }

  function animateScore(targetScore, color) {
    const els = getElements();
    if (els.ikpScoreEl) {
      els.ikpScoreEl.textContent = Number(targetScore).toFixed(1);
    }

    // SVG Circle Radius 38 -> Circumference = 2 * PI * 38 = ~238.76
    const circumference = 238.76;
    const progress = Math.min(100, Math.max(0, targetScore));
    const offset = circumference - (progress / 100) * circumference;

    if (els.ikpCircleEl) {
      els.ikpCircleEl.style.strokeDasharray = `${circumference}`;
      els.ikpCircleEl.style.strokeDashoffset = `${offset}`;
      els.ikpCircleEl.style.stroke = color || '#1b3b2b';
    }
  }

  function updateChartDisplay() {
    if (!currentRegency) return;
    const els = getElements();
    if (!document.getElementById(els.chartCanvasId)) return;

    if (activeChartTab === 'bar') {
      AgrisightCharts.renderBarChart(els.chartCanvasId, currentRegency);
    } else {
      AgrisightCharts.renderRadarChart(els.chartCanvasId, currentRegency);
    }
  }

  function renderIndicatorsBreakdown(data) {
    const els = getElements();
    if (!els.indicatorsListEl) return;

    const indicators = ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9'];
    let html = '';

    indicators.forEach(code => {
      const meta = INDICATORS_META[code];
      if (!meta) return;

      const val = data[code];
      const avg = meta.nationalAvg;
      const diff = val - avg;

      // Better or worse comparison
      let isPositive = meta.higherIsBetter ? diff >= 0 : diff <= 0;
      let diffText = diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1);
      
      // Progress percentage
      let pct = ((val - meta.min) / (meta.max - meta.min)) * 100;
      pct = Math.max(5, Math.min(100, pct));

      let barColor = isPositive ? 'var(--forest-800)' : 'var(--terracotta-600)';

      html += `
        <div class="indicator-row-card">
          <div class="indicator-row-top">
            <div class="indicator-name-group">
              <span class="indicator-code-tag">${code.toUpperCase()}</span>
              <span class="indicator-name">${meta.shortName}</span>
            </div>
            <div class="indicator-val-group">
              <span class="indicator-value">${val}</span>
              <span class="indicator-unit">${meta.unit}</span>
            </div>
          </div>
          <div class="indicator-bar-wrapper">
            <div class="indicator-bar-fill" style="width:${pct}%; background-color:${barColor};"></div>
          </div>
          <div class="indicator-benchmarks">
            <span>Rerata Nas.: ${avg} ${meta.unit}</span>
            <span class="benchmark-diff ${isPositive ? 'positive' : 'negative'}">
              ${diffText} vs Nasional
            </span>
          </div>
        </div>
      `;
    });

    els.indicatorsListEl.innerHTML = html;
  }

  function updateCompareButtonState() {
    const els = getElements();
    if (!els.compareBtnEl || !currentRegency) return;
    const isCompared = AgrisightComparison.isCompared(currentRegency.id);

    if (isCompared) {
      els.compareBtnEl.classList.add('bg-forest-800', 'text-white');
      els.compareBtnEl.innerHTML = `
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      `;
      els.compareBtnEl.title = 'Hapus dari Komparasi';
    } else {
      els.compareBtnEl.classList.remove('bg-forest-800', 'text-white');
      els.compareBtnEl.innerHTML = `
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      `;
      els.compareBtnEl.title = 'Tambahkan ke Komparasi';
    }
  }

  return {
    init,
    open,
    close,
    isOpen: () => {
      const p = document.getElementById('regional-sidebar');
      return p && p.classList.contains('open');
    },
    getCurrentRegency: () => currentRegency,
    updateCompareButtonState
  };
})();
