/**
 * AGRISIGHT — Modal Analisis Lengkap Profil Regional
 * Comprehensive In-depth Diagnostic & Strategic Policy Report
 */

const AgrisightAnalysisModal = (function () {
  let modalEl = null;
  let backdropEl = null;
  let currentRegency = null;

  function init() {
    modalEl = document.getElementById('regional-analysis-modal');
    backdropEl = document.getElementById('analysis-modal-backdrop');

    const btnClose = document.getElementById('btn-close-analysis-modal');
    if (btnClose) {
      btnClose.addEventListener('click', close);
    }
    if (backdropEl) {
      backdropEl.addEventListener('click', close);
    }

    const btnPrint = document.getElementById('btn-print-analysis');
    if (btnPrint) {
      btnPrint.addEventListener('click', function () {
        window.print();
      });
    }

    // Connect top navbar tab "Regional Analysis"
    const navRegional = document.querySelector('.nav-tab[data-nav="regional"]');
    if (navRegional) {
      navRegional.addEventListener('click', function (e) {
        e.preventDefault();
        const selected = AgrisightSidebar.getCurrentRegency() || KABUPATEN_DATA[0];
        open(selected);
      });
    }
  }

  function open(data) {
    if (!data) {
      data = KABUPATEN_DATA.find(k => k.name.includes('Bogor')) || KABUPATEN_DATA[0];
    }
    currentRegency = data;

    if (!modalEl) {
      modalEl = document.getElementById('regional-analysis-modal');
      backdropEl = document.getElementById('analysis-modal-backdrop');
    }

    populateModal(data);

    if (modalEl) modalEl.classList.add('open');
    if (backdropEl) backdropEl.classList.add('open');
  }

  function close() {
    if (modalEl) modalEl.classList.remove('open');
    if (backdropEl) backdropEl.classList.remove('open');
  }

  function populateModal(data) {
    const clusterMeta = CLUSTERS_META[data.cluster] || CLUSTERS_META[2];

    // Header elements
    const titleEl = document.getElementById('analysis-modal-title');
    const provEl = document.getElementById('analysis-modal-province');
    const badgeEl = document.getElementById('analysis-modal-badge');
    const ikpValEl = document.getElementById('analysis-modal-ikp-val');
    const rankEl = document.getElementById('analysis-modal-rank');

    if (titleEl) titleEl.textContent = data.name;
    if (provEl) provEl.textContent = `Provinsi ${data.province}`;
    if (badgeEl) {
      badgeEl.className = `badge ${clusterMeta.badgeClass}`;
      badgeEl.textContent = clusterMeta.name;
    }
    if (ikpValEl) ikpValEl.textContent = data.ikp.toFixed(1);

    // Calculate ranking in national dataset
    const sorted = [...KABUPATEN_DATA].sort((a, b) => b.ikp - a.ikp);
    const rankIndex = sorted.findIndex(k => k.id === data.id) + 1;
    if (rankEl) {
      rankEl.textContent = `Peringkat #${rankIndex || 120} dari 514 Kab/Kota`;
    }

    // 3 Pillars Breakdown
    renderPillars(data);

    // Strengths & Vulnerabilities
    renderStrengthsAndVulnerabilities(data);

    // Diagnostic Matrix Table
    renderDiagnosticTable(data);

    // Action Roadmap
    renderPolicyRoadmap(data, clusterMeta);
  }

  function renderPillars(data) {
    const container = document.getElementById('analysis-pillars-grid');
    if (!container) return;

    // Pillar 1: Ketersediaan (X1)
    const p1Score = data.x1 <= 1.0 ? 'Sangat Baik (Surplus)' : data.x1 <= 2.0 ? 'Cukup (Mandiri)' : 'Defisit (Tergantung Suplai Luar)';
    const p1Class = data.x1 <= 1.2 ? 'badge-indicator-good' : data.x1 <= 2.2 ? 'badge-indicator-warn' : 'badge-indicator-bad';

    // Pillar 2: Keterjangkauan (X2, X3, X4)
    const povBetter = data.x2 < INDICATORS_META.x2.nationalAvg;
    const p2Status = povBetter ? 'Kondisi Ekonomi Baik' : 'Kerentanan Ekonomi Tinggi';
    const p2Class = povBetter ? 'badge-indicator-good' : 'badge-indicator-bad';

    // Pillar 3: Pemanfaatan & Kesehatan (X5 - X9)
    const stuntingBetter = data.x9 < INDICATORS_META.x9.nationalAvg;
    const p3Status = stuntingBetter ? 'Status Gizi & Sanitasi Baik' : 'Risiko Stunting & Sanitasi Perlu Intervensi';
    const p3Class = stuntingBetter ? 'badge-indicator-good' : 'badge-indicator-bad';

    container.innerHTML = `
      <div class="pillar-card">
        <div class="pillar-header">
          <span class="pillar-icon">🌾</span>
          <div>
            <div class="pillar-name">Pilar 1: Ketersediaan Pangan</div>
            <span class="badge ${p1Class}" style="font-size:0.68rem;">${p1Score}</span>
          </div>
        </div>
        <div class="pillar-desc">
          Rasio NCPR tercatat <strong>${data.x1}</strong>. ${data.x1 <= 1.5 ? 'Produksi pangan lokal mencukupi kebutuhan konsumsi pokok.' : 'Kebutuhan konsumsi normatif melebihi produksi lokal, membutuhkan pasokan pangan antar-daerah.'}
        </div>
      </div>

      <div class="pillar-card">
        <div class="pillar-header">
          <span class="pillar-icon">💰</span>
          <div>
            <div class="pillar-name">Pilar 2: Keterjangkauan Ekonomi</div>
            <span class="badge ${p2Class}" style="font-size:0.68rem;">${p2Status}</span>
          </div>
        </div>
        <div class="pillar-desc">
          Kemiskinan <strong>${data.x2}%</strong>, Pengeluaran Pangan <strong>${data.x3}%</strong>, Akses Listrik <strong>${data.x4}%</strong>.
        </div>
      </div>

      <div class="pillar-card">
        <div class="pillar-header">
          <span class="pillar-icon">🏥</span>
          <div>
            <div class="pillar-name">Pilar 3: Pemanfaatan & Gizi</div>
            <span class="badge ${p3Class}" style="font-size:0.68rem;">${p3Status}</span>
          </div>
        </div>
        <div class="pillar-desc">
          Prevalensi Stunting <strong>${data.x9}%</strong>, Akses Air Bersih <strong>${data.x5}%</strong>, Harapan Hidup <strong>${data.x8} th</strong>, Nakes <strong>${data.x7}/1k</strong>.
        </div>
      </div>
    `;
  }

  function renderStrengthsAndVulnerabilities(data) {
    const strContainer = document.getElementById('analysis-strengths-list');
    const vulContainer = document.getElementById('analysis-vulnerabilities-list');
    if (!strContainer || !vulContainer) return;

    const keys = ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9'];
    const strengths = [];
    const vulnerabilities = [];

    keys.forEach(k => {
      const meta = INDICATORS_META[k];
      const val = data[k];
      const nat = meta.nationalAvg;
      const isBetter = meta.higherIsBetter ? val >= nat : val <= nat;

      if (isBetter) {
        strengths.push({ meta, val, nat });
      } else {
        vulnerabilities.push({ meta, val, nat });
      }
    });

    strContainer.innerHTML = strengths.length > 0 ? strengths.slice(0, 3).map(item => `
      <div class="insight-bullet strength">
        <span class="bullet-icon">✓</span>
        <div>
          <strong>${item.meta.shortName} (${item.val} ${item.meta.unit})</strong>: Lebih unggul dibanding rata-rata nasional (${item.nat} ${item.meta.unit}).
        </div>
      </div>
    `).join('') : '<div class="insight-bullet">Tidak ada indikator di atas rata-rata nasional.</div>';

    vulContainer.innerHTML = vulnerabilities.length > 0 ? vulnerabilities.slice(0, 3).map(item => `
      <div class="insight-bullet vulnerability">
        <span class="bullet-icon">!</span>
        <div>
          <strong>${item.meta.shortName} (${item.val} ${item.meta.unit})</strong>: Perlu perbaikan segera karena tertinggal dari benchmark nasional (${item.nat} ${item.meta.unit}).
        </div>
      </div>
    `).join('') : '<div class="insight-bullet strength"><span class="bullet-icon">✓</span> Semua indikator berada pada rentang aman.</div>';
  }

  function renderDiagnosticTable(data) {
    const tableBody = document.getElementById('analysis-diagnostic-table-body');
    if (!tableBody) return;

    const keys = ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9'];
    tableBody.innerHTML = keys.map(k => {
      const meta = INDICATORS_META[k];
      const val = data[k];
      const nat = meta.nationalAvg;
      const isBetter = meta.higherIsBetter ? val >= nat : val <= nat;
      const diff = val - nat;
      const diffStr = (diff > 0 ? '+' : '') + diff.toFixed(1) + ' ' + meta.unit;

      let statusBadge = '';
      if (isBetter) {
        statusBadge = '<span class="badge badge-indicator-good">Optimal</span>';
      } else if (Math.abs(diff) <= (meta.max - meta.min) * 0.1) {
        statusBadge = '<span class="badge badge-indicator-warn">Waspada</span>';
      } else {
        statusBadge = '<span class="badge badge-indicator-bad">Kritis</span>';
      }

      // Action recommendations based on indicator
      const actionRecommendations = {
        x1: 'Fasilitasi kemitraan suplai beras antar-daerah dan optimalisasi cadangan pangan pemerintah daerah.',
        x2: 'Penguatan jaring pengaman sosial pangan (Bansos Sembako) dan padat karya tunai perdesaan.',
        x3: 'Operasi pasar stabilisasi harga komoditas pokok dan program diversifikasi pangan pekarangan (P2L).',
        x4: 'Perluasan elektrifikasi perdesaan dan dukungan pembangkit listrik mikrohidro/surya lokal.',
        x5: 'Pembangunan jaringan pipa air minum perdesaan (PAMSIMAS) dan perlindungan mata air baku.',
        x6: 'Program beasiswa pendidikan berkelanjutan dan pelatihan literasi gizi keluarga bagi ibu rumah tangga.',
        x7: 'Penempatan dokter & bidan desa PTT serta insentif tenaga kesehatan di wilayah terpencil.',
        x8: 'Peningkatan layanan preventif posyandu lansia dan deteksi dini penyakit degeneratif.',
        x9: 'Intervensi spesifik pemberian makanan tambahan (PMT) balita dan tablet tambah darah bagi remaja putri.'
      };

      return `
        <tr>
          <td>
            <div style="font-weight:700; color:#fff;">${meta.shortName}</div>
            <div style="font-size:0.7rem; color:#64748b;">${meta.category}</div>
          </td>
          <td style="font-family:var(--font-mono); font-weight:700; color:#38bdf8;">
            ${val} ${meta.unit}
          </td>
          <td style="font-family:var(--font-mono); color:#94a3b8;">
            ${nat} ${meta.unit}
          </td>
          <td>
            <span class="benchmark-diff ${isBetter ? 'positive' : 'negative'}">
              ${isBetter ? '▲' : '▼'} ${diffStr}
            </span>
          </td>
          <td>${statusBadge}</td>
          <td style="font-size:0.75rem; color:#cbd5e1;">
            ${actionRecommendations[k]}
          </td>
        </tr>
      `;
    }).join('');
  }

  function renderPolicyRoadmap(data, clusterMeta) {
    const roadmapEl = document.getElementById('analysis-policy-roadmap');
    if (!roadmapEl) return;

    roadmapEl.innerHTML = `
      <div class="roadmap-step">
        <div class="step-num">01</div>
        <div class="step-content">
          <div class="step-title">Jangka Pendek (0–6 Bulan): Stabilisasi & Bantuan Darurat</div>
          <p>Pemantauan harga harian, distribusi cadangan pangan beras pemerintah daerah, dan intervensi PMT stunting di puskesmas prioritas.</p>
        </div>
      </div>
      <div class="roadmap-step">
        <div class="step-num">02</div>
        <div class="step-content">
          <div class="step-title">Jangka Menengah (6–24 Bulan): Infrastruktur Sanitasi & Air Bersih</div>
          <p>Perluasan akses air minum layak, perbaikan jalan usaha tani, dan penguatan kelembagaan lumbung pangan desa.</p>
        </div>
      </div>
      <div class="roadmap-step">
        <div class="step-num">03</div>
        <div class="step-content">
          <div class="step-title">Jangka Panjang (2–5 Tahun): Kemandirian Pangan Berkelanjutan</div>
          <p>Modernisasi pertanian presisi, peningkatan kapasitas sumber daya manusia (lama sekolah perempuan), dan diversifikasi pangan lokal bernilai gizi tinggi.</p>
        </div>
      </div>
    `;
  }

  return {
    init,
    open,
    close
  };
})();
