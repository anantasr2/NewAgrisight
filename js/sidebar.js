/**
 * AGRISIGHT — Regional Stats Panel (Slide-in Right)
 */

const AgrisightSidebar = (function () {
  let currentRegency = null;
  let activeChartTab = 'bar'; // 'bar' | 'radar'

  const panelEl = document.getElementById('regional-panel');
  const regencyNameEl = document.getElementById('panel-regency-name');
  const provinceNameEl = document.getElementById('panel-province-name');
  const clusterTagEl = document.getElementById('panel-cluster-tag');
  const ikpScoreEl = document.getElementById('panel-ikp-score');
  const ikpCircleEl = document.getElementById('panel-ikp-circle');
  const policyTextEl = document.getElementById('panel-policy-text');
  const scoreCardGlowEl = document.getElementById('score-card-glow');
  const compareBtnEl = document.getElementById('btn-panel-compare');

  function init() {
    // Close button
    const closeBtn = document.getElementById('btn-close-panel');
    if (closeBtn) {
      closeBtn.addEventListener('click', close);
    }

    // Chart tab switches
    const tabBtns = document.querySelectorAll('.chart-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        tabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        activeChartTab = this.getAttribute('data-chart');
        updateChartDisplay();
      });
    });

    // Compare button in panel footer
    if (compareBtnEl) {
      compareBtnEl.addEventListener('click', function () {
        if (!currentRegency) return;
        if (AgrisightComparison.isCompared(currentRegency.id)) {
          AgrisightComparison.removeRegion(currentRegency.id);
          updateCompareButtonState();
        } else {
          const added = AgrisightComparison.addRegion(currentRegency);
          if (added) updateCompareButtonState();
        }
      });
    }

    // Regional in-depth analysis trigger button
    const btnAnalysis = document.getElementById('btn-panel-analysis');
    if (btnAnalysis) {
      btnAnalysis.addEventListener('click', function () {
        if (!currentRegency) return;
        if (window.AgrisightAnalysisModal) {
          AgrisightAnalysisModal.open(currentRegency);
        } else {
          AgrisightApp.showToast(`Membuka Analisis Regional untuk ${currentRegency.name}...`, 'info');
        }
      });
    }
  }

  function open(data) {
    if (!data) return;
    currentRegency = data;
    panelEl.classList.add('open');

    // Populate header info
    regencyNameEl.textContent = data.name;
    provinceNameEl.innerHTML = `<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> Provinsi ${data.province}`;

    // Cluster Meta & Styling
    const clusterMeta = CLUSTERS_META[data.cluster] || CLUSTERS_META[2];
    clusterTagEl.className = `badge ${clusterMeta.badgeClass} cluster-tag`;
    clusterTagEl.textContent = clusterMeta.name;

    if (scoreCardGlowEl) {
      scoreCardGlowEl.style.backgroundColor = clusterMeta.color;
    }

    // Animated IKP Score Gauge
    animateScore(data.ikp);

    // Policy Recommendation
    policyTextEl.textContent = clusterMeta.policyRecommendation;

    // Update Chart
    updateChartDisplay();

    // Update Compare Button
    updateCompareButtonState();
  }

  function close() {
    panelEl.classList.remove('open');
    currentRegency = null;
    if (window.AgrisightMap) {
      AgrisightMap.clearHighlight();
    }
  }

  function animateScore(targetScore) {
    ikpScoreEl.textContent = targetScore.toFixed(1);

    // Circle circumference for r=36 is 2 * PI * 36 = ~226.2
    const circumference = 226.2;
    const progress = Math.min(100, Math.max(0, targetScore));
    const offset = circumference - (progress / 100) * circumference;

    if (ikpCircleEl) {
      ikpCircleEl.style.strokeDasharray = circumference;
      ikpCircleEl.style.strokeDashoffset = offset;
      ikpCircleEl.style.stroke = targetScore >= 75 ? '#10b981' : targetScore >= 60 ? '#f59e0b' : '#f43f5e';
    }
  }

  function updateChartDisplay() {
    if (!currentRegency) return;
    const barBox = document.getElementById('chart-bar-container');
    const radarBox = document.getElementById('chart-radar-container');

    if (activeChartTab === 'bar') {
      if (barBox) barBox.style.display = 'block';
      if (radarBox) radarBox.style.display = 'none';
      AgrisightCharts.renderBarChart('bar-chart-canvas', currentRegency);
    } else {
      if (barBox) barBox.style.display = 'none';
      if (radarBox) radarBox.style.display = 'block';
      AgrisightCharts.renderRadarChart('radar-chart-canvas', currentRegency);
    }
  }

  function updateCompareButtonState() {
    if (!compareBtnEl || !currentRegency) return;
    const isCompared = AgrisightComparison.isCompared(currentRegency.id);
    if (isCompared) {
      compareBtnEl.className = 'btn btn-secondary';
      compareBtnEl.innerHTML = `
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        Hapus dari Banding
      `;
    } else {
      compareBtnEl.className = 'btn btn-primary';
      compareBtnEl.innerHTML = `
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        Bandingkan Wilayah
      `;
    }
  }

  return {
    init,
    open,
    close,
    isOpen: () => panelEl && panelEl.classList.contains('open'),
    getCurrentRegency: () => currentRegency,
    updateCompareButtonState
  };
})();
