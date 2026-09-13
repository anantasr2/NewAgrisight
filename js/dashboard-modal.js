/**
 * AGRISIGHT — Dashboard Modal (National Overview & Analytics)
 */

const AgrisightDashboardModal = (function () {
  let modalEl = null;
  let backdropEl = null;
  let clusterPieChart = null;
  let regionalBarChart = null;

  function init() {
    modalEl = document.getElementById('dashboard-modal');
    backdropEl = document.getElementById('dashboard-modal-backdrop');

    const btnClose = document.getElementById('btn-close-dashboard-modal');
    if (btnClose) {
      btnClose.addEventListener('click', close);
    }
    if (backdropEl) {
      backdropEl.addEventListener('click', close);
    }

    // Connect top navbar tab "Dashboard"
    const navDashboard = document.querySelector('.nav-tab[data-nav="dashboard"]');
    if (navDashboard) {
      navDashboard.addEventListener('click', function (e) {
        e.preventDefault();
        open();
      });
    }
  }

  function open() {
    if (!modalEl) {
      modalEl = document.getElementById('dashboard-modal');
      backdropEl = document.getElementById('dashboard-modal-backdrop');
    }

    populateDashboard();

    if (modalEl) modalEl.classList.add('open');
    if (backdropEl) backdropEl.classList.add('open');
  }

  function close() {
    if (modalEl) modalEl.classList.remove('open');
    if (backdropEl) backdropEl.classList.remove('open');
  }

  function populateDashboard() {
    if (typeof KABUPATEN_DATA === 'undefined') return;

    // Aggregate statistics
    const total = KABUPATEN_DATA.length;
    const c1 = KABUPATEN_DATA.filter(k => k.cluster === 1);
    const c2 = KABUPATEN_DATA.filter(k => k.cluster === 2);
    const c3 = KABUPATEN_DATA.filter(k => k.cluster === 3);

    const avgIKP = (KABUPATEN_DATA.reduce((acc, k) => acc + k.ikp, 0) / total).toFixed(1);
    const avgStunting = (KABUPATEN_DATA.reduce((acc, k) => acc + k.x9, 0) / total).toFixed(1);
    const avgAir = (KABUPATEN_DATA.reduce((acc, k) => acc + k.x5, 0) / total).toFixed(1);
    const avgKemiskinan = (KABUPATEN_DATA.reduce((acc, k) => acc + k.x2, 0) / total).toFixed(1);

    // Populate KPI cards
    const statAvgIKPEl = document.getElementById('db-stat-avg-ikp');
    const statStuntingEl = document.getElementById('db-stat-avg-stunting');
    const statAirEl = document.getElementById('db-stat-avg-air');
    const statKemiskinanEl = document.getElementById('db-stat-avg-kemiskinan');

    if (statAvgIKPEl) statAvgIKPEl.textContent = avgIKP;
    if (statStuntingEl) statStuntingEl.textContent = `${avgStunting}%`;
    if (statAirEl) statAirEl.textContent = `${avgAir}%`;
    if (statKemiskinanEl) statKemiskinanEl.textContent = `${avgKemiskinan}%`;

    // Leaderboards: Top 5 Highest vs Top 5 Lowest
    const sorted = [...KABUPATEN_DATA].sort((a, b) => b.ikp - a.ikp);
    const top5 = sorted.slice(0, 5);
    const bottom5 = sorted.slice(-5).reverse();

    const topListEl = document.getElementById('db-top-highest-list');
    const bottomListEl = document.getElementById('db-top-vulnerable-list');

    if (topListEl) {
      topListEl.innerHTML = top5.map((k, idx) => `
        <div class="db-rank-item" data-id="${k.id}">
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="db-rank-badge high">#${idx + 1}</span>
            <div>
              <div class="db-rank-name">${k.name}</div>
              <div class="db-rank-prov">${k.province}</div>
            </div>
          </div>
          <div style="text-align:right;">
            <span class="db-rank-score" style="color:#10b981;">${k.ikp}</span>
            <div style="font-size:0.65rem; color:#94a3b8;">Skor IKP</div>
          </div>
        </div>
      `).join('');

      topListEl.querySelectorAll('.db-rank-item').forEach(el => {
        el.addEventListener('click', () => {
          const id = el.getAttribute('data-id');
          close();
          AgrisightMap.selectKabupatenById(id, true);
        });
      });
    }

    if (bottomListEl) {
      bottomListEl.innerHTML = bottom5.map((k, idx) => `
        <div class="db-rank-item" data-id="${k.id}">
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="db-rank-badge low">#${total - idx}</span>
            <div>
              <div class="db-rank-name">${k.name}</div>
              <div class="db-rank-prov">${k.province}</div>
            </div>
          </div>
          <div style="text-align:right;">
            <span class="db-rank-score" style="color:#f43f5e;">${k.ikp}</span>
            <div style="font-size:0.65rem; color:#94a3b8;">Skor IKP</div>
          </div>
        </div>
      `).join('');

      bottomListEl.querySelectorAll('.db-rank-item').forEach(el => {
        el.addEventListener('click', () => {
          const id = el.getAttribute('data-id');
          close();
          AgrisightMap.selectKabupatenById(id, true);
        });
      });
    }

    // Render Cluster Distribution Donut Chart
    renderClusterDonut(c1.length, c2.length, c3.length);

    // Render Regional Island Group Bar Chart
    renderIslandBarChart();
  }

  function renderClusterDonut(c1Count, c2Count, c3Count) {
    const canvas = document.getElementById('db-cluster-donut-canvas');
    if (!canvas) return;

    if (clusterPieChart) {
      clusterPieChart.destroy();
    }

    clusterPieChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Cluster 1 (Tinggi)', 'Cluster 2 (Sedang)', 'Cluster 3 (Rentan)'],
        datasets: [{
          data: [c1Count, c2Count, c3Count],
          backgroundColor: ['#10b981', '#f59e0b', '#f43f5e'],
          borderColor: '#0f172a',
          borderWidth: 3,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#f8fafc',
              font: { family: 'Outfit', size: 11, weight: '600' },
              boxWidth: 12,
              padding: 14
            }
          },
          tooltip: {
            backgroundColor: 'rgba(10, 15, 29, 0.95)',
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.raw} Wilayah (${((ctx.raw / 514) * 100).toFixed(1)}%)`
            }
          }
        }
      }
    });
  }

  function renderIslandBarChart() {
    const canvas = document.getElementById('db-island-bar-canvas');
    if (!canvas) return;

    const islands = {
      'Sumatera': ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Sumatera Selatan', 'Kepulauan Bangka Belitung', 'Bengkulu', 'Lampung'],
      'Jawa': ['DKI Jakarta', 'Jawa Barat', 'Banten', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur'],
      'Bali & Nusa Tenggara': ['Bali', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur'],
      'Kalimantan': ['Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara'],
      'Sulawesi': ['Sulawesi Utara', 'Gorontalo', 'Sulawesi Tengah', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tenggara'],
      'Maluku & Papua': ['Maluku', 'Maluku Utara', 'Papua', 'Papua Barat', 'Papua Selatan', 'Papua Tengah', 'Papua Pegunungan', 'Papua Barat Daya']
    };

    const islandLabels = Object.keys(islands);
    const islandAvgIKP = islandLabels.map(isl => {
      const provs = islands[isl];
      const matching = KABUPATEN_DATA.filter(k => provs.some(p => k.province.includes(p) || p.includes(k.province)));
      if (matching.length === 0) return 65;
      const sum = matching.reduce((acc, k) => acc + k.ikp, 0);
      return (sum / matching.length).toFixed(1);
    });

    if (regionalBarChart) {
      regionalBarChart.destroy();
    }

    regionalBarChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: islandLabels,
        datasets: [{
          label: 'Rata-rata Skor IKP',
          data: islandAvgIKP,
          backgroundColor: islandAvgIKP.map(val => val >= 75 ? '#10b981cc' : val >= 65 ? '#3b82f6cc' : val >= 55 ? '#f59e0bcc' : '#f43f5ecc'),
          borderColor: islandAvgIKP.map(val => val >= 75 ? '#10b981' : val >= 65 ? '#3b82f6' : val >= 55 ? '#f59e0b' : '#f43f5e'),
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(10, 15, 29, 0.95)',
            callbacks: {
              label: (ctx) => ` Rata-rata IKP: ${ctx.raw} Poin`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#f8fafc', font: { family: 'Outfit', size: 10, weight: '600' } }
          },
          y: {
            min: 30,
            max: 90,
            grid: { color: 'rgba(255, 255, 255, 0.08)' },
            ticks: { color: '#94a3b8', font: { family: 'Outfit', size: 10 } }
          }
        }
      }
    });
  }

  return {
    init,
    open,
    close
  };
})();
