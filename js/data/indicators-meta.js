/**
 * AGRISIGHT — Food Security Indicators Metadata
 * Definisi 9 Indikator Ketahanan Pangan + IKP
 */

const INDICATORS_META = {
  ikp: {
    code: "ikp",
    name: "Indeks Ketahanan Pangan (IKP)",
    shortName: "IKP",
    unit: "Poin",
    min: 0,
    max: 100,
    nationalAvg: 68.4,
    higherIsBetter: true,
    description: "Komposit komprehensif dari 9 indikator ketahanan pangan (Ketersediaan, Keterjangkauan, Pemanfaatan).",
    clusterThresholds: { high: 75, mid: 60, low: 0 }
  },
  x1: {
    code: "x1",
    name: "Rasio Konsumsi Normatif terhadap Produksi Bersih (NCPR)",
    shortName: "NCPR (X1)",
    unit: "Rasio",
    min: 0.1,
    max: 5.0,
    nationalAvg: 1.45,
    higherIsBetter: false,
    description: "Mengukur rasio kebutuhan konsumsi pangan pokok beras/jagung dibanding produksi pangan bersih daerah.",
    category: "Ketersediaan"
  },
  x2: {
    code: "x2",
    name: "Persentase Penduduk Miskin",
    shortName: "Kemiskinan (X2)",
    unit: "%",
    min: 1.0,
    max: 40.0,
    nationalAvg: 9.36,
    higherIsBetter: false,
    description: "Persentase penduduk dengan pengeluaran per kapita per bulan di bawah Garis Kemiskinan.",
    category: "Keterjangkauan"
  },
  x3: {
    code: "x3",
    name: "Pengeluaran Pangan terhadap Total Pengeluaran",
    shortName: "Pengeluaran Pangan (X3)",
    unit: "%",
    min: 25.0,
    max: 80.0,
    nationalAvg: 48.5,
    higherIsBetter: false,
    description: "Pangsa pengeluaran pangan rumah tangga. Proporsi tinggi mengindikasikan kerentanan ekonomi.",
    category: "Keterjangkauan"
  },
  x4: {
    code: "x4",
    name: "Akses Rumah Tangga ke Listrik",
    shortName: "Akses Listrik (X4)",
    unit: "%",
    min: 50.0,
    max: 100.0,
    nationalAvg: 92.4,
    higherIsBetter: true,
    description: "Persentase rumah tangga yang memiliki akses terhadap sumber penerangan listrik PLN atau non-PLN.",
    category: "Keterjangkauan"
  },
  x5: {
    code: "x5",
    name: "Akses Sumber Air Minum Layak",
    shortName: "Akses Air Bersih (X5)",
    unit: "%",
    min: 40.0,
    max: 100.0,
    nationalAvg: 79.2,
    higherIsBetter: true,
    description: "Persentase rumah tangga dengan akses air minum terlindung dan layak higienis.",
    category: "Pemanfaatan"
  },
  x6: {
    code: "x6",
    name: "Rata-rata Lama Sekolah Perempuan (>15 th)",
    shortName: "Lama Sekolah Wanita (X6)",
    unit: "Tahun",
    min: 4.0,
    max: 14.0,
    nationalAvg: 9.1,
    higherIsBetter: true,
    description: "Rata-rata jumlah tahun pendidikan formal yang diselesaikan wanita usia 15 tahun ke atas.",
    category: "Pemanfaatan"
  },
  x7: {
    code: "x7",
    name: "Rasio Tenaga Kesehatan per 1.000 Penduduk",
    shortName: "Tenaga Kesehatan (X7)",
    unit: "per 1k",
    min: 0.3,
    max: 10.0,
    nationalAvg: 3.2,
    higherIsBetter: true,
    description: "Ketersediaan dokter, perawat, dan bidan per 1.000 jiwa penduduk di fasilitas kesehatan.",
    category: "Pemanfaatan"
  },
  x8: {
    code: "x8",
    name: "Angka Harapan Hidup saat Lahir (UHH)",
    shortName: "Harapan Hidup (X8)",
    unit: "Tahun",
    min: 60.0,
    max: 80.0,
    nationalAvg: 71.8,
    higherIsBetter: true,
    description: "Estimasi rata-rata jumlah tahun yang akan ditempuh oleh bayi baru lahir jika pola mortalitas konstan.",
    category: "Pemanfaatan"
  },
  x9: {
    code: "x9",
    name: "Prevalensi Balita Stunting",
    shortName: "Stunting (X9)",
    unit: "%",
    min: 5.0,
    max: 60.0,
    nationalAvg: 21.6,
    higherIsBetter: false,
    description: "Persentase anak usia bawah lima tahun yang tinggi badannya menurut umur di bawah -2 Standar Deviasi.",
    category: "Pemanfaatan"
  }
};

const CLUSTERS_META = {
  1: {
    id: 1,
    name: "Klaster 1: Mandiri & Resilien",
    shortName: "Mandiri & Resilien",
    label: "Mandiri (Resilien)",
    color: "#1b3b2b", // Forest green
    fillColor: "#1b3b2b",
    borderColor: "#142b1f",
    badgeClass: "badge-cluster-1",
    icon: "shield-check",
    description: "Wilayah dengan IKP tinggi (rata-rata >75), akses infrastruktur & fasilitas kesehatan sangat baik, tingkat kemiskinan dan stunting rendah.",
    policyRecommendation: "Pertahankan ketahanan pangan, perkuat diversifikasi pangan lokal, dan kembangkan pusat logistik antarwilayah."
  },
  2: {
    id: 2,
    name: "Klaster 2: Berkembang & Waspada",
    shortName: "Berkembang & Waspada",
    label: "Waspada (Berkembang)",
    color: "#d97706", // Amber
    fillColor: "#d97706",
    borderColor: "#b45309",
    badgeClass: "badge-cluster-2",
    icon: "alert-circle",
    description: "Wilayah dengan IKP moderat (rata-rata 60–75), infrastruktur cukup memadai namun rentan terhadap fluktuasi harga pangan musiman.",
    policyRecommendation: "Tingkatkan produktivitas pertanian lokal, perluas akses air bersih perdesaan, dan optimalkan posyandu untuk pencegahan stunting."
  },
  3: {
    id: 3,
    name: "Klaster 3: Rentan & Prioritas Intervensi",
    shortName: "Rentan / Prioritas 3T",
    label: "Rentan (Prioritas)",
    color: "#b93822", // Terracotta / Crimson
    fillColor: "#b93822",
    borderColor: "#9e2e19",
    badgeClass: "badge-cluster-3",
    icon: "alert-triangle",
    description: "Wilayah dengan IKP rendah (<60), akses logistik terbatas, angka stunting & kemiskinan relatif tinggi, memerlukan intervensi bantuan sosial & infrastruktur dasar.",
    policyRecommendation: "Prioritaskan program bantuan pangan berkala, pembangunan sarana sanitasi air bersih, penambahan nakes, dan intervensi gizi terpadu."
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INDICATORS_META, CLUSTERS_META };
}

