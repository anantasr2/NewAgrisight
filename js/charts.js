/**
 * AGRISIGHT — Indicator Profile & Comparison Charts
 * Powered by Chart.js
 */

const AgrisightCharts = (function () {
  let barChartInstance = null;
  let radarChartInstance = null;
  let comparisonChartInstance = null;

  // Chart theme defaults
  const chartColors = {
    regionFill: 'rgba(59, 130, 246, 0.25)',
    regionBorder: '#3b82f6',
    nationalFill: 'rgba(148, 163, 184, 0.15)',
    nationalBorder: '#94a3b8',
    gridLines: 'rgba(255, 255, 255, 0.08)',
    text: '#94a3b8',
    textPrimary: '#f8fafc',
    cluster1: '#10b981',
    cluster2: '#f59e0b',
    cluster3: '#f43f5e'
  };

  /**
   * Render or update horizontal bar chart for single region vs national benchmark
   */
  function renderBarChart(canvasId, regencyData) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    const labels = [
      'NCPR (X1)',
      'Kemiskinan % (X2)',
      'Pengeluaran Pangan % (X3)',
      'Akses Listrik % (X4)',
      'Akses Air Bersih % (X5)',
      'Lama Sekolah W (X6)',
      'Nakes /1k (X7)',
      'Harapan Hidup (X8)',
      'Stunting % (X9)'
    ];

    const regencyVals = [
      regencyData.x1,
      regencyData.x2,
      regencyData.x3,
      regencyData.x4,
      regencyData.x5,
      regencyData.x6,
      regencyData.x7,
      regencyData.x8,
      regencyData.x9
    ];

    const nationalVals = [
      INDICATORS_META.x1.nationalAvg,
      INDICATORS_META.x2.nationalAvg,
      INDICATORS_META.x3.nationalAvg,
      INDICATORS_META.x4.nationalAvg,
      INDICATORS_META.x5.nationalAvg,
      INDICATORS_META.x6.nationalAvg,
      INDICATORS_META.x7.nationalAvg,
      INDICATORS_META.x8.nationalAvg,
      INDICATORS_META.x9.nationalAvg
    ];

    const clusterColor = regencyData.cluster === 1 ? chartColors.cluster1 :
                         regencyData.cluster === 2 ? chartColors.cluster2 : chartColors.cluster3;

    if (barChartInstance) {
      barChartInstance.destroy();
    }

    barChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: regencyData.name,
            data: regencyVals,
            backgroundColor: clusterColor + 'cc',
            borderColor: clusterColor,
            borderWidth: 1.5,
            borderRadius: 4
          },
          {
            label: 'Rata-rata Nasional',
            data: nationalVals,
            backgroundColor: 'rgba(148, 163, 184, 0.3)',
            borderColor: '#94a3b8',
            borderWidth: 1.5,
            borderRadius: 4
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: chartColors.textPrimary,
              font: { family: 'Outfit', size: 11, weight: '600' },
              boxWidth: 12,
              padding: 12
            }
          },
          tooltip: {
            backgroundColor: 'rgba(10, 15, 29, 0.95)',
            titleColor: '#f8fafc',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255, 255, 255, 0.15)',
            borderWidth: 1,
            padding: 10,
            cornerRadius: 8
          }
        },
        scales: {
          x: {
            grid: { color: chartColors.gridLines },
            ticks: { color: chartColors.text, font: { family: 'Outfit', size: 10 } }
          },
          y: {
            grid: { display: false },
            ticks: { color: chartColors.textPrimary, font: { family: 'Outfit', size: 11, weight: '500' } }
          }
        }
      }
    });
  }

  /**
   * Render or update radar chart for multi-dimensional indicator profile
   */
  function renderRadarChart(canvasId, regencyData) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    // Normalize indicators to 0-100 scale where 100 = best performance
    function normalize(code, val) {
      const meta = INDICATORS_META[code];
      if (!meta) return val;
      let norm = ((val - meta.min) / (meta.max - meta.min)) * 100;
      if (!meta.higherIsBetter) {
        norm = 100 - norm; // Invert so outward is always better
      }
      return Math.max(0, Math.min(100, Math.round(norm)));
    }

    const labels = [
      'Kemandirian (X1)',
      'Kesejahteraan (X2)',
      'Ketahanan Ek. (X3)',
      'Listrik (X4)',
      'Air Bersih (X5)',
      'Pendidikan (X6)',
      'Nakes (X7)',
      'Kesehatan (X8)',
      'Bebas Stunting (X9)'
    ];

    const regencyNorm = [
      normalize('x1', regencyData.x1),
      normalize('x2', regencyData.x2),
      normalize('x3', regencyData.x3),
      normalize('x4', regencyData.x4),
      normalize('x5', regencyData.x5),
      normalize('x6', regencyData.x6),
      normalize('x7', regencyData.x7),
      normalize('x8', regencyData.x8),
      normalize('x9', regencyData.x9)
    ];

    const nationalNorm = [
      normalize('x1', INDICATORS_META.x1.nationalAvg),
      normalize('x2', INDICATORS_META.x2.nationalAvg),
      normalize('x3', INDICATORS_META.x3.nationalAvg),
      normalize('x4', INDICATORS_META.x4.nationalAvg),
      normalize('x5', INDICATORS_META.x5.nationalAvg),
      normalize('x6', INDICATORS_META.x6.nationalAvg),
      normalize('x7', INDICATORS_META.x7.nationalAvg),
      normalize('x8', INDICATORS_META.x8.nationalAvg),
      normalize('x9', INDICATORS_META.x9.nationalAvg)
    ];

    const clusterColor = regencyData.cluster === 1 ? chartColors.cluster1 :
                         regencyData.cluster === 2 ? chartColors.cluster2 : chartColors.cluster3;

    if (radarChartInstance) {
      radarChartInstance.destroy();
    }

    radarChartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [
          {
            label: regencyData.name,
            data: regencyNorm,
            backgroundColor: clusterColor + '33',
            borderColor: clusterColor,
            pointBackgroundColor: clusterColor,
            pointBorderColor: '#ffffff',
            pointRadius: 4,
            borderWidth: 2
          },
          {
            label: 'Benchmark Nasional',
            data: nationalNorm,
            backgroundColor: 'rgba(148, 163, 184, 0.1)',
            borderColor: '#94a3b8',
            borderDash: [4, 4],
            pointBackgroundColor: '#94a3b8',
            pointRadius: 2,
            borderWidth: 1.5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: chartColors.textPrimary,
              font: { family: 'Outfit', size: 11, weight: '600' },
              boxWidth: 12,
              padding: 10
            }
          },
          tooltip: {
            backgroundColor: 'rgba(10, 15, 29, 0.95)',
            callbacks: {
              label: function (ctx) {
                return `${ctx.dataset.label}: Skor Performa ${ctx.raw}/100`;
              }
            }
          }
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            angleLines: { color: chartColors.gridLines },
            grid: { color: chartColors.gridLines },
            pointLabels: {
              color: chartColors.textPrimary,
              font: { family: 'Outfit', size: 10, weight: '500' }
            },
            ticks: {
              display: false,
              stepSize: 25
            }
          }
        }
      }
    });
  }

  /**
   * Render comparison radar chart for 2-3 regions
   */
  function renderComparisonRadar(canvasId, regionsList) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    function normalize(code, val) {
      const meta = INDICATORS_META[code];
      if (!meta) return val;
      let norm = ((val - meta.min) / (meta.max - meta.min)) * 100;
      if (!meta.higherIsBetter) norm = 100 - norm;
      return Math.max(0, Math.min(100, Math.round(norm)));
    }

    const labels = [
      'Kemandirian (X1)',
      'Kesejahteraan (X2)',
      'Ketahanan Ek. (X3)',
      'Listrik (X4)',
      'Air Bersih (X5)',
      'Pendidikan (X6)',
      'Nakes (X7)',
      'Kesehatan (X8)',
      'Bebas Stunting (X9)'
    ];

    const palette = ['#3b82f6', '#10b981', '#f59e0b', '#f43f5e'];

    const datasets = regionsList.map((r, i) => {
      const color = palette[i % palette.length];
      const vals = [
        normalize('x1', r.x1),
        normalize('x2', r.x2),
        normalize('x3', r.x3),
        normalize('x4', r.x4),
        normalize('x5', r.x5),
        normalize('x6', r.x6),
        normalize('x7', r.x7),
        normalize('x8', r.x8),
        normalize('x9', r.x9)
      ];
      return {
        label: r.name,
        data: vals,
        backgroundColor: color + '25',
        borderColor: color,
        pointBackgroundColor: color,
        pointBorderColor: '#ffffff',
        pointRadius: 4,
        borderWidth: 2
      };
    });

    if (comparisonChartInstance) {
      comparisonChartInstance.destroy();
    }

    comparisonChartInstance = new Chart(ctx, {
      type: 'radar',
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: chartColors.textPrimary,
              font: { family: 'Outfit', size: 11, weight: '600' }
            }
          }
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            angleLines: { color: chartColors.gridLines },
            grid: { color: chartColors.gridLines },
            pointLabels: {
              color: chartColors.textPrimary,
              font: { family: 'Outfit', size: 10, weight: '500' }
            },
            ticks: { display: false }
          }
        }
      }
    });
  }

  return {
    renderBarChart,
    renderRadarChart,
    renderComparisonRadar
  };
})();
