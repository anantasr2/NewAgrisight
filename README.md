# AGRISIGHT — Food Security & Spatial Intelligence Indonesia

Platform analitik spasial dan kecerdasan buatan untuk menavigasi ketahanan pangan di **514 kabupaten/kota** dan **38 provinsi** di Indonesia. AGRISIGHT mengintegrasikan analisis spasial (WebGIS) dan *machine learning* untuk memetakan kondisi, memprediksi nilai Indeks Ketahanan Pangan (IKP), serta memberikan rekomendasi berbasis data bagi pengambil kebijakan.

🔗 **Live demo:** [agrisightt.vercel.app](https://agrisightt.vercel.app)

## ✨ Fitur Utama

- **Peta Spasial Interaktif** — Choropleth map 514 kabupaten/kota (EPSG:4326 WGS84) dengan filter multi-level: gugus kepulauan, provinsi, hingga kabupaten/kota.
- **9 Indikator Multidimensi** — Layer tematik meliputi NCPR, kemiskinan, pengeluaran pangan, akses listrik, akses air bersih, pendidikan perempuan, rasio tenaga kesehatan, angka harapan hidup, dan prevalensi stunting balita.
- **Prediksi Nilai IKP (AI Model)** — Model ensemble regresi (XGBoost) dengan akurasi **R² 97.73%**, MAE 1.42, RMSE 1.89, divalidasi menggunakan 10-fold cross validation.
- **Simulasi & Optimasi Skenario** — Simulasi perubahan indikator untuk melihat dampak (delta) terhadap nilai IKP sebelum kebijakan ditetapkan.
- **Segmentasi Tipologi Wilayah** — Klasterisasi K-Medoids (k=3) yang mengelompokkan daerah menjadi: Stabil Pangan, Potensial Pangan, dan Rentan Pangan.
- **Komparasi Multivariabel** — Bandingkan indikator antar daerah secara *side-by-side* terhadap target nasional atau daerah pembanding, serta cetak lembar profil untuk evaluasi RPJMD/Bappeda.

## 🧮 Sumber

Sumber data primer: **Badan Pusat Statistik (BPS)** & **Badan Pangan Nasional (Bapanas)**, tahun 2024.


## 🚀 Menjalankan Secara Lokal

Karena proyek ini berbasis HTML/CSS/JS statis, cukup jalankan melalui *local server* (disarankan agar fitur fetch data/GeoJSON berjalan normal):

```bash
git clone https://github.com/anantasr2/NewAgrisight.git
cd NewAgrisight

# Jalankan dengan live-server / http-server, contoh:
npx http-server .
```

Lalu buka `http://localhost:8080` (atau port yang ditampilkan) di browser.

## 📄 Halaman

| Halaman | Deskripsi |
|---|---|
| `index.html` | Beranda — ringkasan platform, metodologi IKP, dan tipologi wilayah |
| `spatial.html` | Peta spasial interaktif 514 kabupaten/kota dengan filter indikator |
| `prediction.html` | Model prediksi IKP berbasis ML dan simulasi optimasi skenario |

## 📜 Lisensi

Data terbuka mengikuti lisensi **CC-BY-4.0**.

## 👤 Kontributor

Dikembangkan oleh [anantasr2](https://github.com/anantasr2).