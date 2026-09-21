/**
 * AGRISIGHT — Cluster & Indicator Dataset
 * 514 Kabupaten/Kota Indonesia
 * K-Medoids Clustering Results (Synthetic Demo Data)
 *
 * Indicators:
 *   x1  = NCPR (Normative Consumption to Net Production Ratio)
 *   x2  = Kemiskinan (%)
 *   x3  = Pengeluaran Pangan (%)
 *   x4  = Akses Listrik (%)
 *   x5  = Akses Air Bersih (%)
 *   x6  = Lama Sekolah Wanita (tahun)
 *   x7  = Rasio Tenaga Kesehatan (per 1000 penduduk)
 *   x8  = Angka Harapan Hidup (tahun)
 *   x9  = Stunting (%)
 *   ikp = Indeks Ketahanan Pangan (0–100)
 */

const KABUPATEN_DATA = [
// ACEH
    { id: "1101", name: "Kabupaten Simeulue", province: "Aceh", cluster: 2, ikp: 52.3, x1: 2.1, x2: 18.7, x3: 58.2, x4: 82.4, x5: 64.3, x6: 7.2, x7: 1.8, x8: 67.5, x9: 38.2 },

    { id: "1102", name: "Kabupaten Aceh Singkil", province: "Aceh", cluster: 3, ikp: 55.1, x1: 1.9, x2: 16.4, x3: 55.7, x4: 85.2, x5: 68.1, x6: 7.8, x7: 2.1, x8: 68.2, x9: 35.7 },

    { id: "1103", name: "Kabupaten Aceh Selatan", province: "Aceh", cluster: 3, ikp: 62.4, x1: 1.4, x2: 12.8, x3: 49.3, x4: 89.7, x5: 74.2, x6: 8.4, x7: 2.8, x8: 69.8, x9: 29.4 },

    { id: "1104", name: "Kabupaten Aceh Tenggara", province: "Aceh", cluster: 3, ikp: 54.8, x1: 1.8, x2: 17.2, x3: 56.8, x4: 84.1, x5: 66.7, x6: 7.5, x7: 2.0, x8: 67.9, x9: 36.8 },

    { id: "1105", name: "Kabupaten Aceh Timur", province: "Aceh", cluster: 3, ikp: 57.2, x1: 1.7, x2: 14.9, x3: 53.4, x4: 86.8, x5: 70.5, x6: 8.1, x7: 2.4, x8: 68.7, x9: 33.1 },

    { id: "1106", name: "Kabupaten Aceh Tengah", province: "Aceh", cluster: 2, ikp: 65.7, x1: 1.2, x2: 10.5, x3: 46.2, x4: 92.3, x5: 78.4, x6: 9.1, x7: 3.2, x8: 71.2, x9: 25.8 },

    { id: "1107", name: "Kabupaten Aceh Barat", province: "Aceh", cluster: 2, ikp: 58.9, x1: 1.6, x2: 15.6, x3: 52.1, x4: 87.5, x5: 71.8, x6: 8.3, x7: 2.6, x8: 69.1, x9: 32.4 },

    { id: "1108", name: "Kabupaten Aceh Besar", province: "Aceh", cluster: 1, ikp: 67.3, x1: 1.1, x2: 9.8, x3: 44.7, x4: 93.8, x5: 80.2, x6: 9.4, x7: 3.5, x8: 71.8, x9: 24.1 },

    { id: "1109", name: "Kabupaten Pidie", province: "Aceh", cluster: 3, ikp: 56.4, x1: 1.8, x2: 16.1, x3: 54.8, x4: 85.9, x5: 69.4, x6: 7.9, x7: 2.3, x8: 68.4, x9: 34.5 },

    { id: "1110", name: "Kabupaten Bireuen", province: "Aceh", cluster: 3, ikp: 64.1, x1: 1.3, x2: 11.7, x3: 48.6, x4: 91.2, x5: 76.8, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.3 },

    { id: "1111", name: "Kabupaten Aceh Utara", province: "Aceh", cluster: 3, ikp: 59.8, x1: 1.5, x2: 14.3, x3: 51.7, x4: 88.4, x5: 72.9, x6: 8.5, x7: 2.7, x8: 69.5, x9: 31.2 },

    { id: "1112", name: "Kabupaten Aceh Barat Daya", province: "Aceh", cluster: 3, ikp: 53.7, x1: 2.0, x2: 17.8, x3: 57.4, x4: 83.3, x5: 65.6, x6: 7.4, x7: 1.9, x8: 67.7, x9: 37.5 },

    { id: "1113", name: "Kabupaten Gayo Lues", province: "Aceh", cluster: 3, ikp: 51.8, x1: 2.3, x2: 19.4, x3: 59.8, x4: 80.7, x5: 62.1, x6: 7.0, x7: 1.6, x8: 66.9, x9: 40.3 },

    { id: "1114", name: "Kabupaten Aceh Tamiang", province: "Aceh", cluster: 2, ikp: 63.5, x1: 1.3, x2: 12.1, x3: 47.9, x4: 90.8, x5: 75.7, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.1 },

    { id: "1115", name: "Kabupaten Nagan Raya", province: "Aceh", cluster: 3, ikp: 57.6, x1: 1.7, x2: 15.2, x3: 53.8, x4: 87.1, x5: 71.2, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.8 },

    { id: "1116", name: "Kabupaten Aceh Jaya", province: "Aceh", cluster: 3, ikp: 55.9, x1: 1.9, x2: 16.8, x3: 56.2, x4: 84.7, x5: 67.4, x6: 7.7, x7: 2.2, x8: 68.1, x9: 35.9 },

    { id: "1117", name: "Kabupaten Bener Meriah", province: "Aceh", cluster: 3, ikp: 66.2, x1: 1.2, x2: 10.9, x3: 47.1, x4: 92.7, x5: 79.1, x6: 9.2, x7: 3.3, x8: 71.4, x9: 26.4 },

    { id: "1118", name: "Kabupaten Pidie Jaya", province: "Aceh", cluster: 3, ikp: 60.3, x1: 1.5, x2: 13.9, x3: 51.3, x4: 88.9, x5: 73.6, x6: 8.6, x7: 2.8, x8: 69.7, x9: 30.5 },

    { id: "1171", name: "Kota Banda Aceh", province: "Aceh", cluster: 1, ikp: 78.4, x1: 0.6, x2: 5.3, x3: 38.2, x4: 98.7, x5: 91.4, x6: 11.8, x7: 5.2, x8: 74.9, x9: 14.2 },

    { id: "1172", name: "Kota Sabang", province: "Aceh", cluster: 1, ikp: 74.2, x1: 0.8, x2: 7.1, x3: 41.8, x4: 96.4, x5: 87.3, x6: 11.1, x7: 4.7, x8: 73.6, x9: 17.8 },

    { id: "1173", name: "Kota Langsa", province: "Aceh", cluster: 1, ikp: 76.8, x1: 0.7, x2: 6.2, x3: 39.7, x4: 97.8, x5: 89.6, x6: 11.5, x7: 5.0, x8: 74.3, x9: 15.9 },

    { id: "1174", name: "Kota Lhokseumawe", province: "Aceh", cluster: 1, ikp: 75.9, x1: 0.7, x2: 6.7, x3: 40.4, x4: 97.2, x5: 88.7, x6: 11.3, x7: 4.9, x8: 74.0, x9: 16.7 },

    { id: "1175", name: "Kota Subulussalam", province: "Aceh", cluster: 3, ikp: 68.4, x1: 1.0, x2: 9.1, x3: 43.8, x4: 94.5, x5: 82.3, x6: 9.8, x7: 3.8, x8: 72.1, x9: 22.7 },

  // SUMATERA UTARA

{ id: "1201", name: "Kabupaten Nias", province: "Sumatera Utara", cluster: 3, ikp: 48.2, x1: 2.5, x2: 22.1, x3: 62.4, x4: 78.3, x5: 58.7, x6: 6.5, x7: 1.4, x8: 65.8, x9: 43.7 },

{ id: "1202", name: "Kabupaten Mandailing Natal", province: "Sumatera Utara", cluster: 3, ikp: 54.6, x1: 1.9, x2: 16.7, x3: 55.9, x4: 84.9, x5: 67.8, x6: 7.8, x7: 2.1, x8: 68.0, x9: 35.9 },

{ id: "1203", name: "Kabupaten Tapanuli Selatan", province: "Sumatera Utara", cluster: 3, ikp: 57.8, x1: 1.7, x2: 14.6, x3: 53.1, x4: 87.3, x5: 71.9, x6: 8.2, x7: 2.5, x8: 69.0, x9: 32.7 },

{ id: "1204", name: "Kabupaten Tapanuli Tengah", province: "Sumatera Utara", cluster: 3, ikp: 55.4, x1: 1.9, x2: 16.3, x3: 55.4, x4: 85.6, x5: 68.9, x6: 7.9, x7: 2.2, x8: 68.3, x9: 35.1 },

{ id: "1205", name: "Kabupaten Tapanuli Utara", province: "Sumatera Utara", cluster: 3, ikp: 64.9, x1: 1.2, x2: 11.4, x3: 48.2, x4: 91.5, x5: 77.3, x6: 8.9, x7: 3.1, x8: 70.7, x9: 27.8 },

{ id: "1206", name: "Kabupaten Toba", province: "Sumatera Utara", cluster: 3, ikp: 66.1, x1: 1.2, x2: 10.7, x3: 47.4, x4: 92.6, x5: 78.8, x6: 9.2, x7: 3.3, x8: 71.3, x9: 26.2 },

{ id: "1207", name: "Kabupaten Labuhan Batu", province: "Sumatera Utara", cluster: 3, ikp: 63.8, x1: 1.3, x2: 12.3, x3: 48.9, x4: 90.9, x5: 75.9, x6: 8.7, x7: 2.9, x8: 70.3, x9: 28.4 },

{ id: "1208", name: "Kabupaten Asahan", province: "Sumatera Utara", cluster: 2, ikp: 65.2, x1: 1.2, x2: 11.1, x3: 47.8, x4: 91.8, x5: 77.8, x6: 9.0, x7: 3.2, x8: 70.9, x9: 27.1 },

{ id: "1209", name: "Kabupaten Simalungun", province: "Sumatera Utara", cluster: 3, ikp: 64.4, x1: 1.3, x2: 11.8, x3: 48.5, x4: 91.1, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.6, x9: 27.9 },

{ id: "1210", name: "Kabupaten Dairi", province: "Sumatera Utara", cluster: 3, ikp: 63.1, x1: 1.4, x2: 12.6, x3: 49.4, x4: 90.4, x5: 74.8, x6: 8.6, x7: 2.8, x8: 70.0, x9: 28.9 },

{ id: "1211", name: "Kabupaten Karo", province: "Sumatera Utara", cluster: 3, ikp: 73.6, x1: 0.8, x2: 7.4, x3: 42.1, x4: 96.2, x5: 86.7, x6: 11.0, x7: 4.6, x8: 73.4, x9: 18.3 },

{ id: "1212", name: "Kabupaten Deli Serdang", province: "Sumatera Utara", cluster: 1, ikp: 75.4, x1: 0.7, x2: 6.5, x3: 40.1, x4: 97.4, x5: 89.1, x6: 11.4, x7: 4.9, x8: 74.1, x9: 16.3 },

{ id: "1213", name: "Kabupaten Langkat", province: "Sumatera Utara", cluster: 3, ikp: 66.8, x1: 1.1, x2: 10.2, x3: 46.7, x4: 93.1, x5: 79.8, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.4 },

{ id: "1214", name: "Kabupaten Nias Selatan", province: "Sumatera Utara", cluster: 3, ikp: 46.8, x1: 2.7, x2: 23.5, x3: 64.1, x4: 76.8, x5: 56.2, x6: 6.2, x7: 1.2, x8: 65.2, x9: 45.8 },

{ id: "1215", name: "Kabupaten Humbang Hasundutan", province: "Sumatera Utara", cluster: 3, ikp: 62.7, x1: 1.4, x2: 12.9, x3: 49.7, x4: 90.1, x5: 74.2, x6: 8.5, x7: 2.8, x8: 69.8, x9: 29.2 },

{ id: "1216", name: "Kabupaten Pakpak Bharat", province: "Sumatera Utara", cluster: 3, ikp: 58.3, x1: 1.6, x2: 15.4, x3: 52.8, x4: 87.8, x5: 72.4, x6: 8.3, x7: 2.6, x8: 69.2, x9: 32.1 },

{ id: "1217", name: "Kabupaten Samosir", province: "Sumatera Utara", cluster: 3, ikp: 63.9, x1: 1.3, x2: 12.2, x3: 48.8, x4: 90.7, x5: 75.6, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.2 },

{ id: "1218", name: "Kabupaten Serdang Bedagai", province: "Sumatera Utara", cluster: 3, ikp: 65.6, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.2, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },

{ id: "1219", name: "Kabupaten Batu Bara", province: "Sumatera Utara", cluster: 3, ikp: 62.3, x1: 1.4, x2: 13.1, x3: 50.2, x4: 89.9, x5: 73.8, x6: 8.5, x7: 2.7, x8: 69.7, x9: 29.5 },

{ id: "1220", name: "Kabupaten Padang Lawas Utara", province: "Sumatera Utara", cluster: 3, ikp: 56.7, x1: 1.8, x2: 15.8, x3: 54.1, x4: 86.5, x5: 70.3, x6: 8.0, x7: 2.4, x8: 68.6, x9: 33.4 },

{ id: "1221", name: "Kabupaten Padang Lawas", province: "Sumatera Utara", cluster: 3, ikp: 55.8, x1: 1.8, x2: 16.2, x3: 55.1, x4: 85.8, x5: 69.1, x6: 7.9, x7: 2.2, x8: 68.2, x9: 34.8 },

{ id: "1222", name: "Kabupaten Labuhan Batu Selatan", province: "Sumatera Utara", cluster: 2, ikp: 63.4, x1: 1.3, x2: 12.4, x3: 49.1, x4: 90.7, x5: 75.4, x6: 8.7, x7: 2.9, x8: 70.1, x9: 28.6 },

{ id: "1223", name: "Kabupaten Labuhan Batu Utara", province: "Sumatera Utara", cluster: 3, ikp: 63.7, x1: 1.3, x2: 12.2, x3: 48.8, x4: 90.9, x5: 75.7, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.3 },

{ id: "1224", name: "Kabupaten Nias Utara", province: "Sumatera Utara", cluster: 3, ikp: 47.5, x1: 2.6, x2: 22.8, x3: 63.2, x4: 77.5, x5: 57.4, x6: 6.3, x7: 1.3, x8: 65.5, x9: 44.7 },

{ id: "1225", name: "Kabupaten Nias Barat", province: "Sumatera Utara", cluster: 3, ikp: 47.1, x1: 2.7, x2: 23.1, x3: 63.7, x4: 77.1, x5: 56.9, x6: 6.2, x7: 1.2, x8: 65.3, x9: 45.3 },

{ id: "1271", name: "Kota Sibolga", province: "Sumatera Utara", cluster: 1, ikp: 74.8, x1: 0.7, x2: 7.0, x3: 41.4, x4: 96.8, x5: 88.1, x6: 11.2, x7: 4.8, x8: 73.8, x9: 17.2 },

{ id: "1272", name: "Kota Tanjung Balai", province: "Sumatera Utara", cluster: 1, ikp: 68.9, x1: 1.0, x2: 8.8, x3: 43.4, x4: 94.8, x5: 82.8, x6: 9.9, x7: 3.9, x8: 72.3, x9: 22.1 },

{ id: "1273", name: "Kota Pematangsiantar", province: "Sumatera Utara", cluster: 1, ikp: 77.2, x1: 0.6, x2: 5.8, x3: 39.1, x4: 98.2, x5: 90.7, x6: 11.7, x7: 5.1, x8: 74.7, x9: 15.1 },

{ id: "1274", name: "Kota Tebing Tinggi", province: "Sumatera Utara", cluster: 2, ikp: 75.6, x1: 0.7, x2: 6.4, x3: 40.2, x4: 97.5, x5: 89.3, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.2 },

{ id: "1275", name: "Kota Medan", province: "Sumatera Utara", cluster: 1, ikp: 82.4, x1: 0.4, x2: 3.8, x3: 34.7, x4: 99.4, x5: 95.8, x6: 12.5, x7: 6.1, x8: 76.2, x9: 10.4 },

{ id: "1276", name: "Kota Binjai", province: "Sumatera Utara", cluster: 1, ikp: 78.9, x1: 0.6, x2: 5.1, x3: 37.9, x4: 98.9, x5: 92.1, x6: 11.9, x7: 5.4, x8: 75.1, x9: 13.7 },

{ id: "1277", name: "Kota Padang Sidempuan", province: "Sumatera Utara", cluster: 3, ikp: 76.3, x1: 0.7, x2: 6.1, x3: 39.9, x4: 97.6, x5: 89.7, x6: 11.5, x7: 5.0, x8: 74.3, x9: 16.0 },

{ id: "1278", name: "Kota Gunungsitoli", province: "Sumatera Utara", cluster: 2, ikp: 69.7, x1: 1.0, x2: 8.4, x3: 42.9, x4: 95.2, x5: 83.5, x6: 10.0, x7: 4.0, x8: 72.5, x9: 21.4 },

  // SUMATERA BARAT

{ id: "1301", name: "Kabupaten Kepulauan Mentawai", province: "Sumatera Barat", cluster: 3, ikp: 49.7, x1: 2.4, x2: 21.3, x3: 61.5, x4: 79.4, x5: 60.1, x6: 6.8, x7: 1.6, x8: 66.4, x9: 42.1 },

{ id: "1302", name: "Kabupaten Pesisir Selatan", province: "Sumatera Barat", cluster: 1, ikp: 64.7, x1: 1.2, x2: 11.6, x3: 48.3, x4: 91.4, x5: 77.1, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.5 },

{ id: "1303", name: "Kabupaten Solok", province: "Sumatera Barat", cluster: 3, ikp: 65.9, x1: 1.2, x2: 10.8, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },

{ id: "1304", name: "Kabupaten Sijunjung", province: "Sumatera Barat", cluster: 2, ikp: 63.2, x1: 1.3, x2: 12.5, x3: 49.3, x4: 90.5, x5: 75.0, x6: 8.6, x7: 2.8, x8: 70.0, x9: 28.8 },

{ id: "1305", name: "Kabupaten Tanah Datar", province: "Sumatera Barat", cluster: 1, ikp: 72.8, x1: 0.8, x2: 7.7, x3: 42.5, x4: 95.9, x5: 86.3, x6: 10.9, x7: 4.5, x8: 73.2, x9: 18.7 },

{ id: "1306", name: "Kabupaten Padang Pariaman", province: "Sumatera Barat", cluster: 2, ikp: 67.4, x1: 1.1, x2: 10.1, x3: 46.5, x4: 93.2, x5: 80.1, x6: 9.5, x7: 3.5, x8: 71.6, x9: 25.2 },

{ id: "1307", name: "Kabupaten Agam", province: "Sumatera Barat", cluster: 1, ikp: 68.1, x1: 1.0, x2: 9.7, x3: 45.8, x4: 93.7, x5: 81.0, x6: 9.7, x7: 3.6, x8: 71.9, x9: 24.5 },

{ id: "1308", name: "Kabupaten Lima Puluh Kota", province: "Sumatera Barat", cluster: 3, ikp: 66.5, x1: 1.1, x2: 10.4, x3: 47.2, x4: 93.0, x5: 79.5, x6: 9.4, x7: 3.4, x8: 71.4, x9: 25.7 },

{ id: "1309", name: "Kabupaten Pasaman", province: "Sumatera Barat", cluster: 3, ikp: 64.3, x1: 1.3, x2: 12.0, x3: 48.7, x4: 91.1, x5: 76.6, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.7 },

{ id: "1310", name: "Kabupaten Solok Selatan", province: "Sumatera Barat", cluster: 2, ikp: 63.6, x1: 1.3, x2: 12.3, x3: 49.0, x4: 90.7, x5: 75.3, x6: 8.6, x7: 2.9, x8: 70.1, x9: 28.4 },

{ id: "1311", name: "Kabupaten Dharmasraya", province: "Sumatera Barat", cluster: 2, ikp: 64.8, x1: 1.2, x2: 11.5, x3: 48.1, x4: 91.5, x5: 77.3, x6: 8.9, x7: 3.1, x8: 70.7, x9: 27.4 },

{ id: "1312", name: "Kabupaten Pasaman Barat", province: "Sumatera Barat", cluster: 3, ikp: 63.9, x1: 1.3, x2: 12.2, x3: 48.8, x4: 90.8, x5: 75.6, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.2 },

{ id: "1371", name: "Kota Padang", province: "Sumatera Barat", cluster: 1, ikp: 80.2, x1: 0.5, x2: 4.4, x3: 36.1, x4: 99.1, x5: 93.8, x6: 12.2, x7: 5.7, x8: 75.5, x9: 12.3 },

{ id: "1372", name: "Kota Solok", province: "Sumatera Barat", cluster: 1, ikp: 75.7, x1: 0.7, x2: 6.4, x3: 40.3, x4: 97.5, x5: 89.2, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.2 },

{ id: "1373", name: "Kota Sawah Lunto", province: "Sumatera Barat", cluster: 1, ikp: 74.1, x1: 0.8, x2: 7.3, x3: 41.9, x4: 96.3, x5: 87.0, x6: 11.1, x7: 4.7, x8: 73.5, x9: 18.0 },

{ id: "1374", name: "Kota Padang Panjang", province: "Sumatera Barat", cluster: 1, ikp: 77.9, x1: 0.6, x2: 5.5, x3: 38.7, x4: 98.5, x5: 91.2, x6: 11.8, x7: 5.2, x8: 75.0, x9: 14.4 },

{ id: "1375", name: "Kota Bukittinggi", province: "Sumatera Barat", cluster: 1, ikp: 79.6, x1: 0.5, x2: 4.7, x3: 36.8, x4: 98.9, x5: 93.1, x6: 12.1, x7: 5.6, x8: 75.3, x9: 12.9 },

{ id: "1376", name: "Kota Payakumbuh", province: "Sumatera Barat", cluster: 1, ikp: 76.5, x1: 0.7, x2: 6.2, x3: 40.0, x4: 97.6, x5: 89.5, x6: 11.5, x7: 5.0, x8: 74.3, x9: 15.8 },

{ id: "1377", name: "Kota Pariaman", province: "Sumatera Barat", cluster: 1, ikp: 74.9, x1: 0.7, x2: 7.0, x3: 41.5, x4: 96.7, x5: 88.0, x6: 11.2, x7: 4.8, x8: 73.8, x9: 17.3 },  


// RIAU
{ id: "1401", name: "Kabupaten Kuantan Singingi", province: "Riau", cluster: 2, ikp: 65.4, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.9, x6: 9.1, x7: 3.2, x8: 70.9, x9: 26.9 },

{ id: "1402", name: "Kabupaten Indragiri Hulu", province: "Riau", cluster: 2, ikp: 64.2, x1: 1.3, x2: 12.1, x3: 48.6, x4: 91.1, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },

{ id: "1403", name: "Kabupaten Indragiri Hilir", province: "Riau", cluster: 3, ikp: 63.7, x1: 1.3, x2: 12.3, x3: 48.9, x4: 90.8, x5: 75.7, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.3 },

{ id: "1404", name: "Kabupaten Pelalawan", province: "Riau", cluster: 1, ikp: 66.3, x1: 1.1, x2: 10.6, x3: 47.3, x4: 93.0, x5: 79.7, x6: 9.4, x7: 3.4, x8: 71.4, x9: 25.6 },

{ id: "1405", name: "Kabupaten Siak", province: "Riau", cluster: 1, ikp: 73.2, x1: 0.8, x2: 7.6, x3: 42.3, x4: 96.1, x5: 86.5, x6: 11.0, x7: 4.5, x8: 73.3, x9: 18.5 },

{ id: "1406", name: "Kabupaten Kampar", province: "Riau", cluster: 2, ikp: 67.8, x1: 1.1, x2: 9.9, x3: 46.2, x4: 93.5, x5: 80.7, x6: 9.6, x7: 3.6, x8: 71.8, x9: 24.8 },

{ id: "1407", name: "Kabupaten Rokan Hulu", province: "Riau", cluster: 2, ikp: 64.9, x1: 1.2, x2: 11.4, x3: 48.2, x4: 91.5, x5: 77.3, x6: 8.9, x7: 3.1, x8: 70.7, x9: 27.8 },

{ id: "1408", name: "Kabupaten Bengkalis", province: "Riau", cluster: 3, ikp: 71.8, x1: 0.9, x2: 8.2, x3: 43.6, x4: 95.4, x5: 84.7, x6: 10.7, x7: 4.4, x8: 72.9, x9: 20.1 },

{ id: "1409", name: "Kabupaten Rokan Hilir", province: "Riau", cluster: 2, ikp: 63.1, x1: 1.4, x2: 12.6, x3: 49.4, x4: 90.4, x5: 74.8, x6: 8.6, x7: 2.8, x8: 70.0, x9: 28.9 },

{ id: "1410", name: "Kabupaten Kepulauan Meranti", province: "Riau", cluster: 3, ikp: 57.4, x1: 1.7, x2: 15.4, x3: 53.6, x4: 87.2, x5: 71.5, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.5 },

{ id: "1471", name: "Kota Pekanbaru", province: "Riau", cluster: 1, ikp: 81.7, x1: 0.4, x2: 4.1, x3: 35.4, x4: 99.3, x5: 94.8, x6: 12.3, x7: 5.9, x8: 75.8, x9: 11.2 },

{ id: "1473", name: "Kota Dumai", province: "Riau", cluster: 1, ikp: 76.4, x1: 0.7, x2: 6.3, x3: 40.1, x4: 97.5, x5: 89.4, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.1 },

// JAMBI
{ id: "1501", name: "Kabupaten Kerinci", province: "Jambi", cluster: 3, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },

{ id: "1502", name: "Kabupaten Merangin", province: "Jambi", cluster: 3, ikp: 64.1, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.2, x5: 76.6, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },

{ id: "1503", name: "Kabupaten Sarolangun", province: "Jambi", cluster: 3, ikp: 63.5, x1: 1.3, x2: 12.4, x3: 49.1, x4: 90.7, x5: 75.4, x6: 8.6, x7: 2.9, x8: 70.1, x9: 28.5 },

{ id: "1504", name: "Kabupaten Batang Hari", province: "Jambi", cluster: 2, ikp: 64.7, x1: 1.2, x2: 11.6, x3: 48.3, x4: 91.4, x5: 77.1, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.5 },

{ id: "1505", name: "Kabupaten Muaro Jambi", province: "Jambi", cluster: 3, ikp: 65.3, x1: 1.2, x2: 11.3, x3: 47.9, x4: 91.7, x5: 77.7, x6: 9.1, x7: 3.2, x8: 70.8, x9: 27.0 },

{ id: "1506", name: "Kabupaten Tanjung Jabung Timur", province: "Jambi", cluster: 3, ikp: 58.7, x1: 1.6, x2: 15.1, x3: 52.5, x4: 88.0, x5: 72.8, x6: 8.4, x7: 2.6, x8: 69.4, x9: 31.4 },

{ id: "1507", name: "Kabupaten Tanjung Jabung Barat", province: "Jambi", cluster: 3, ikp: 59.4, x1: 1.5, x2: 14.7, x3: 52.0, x4: 88.5, x5: 73.5, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.7 },

{ id: "1508", name: "Kabupaten Tebo", province: "Jambi", cluster: 2, ikp: 63.8, x1: 1.3, x2: 12.2, x3: 48.8, x4: 90.8, x5: 75.6, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.3 },

{ id: "1509", name: "Kabupaten Bungo", province: "Jambi", cluster: 2, ikp: 65.6, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.2, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },

{ id: "1571", name: "Kota Jambi", province: "Jambi", cluster: 1, ikp: 79.8, x1: 0.5, x2: 4.6, x3: 36.5, x4: 99.0, x5: 93.4, x6: 12.1, x7: 5.6, x8: 75.2, x9: 12.7 },

{ id: "1572", name: "Kota Sungai Penuh", province: "Jambi", cluster: 1, ikp: 74.6, x1: 0.7, x2: 7.1, x3: 41.6, x4: 96.6, x5: 87.8, x6: 11.2, x7: 4.8, x8: 73.7, x9: 17.5 },

// SUMATERA SELATAN
{ id: "1601", name: "Kabupaten Ogan Komering Ulu", province: "Sumatera Selatan", cluster: 2, ikp: 65.1, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.7, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.1 },
{ id: "1602", name: "Kabupaten Ogan Komering Ilir", province: "Sumatera Selatan", cluster: 3, ikp: 58.2, x1: 1.6, x2: 15.5, x3: 52.8, x4: 87.7, x5: 72.2, x6: 8.3, x7: 2.6, x8: 69.2, x9: 32.2 },
{ id: "1603", name: "Kabupaten Muara Enim", province: "Sumatera Selatan", cluster: 2, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },
{ id: "1604", name: "Kabupaten Lahat", province: "Sumatera Selatan", cluster: 3, ikp: 64.4, x1: 1.3, x2: 11.8, x3: 48.5, x4: 91.1, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.8 },
{ id: "1605", name: "Kabupaten Musi Rawas", province: "Sumatera Selatan", cluster: 3, ikp: 59.1, x1: 1.6, x2: 14.8, x3: 52.2, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.9 },
{ id: "1606", name: "Kabupaten Musi Banyuasin", province: "Sumatera Selatan", cluster: 3, ikp: 63.6, x1: 1.3, x2: 12.3, x3: 49.0, x4: 90.7, x5: 75.3, x6: 8.6, x7: 2.9, x8: 70.1, x9: 28.5 },
{ id: "1607", name: "Kabupaten Banyu Asin", province: "Sumatera Selatan", cluster: 3, ikp: 59.8, x1: 1.5, x2: 14.4, x3: 51.7, x4: 88.8, x5: 73.9, x6: 8.5, x7: 2.8, x8: 69.7, x9: 30.3 },
{ id: "1608", name: "Kabupaten Ogan Komering Ulu Selatan", province: "Sumatera Selatan", cluster: 3, ikp: 57.9, x1: 1.7, x2: 15.7, x3: 53.1, x4: 87.4, x5: 71.8, x6: 8.2, x7: 2.5, x8: 69.0, x9: 32.7 },
{ id: "1609", name: "Kabupaten Ogan Komering Ulu Timur", province: "Sumatera Selatan", cluster: 3, ikp: 64.6, x1: 1.2, x2: 11.7, x3: 48.3, x4: 91.4, x5: 77.0, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.6 },
{ id: "1610", name: "Kabupaten Ogan Ilir", province: "Sumatera Selatan", cluster: 3, ikp: 60.2, x1: 1.5, x2: 14.1, x3: 51.4, x4: 89.0, x5: 74.2, x6: 8.5, x7: 2.8, x8: 69.8, x9: 29.8 },
{ id: "1611", name: "Kabupaten Empat Lawang", province: "Sumatera Selatan", cluster: 3, ikp: 57.4, x1: 1.7, x2: 15.4, x3: 53.6, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.4 },
{ id: "1612", name: "Kabupaten Penukal Abab Lematang Ilir", province: "Sumatera Selatan", cluster: 2, ikp: 58.5, x1: 1.6, x2: 15.2, x3: 52.7, x4: 87.8, x5: 72.5, x6: 8.3, x7: 2.6, x8: 69.3, x9: 31.7 },
{ id: "1613", name: "Kabupaten Musi Rawas Utara", province: "Sumatera Selatan", cluster: 3, ikp: 57.1, x1: 1.7, x2: 15.6, x3: 54.0, x4: 86.8, x5: 70.9, x6: 8.1, x7: 2.4, x8: 68.8, x9: 33.7 },
{ id: "1671", name: "Kota Palembang", province: "Sumatera Selatan", cluster: 1, ikp: 80.9, x1: 0.5, x2: 4.2, x3: 35.7, x4: 99.2, x5: 94.2, x6: 12.2, x7: 5.8, x8: 75.6, x9: 11.8 },
{ id: "1672", name: "Kota Prabumulih", province: "Sumatera Selatan", cluster: 2, ikp: 75.2, x1: 0.7, x2: 6.6, x3: 40.5, x4: 97.3, x5: 89.0, x6: 11.4, x7: 4.9, x8: 74.1, x9: 16.5 },
{ id: "1673", name: "Kota Pagaralam", province: "Sumatera Selatan", cluster: 3, ikp: 74.3, x1: 0.8, x2: 7.2, x3: 41.7, x4: 96.4, x5: 87.2, x6: 11.1, x7: 4.7, x8: 73.6, x9: 17.9 },
{ id: "1674", name: "Kota Lubuklinggau", province: "Sumatera Selatan", cluster: 2, ikp: 76.1, x1: 0.7, x2: 6.2, x3: 39.8, x4: 97.7, x5: 89.7, x6: 11.5, x7: 5.0, x8: 74.3, x9: 16.0 },
  
// BENGKULU
{ id: "1701", name: "Kabupaten Bengkulu Selatan", province: "Bengkulu", cluster: 3, ikp: 64.8, x1: 1.2, x2: 11.5, x3: 48.1, x4: 91.5, x5: 77.2, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.4 },
{ id: "1702", name: "Kabupaten Rejang Lebong", province: "Bengkulu", cluster: 3, ikp: 65.3, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.7, x6: 9.1, x7: 3.2, x8: 70.8, x9: 27.0 },
{ id: "1703", name: "Kabupaten Bengkulu Utara", province: "Bengkulu", cluster: 3, ikp: 63.9, x1: 1.3, x2: 12.2, x3: 48.8, x4: 90.8, x5: 75.5, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.2 },
{ id: "1704", name: "Kabupaten Kaur", province: "Bengkulu", cluster: 3, ikp: 58.9, x1: 1.6, x2: 14.9, x3: 52.3, x4: 88.2, x5: 73.0, x6: 8.4, x7: 2.7, x8: 69.4, x9: 31.2 },
{ id: "1705", name: "Kabupaten Seluma", province: "Bengkulu", cluster: 3, ikp: 59.6, x1: 1.5, x2: 14.5, x3: 51.9, x4: 88.7, x5: 73.7, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.5 },
{ id: "1706", name: "Kabupaten Mukomuko", province: "Bengkulu", cluster: 2, ikp: 64.2, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.1, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },
{ id: "1707", name: "Kabupaten Lebong", province: "Bengkulu", cluster: 3, ikp: 58.1, x1: 1.6, x2: 15.6, x3: 53.0, x4: 87.6, x5: 72.0, x6: 8.2, x7: 2.5, x8: 69.1, x9: 32.4 },
{ id: "1708", name: "Kabupaten Kepahiang", province: "Bengkulu", cluster: 3, ikp: 59.2, x1: 1.6, x2: 14.7, x3: 52.1, x4: 88.4, x5: 73.3, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.8 },
{ id: "1709", name: "Kabupaten Bengkulu Tengah", province: "Bengkulu", cluster: 3, ikp: 63.5, x1: 1.3, x2: 12.4, x3: 49.0, x4: 90.7, x5: 75.3, x6: 8.6, x7: 2.9, x8: 70.1, x9: 28.5 },
{ id: "1771", name: "Kota Bengkulu", province: "Bengkulu", cluster: 1, ikp: 77.1, x1: 0.6, x2: 5.9, x3: 39.2, x4: 98.2, x5: 90.8, x6: 11.7, x7: 5.1, x8: 74.7, x9: 15.1 },

// LAMPUNG
{ id: "1801", name: "Kabupaten Lampung Barat", province: "Lampung", cluster: 3, ikp: 64.6, x1: 1.2, x2: 11.7, x3: 48.3, x4: 91.4, x5: 76.9, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.6 },
{ id: "1802", name: "Kabupaten Tanggamus", province: "Lampung", cluster: 3, ikp: 59.7, x1: 1.5, x2: 14.4, x3: 51.8, x4: 88.7, x5: 73.6, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.6 },
{ id: "1803", name: "Kabupaten Lampung Selatan", province: "Lampung", cluster: 1, ikp: 65.1, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.6, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "1804", name: "Kabupaten Lampung Timur", province: "Lampung", cluster: 2, ikp: 64.3, x1: 1.3, x2: 11.9, x3: 48.5, x4: 91.1, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },
{ id: "1805", name: "Kabupaten Lampung Tengah", province: "Lampung", cluster: 2, ikp: 65.6, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.0, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },
{ id: "1806", name: "Kabupaten Lampung Utara", province: "Lampung", cluster: 3, ikp: 59.2, x1: 1.6, x2: 14.7, x3: 52.1, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.4, x9: 30.8 },
{ id: "1807", name: "Kabupaten Way Kanan", province: "Lampung", cluster: 3, ikp: 58.4, x1: 1.6, x2: 15.3, x3: 52.8, x4: 87.8, x5: 72.3, x6: 8.3, x7: 2.6, x8: 69.2, x9: 31.9 },
{ id: "1808", name: "Kabupaten Tulang Bawang", province: "Lampung", cluster: 1, ikp: 59.9, x1: 1.5, x2: 14.3, x3: 51.6, x4: 88.9, x5: 74.0, x6: 8.5, x7: 2.8, x8: 69.7, x9: 30.2 },
{ id: "1809", name: "Kabupaten Pesawaran", province: "Lampung", cluster: 3, ikp: 60.4, x1: 1.5, x2: 14.0, x3: 51.3, x4: 89.1, x5: 74.3, x6: 8.6, x7: 2.8, x8: 69.8, x9: 29.7 },
{ id: "1810", name: "Kabupaten Pringsewu", province: "Lampung", cluster: 1, ikp: 66.1, x1: 1.1, x2: 10.7, x3: 47.3, x4: 92.7, x5: 79.0, x6: 9.3, x7: 3.4, x8: 71.3, x9: 26.2 },
{ id: "1811", name: "Kabupaten Mesuji", province: "Lampung", cluster: 1, ikp: 57.6, x1: 1.7, x2: 15.4, x3: 53.7, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.5 },
{ id: "1812", name: "Kabupaten Tulang Bawang Barat", province: "Lampung", cluster: 3, ikp: 58.8, x1: 1.6, x2: 15.0, x3: 52.4, x4: 88.1, x5: 72.9, x6: 8.4, x7: 2.7, x8: 69.4, x9: 31.3 },
{ id: "1813", name: "Kabupaten Pesisir Barat", province: "Lampung", cluster: 3, ikp: 55.3, x1: 1.9, x2: 16.4, x3: 55.5, x4: 85.5, x5: 68.8, x6: 7.8, x7: 2.2, x8: 68.2, x9: 35.2 },
{ id: "1871", name: "Kota Bandar Lampung", province: "Lampung", cluster: 1, ikp: 79.4, x1: 0.5, x2: 4.7, x3: 36.8, x4: 98.9, x5: 93.0, x6: 12.1, x7: 5.6, x8: 75.3, x9: 13.0 },
{ id: "1872", name: "Kota Metro", province: "Lampung", cluster: 1, ikp: 76.8, x1: 0.7, x2: 6.0, x3: 39.7, x4: 97.8, x5: 89.7, x6: 11.5, x7: 5.1, x8: 74.4, x9: 15.9 },

// KEPULAUAN BANGKA BELITUNG
{ id: "1901", name: "Kabupaten Bangka", province: "Kepulauan Bangka Belitung", cluster: 1, ikp: 67.3, x1: 1.1, x2: 10.1, x3: 46.5, x4: 93.2, x5: 80.1, x6: 9.5, x7: 3.5, x8: 71.6, x9: 25.2 },
{ id: "1902", name: "Kabupaten Belitung", province: "Kepulauan Bangka Belitung", cluster: 1, ikp: 68.2, x1: 1.0, x2: 9.6, x3: 45.7, x4: 93.7, x5: 81.1, x6: 9.7, x7: 3.6, x8: 71.9, x9: 24.4 },
{ id: "1903", name: "Kabupaten Bangka Barat", province: "Kepulauan Bangka Belitung", cluster: 2, ikp: 66.8, x1: 1.1, x2: 10.3, x3: 46.8, x4: 93.0, x5: 79.7, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.5 },
{ id: "1904", name: "Kabupaten Bangka Tengah", province: "Kepulauan Bangka Belitung", cluster: 2, ikp: 67.5, x1: 1.1, x2: 9.9, x3: 46.2, x4: 93.3, x5: 80.4, x6: 9.5, x7: 3.5, x8: 71.7, x9: 24.9 },
{ id: "1905", name: "Kabupaten Bangka Selatan", province: "Kepulautan Bangka Belitung", cluster: 2, ikp: 65.9, x1: 1.2, x2: 10.8, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },
{ id: "1906", name: "Kabupaten Belitung Timur", province: "Kepulauan Bangka Belitung", cluster: 2, ikp: 66.4, x1: 1.2, x2: 10.5, x3: 47.1, x4: 92.9, x5: 79.3, x6: 9.3, x7: 3.4, x8: 71.4, x9: 25.8 },
{ id: "1971", name: "Kota Pangkal Pinang", province: "Kepulauan Bangka Belitung", cluster: 1, ikp: 78.2, x1: 0.6, x2: 5.4, x3: 38.4, x4: 98.6, x5: 91.3, x6: 11.8, x7: 5.2, x8: 74.9, x9: 14.4 },

// KEPULAUAN RIAU
{ id: "2101", name: "Kabupaten Karimun", province: "Kepulauan Riau", cluster: 1, ikp: 67.8, x1: 1.1, x2: 9.9, x3: 46.2, x4: 93.5, x5: 80.7, x6: 9.6, x7: 3.6, x8: 71.8, x9: 24.8 },
{ id: "2102", name: "Kabupaten Bintan", province: "Kepulauan Riau", cluster: 2, ikp: 72.4, x1: 0.8, x2: 7.9, x3: 42.6, x4: 95.7, x5: 85.9, x6: 10.8, x7: 4.4, x8: 73.1, x9: 19.1 },
{ id: "2103", name: "Kabupaten Natuna", province: "Kepulauan Riau", cluster: 1, ikp: 65.4, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.5, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "2104", name: "Kabupaten Lingga", province: "Kepulauan Riau", cluster: 2, ikp: 59.8, x1: 1.5, x2: 14.3, x3: 51.7, x4: 88.9, x5: 73.6, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.4 },
{ id: "2105", name: "Kabupaten Kepulauan Anambas", province: "Kepulauan Riau", cluster: 2, ikp: 57.2, x1: 1.7, x2: 15.5, x3: 53.7, x4: 87.0, x5: 71.3, x6: 8.2, x7: 2.4, x8: 68.8, x9: 33.6 },
{ id: "2171", name: "Kota Batam", province: "Kepulauan Riau", cluster: 1, ikp: 81.3, x1: 0.4, x2: 4.1, x3: 35.6, x4: 99.2, x5: 94.6, x6: 12.3, x7: 5.9, x8: 75.7, x9: 11.4 },
{ id: "2172", name: "Kota Tanjungpinang", province: "Kepulauan Riau", cluster: 1, ikp: 76.7, x1: 0.7, x2: 6.1, x3: 39.9, x4: 97.7, x5: 89.6, x6: 11.5, x7: 5.0, x8: 74.3, x9: 15.9 },

// DKI JAKARTA
{ id: "3171", name: "Kota Jakarta Selatan", province: "DKI Jakarta", cluster: 1, ikp: 85.2, x1: 0.3, x2: 3.1, x3: 32.4, x4: 99.8, x5: 97.4, x6: 13.1, x7: 6.8, x8: 77.1, x9: 8.4 },
{ id: "3172", name: "Kota Jakarta Timur", province: "DKI Jakarta", cluster: 1, ikp: 84.7, x1: 0.3, x2: 3.3, x3: 32.9, x4: 99.7, x5: 97.1, x6: 13.0, x7: 6.7, x8: 77.0, x9: 8.8 },
{ id: "3173", name: "Kota Jakarta Pusat", province: "DKI Jakarta", cluster: 1, ikp: 86.1, x1: 0.3, x2: 2.8, x3: 31.7, x4: 99.9, x5: 98.1, x6: 13.3, x7: 7.0, x8: 77.4, x9: 7.8 },
{ id: "3174", name: "Kota Jakarta Barat", province: "DKI Jakarta", cluster: 1, ikp: 83.9, x1: 0.4, x2: 3.5, x3: 33.4, x4: 99.6, x5: 96.7, x6: 12.9, x7: 6.6, x8: 76.8, x9: 9.2 },
{ id: "3175", name: "Kota Jakarta Utara", province: "DKI Jakarta", cluster: 1, ikp: 83.2, x1: 0.4, x2: 3.8, x3: 33.8, x4: 99.5, x5: 96.4, x6: 12.8, x7: 6.5, x8: 76.7, x9: 9.6 },
{ id: "3101", name: "Kabupaten Kepulauan Seribu", province: "DKI Jakarta", cluster: 1, ikp: 68.9, x1: 1.0, x2: 8.8, x3: 43.4, x4: 94.8, x5: 82.8, x6: 9.9, x7: 3.9, x8: 72.3, x9: 22.1 },

// JAWA BARAT
{ id: "3201", name: "Kabupaten Bogor", province: "Jawa Barat", cluster: 3, ikp: 67.4, x1: 1.1, x2: 10.1, x3: 46.5, x4: 93.2, x5: 80.1, x6: 9.5, x7: 3.5, x8: 71.6, x9: 25.2 },
{ id: "3202", name: "Kabupaten Sukabumi", province: "Jawa Barat", cluster: 3, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },
{ id: "3203", name: "Kabupaten Cianjur", province: "Jawa Barat", cluster: 3, ikp: 60.1, x1: 1.5, x2: 14.2, x3: 51.5, x4: 89.0, x5: 74.2, x6: 8.6, x7: 2.8, x8: 69.8, x9: 30.0 },
{ id: "3204", name: "Kabupaten Bandung", province: "Jawa Barat", cluster: 2, ikp: 68.2, x1: 1.0, x2: 9.6, x3: 45.7, x4: 93.7, x5: 81.1, x6: 9.7, x7: 3.6, x8: 71.9, x9: 24.4 },
{ id: "3205", name: "Kabupaten Garut", province: "Jawa Barat", cluster: 3, ikp: 59.8, x1: 1.5, x2: 14.4, x3: 51.8, x4: 88.7, x5: 73.5, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.5 },
{ id: "3206", name: "Kabupaten Tasikmalaya", province: "Jawa Barat", cluster: 3, ikp: 61.3, x1: 1.4, x2: 13.5, x3: 50.8, x4: 89.7, x5: 75.2, x6: 8.7, x7: 2.9, x8: 70.0, x9: 29.2 },
{ id: "3207", name: "Kabupaten Ciamis", province: "Jawa Barat", cluster: 3, ikp: 66.7, x1: 1.1, x2: 10.3, x3: 46.8, x4: 93.0, x5: 79.6, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.5 },
{ id: "3208", name: "Kabupaten Kuningan", province: "Jawa Barat", cluster: 3, ikp: 65.2, x1: 1.2, x2: 11.1, x3: 47.8, x4: 91.8, x5: 77.8, x6: 9.0, x7: 3.2, x8: 70.9, x9: 27.1 },
{ id: "3209", name: "Kabupaten Cirebon", province: "Jawa Barat", cluster: 1, ikp: 61.9, x1: 1.4, x2: 13.2, x3: 50.4, x4: 90.0, x5: 75.6, x6: 8.7, x7: 2.9, x8: 70.1, x9: 28.7 },
{ id: "3210", name: "Kabupaten Majalengka", province: "Jawa Barat", cluster: 2, ikp: 64.8, x1: 1.2, x2: 11.5, x3: 48.1, x4: 91.5, x5: 77.1, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.5 },
{ id: "3211", name: "Kabupaten Sumedang", province: "Jawa Barat", cluster: 1, ikp: 66.4, x1: 1.2, x2: 10.5, x3: 47.1, x4: 92.9, x5: 79.3, x6: 9.3, x7: 3.4, x8: 71.4, x9: 25.8 },
{ id: "3212", name: "Kabupaten Indramayu", province: "Jawa Barat", cluster: 1, ikp: 60.5, x1: 1.5, x2: 13.9, x3: 51.2, x4: 89.1, x5: 74.4, x6: 8.5, x7: 2.8, x8: 69.8, x9: 29.6 },
{ id: "3213", name: "Kabupaten Subang", province: "Jawa Barat", cluster: 2, ikp: 65.4, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.5, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "3214", name: "Kabupaten Purwakarta", province: "Jawa Barat", cluster: 3, ikp: 66.9, x1: 1.1, x2: 10.2, x3: 46.7, x4: 93.1, x5: 79.8, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.4 },
{ id: "3215", name: "Kabupaten Karawang", province: "Jawa Barat", cluster: 1, ikp: 67.6, x1: 1.1, x2: 9.8, x3: 46.1, x4: 93.4, x5: 80.6, x6: 9.6, x7: 3.5, x8: 71.7, x9: 24.7 },
{ id: "3216", name: "Kabupaten Bekasi", province: "Jawa Barat", cluster: 1, ikp: 74.2, x1: 0.8, x2: 7.3, x3: 41.9, x4: 96.3, x5: 87.0, x6: 11.1, x7: 4.7, x8: 73.5, x9: 18.0 },
{ id: "3217", name: "Kabupaten Bandung Barat", province: "Jawa Barat", cluster: 2, ikp: 65.7, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.1, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },
{ id: "3218", name: "Kabupaten Pangandaran", province: "Jawa Barat", cluster: 2, ikp: 64.1, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.2, x5: 76.6, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },
{ id: "3271", name: "Kota Bogor", province: "Jawa Barat", cluster: 1, ikp: 78.6, x1: 0.6, x2: 5.3, x3: 38.3, x4: 98.7, x5: 91.5, x6: 11.8, x7: 5.3, x8: 75.0, x9: 14.2 },
{ id: "3272", name: "Kota Sukabumi", province: "Jawa Barat", cluster: 1, ikp: 75.8, x1: 0.7, x2: 6.4, x3: 40.3, x4: 97.5, x5: 89.2, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.2 },
{ id: "3273", name: "Kota Bandung", province: "Jawa Barat", cluster: 1, ikp: 82.8, x1: 0.4, x2: 3.7, x3: 34.5, x4: 99.5, x5: 95.9, x6: 12.6, x7: 6.2, x8: 76.3, x9: 10.2 },
{ id: "3274", name: "Kota Cirebon", province: "Jawa Barat", cluster: 1, ikp: 77.3, x1: 0.6, x2: 5.8, x3: 39.1, x4: 98.2, x5: 90.7, x6: 11.7, x7: 5.1, x8: 74.8, x9: 15.1 },
{ id: "3275", name: "Kota Bekasi", province: "Jawa Barat", cluster: 1, ikp: 81.6, x1: 0.4, x2: 4.1, x3: 35.5, x4: 99.3, x5: 94.7, x6: 12.3, x7: 5.9, x8: 75.8, x9: 11.3 },
{ id: "3276", name: "Kota Depok", province: "Jawa Barat", cluster: 1, ikp: 82.1, x1: 0.4, x2: 3.9, x3: 35.1, x4: 99.4, x5: 95.2, x6: 12.4, x7: 6.0, x8: 76.0, x9: 10.8 },
{ id: "3277", name: "Kota Cimahi", province: "Jawa Barat", cluster: 1, ikp: 78.1, x1: 0.6, x2: 5.5, x3: 38.7, x4: 98.5, x5: 91.2, x6: 11.8, x7: 5.2, x8: 74.9, x9: 14.5 },
{ id: "3278", name: "Kota Tasikmalaya", province: "Jawa Barat", cluster: 2, ikp: 75.3, x1: 0.7, x2: 6.6, x3: 40.5, x4: 97.3, x5: 89.0, x6: 11.4, x7: 4.9, x8: 74.1, x9: 16.5 },
{ id: "3279", name: "Kota Banjar", province: "Jawa Barat", cluster: 1, ikp: 74.1, x1: 0.8, x2: 7.3, x3: 41.9, x4: 96.4, x5: 87.1, x6: 11.1, x7: 4.7, x8: 73.6, x9: 18.0 },

// JAWA TENGAH
{ id: "3301", name: "Kabupaten Cilacap", province: "Jawa Tengah", cluster: 2, ikp: 66.8, x1: 1.1, x2: 10.3, x3: 46.8, x4: 93.0, x5: 79.7, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.5 },
{ id: "3302", name: "Kabupaten Banyumas", province: "Jawa Tengah", cluster: 2, ikp: 67.3, x1: 1.1, x2: 10.1, x3: 46.5, x4: 93.2, x5: 80.1, x6: 9.5, x7: 3.5, x8: 71.6, x9: 25.2 },
{ id: "3303", name: "Kabupaten Purbalingga", province: "Jawa Tengah", cluster: 2, ikp: 65.1, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.6, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "3304", name: "Kabupaten Banjarnegara", province: "Jawa Tengah", cluster: 2, ikp: 61.2, x1: 1.4, x2: 13.6, x3: 50.9, x4: 89.6, x5: 75.0, x6: 8.7, x7: 2.9, x8: 70.0, x9: 29.3 },
{ id: "3305", name: "Kabupaten Kebumen", province: "Jawa Tengah", cluster: 2, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },
{ id: "3306", name: "Kabupaten Purworejo", province: "Jawa Tengah", cluster: 2, ikp: 67.6, x1: 1.1, x2: 9.8, x3: 46.1, x4: 93.4, x5: 80.6, x6: 9.6, x7: 3.5, x8: 71.7, x9: 24.7 },
{ id: "3307", name: "Kabupaten Wonosobo", province: "Jawa Tengah", cluster: 2, ikp: 60.8, x1: 1.5, x2: 14.1, x3: 51.3, x4: 89.3, x5: 74.2, x6: 8.6, x7: 2.8, x8: 69.8, x9: 29.8 },
{ id: "3308", name: "Kabupaten Magelang", province: "Jawa Tengah", cluster: 2, ikp: 66.1, x1: 1.1, x2: 10.7, x3: 47.3, x4: 92.7, x5: 79.0, x6: 9.3, x7: 3.4, x8: 71.3, x9: 26.2 },
{ id: "3309", name: "Kabupaten Boyolali", province: "Jawa Tengah", cluster: 1, ikp: 66.4, x1: 1.2, x2: 10.5, x3: 47.1, x4: 92.9, x5: 79.3, x6: 9.3, x7: 3.4, x8: 71.4, x9: 25.8 },
{ id: "3310", name: "Kabupaten Klaten", province: "Jawa Tengah", cluster: 2, ikp: 71.8, x1: 0.9, x2: 8.2, x3: 43.6, x4: 95.4, x5: 84.7, x6: 10.7, x7: 4.4, x8: 72.9, x9: 20.1 },
{ id: "3311", name: "Kabupaten Sukoharjo", province: "Jawa Tengah", cluster: 1, ikp: 73.4, x1: 0.8, x2: 7.5, x3: 42.2, x4: 96.0, x5: 86.4, x6: 11.0, x7: 4.5, x8: 73.2, x9: 18.6 },
{ id: "3312", name: "Kabupaten Wonogiri", province: "Jawa Tengah", cluster: 1, ikp: 65.3, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.7, x5: 77.5, x6: 9.0, x7: 3.1, x8: 70.7, x9: 27.2 },
{ id: "3313", name: "Kabupaten Karanganyar", province: "Jawa Tengah", cluster: 1, ikp: 72.7, x1: 0.8, x2: 7.7, x3: 42.5, x4: 95.9, x5: 86.3, x6: 10.9, x7: 4.5, x8: 73.2, x9: 18.7 },
{ id: "3314", name: "Kabupaten Sragen", province: "Jawa Tengah", cluster: 1, ikp: 65.6, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.0, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },
{ id: "3315", name: "Kabupaten Grobogan", province: "Jawa Tengah", cluster: 1, ikp: 61.5, x1: 1.4, x2: 13.3, x3: 50.6, x4: 89.9, x5: 75.4, x6: 8.7, x7: 2.9, x8: 70.0, x9: 29.0 },
{ id: "3316", name: "Kabupaten Blora", province: "Jawa Tengah", cluster: 1, ikp: 61.8, x1: 1.4, x2: 13.1, x3: 50.3, x4: 90.1, x5: 75.7, x6: 8.7, x7: 2.9, x8: 70.1, x9: 28.7 },
{ id: "3317", name: "Kabupaten Rembang", province: "Jawa Tengah", cluster: 1, ikp: 64.4, x1: 1.3, x2: 11.8, x3: 48.5, x4: 91.1, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },
{ id: "3318", name: "Kabupaten Pati", province: "Jawa Tengah", cluster: 1, ikp: 65.6, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.1, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },
{ id: "3319", name: "Kabupaten Kudus", province: "Jawa Tengah", cluster: 1, ikp: 71.5, x1: 0.9, x2: 8.4, x3: 43.8, x4: 95.2, x5: 84.4, x6: 10.7, x7: 4.4, x8: 72.8, x9: 20.4 },
{ id: "3320", name: "Kabupaten Jepara", province: "Jawa Tengah", cluster: 1, ikp: 66.2, x1: 1.1, x2: 10.6, x3: 47.2, x4: 92.7, x5: 79.0, x6: 9.3, x7: 3.4, x8: 71.3, x9: 26.2 },
{ id: "3321", name: "Kabupaten Demak", province: "Jawa Tengah", cluster: 1, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.5, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.4 },
{ id: "3322", name: "Kabupaten Semarang", province: "Jawa Tengah", cluster: 1, ikp: 72.1, x1: 0.9, x2: 8.0, x3: 43.4, x4: 95.6, x5: 85.0, x6: 10.8, x7: 4.4, x8: 73.0, x9: 19.8 },
{ id: "3323", name: "Kabupaten Temanggung", province: "Jawa Tengah", cluster: 1, ikp: 65.2, x1: 1.2, x2: 11.1, x3: 47.8, x4: 91.8, x5: 77.7, x6: 9.0, x7: 3.2, x8: 70.8, x9: 27.1 },
{ id: "3324", name: "Kabupaten Kendal", province: "Jawa Tengah", cluster: 1, ikp: 66.6, x1: 1.1, x2: 10.4, x3: 47.1, x4: 92.9, x5: 79.4, x6: 9.3, x7: 3.4, x8: 71.4, x9: 25.7 },
{ id: "3325", name: "Kabupaten Batang", province: "Jawa Tengah", cluster: 1, ikp: 65.4, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.4, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "3326", name: "Kabupaten Pekalongan", province: "Jawa Tengah", cluster: 2, ikp: 65.9, x1: 1.2, x2: 10.8, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },
{ id: "3327", name: "Kabupaten Pemalang", province: "Jawa Tengah", cluster: 3, ikp: 61.4, x1: 1.4, x2: 13.4, x3: 50.7, x4: 89.8, x5: 75.2, x6: 8.7, x7: 2.9, x8: 70.0, x9: 29.1 },
{ id: "3328", name: "Kabupaten Tegal", province: "Jawa Tengah", cluster: 1, ikp: 61.7, x1: 1.4, x2: 13.2, x3: 50.4, x4: 90.0, x5: 75.5, x6: 8.7, x7: 2.9, x8: 70.1, x9: 28.8 },
{ id: "3329", name: "Kabupaten Brebes", province: "Jawa Tengah", cluster: 2, ikp: 60.9, x1: 1.5, x2: 14.0, x3: 51.3, x4: 89.3, x5: 74.2, x6: 8.6, x7: 2.8, x8: 69.8, x9: 29.9 },
{ id: "3371", name: "Kota Magelang", province: "Jawa Tengah", cluster: 1, ikp: 76.4, x1: 0.7, x2: 6.3, x3: 40.1, x4: 97.5, x5: 89.4, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.1 },
{ id: "3372", name: "Kota Surakarta", province: "Jawa Tengah", cluster: 1, ikp: 80.4, x1: 0.5, x2: 4.3, x3: 35.9, x4: 99.1, x5: 94.0, x6: 12.2, x7: 5.7, x8: 75.5, x9: 12.1 },
{ id: "3373", name: "Kota Salatiga", province: "Jawa Tengah", cluster: 1, ikp: 77.7, x1: 0.6, x2: 5.6, x3: 38.8, x4: 98.4, x5: 91.0, x6: 11.8, x7: 5.2, x8: 75.0, x9: 14.7 },
{ id: "3374", name: "Kota Semarang", province: "Jawa Tengah", cluster: 1, ikp: 82.6, x1: 0.4, x2: 3.7, x3: 34.6, x4: 99.5, x5: 95.9, x6: 12.6, x7: 6.2, x8: 76.3, x9: 10.3 },
{ id: "3375", name: "Kota Pekalongan", province: "Jawa Tengah", cluster: 2, ikp: 75.6, x1: 0.7, x2: 6.4, x3: 40.3, x4: 97.5, x5: 89.2, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.2 },
{ id: "3376", name: "Kota Tegal", province: "Jawa Tengah", cluster: 1, ikp: 76.2, x1: 0.7, x2: 6.1, x3: 39.8, x4: 97.7, x5: 89.7, x6: 11.5, x7: 5.0, x8: 74.3, x9: 15.9 },

  // D.I. YOGYAKARTA
{ id: "3401", name: "Kabupaten Kulon Progo", province: "D.I. Yogyakarta", cluster: 1, ikp: 72.4, x1: 0.8, x2: 7.9, x3: 42.6, x4: 95.7, x5: 85.9, x6: 10.8, x7: 4.4, x8: 73.1, x9: 19.1 },
{ id: "3402", name: "Kabupaten Bantul", province: "D.I. Yogyakarta", cluster: 1, ikp: 74.8, x1: 0.7, x2: 7.0, x3: 41.4, x4: 96.8, x5: 88.1, x6: 11.2, x7: 4.8, x8: 73.8, x9: 17.2 },
{ id: "3403", name: "Kabupaten Gunungkidul", province: "D.I. Yogyakarta", cluster: 2, ikp: 67.2, x1: 1.1, x2: 10.2, x3: 46.7, x4: 93.1, x5: 79.9, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.4 },
{ id: "3404", name: "Kabupaten Sleman", province: "D.I. Yogyakarta", cluster: 1, ikp: 77.4, x1: 0.6, x2: 5.7, x3: 38.9, x4: 98.3, x5: 91.0, x6: 11.7, x7: 5.1, x8: 74.8, x9: 15.0 },
{ id: "3471", name: "Kota Yogyakarta", province: "D.I. Yogyakarta", cluster: 1, ikp: 83.4, x1: 0.4, x2: 3.6, x3: 33.7, x4: 99.6, x5: 96.5, x6: 12.8, x7: 6.5, x8: 76.7, x9: 9.5 },

// JAWA TIMUR
{ id: "3501", name: "Kabupaten Pacitan", province: "Jawa Timur", cluster: 2, ikp: 64.1, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.2, x5: 76.6, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },
{ id: "3502", name: "Kabupaten Ponorogo", province: "Jawa Timur", cluster: 1, ikp: 65.4, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.5, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "3503", name: "Kabupaten Trenggalek", province: "Jawa Timur", cluster: 3, ikp: 64.7, x1: 1.2, x2: 11.6, x3: 48.3, x4: 91.4, x5: 77.0, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.5 },
{ id: "3504", name: "Kabupaten Tulungagung", province: "Jawa Timur", cluster: 2, ikp: 71.3, x1: 0.9, x2: 8.5, x3: 43.9, x4: 95.1, x5: 84.2, x6: 10.6, x7: 4.3, x8: 72.7, x9: 20.6 },
{ id: "3505", name: "Kabupaten Blitar", province: "Jawa Timur", cluster: 1, ikp: 66.8, x1: 1.1, x2: 10.3, x3: 46.8, x4: 93.0, x5: 79.6, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.5 },
{ id: "3506", name: "Kabupaten Kediri", province: "Jawa Timur", cluster: 3, ikp: 67.1, x1: 1.1, x2: 10.2, x3: 46.7, x4: 93.1, x5: 79.9, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.3 },
{ id: "3507", name: "Kabupaten Malang", province: "Jawa Timur", cluster: 2, ikp: 67.8, x1: 1.1, x2: 9.9, x3: 46.2, x4: 93.5, x5: 80.8, x6: 9.6, x7: 3.6, x8: 71.8, x9: 24.7 },
{ id: "3508", name: "Kabupaten Lumajang", province: "Jawa Timur", cluster: 3, ikp: 60.7, x1: 1.5, x2: 14.1, x3: 51.3, x4: 89.3, x5: 74.2, x6: 8.6, x7: 2.8, x8: 69.8, x9: 29.9 },
{ id: "3509", name: "Kabupaten Jember", province: "Jawa Timur", cluster: 3, ikp: 60.1, x1: 1.5, x2: 14.3, x3: 51.5, x4: 89.0, x5: 74.0, x6: 8.5, x7: 2.8, x8: 69.7, x9: 30.2 },
{ id: "3510", name: "Kabupaten Banyuwangi", province: "Jawa Timur", cluster: 1, ikp: 67.4, x1: 1.1, x2: 10.1, x3: 46.5, x4: 93.2, x5: 80.1, x6: 9.5, x7: 3.5, x8: 71.6, x9: 25.2 },
{ id: "3511", name: "Kabupaten Bondowoso", province: "Jawa Timur", cluster: 3, ikp: 59.5, x1: 1.5, x2: 14.6, x3: 52.1, x4: 88.6, x5: 73.5, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.7 },
{ id: "3512", name: "Kabupaten Situbondo", province: "Jawa Timur", cluster: 3, ikp: 60.3, x1: 1.5, x2: 14.1, x3: 51.4, x4: 89.1, x5: 74.2, x6: 8.5, x7: 2.8, x8: 69.8, x9: 29.8 },
{ id: "3513", name: "Kabupaten Probolinggo", province: "Jawa Timur", cluster: 3, ikp: 58.9, x1: 1.6, x2: 14.9, x3: 52.4, x4: 88.2, x5: 73.0, x6: 8.4, x7: 2.7, x8: 69.4, x9: 31.2 },
{ id: "3514", name: "Kabupaten Pasuruan", province: "Jawa Timur", cluster: 3, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },
{ id: "3515", name: "Kabupaten Sidoarjo", province: "Jawa Timur", cluster: 1, ikp: 75.8, x1: 0.7, x2: 6.4, x3: 40.3, x4: 97.5, x5: 89.2, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.2 },
{ id: "3516", name: "Kabupaten Mojokerto", province: "Jawa Timur", cluster: 1, ikp: 67.6, x1: 1.1, x2: 9.8, x3: 46.1, x4: 93.4, x5: 80.6, x6: 9.6, x7: 3.5, x8: 71.7, x9: 24.7 },
{ id: "3517", name: "Kabupaten Jombang", province: "Jawa Timur", cluster: 1, ikp: 67.3, x1: 1.1, x2: 10.1, x3: 46.5, x4: 93.2, x5: 80.1, x6: 9.5, x7: 3.5, x8: 71.6, x9: 25.2 },
{ id: "3518", name: "Kabupaten Nganjuk", province: "Jawa Timur", cluster: 2, ikp: 65.7, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.1, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },
{ id: "3519", name: "Kabupaten Madiun", province: "Jawa Timur", cluster: 1, ikp: 66.4, x1: 1.2, x2: 10.5, x3: 47.1, x4: 92.9, x5: 79.3, x6: 9.3, x7: 3.4, x8: 71.4, x9: 25.8 },
{ id: "3520", name: "Kabupaten Magetan", province: "Jawa Timur", cluster: 1, ikp: 66.1, x1: 1.1, x2: 10.7, x3: 47.3, x4: 92.7, x5: 79.0, x6: 9.3, x7: 3.4, x8: 71.3, x9: 26.2 },
{ id: "3521", name: "Kabupaten Ngawi", province: "Jawa Timur", cluster: 1, ikp: 65.2, x1: 1.2, x2: 11.1, x3: 47.8, x4: 91.8, x5: 77.8, x6: 9.0, x7: 3.2, x8: 70.9, x9: 27.1 },
{ id: "3522", name: "Kabupaten Bojonegoro", province: "Jawa Timur", cluster: 1, ikp: 61.8, x1: 1.4, x2: 13.1, x3: 50.3, x4: 90.1, x5: 75.7, x6: 8.7, x7: 2.9, x8: 70.1, x9: 28.7 },
{ id: "3523", name: "Kabupaten Tuban", province: "Jawa Timur", cluster: 1, ikp: 62.3, x1: 1.4, x2: 12.8, x3: 50.0, x4: 90.4, x5: 76.2, x6: 8.7, x7: 3.0, x8: 70.2, x9: 28.2 },
{ id: "3524", name: "Kabupaten Lamongan", province: "Jawa Timur", cluster: 1, ikp: 66.8, x1: 1.1, x2: 10.3, x3: 46.8, x4: 93.0, x5: 79.7, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.5 },
{ id: "3525", name: "Kabupaten Gresik", province: "Jawa Timur", cluster: 1, ikp: 73.1, x1: 0.8, x2: 7.7, x3: 42.4, x4: 96.0, x5: 86.4, x6: 11.0, x7: 4.5, x8: 73.2, x9: 18.6 },
{ id: "3526", name: "Kabupaten Bangkalan", province: "Jawa Timur", cluster: 3, ikp: 56.8, x1: 1.8, x2: 15.9, x3: 54.3, x4: 86.7, x5: 70.7, x6: 8.1, x7: 2.4, x8: 68.7, x9: 34.0 },
{ id: "3527", name: "Kabupaten Sampang", province: "Jawa Timur", cluster: 1, ikp: 55.1, x1: 1.9, x2: 16.5, x3: 55.7, x4: 85.2, x5: 68.1, x6: 7.8, x7: 2.1, x8: 68.2, x9: 35.7 },
{ id: "3528", name: "Kabupaten Pamekasan", province: "Jawa Timur", cluster: 1, ikp: 57.4, x1: 1.7, x2: 15.4, x3: 53.7, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.5 },
{ id: "3529", name: "Kabupaten Sumenep", province: "Jawa Timur", cluster: 3, ikp: 58.2, x1: 1.6, x2: 15.5, x3: 52.9, x4: 87.7, x5: 72.1, x6: 8.3, x7: 2.6, x8: 69.1, x9: 32.3 },
{ id: "3571", name: "Kota Kediri", province: "Jawa Timur", cluster: 2, ikp: 78.3, x1: 0.6, x2: 5.4, x3: 38.3, x4: 98.6, x5: 91.4, x6: 11.8, x7: 5.3, x8: 74.9, x9: 14.3 },
{ id: "3572", name: "Kota Blitar", province: "Jawa Timur", cluster: 2, ikp: 75.9, x1: 0.7, x2: 6.3, x3: 40.0, x4: 97.6, x5: 89.5, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.1 },
{ id: "3573", name: "Kota Malang", province: "Jawa Timur", cluster: 1, ikp: 82.3, x1: 0.4, x2: 3.8, x3: 34.8, x4: 99.4, x5: 95.8, x6: 12.5, x7: 6.1, x8: 76.2, x9: 10.5 },
{ id: "3574", name: "Kota Probolinggo", province: "Jawa Timur", cluster: 1, ikp: 74.7, x1: 0.7, x2: 7.1, x3: 41.6, x4: 96.6, x5: 87.9, x6: 11.2, x7: 4.8, x8: 73.7, x9: 17.5 },
{ id: "3575", name: "Kota Pasuruan", province: "Jawa Timur", cluster: 1, ikp: 75.4, x1: 0.7, x2: 6.5, x3: 40.2, x4: 97.4, x5: 89.1, x6: 11.4, x7: 4.9, x8: 74.1, x9: 16.3 },
{ id: "3576", name: "Kota Mojokerto", province: "Jawa Timur", cluster: 1, ikp: 76.8, x1: 0.7, x2: 6.0, x3: 39.7, x4: 97.8, x5: 89.7, x6: 11.5, x7: 5.1, x8: 74.4, x9: 15.9 },
{ id: "3577", name: "Kota Madiun", province: "Jawa Timur", cluster: 1, ikp: 78.1, x1: 0.6, x2: 5.5, x3: 38.7, x4: 98.5, x5: 91.2, x6: 11.8, x7: 5.2, x8: 74.9, x9: 14.5 },
{ id: "3578", name: "Kota Surabaya", province: "Jawa Timur", cluster: 1, ikp: 85.8, x1: 0.3, x2: 2.9, x3: 31.9, x4: 99.8, x5: 97.8, x6: 13.2, x7: 6.9, x8: 77.3, x9: 8.1 },
{ id: "3579", name: "Kota Batu", province: "Jawa Timur", cluster: 1, ikp: 76.5, x1: 0.7, x2: 6.2, x3: 40.0, x4: 97.6, x5: 89.5, x6: 11.5, x7: 5.0, x8: 74.3, x9: 15.8 },

// BANTEN
{ id: "3601", name: "Kabupaten Pandeglang", province: "Banten", cluster: 3, ikp: 59.4, x1: 1.5, x2: 14.6, x3: 52.0, x4: 88.5, x5: 73.5, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.7 },
{ id: "3602", name: "Kabupaten Lebak", province: "Banten", cluster: 3, ikp: 58.7, x1: 1.6, x2: 15.2, x3: 52.6, x4: 87.9, x5: 72.7, x6: 8.3, x7: 2.6, x8: 69.3, x9: 31.5 },
{ id: "3603", name: "Kabupaten Tangerang", province: "Banten", cluster: 1, ikp: 76.3, x1: 0.7, x2: 6.1, x3: 39.9, x4: 97.6, x5: 89.7, x6: 11.5, x7: 5.0, x8: 74.3, x9: 16.0 },
{ id: "3604", name: "Kabupaten Serang", province: "Banten", cluster: 2, ikp: 66.4, x1: 1.2, x2: 10.5, x3: 47.1, x4: 92.9, x5: 79.3, x6: 9.3, x7: 3.4, x8: 71.4, x9: 25.8 },
{ id: "3671", name: "Kota Tangerang", province: "Banten", cluster: 1, ikp: 80.7, x1: 0.5, x2: 4.3, x3: 35.8, x4: 99.2, x5: 94.1, x6: 12.2, x7: 5.8, x8: 75.5, x9: 11.9 },
{ id: "3672", name: "Kota Cilegon", province: "Banten", cluster: 1, ikp: 78.4, x1: 0.6, x2: 5.3, x3: 38.2, x4: 98.7, x5: 91.5, x6: 11.8, x7: 5.3, x8: 75.0, x9: 14.2 },
{ id: "3673", name: "Kota Serang", province: "Banten", cluster: 2, ikp: 75.1, x1: 0.7, x2: 6.7, x3: 41.0, x4: 97.0, x5: 88.5, x6: 11.3, x7: 4.8, x8: 73.9, x9: 17.0 },
{ id: "3674", name: "Kota Tangerang Selatan", province: "Banten", cluster: 1, ikp: 83.6, x1: 0.4, x2: 3.5, x3: 33.6, x4: 99.6, x5: 96.7, x6: 12.9, x7: 6.6, x8: 76.8, x9: 9.3 },

// BALI
{ id: "5101", name: "Kabupaten Jembrana", province: "Bali", cluster: 1, ikp: 72.3, x1: 0.8, x2: 8.0, x3: 43.4, x4: 95.6, x5: 84.8, x6: 10.8, x7: 4.4, x8: 73.0, x9: 19.8 },
{ id: "5102", name: "Kabupaten Tabanan", province: "Bali", cluster: 1, ikp: 74.6, x1: 0.7, x2: 7.1, x3: 41.6, x4: 96.6, x5: 87.8, x6: 11.2, x7: 4.8, x8: 73.7, x9: 17.5 },
{ id: "5103", name: "Kabupaten Badung", province: "Bali", cluster: 1, ikp: 82.7, x1: 0.4, x2: 3.7, x3: 34.6, x4: 99.5, x5: 96.0, x6: 12.6, x7: 6.2, x8: 76.3, x9: 10.3 },
{ id: "5104", name: "Kabupaten Gianyar", province: "Bali", cluster: 1, ikp: 76.4, x1: 0.7, x2: 6.3, x3: 40.1, x4: 97.5, x5: 89.4, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.1 },
{ id: "5105", name: "Kabupaten Klungkung", province: "Bali", cluster: 1, ikp: 72.8, x1: 0.8, x2: 7.7, x3: 42.5, x4: 95.9, x5: 86.3, x6: 10.9, x7: 4.5, x8: 73.2, x9: 18.7 },
{ id: "5106", name: "Kabupaten Bangli", province: "Bali", cluster: 2, ikp: 68.4, x1: 1.0, x2: 9.1, x3: 43.8, x4: 94.5, x5: 82.3, x6: 9.8, x7: 3.8, x8: 72.1, x9: 22.7 },
{ id: "5107", name: "Kabupaten Karang Asem", province: "Bali", cluster: 1, ikp: 65.7, x1: 1.2, x2: 11.0, x3: 47.5, x4: 92.0, x5: 78.1, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },
{ id: "5108", name: "Kabupaten Buleleng", province: "Bali", cluster: 1, ikp: 66.8, x1: 1.1, x2: 10.3, x3: 46.8, x4: 93.0, x5: 79.7, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.5 },
{ id: "5171", name: "Kota Denpasar", province: "Bali", cluster: 1, ikp: 84.3, x1: 0.3, x2: 3.4, x3: 33.2, x4: 99.7, x5: 96.9, x6: 13.0, x7: 6.7, x8: 77.0, x9: 9.0 },

// NTB
{ id: "5201", name: "Kabupaten Lombok Barat", province: "Nusa Tenggara Barat", cluster: 3, ikp: 58.1, x1: 1.6, x2: 15.6, x3: 53.0, x4: 87.6, x5: 72.0, x6: 8.2, x7: 2.5, x8: 69.1, x9: 32.4 },
{ id: "5202", name: "Kabupaten Lombok Tengah", province: "Nusa Tenggara Barat", cluster: 3, ikp: 56.9, x1: 1.8, x2: 16.0, x3: 54.2, x4: 86.6, x5: 70.6, x6: 8.1, x7: 2.4, x8: 68.7, x9: 34.1 },
{ id: "5203", name: "Kabupaten Lombok Timur", province: "Nusa Tenggara Barat", cluster: 3, ikp: 55.4, x1: 1.9, x2: 16.4, x3: 55.5, x4: 85.5, x5: 68.8, x6: 7.8, x7: 2.2, x8: 68.2, x9: 35.2 },
{ id: "5204", name: "Kabupaten Sumbawa", province: "Nusa Tenggara Barat", cluster: 1, ikp: 59.6, x1: 1.5, x2: 14.5, x3: 51.9, x4: 88.7, x5: 73.6, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.5 },
{ id: "5205", name: "Kabupaten Dompu", province: "Nusa Tenggara Barat", cluster: 3, ikp: 57.8, x1: 1.7, x2: 15.7, x3: 53.2, x4: 87.3, x5: 71.7, x6: 8.2, x7: 2.5, x8: 68.9, x9: 32.8 },
{ id: "5206", name: "Kabupaten Bima", province: "Nusa Tenggara Barat", cluster: 3, ikp: 56.3, x1: 1.8, x2: 16.2, x3: 55.0, x4: 85.8, x5: 69.2, x6: 7.9, x7: 2.2, x8: 68.3, x9: 34.8 },
{ id: "5207", name: "Kabupaten Sumbawa Barat", province: "Nusa Tenggara Barat", cluster: 1, ikp: 65.2, x1: 1.2, x2: 11.1, x3: 47.8, x4: 91.8, x5: 77.7, x6: 9.0, x7: 3.2, x8: 70.8, x9: 27.1 },
{ id: "5208", name: "Kabupaten Lombok Utara", province: "Nusa Tenggara Barat", cluster: 3, ikp: 53.8, x1: 2.0, x2: 17.7, x3: 57.3, x4: 83.4, x5: 65.7, x6: 7.4, x7: 1.9, x8: 67.7, x9: 37.4 },
{ id: "5271", name: "Kota Mataram", province: "Nusa Tenggara Barat", cluster: 1, ikp: 76.9, x1: 0.7, x2: 5.9, x3: 39.6, x4: 97.8, x5: 89.8, x6: 11.5, x7: 5.1, x8: 74.4, x9: 15.8 },
{ id: "5272", name: "Kota Bima", province: "Nusa Tenggara Barat", cluster: 2, ikp: 68.1, x1: 1.0, x2: 9.7, x3: 45.8, x4: 93.7, x5: 81.0, x6: 9.7, x7: 3.6, x8: 71.9, x9: 24.5 },

// NTT
{ id: "5301", name: "Kabupaten Sumba Barat", province: "Nusa Tenggara Timur", cluster: 2, ikp: 45.2, x1: 2.9, x2: 24.8, x3: 65.8, x4: 75.4, x5: 54.1, x6: 5.9, x7: 1.1, x8: 64.8, x9: 47.8 },
{ id: "5302", name: "Kabupaten Sumba Timur", province: "Nusa Tenggara Timur", cluster: 3, ikp: 44.8, x1: 3.0, x2: 25.3, x3: 66.4, x4: 74.9, x5: 53.5, x6: 5.8, x7: 1.0, x8: 64.6, x9: 48.4 },
{ id: "5303", name: "Kabupaten Kupang", province: "Nusa Tenggara Timur", cluster: 3, ikp: 47.8, x1: 2.6, x2: 22.6, x3: 63.0, x4: 77.8, x5: 57.8, x6: 6.4, x7: 1.3, x8: 65.6, x9: 44.3 },
{ id: "5304", name: "Kabupaten Timor Tengah Selatan", province: "Nusa Tenggara Timur", cluster: 3, ikp: 43.2, x1: 3.2, x2: 26.8, x3: 67.9, x4: 73.2, x5: 51.8, x6: 5.6, x7: 0.9, x8: 64.1, x9: 50.2 },
{ id: "5305", name: "Kabupaten Timor Tengah Utara", province: "Nusa Tenggara Timur", cluster: 2, ikp: 44.4, x1: 3.0, x2: 25.7, x3: 66.9, x4: 74.5, x5: 52.9, x6: 5.8, x7: 1.0, x8: 64.5, x9: 48.9 },
{ id: "5306", name: "Kabupaten Belu", province: "Nusa Tenggara Timur", cluster: 2, ikp: 46.1, x1: 2.8, x2: 24.0, x3: 64.7, x4: 76.2, x5: 55.3, x6: 6.1, x7: 1.1, x8: 65.1, x9: 46.6 },
{ id: "5307", name: "Kabupaten Alor", province: "Nusa Tenggara Timur", cluster: 3, ikp: 47.3, x1: 2.6, x2: 23.1, x3: 63.6, x4: 77.4, x5: 57.1, x6: 6.3, x7: 1.2, x8: 65.4, x9: 44.9 },
{ id: "5308", name: "Kabupaten Lembata", province: "Nusa Tenggara Timur", cluster: 3, ikp: 46.7, x1: 2.7, x2: 23.6, x3: 64.2, x4: 76.7, x5: 55.9, x6: 6.2, x7: 1.2, x8: 65.2, x9: 46.0 },
{ id: "5309", name: "Kabupaten Flores Timur", province: "Nusa Tenggara Timur", cluster: 2, ikp: 48.4, x1: 2.5, x2: 22.2, x3: 62.6, x4: 78.2, x5: 58.5, x6: 6.5, x7: 1.3, x8: 65.8, x9: 43.5 },
{ id: "5310", name: "Kabupaten Sikka", province: "Nusa Tenggara Timur", cluster: 2, ikp: 50.1, x1: 2.3, x2: 20.6, x3: 61.0, x4: 79.8, x5: 61.0, x6: 6.7, x7: 1.5, x8: 66.2, x9: 41.2 },
{ id: "5311", name: "Kabupaten Ende", province: "Nusa Tenggara Timur", cluster: 2, ikp: 51.4, x1: 2.2, x2: 19.8, x3: 60.2, x4: 80.6, x5: 62.4, x6: 6.9, x7: 1.6, x8: 66.6, x9: 39.8 },
{ id: "5312", name: "Kabupaten Ngada", province: "Nusa Tenggara Timur", cluster: 2, ikp: 52.7, x1: 2.1, x2: 19.1, x3: 59.4, x4: 81.4, x5: 63.8, x6: 7.1, x7: 1.7, x8: 67.1, x9: 38.5 },
{ id: "5313", name: "Kabupaten Manggarai", province: "Nusa Tenggara Timur", cluster: 2, ikp: 50.8, x1: 2.3, x2: 20.2, x3: 60.6, x4: 80.2, x5: 61.7, x6: 6.8, x7: 1.5, x8: 66.4, x9: 40.5 },
{ id: "5314", name: "Kabupaten Rote Ndao", province: "Nusa Tenggara Timur", cluster: 2, ikp: 45.7, x1: 2.9, x2: 24.4, x3: 65.3, x4: 75.8, x5: 54.7, x6: 6.0, x7: 1.1, x8: 65.0, x9: 47.2 },
{ id: "5315", name: "Kabupaten Manggarai Barat", province: "Nusa Tenggara Timur", cluster: 2, ikp: 49.6, x1: 2.4, x2: 21.4, x3: 61.7, x4: 79.3, x5: 60.0, x6: 6.7, x7: 1.5, x8: 66.3, x9: 42.3 },
{ id: "5316", name: "Kabupaten Sumba Tengah", province: "Nusa Tenggara Timur", cluster: 3, ikp: 43.8, x1: 3.1, x2: 26.3, x3: 67.4, x4: 73.7, x5: 52.4, x6: 5.7, x7: 0.9, x8: 64.3, x9: 49.6 },
{ id: "5317", name: "Kabupaten Sumba Barat Daya", province: "Nusa Tenggara Timur", cluster: 3, ikp: 44.1, x1: 3.1, x2: 25.9, x3: 67.0, x4: 74.0, x5: 52.7, x6: 5.7, x7: 0.9, x8: 64.4, x9: 49.2 },
{ id: "5318", name: "Kabupaten Nagekeo", province: "Nusa Tenggara Timur", cluster: 3, ikp: 51.7, x1: 2.2, x2: 19.5, x3: 59.8, x4: 80.9, x5: 62.9, x6: 6.9, x7: 1.6, x8: 66.7, x9: 39.3 },
{ id: "5319", name: "Kabupaten Manggarai Timur", province: "Nusa Tenggara Timur", cluster: 3, ikp: 48.9, x1: 2.5, x2: 21.8, x3: 62.1, x4: 78.8, x5: 59.4, x6: 6.6, x7: 1.4, x8: 66.0, x9: 43.0 },
{ id: "5320", name: "Kabupaten Sabu Raijua", province: "Nusa Tenggara Timur", cluster: 3, ikp: 3, x2: 27.4, x3: 68.5, x4: 72.5, x5: 51.1, x6: 5.5, x7: 0.8, x8: 63.9, x9: 51.0 },
{ id: "5321", name: "Kabupaten Malaka", province: "Nusa Tenggara Timur", cluster: 3, ikp: 46.4, x1: 2.8, x2: 23.8, x3: 64.5, x4: 76.4, x5: 55.6, x6: 6.1, x7: 1.2, x8: 65.1, x9: 46.3 },
{ id: "5371", name: "Kota Kupang", province: "Nusa Tenggara Timur", cluster: 2, ikp: 67.8, x1: 1.1, x2: 9.9, x3: 46.2, x4: 93.5, x5: 80.7, x6: 9.6, x7: 3.6, x8: 71.8, x9: 24.8 },

// KALIMANTAN BARAT
{ id: "6101", name: "Kabupaten Sambas", province: "Kalimantan Barat", cluster: 3, ikp: 59.1, x1: 1.6, x2: 14.8, x3: 52.2, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.9 },
{ id: "6102", name: "Kabupaten Bengkayang", province: "Kalimantan Barat", cluster: 2, ikp: 57.4, x1: 1.7, x2: 15.4, x3: 53.6, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.5 },
{ id: "6103", name: "Kabupaten Landak", province: "Kalimantan Barat", cluster: 3, ikp: 56.8, x1: 1.8, x2: 15.9, x3: 54.3, x4: 86.7, x5: 70.7, x6: 8.1, x7: 2.4, x8: 68.7, x9: 34.0 },
{ id: "6104", name: "Kabupaten Mempawah", province: "Kalimantan Barat", cluster: 3, ikp: 63.7, x1: 1.3, x2: 12.3, x3: 48.9, x4: 90.8, x5: 75.6, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.3 },
{ id: "6105", name: "Kabupaten Sanggau", province: "Kalimantan Barat", cluster: 2, ikp: 58.3, x1: 1.6, x2: 15.3, x3: 52.7, x4: 87.8, x5: 72.3, x6: 8.3, x7: 2.6, x8: 69.2, x9: 31.9 },
{ id: "6106", name: "Kabupaten Ketapang", province: "Kalimantan Barat", cluster: 3, ikp: 57.6, x1: 1.7, x2: 15.4, x3: 53.7, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.4 },
{ id: "6107", name: "Kabupaten Sintang", province: "Kalimantan Barat", cluster: 2, ikp: 56.1, x1: 1.9, x2: 16.3, x3: 55.1, x4: 85.8, x5: 69.2, x6: 7.9, x7: 2.2, x8: 68.2, x9: 34.8 },
{ id: "6108", name: "Kabupaten Kapuas Hulu", province: "Kalimantan Barat", cluster: 3, ikp: 54.2, x1: 2.0, x2: 17.4, x3: 57.0, x4: 83.9, x5: 66.3, x6: 7.5, x7: 1.9, x8: 67.8, x9: 37.1 },
{ id: "6109", name: "Kabupaten Sekadau", province: "Kalimantan Barat", cluster: 3, ikp: 57.9, x1: 1.7, x2: 15.7, x3: 53.2, x4: 87.4, x5: 71.8, x6: 8.2, x7: 2.5, x8: 69.0, x9: 32.7 },
{ id: "6110", name: "Kabupaten Melawi", province: "Kalimantan Barat", cluster: 3, ikp: 55.7, x1: 1.9, x2: 16.3, x3: 55.4, x4: 85.6, x5: 69.0, x6: 7.9, x7: 2.2, x8: 68.1, x9: 35.0 },
{ id: "6111", name: "Kabupaten Kayong Utara", province: "Kalimantan Barat", cluster: 3, ikp: 56.4, x1: 1.8, x2: 16.1, x3: 54.8, x4: 85.9, x5: 69.4, x6: 7.9, x7: 2.3, x8: 68.4, x9: 34.5 },
{ id: "6112", name: "Kabupaten Kubu Raya", province: "Kalimantan Barat", cluster: 3, ikp: 63.1, x1: 1.4, x2: 12.6, x3: 49.4, x4: 90.4, x5: 74.8, x6: 8.6, x7: 2.8, x8: 70.0, x9: 28.9 },
{ id: "6171", name: "Kota Pontianak", province: "Kalimantan Barat", cluster: 3, ikp: 79.1, x1: 0.5, x2: 4.6, x3: 36.5, x4: 99.0, x5: 93.4, x6: 12.1, x7: 5.6, x8: 75.2, x9: 12.8 },
{ id: "6172", name: "Kota Singkawang", province: "Kalimantan Barat", cluster: 2, ikp: 73.8, x1: 0.8, x2: 7.4, x3: 42.1, x4: 96.1, x5: 86.7, x6: 11.0, x7: 4.6, x8: 73.4, x9: 18.3 },

// KALIMANTAN TENGAH
{ id: "6201", name: "Kabupaten Kotawaringin Barat", province: "Kalimantan Tengah", cluster: 2, ikp: 66.4, x1: 1.2, x2: 10.5, x3: 47.1, x4: 92.9, x5: 79.3, x6: 9.3, x7: 3.4, x8: 71.4, x9: 25.8 },
{ id: "6202", name: "Kabupaten Kotawaringin Timur", province: "Kalimantan Tengah", cluster: 2, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },
{ id: "6203", name: "Kabupaten Kapuas", province: "Kalimantan Tengah", cluster: 3, ikp: 59.4, x1: 1.5, x2: 14.6, x3: 52.0, x4: 88.5, x5: 73.5, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.7 },
{ id: "6204", name: "Kabupaten Barito Selatan", province: "Kalimantan Tengah", cluster: 3, ikp: 58.9, x1: 1.6, x2: 14.9, x3: 52.3, x4: 88.2, x5: 73.0, x6: 8.4, x7: 2.7, x8: 69.4, x9: 31.2 },
{ id: "6205", name: "Kabupaten Barito Utara", province: "Kalimantan Tengah", cluster: 1, ikp: 60.2, x1: 1.5, x2: 14.1, x3: 51.4, x4: 89.1, x5: 74.1, x6: 8.5, x7: 2.8, x8: 69.8, x9: 29.9 },
{ id: "6206", name: "Kabupaten Sukamara", province: "Kalimantan Tengah", cluster: 2, ikp: 64.7, x1: 1.2, x2: 11.6, x3: 48.3, x4: 91.4, x5: 77.1, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.5 },
{ id: "6207", name: "Kabupaten Lamandau", province: "Kalimantan Tengah", cluster: 2, ikp: 65.1, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.7, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "6208", name: "Kabupaten Seruyan", province: "Kalimantan Tengah", cluster: 2, ikp: 59.7, x1: 1.5, x2: 14.4, x3: 51.8, x4: 88.7, x5: 73.6, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.5 },
{ id: "6209", name: "Kabupaten Katingan", province: "Kalimantan Tengah", cluster: 3, ikp: 59.1, x1: 1.6, x2: 14.8, x3: 52.2, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.9 },
{ id: "6210", name: "Kabupaten Pulang Pisau", province: "Kalimantan Tengah", cluster: 3, ikp: 60.4, x1: 1.5, x2: 14.0, x3: 51.3, x4: 89.1, x5: 74.3, x6: 8.6, x7: 2.8, x8: 69.8, x9: 29.7 },
{ id: "6211", name: "Kabupaten Gunung Mas", province: "Kalimantan Tengah", cluster: 3, ikp: 63.7, x1: 1.3, x2: 12.3, x3: 48.9, x4: 90.8, x5: 75.7, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.3 },
{ id: "6212", name: "Kabupaten Barito Timur", province: "Kalimantan Tengah", cluster: 2, ikp: 60.8, x1: 1.5, x2: 14.1, x3: 51.3, x4: 89.3, x5: 74.2, x6: 8.6, x7: 2.8, x8: 69.8, x9: 29.8 },
{ id: "6213", name: "Kabupaten Murung Raya", province: "Kalimantan Tengah", cluster: 3, ikp: 57.3, x1: 1.7, x2: 15.5, x3: 53.7, x4: 87.0, x5: 71.3, x6: 8.2, x7: 2.4, x8: 68.8, x9: 33.6 },
{ id: "6271", name: "Kota Palangka Raya", province: "Kalimantan Tengah", cluster: 1, ikp: 78.7, x1: 0.6, x2: 5.2, x3: 38.1, x4: 98.8, x5: 91.6, x6: 11.9, x7: 5.3, x8: 75.1, x9: 14.0 },

// KALIMANTAN SELATAN
{ id: "6301", name: "Kabupaten Tanah Laut", province: "Kalimantan Selatan", cluster: 2, ikp: 66.2, x1: 1.1, x2: 10.6, x3: 47.2, x4: 92.7, x5: 79.0, x6: 9.3, x7: 3.4, x8: 71.3, x9: 26.2 },
{ id: "6302", name: "Kabupaten Kota Baru", province: "Kalimantan Selatan", cluster: 2, ikp: 65.7, x1: 1.2, x2: 11.0, x3: 47.5, x4: 92.0, x5: 78.1, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },
{ id: "6303", name: "Kabupaten Banjar", province: "Kalimantan Selatan", cluster: 2, ikp: 66.9, x1: 1.1, x2: 10.2, x3: 46.7, x4: 93.1, x5: 79.8, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.4 },
{ id: "6304", name: "Kabupaten Barito Kuala", province: "Kalimantan Selatan", cluster: 3, ikp: 60.1, x1: 1.5, x2: 14.2, x3: 51.5, x4: 89.0, x5: 74.1, x6: 8.5, x7: 2.8, x8: 69.7, x9: 30.1 },
{ id: "6305", name: "Kabupaten Tapin", province: "Kalimantan Selatan", cluster: 1, ikp: 65.4, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.5, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "6306", name: "Kabupaten Hulu Sungai Selatan", province: "Kalimantan Selatan", cluster: 2, ikp: 64.7, x1: 1.2, x2: 11.6, x3: 48.3, x4: 91.4, x5: 77.0, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.5 },
{ id: "6307", name: "Kabupaten Hulu Sungai Tengah", province: "Kalimantan Selatan", cluster: 3, ikp: 65.2, x1: 1.2, x2: 11.1, x3: 47.8, x4: 91.8, x5: 77.8, x6: 9.0, x7: 3.2, x8: 70.9, x9: 27.1 },
{ id: "6308", name: "Kabupaten Hulu Sungai Utara", province: "Kalimantan Selatan", cluster: 2, ikp: 59.8, x1: 1.5, x2: 14.3, x3: 51.7, x4: 88.9, x5: 73.8, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.4 },
{ id: "6309", name: "Kabupaten Tabalong", province: "Kalimantan Selatan", cluster: 1, ikp: 65.6, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.0, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },
{ id: "6310", name: "Kabupaten Tanah Bumbu", province: "Kalimantan Selatan", cluster: 1, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },
{ id: "6311", name: "Kabupaten Balangan", province: "Kalimantan Selatan", cluster: 1, ikp: 60.5, x1: 1.5, x2: 13.9, x3: 51.2, x4: 89.1, x5: 74.4, x6: 8.5, x7: 2.8, x8: 69.8, x9: 29.6 },
{ id: "6371", name: "Kota Banjarmasin", province: "Kalimantan Selatan", cluster: 1, ikp: 79.3, x1: 0.5, x2: 4.7, x3: 36.8, x4: 98.9, x5: 93.0, x6: 12.1, x7: 5.6, x8: 75.3, x9: 13.0 },
{ id: "6372", name: "Kota Banjarbaru", province: "Kalimantan Selatan", cluster: 1, ikp: 77.1, x1: 0.6, x2: 5.9, x3: 39.2, x4: 98.2, x5: 90.8, x6: 11.7, x7: 5.1, x8: 74.7, x9: 15.1 },

// KALIMANTAN TIMUR
{ id: "6401", name: "Kabupaten Paser", province: "Kalimantan Timur", cluster: 1, ikp: 66.1, x1: 1.1, x2: 10.7, x3: 47.3, x4: 92.7, x5: 79.0, x6: 9.3, x7: 3.4, x8: 71.3, x9: 26.2 },
{ id: "6402", name: "Kabupaten Kutai Barat", province: "Kalimantan Timur", cluster: 2, ikp: 65.4, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.5, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "6403", name: "Kabupaten Kutai Kartanegara", province: "Kalimantan Timur", cluster: 1, ikp: 71.4, x1: 0.9, x2: 8.4, x3: 43.8, x4: 95.2, x5: 84.3, x6: 10.7, x7: 4.4, x8: 72.8, x9: 20.5 },
{ id: "6404", name: "Kabupaten Kutai Timur", province: "Kalimantan Timur", cluster: 2, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },
{ id: "6405", name: "Kabupaten Berau", province: "Kalimantan Timur", cluster: 1, ikp: 72.7, x1: 0.8, x2: 7.7, x3: 42.5, x4: 95.9, x5: 86.3, x6: 10.9, x7: 4.5, x8: 73.2, x9: 18.7 },
{ id: "6409", name: "Kabupaten Penajam Paser Utara", province: "Kalimantan Timur", cluster: 1, ikp: 66.8, x1: 1.1, x2: 10.3, x3: 46.8, x4: 93.0, x5: 79.7, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.5 },
{ id: "6411", name: "Kabupaten Mahakam Ulu", province: "Kalimantan Timur", cluster: 2, ikp: 54.2, x1: 1.9, x2: 17.5, x3: 57.1, x4: 83.8, x5: 66.2, x6: 7.5, x7: 1.9, x8: 67.8, x9: 37.2 },
{ id: "6471", name: "Kota Balikpapan", province: "Kalimantan Timur", cluster: 1, ikp: 81.4, x1: 0.4, x2: 4.1, x3: 35.6, x4: 99.2, x5: 94.6, x6: 12.3, x7: 5.9, x8: 75.7, x9: 11.4 },
{ id: "6472", name: "Kota Samarinda", province: "Kalimantan Timur", cluster: 1, ikp: 80.1, x1: 0.5, x2: 4.4, x3: 36.1, x4: 99.1, x5: 93.8, x6: 12.2, x7: 5.7, x8: 75.5, x9: 12.2 },
{ id: "6474", name: "Kota Bontang", province: "Kalimantan Timur", cluster: 1, ikp: 78.6, x1: 0.6, x2: 5.2, x3: 38.1, x4: 98.8, x5: 91.7, x6: 11.9, x7: 5.3, x8: 75.1, x9: 14.1 },

// KALIMANTAN UTARA
{ id: "6501", name: "Kabupaten Malinau", province: "Kalimantan Utara", cluster: 2, ikp: 64.2, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.1, x5: 76.6, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },
{ id: "6502", name: "Kabupaten Bulungan", province: "Kalimantan Utara", cluster: 2, ikp: 65.7, x1: 1.2, x2: 11.0, x3: 47.5, x4: 92.0, x5: 78.0, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },
{ id: "6503", name: "Kabupaten Tana Tidung", province: "Kalimantan Utara", cluster: 2, ikp: 64.9, x1: 1.2, x2: 11.4, x3: 48.1, x4: 91.5, x5: 77.2, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.4 },
{ id: "6504", name: "Kabupaten Nunukan", province: "Kalimantan Utara", cluster: 2, ikp: 59.3, x1: 1.6, x2: 14.7, x3: 52.1, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.8 },
{ id: "6571", name: "Kota Tarakan", province: "Kalimantan Utara", cluster: 1, ikp: 76.3, x1: 0.7, x2: 6.1, x3: 39.9, x4: 97.6, x5: 89.7, x6: 11.5, x7: 5.0, x8: 74.3, x9: 16.0 },

// SULAWESI UTARA
{ id: "7101", name: "Kabupaten Bolaang Mongondow", province: "Sulawesi Utara", cluster: 3, ikp: 65.3, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.7, x5: 77.5, x6: 9.0, x7: 3.1, x8: 70.7, x9: 27.2 },
{ id: "7102", name: "Kabupaten Minahasa", province: "Sulawesi Utara", cluster: 2, ikp: 72.4, x1: 0.8, x2: 7.9, x3: 42.6, x4: 95.7, x5: 85.9, x6: 10.8, x7: 4.4, x8: 73.1, x9: 19.1 },
{ id: "7103", name: "Kabupaten Kepulauan Sangihe", province: "Sulawesi Utara", cluster: 3, ikp: 64.6, x1: 1.2, x2: 11.7, x3: 48.3, x4: 91.4, x5: 76.9, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.6 },
{ id: "7104", name: "Kabupaten Kepulauan Talaud", province: "Sulawesi Utara", cluster: 3, ikp: 63.8, x1: 1.3, x2: 12.2, x3: 48.8, x4: 90.8, x5: 75.5, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.2 },
{ id: "7105", name: "Kabupaten Minahasa Selatan", province: "Sulawesi Utara", cluster: 3, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.5, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.4 },
{ id: "7106", name: "Kabupaten Minahasa Utara", province: "Sulawesi Utara", cluster: 1, ikp: 71.8, x1: 0.9, x2: 8.2, x3: 43.5, x4: 95.4, x5: 84.7, x6: 10.7, x7: 4.4, x8: 72.9, x9: 20.1 },
{ id: "7107", name: "Kabupaten Bolaang Mongondow Utara", province: "Sulawesi Utara", cluster: 3, ikp: 64.1, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.2, x5: 76.6, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },
{ id: "7108", name: "Kabupaten Siau Tagulandang Biaro", province: "Sulawesi Utara", cluster: 3, ikp: 64.4, x1: 1.3, x2: 11.8, x3: 48.5, x4: 91.1, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.8 },
{ id: "7109", name: "Kabupaten Minahasa Tenggara", province: "Sulawesi Utara", cluster: 3, ikp: 65.1, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.6, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },
{ id: "7110", name: "Kabupaten Bolaang Mongondow Selatan", province: "Sulawesi Utara", cluster: 3, ikp: 63.9, x1: 1.3, x2: 12.2, x3: 48.8, x4: 90.8, x5: 75.5, x6: 8.7, x7: 2.9, x8: 70.2, x9: 28.2 },
{ id: "7111", name: "Kabupaten Bolaang Mongondow Timur", province: "Sulawesi Utara", cluster: 2, ikp: 60.3, x1: 1.5, x2: 14.1, x3: 51.4, x4: 89.1, x5: 74.2, x6: 8.5, x7: 2.8, x8: 69.8, x9: 29.8 },
{ id: "7171", name: "Kota Manado", province: "Sulawesi Utara", cluster: 1, ikp: 81.2, x1: 0.4, x2: 4.2, x3: 35.6, x4: 99.2, x5: 94.5, x6: 12.3, x7: 5.9, x8: 75.7, x9: 11.5 },
{ id: "7172", name: "Kota Bitung", province: "Sulawesi Utara", cluster: 1, ikp: 75.4, x1: 0.7, x2: 6.5, x3: 40.2, x4: 97.4, x5: 89.1, x6: 11.4, x7: 4.9, x8: 74.1, x9: 16.3 },
{ id: "7173", name: "Kota Tomohon", province: "Sulawesi Utara", cluster: 1, ikp: 74.7, x1: 0.7, x2: 7.0, x3: 41.5, x4: 96.7, x5: 87.9, x6: 11.2, x7: 4.8, x8: 73.7, x9: 17.5 },
{ id: "7174", name: "Kota Kotamobagu", province: "Sulawesi Utara", cluster: 1, ikp: 73.8, x1: 0.8, x2: 7.4, x3: 42.1, x4: 96.1, x5: 11.0, x7: 4.6, x8: 73.4, x9: 18.3 },

// SULAWESI TENGAH

{ id: "7201", name: "Kabupaten Banggai Kepulauan", province: "Sulawesi Tengah", cluster: 2, ikp: 57.2, x1: 1.7, x2: 15.5, x3: 53.8, x4: 86.9, x5: 71.2, x6: 8.2, x7: 2.4, x8: 68.8, x9: 33.6 },

{ id: "7202", name: "Kabupaten Banggai", province: "Sulawesi Tengah", cluster: 2, ikp: 64.3, x1: 1.3, x2: 11.9, x3: 48.5, x4: 91.1, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },

{ id: "7203", name: "Kabupaten Morowali", province: "Sulawesi Tengah", cluster: 1, ikp: 65.6, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.0, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },

{ id: "7204", name: "Kabupaten Poso", province: "Sulawesi Tengah", cluster: 1, ikp: 64.8, x1: 1.2, x2: 11.5, x3: 48.1, x4: 91.5, x5: 77.2, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.4 },

{ id: "7205", name: "Kabupaten Donggala", province: "Sulawesi Tengah", cluster: 3, ikp: 58.7, x1: 1.6, x2: 15.1, x3: 52.5, x4: 87.9, x5: 72.7, x6: 8.4, x7: 2.6, x8: 69.3, x9: 31.4 },

{ id: "7206", name: "Kabupaten Toli-Toli", province: "Sulawesi Tengah", cluster: 2, ikp: 59.3, x1: 1.6, x2: 14.7, x3: 52.1, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.9 },

{ id: "7207", name: "Kabupaten Buol", province: "Sulawesi Tengah", cluster: 2, ikp: 57.8, x1: 1.7, x2: 15.7, x3: 53.2, x4: 87.4, x5: 71.8, x6: 8.2, x7: 2.5, x8: 68.9, x9: 32.8 },

{ id: "7208", name: "Kabupaten Parigi Moutong", province: "Sulawesi Tengah", cluster: 2, ikp: 59.7, x1: 1.5, x2: 14.4, x3: 51.8, x4: 88.7, x5: 73.6, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.5 },

{ id: "7209", name: "Kabupaten Tojo Una-Una", province: "Sulawesi Tengah", cluster: 2, ikp: 56.4, x1: 1.8, x2: 16.1, x3: 54.8, x4: 85.9, x5: 69.4, x6: 7.9, x7: 2.3, x8: 68.4, x9: 34.5 },

{ id: "7210", name: "Kabupaten Sigi", province: "Sulawesi Tengah", cluster: 3, ikp: 58.1, x1: 1.6, x2: 15.6, x3: 53.0, x4: 87.6, x5: 72.0, x6: 8.2, x7: 2.5, x8: 69.1, x9: 32.4 },

{ id: "7211", name: "Kabupaten Banggai Laut", province: "Sulawesi Tengah", cluster: 2, ikp: 57.4, x1: 1.7, x2: 15.4, x3: 53.6, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.5 },

{ id: "7212", name: "Kabupaten Morowali Utara", province: "Sulawesi Tengah", cluster: 2, ikp: 59.2, x1: 1.6, x2: 14.7, x3: 52.1, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.8 },

{ id: "7271", name: "Kota Palu", province: "Sulawesi Tengah", cluster: 1, ikp: 77.8, x1: 0.6, x2: 5.6, x3: 38.8, x4: 98.4, x5: 91.0, x6: 11.8, x7: 5.2, x8: 75.0, x9: 14.7 },


// SULAWESI SELATAN

{ id: "7301", name: "Kabupaten Kepulauan Selayar", province: "Sulawesi Selatan", cluster: 2, ikp: 58.4, x1: 1.6, x2: 15.3, x3: 52.8, x4: 87.8, x5: 72.3, x6: 8.3, x7: 2.6, x8: 69.2, x9: 31.9 },

{ id: "7302", name: "Kabupaten Bulukumba", province: "Sulawesi Selatan", cluster: 2, ikp: 64.2, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.2, x5: 76.6, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },

{ id: "7303", name: "Kabupaten Bantaeng", province: "Sulawesi Selatan", cluster: 1, ikp: 65.4, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.8, x5: 77.5, x6: 9.0, x7: 3.1, x8: 70.8, x9: 27.2 },

{ id: "7304", name: "Kabupaten Jeneponto", province: "Sulawesi Selatan", cluster: 1, ikp: 57.6, x1: 1.7, x2: 15.4, x3: 53.7, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.5 },

{ id: "7305", name: "Kabupaten Takalar", province: "Sulawesi Selatan", cluster: 1, ikp: 65.7, x1: 1.2, x2: 11.0, x3: 47.5, x4: 92.0, x5: 78.1, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },

{ id: "7306", name: "Kabupaten Gowa", province: "Sulawesi Selatan", cluster: 1, ikp: 66.3, x1: 1.1, x2: 10.6, x3: 47.2, x4: 92.7, x5: 79.0, x6: 9.3, x7: 3.4, x8: 71.3, x9: 26.2 },

{ id: "7307", name: "Kabupaten Sinjai", province: "Sulawesi Selatan", cluster: 2, ikp: 64.7, x1: 1.2, x2: 11.6, x3: 48.3, x4: 91.4, x5: 77.0, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.5 },

{ id: "7308", name: "Kabupaten Maros", province: "Sulawesi Selatan", cluster: 2, ikp: 65.9, x1: 1.2, x2: 10.8, x3: 47.5, x4: 92.4, x5: 78.6, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.3 },

{ id: "7309", name: "Kabupaten Pangkajene Kepulauan", province: "Sulawesi Selatan", cluster: 2, ikp: 65.2, x1: 1.2, x2: 11.1, x3: 47.8, x4: 91.8, x5: 77.8, x6: 9.0, x7: 3.2, x8: 70.9, x9: 27.1 },

{ id: "7310", name: "Kabupaten Barru", province: "Sulawesi Selatan", cluster: 1, ikp: 66.1, x1: 1.1, x2: 10.7, x3: 47.3, x4: 92.7, x5: 79.0, x6: 9.3, x7: 3.4, x8: 71.3, x9: 26.2 },

{ id: "7311", name: "Kabupaten Bone", province: "Sulawesi Selatan", cluster: 2, ikp: 64.4, x1: 1.3, x2: 11.8, x3: 48.5, x4: 91.1, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },

{ id: "7312", name: "Kabupaten Soppeng", province: "Sulawesi Selatan", cluster: 1, ikp: 65.6, x1: 1.2, x2: 11.0, x3: 47.6, x4: 92.0, x5: 78.0, x6: 9.1, x7: 3.2, x8: 71.0, x9: 26.7 },

{ id: "7313", name: "Kabupaten Wajo", province: "Sulawesi Selatan", cluster: 2, ikp: 65.8, x1: 1.2, x2: 10.9, x3: 47.5, x4: 92.4, x5: 78.5, x6: 9.2, x7: 3.3, x8: 71.2, x9: 26.4 },

{ id: "7314", name: "Kabupaten Sidenreng Rappang", province: "Sulawesi Selatan", cluster: 2, ikp: 66.4, x1: 1.2, x2: 10.5, x3: 47.1, x4: 92.9, x5: 79.3, x6: 9.3, x7: 3.4, x8: 71.4, x9: 25.8 },

{ id: "7315", name: "Kabupaten Pinrang", province: "Sulawesi Selatan", cluster: 1, ikp: 66.8, x1: 1.1, x2: 10.3, x3: 46.8, x4: 93.0, x5: 79.7, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.5 },

{ id: "7316", name: "Kabupaten Enrekang", province: "Sulawesi Selatan", cluster: 2, ikp: 59.8, x1: 1.5, x2: 14.3, x3: 51.7, x4: 88.9, x5: 73.8, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.4 },

{ id: "7317", name: "Kabupaten Luwu", province: "Sulawesi Selatan", cluster: 2, ikp: 64.1, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.2, x5: 76.6, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },

{ id: "7318", name: "Kabupaten Tana Toraja", province: "Sulawesi Selatan", cluster: 3, ikp: 64.7, x1: 1.2, x2: 11.6, x3: 48.3, x4: 91.4, x5: 77.1, x6: 8.9, x7: 3.1, x8: 70.6, x9: 27.5 },

{ id: "7322", name: "Kabupaten Luwu Utara", province: "Sulawesi Selatan", cluster: 1, ikp: 59.4, x1: 1.5, x2: 14.6, x3: 52.0, x4: 88.5, x5: 73.5, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.7 },

{ id: "7325", name: "Kabupaten Luwu Timur", province: "Sulawesi Selatan", cluster: 1, ikp: 65.3, x1: 1.2, x2: 11.2, x3: 47.8, x4: 91.7, x5: 77.5, x6: 9.0, x7: 3.1, x8: 70.7, x9: 27.2 },

{ id: "7326", name: "Kabupaten Toraja Utara", province: "Sulawesi Selatan", cluster: 3, ikp: 64.9, x1: 1.2, x2: 11.4, x3: 48.2, x4: 91.5, x5: 77.3, x6: 8.9, x7: 3.1, x8: 70.7, x9: 27.8 },

{ id: "7371", name: "Kota Makassar", province: "Sulawesi Selatan", cluster: 1, ikp: 83.1, x1: 0.4, x2: 3.7, x3: 34.7, x4: 99.5, x5: 96.0, x6: 12.6, x7: 6.2, x8: 76.3, x9: 10.3 },

{ id: "7372", name: "Kota Parepare", province: "Sulawesi Selatan", cluster: 1, ikp: 76.4, x1: 0.7, x2: 6.3, x3: 40.1, x4: 97.5, x5: 89.4, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.1 },

{ id: "7373", name: "Kota Palopo", province: "Sulawesi Selatan", cluster: 1, ikp: 75.7, x1: 0.7, x2: 6.4, x3: 40.3, x4: 97.5, x5: 89.2, x6: 11.4, x7: 4.9, x8: 74.2, x9: 16.2 },


// SULAWESI TENGGARA

{ id: "7401", name: "Kabupaten Buton", province: "Sulawesi Tenggara", cluster: 2, ikp: 57.8, x1: 1.7, x2: 15.7, x3: 53.2, x4: 87.4, x5: 71.7, x6: 8.2, x7: 2.5, x8: 68.9, x9: 32.8 },

{ id: "7402", name: "Kabupaten Muna", province: "Sulawesi Tenggara", cluster: 2, ikp: 58.4, x1: 1.6, x2: 15.3, x3: 52.8, x4: 87.8, x5: 72.3, x6: 8.3, x7: 2.6, x8: 69.2, x9: 31.9 },

{ id: "7403", name: "Kabupaten Konawe", province: "Sulawesi Tenggara", cluster: 1, ikp: 59.3, x1: 1.6, x2: 14.7, x3: 52.1, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.9 },

{ id: "7404", name: "Kabupaten Kolaka", province: "Sulawesi Tenggara", cluster: 1, ikp: 64.1, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.2, x5: 76.6, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },

{ id: "7405", name: "Kabupaten Konawe Selatan", province: "Sulawesi Tenggara", cluster: 1, ikp: 58.7, x1: 1.6, x2: 15.1, x3: 52.5, x4: 88.0, x5: 72.7, x6: 8.4, x7: 2.6, x8: 69.3, x9: 31.4 },

{ id: "7406", name: "Kabupaten Bombana", province: "Sulawesi Tenggara", cluster: 1, ikp: 57.4, x1: 1.7, x2: 15.4, x3: 53.6, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.5 },

{ id: "7407", name: "Kabupaten Wakatobi", province: "Sulawesi Tenggara", cluster: 2, ikp: 57.1, x1: 1.7, x2: 15.6, x3: 54.0, x4: 86.8, x5: 70.9, x6: 8.1, x7: 2.4, x8: 68.7, x9: 33.8 },

{ id: "7408", name: "Kabupaten Kolaka Utara", province: "Sulawesi Tenggara", cluster: 2, ikp: 58.1, x1: 1.6, x2: 15.6, x3: 53.0, x4: 87.6, x5: 72.0, x6: 8.2, x7: 2.5, x8: 69.1, x9: 32.4 },

{ id: "7409", name: "Kabupaten Buton Utara", province: "Sulawesi Tenggara", cluster: 1, ikp: 56.8, x1: 1.8, x2: 15.9, x3: 54.3, x4: 86.7, x5: 70.7, x6: 8.1, x7: 2.4, x8: 68.7, x9: 34.0 },

{ id: "7410", name: "Kabupaten Konawe Utara", province: "Sulawesi Tenggara", cluster: 1, ikp: 59.1, x1: 1.6, x2: 14.8, x3: 52.2, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.9 },

{ id: "7411", name: "Kabupaten Kolaka Timur", province: "Sulawesi Tenggara", cluster: 2, ikp: 59.6, x1: 1.5, x2: 14.5, x3: 51.9, x4: 88.7, x5: 73.6, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.5 },

{ id: "7412", name: "Kabupaten Konawe Kepulauan", province: "Sulawesi Tenggara", cluster: 2, ikp: 55.7, x1: 1.9, x2: 16.3, x3: 55.4, x4: 85.6, x5: 68.9, x6: 7.9, x7: 2.2, x8: 68.1, x9: 35.0 },

{ id: "7413", name: "Kabupaten Muna Barat", province: "Sulawesi Tenggara", cluster: 2, ikp: 57.4, x1: 1.7, x2: 15.4, x3: 53.6, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.5 },

{ id: "7414", name: "Kabupaten Buton Selatan", province: "Sulawesi Tenggara", cluster: 3, ikp: 56.3, x1: 1.8, x2: 16.2, x3: 55.0, x4: 85.8, x5: 69.2, x6: 7.9, x7: 2.2, x8: 68.3, x9: 34.8 },

{ id: "7415", name: "Kabupaten Buton Tengah", province: "Sulawesi Tenggara", cluster: 2, ikp: 56.7, x1: 1.8, x2: 16.0, x3: 54.2, x4: 86.6, x5: 70.6, x6: 8.1, x7: 2.4, x8: 68.7, x9: 34.1 },

{ id: "7471", name: "Kota Kendari", province: "Sulawesi Tenggara", cluster: 1, ikp: 78.4, x1: 0.6, x2: 5.3, x3: 38.2, x4: 98.7, x5: 91.4, x6: 11.8, x7: 5.3, x8: 75.0, x9: 14.3 },

{ id: "7472", name: "Kota Bau-Bau", province: "Sulawesi Tenggara", cluster: 1, ikp: 75.3, x1: 0.7, x2: 6.6, x3: 40.5, x4: 97.3, x5: 89.0, x6: 11.4, x7: 4.9, x8: 74.1, x9: 16.5 },


// GORONTALO

{ id: "7501", name: "Kabupaten Boalemo", province: "Gorontalo", cluster: 3, ikp: 58.9, x1: 1.6, x2: 14.9, x3: 52.3, x4: 88.2, x5: 72.9, x6: 8.4, x7: 2.7, x8: 69.4, x9: 31.2 },

{ id: "7502", name: "Kabupaten Gorontalo", province: "Gorontalo", cluster: 2, ikp: 64.1, x1: 1.3, x2: 12.0, x3: 48.6, x4: 91.2, x5: 76.5, x6: 8.8, x7: 3.0, x8: 70.5, x9: 27.9 },

{ id: "7503", name: "Kabupaten Pohuwato", province: "Gorontalo", cluster: 1, ikp: 59.4, x1: 1.5, x2: 14.6, x3: 52.0, x4: 88.5, x5: 73.5, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.7 },

{ id: "7504", name: "Kabupaten Bone Bolango", province: "Gorontalo", cluster: 1, ikp: 60.2, x1: 1.5, x2: 14.1, x3: 51.4, x4: 89.1, x5: 74.1, x6: 8.5, x7: 2.8, x8: 69.8, x9: 29.9 },

{ id: "7505", name: "Kabupaten Gorontalo Utara", province: "Gorontalo", cluster: 3, ikp: 59.8, x1: 1.5, x2: 14.3, x3: 51.7, x4: 88.9, x5: 73.8, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.4 },

{ id: "7571", name: "Kota Gorontalo", province: "Gorontalo", cluster: 1, ikp: 76.2, x1: 0.7, x2: 6.1, x3: 39.8, x4: 97.7, x5: 89.7, x6: 11.5, x7: 5.0, x8: 74.3, x9: 15.9 },


// SULAWESI BARAT

{ id: "7601", name: "Kabupaten Mamuju Utara", province: "Sulawesi Barat", cluster: 2, ikp: 57.4, x1: 1.7, x2: 15.4, x3: 53.6, x4: 87.1, x5: 71.4, x6: 8.2, x7: 2.5, x8: 68.9, x9: 33.5 },

{ id: "7602", name: "Kabupaten Mamasa", province: "Sulawesi Barat", cluster: 3, ikp: 56.8, x1: 1.8, x2: 15.9, x3: 54.3, x4: 86.7, x5: 70.7, x6: 8.1, x7: 2.4, x8: 68.7, x9: 34.0 },

{ id: "7603", name: "Kabupaten Polewali Mandar", province: "Sulawesi Barat", cluster: 3, ikp: 58.3, x1: 1.6, x2: 15.3, x3: 52.7, x4: 87.8, x5: 72.3, x6: 8.3, x7: 2.6, x8: 69.2, x9: 31.9 },

{ id: "7604", name: "Kabupaten Majene", province: "Sulawesi Barat", cluster: 2, ikp: 59.7, x1: 1.5, x2: 14.4, x3: 51.8, x4: 88.7, x5: 73.6, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.5 },

{ id: "7605", name: "Kabupaten Mamuju", province: "Sulawesi Barat", cluster: 2, ikp: 59.4, x1: 1.5, x2: 14.6, x3: 52.0, x4: 88.5, x5: 73.5, x6: 8.5, x7: 2.7, x8: 69.6, x9: 30.7 },

// TABEL FIXED MEMILIKI "MAMUJU TENGAH", SEDANGKAN DATA KODE MEMILIKI "PASANGKAYU".
// Karena tidak ada padanan yang dapat dipastikan, cluster 7606 tidak diubah.
{ id: "7606", name: "Kabupaten Pasangkayu", province: "Sulawesi Barat", cluster: 3, ikp: 59.1, x1: 1.6, x2: 14.8, x3: 52.2, x4: 88.3, x5: 73.2, x6: 8.4, x7: 2.7, x8: 69.5, x9: 30.9 },

// MALUKU

{ id: "8101", name: "Kabupaten Maluku Tenggara Barat", province: "Maluku", cluster: 2, ikp: 49.3, x1: 2.4, x2: 21.7, x3: 62.0, x4: 79.0, x5: 59.5, x6: 6.7, x7: 1.5, x8: 66.1, x9: 42.7 },

{ id: "8102", name: "Kabupaten Maluku Tenggara", province: "Maluku", cluster: 2, ikp: 50.7, x1: 2.3, x2: 20.4, x3: 60.9, x4: 80.3, x5: 61.4, x6: 6.8, x7: 1.5, x8: 66.4, x9: 40.9 },

{ id: "8103", name: "Kabupaten Maluku Tengah", province: "Maluku", cluster: 2, ikp: 51.8, x1: 2.2, x2: 19.5, x3: 59.9, x4: 80.8, x5: 62.7, x6: 6.9, x7: 1.6, x8: 66.7, x9: 39.4 },

{ id: "8104", name: "Kabupaten Buru", province: "Maluku", cluster: 2, ikp: 53.4, x1: 2.0, x2: 18.3, x3: 57.9, x4: 82.5, x5: 65.0, x6: 7.3, x7: 1.8, x8: 67.3, x9: 36.9 },

{ id: "8105", name: "Kabupaten Kepulauan Aru", province: "Maluku", cluster: 2, ikp: 48.7, x1: 2.5, x2: 21.9, x3: 62.3, x4: 78.6, x5: 58.8, x6: 6.5, x7: 1.4, x8: 65.9, x9: 43.3 },

{ id: "8106", name: "Kabupaten Seram Bagian Barat", province: "Maluku", cluster: 3, ikp: 52.3, x1: 2.1, x2: 19.1, x3: 59.4, x4: 81.3, x5: 63.7, x6: 7.0, x7: 1.7, x8: 67.0, x9: 38.6 },

{ id: "8107", name: "Kabupaten Seram Bagian Timur", province: "Maluku", cluster: 2, ikp: 50.1, x1: 2.3, x2: 20.6, x3: 61.0, x4: 79.8, x5: 60.9, x6: 6.7, x7: 1.5, x8: 66.2, x9: 41.2 },

{ id: "8108", name: "Kabupaten Maluku Barat Daya", province: "Maluku", cluster: 3, ikp: 47.8, x1: 2.6, x2: 22.6, x3: 63.0, x4: 77.7, x5: 57.8, x6: 6.4, x7: 1.3, x8: 65.6, x9: 44.3 },

{ id: "8109", name: "Kabupaten Buru Selatan", province: "Maluku", cluster: 2, ikp: 51.2, x1: 2.2, x2: 19.9, x3: 60.5, x4: 80.5, x5: 62.0, x6: 6.8, x7: 1.5, x8: 66.3, x9: 40.1 },

{ id: "8171", name: "Kota Ambon", province: "Maluku", cluster: 1, ikp: 77.4, x1: 0.6, x2: 5.7, x3: 38.9, x4: 98.3, x5: 91.0, x6: 11.7, x7: 5.1, x8: 74.8, x9: 15.1 },

{ id: "8172", name: "Kota Tual", province: "Maluku", cluster: 2, ikp: 66.8, x1: 1.1, x2: 10.3, x3: 46.8, x4: 93.0, x5: 79.7, x6: 9.4, x7: 3.4, x8: 71.5, x9: 25.5 },


// MALUKU UTARA

{ id: "8201", name: "Kabupaten Halmahera Barat", province: "Maluku Utara", cluster: 2, ikp: 54.7, x1: 1.9, x2: 17.1, x3: 57.0, x4: 84.0, x5: 66.5, x6: 7.6, x7: 2.0, x8: 67.9, x9: 37.0 },

{ id: "8202", name: "Kabupaten Halmahera Tengah", province: "Maluku Utara", cluster: 2, ikp: 55.3, x1: 1.9, x2: 16.4, x3: 55.5, x4: 85.5, x5: 68.8, x6: 7.8, x7: 2.2, x8: 68.2, x9: 35.2 },

{ id: "8203", name: "Kabupaten Kepulauan Sula", province: "Maluku Utara", cluster: 3, ikp: 53.8, x1: 2.0, x2: 17.7, x3: 57.3, x4: 83.4, x5: 65.6, x6: 7.4, x7: 1.9, x8: 67.7, x9: 37.4 },

{ id: "8204", name: "Kabupaten Halmahera Selatan", province: "Maluku Utara", cluster: 3, ikp: 55.7, x1: 1.9, x2: 16.3, x3: 55.4, x4: 85.6, x5: 69.0, x6: 7.9, x7: 2.2, x8: 68.2, x9: 35.0 },

{ id: "8205", name: "Kabupaten Halmahera Utara", province: "Maluku Utara", cluster: 2, ikp: 56.4, x1: 1.8, x2: 16.1, x3: 54.8, x4: 85.9, x5: 69.4, x6: 7.9, x7: 2.3, x8: 68.4, x9: 34.5 },

{ id: "8206", name: "Kabupaten Halmahera Timur", province: "Maluku Utara", cluster: 2, ikp: 55.1, x1: 1.9, x2: 16.5, x3: 55.7, x4: 85.2, x5: 68.1, x6: 7.8, x7: 2.1, x8: 68.2, x9: 35.7 },

{ id: "8207", name: "Kabupaten Pulau Morotai", province: "Maluku Utara", cluster: 3, ikp: 53.4, x1: 2.0, x2: 18.3, x3: 57.9, x4: 82.5, x5: 65.0, x6: 7.3, x7: 1.8, x8: 67.3, x9: 36.9 },

{ id: "8208", name: "Kabupaten Pulau Taliabu", province: "Maluku Utara", cluster: 3, ikp: 52.1, x1: 2.2, x2: 19.3, x3: 59.6, x4: 81.1, x5: 63.4, x6: 7.0, x7: 1.6, x8: 66.9, x9: 38.9 },

{ id: "8271", name: "Kota Ternate", province: "Maluku Utara", cluster: 1, ikp: 76.7, x1: 0.7, x2: 6.1, x3: 39.9, x4: 97.7, x5: 89.6, x6: 11.5, x7: 5.0, x8: 74.3, x9: 15.9 },

{ id: "8272", name: "Kota Tidore Kepulauan", province: "Maluku Utara", cluster: 2, ikp: 67.4, x1: 1.1, x2: 10.1, x3: 46.5, x4: 93.2, x5: 80.1, x6: 9.5, x7: 3.5, x8: 71.6, x9: 25.2 },


// PAPUA BARAT

{ id: "9101", name: "Kabupaten Fakfak", province: "Papua Barat", cluster: 3, ikp: 53.7, x1: 2.0, x2: 17.8, x3: 57.3, x4: 83.4, x5: 65.6, x6: 7.4, x7: 1.9, x8: 67.7, x9: 37.4 },

{ id: "9102", name: "Kabupaten Kaimana", province: "Papua Barat", cluster: 3, ikp: 52.4, x1: 2.1, x2: 19.0, x3: 59.3, x4: 81.4, x5: 63.8, x6: 7.0, x7: 1.7, x8: 67.1, x9: 38.5 },

{ id: "9103", name: "Kabupaten Teluk Wondama", province: "Papua Barat", cluster: 3, ikp: 50.8, x1: 2.3, x2: 20.2, x3: 60.6, x4: 80.2, x5: 61.6, x6: 6.8, x7: 1.5, x8: 66.4, x9: 40.5 },

{ id: "9104", name: "Kabupaten Teluk Bintuni", province: "Papua Barat", cluster: 3, ikp: 52.7, x1: 2.1, x2: 19.1, x3: 59.4, x4: 81.4, x5: 63.7, x6: 7.1, x7: 1.7, x8: 67.1, x9: 38.5 },

{ id: "9105", name: "Kabupaten Manokwari", province: "Papua Barat", cluster: 2, ikp: 54.2, x1: 2.0, x2: 17.4, x3: 57.0, x4: 83.9, x5: 66.3, x6: 7.5, x7: 1.9, x8: 67.8, x9: 37.1 },

{ id: "9106", name: "Kabupaten Sorong Selatan", province: "Papua Barat", cluster: 3, ikp: 51.4, x1: 2.2, x2: 19.8, x3: 60.2, x4: 80.6, x5: 62.4, x6: 6.9, x7: 1.6, x8: 66.6, x9: 39.8 },

{ id: "9107", name: "Kabupaten Sorong", province: "Papua Barat", cluster: 3, ikp: 53.8, x1: 2.0, x2: 17.7, x3: 57.3, x4: 83.4, x5: 65.7, x6: 7.4, x7: 1.9, x8: 67.7, x9: 37.4 },

{ id: "9108", name: "Kabupaten Raja Ampat", province: "Papua Barat", cluster: 3, ikp: 51.7, x1: 2.2, x2: 19.5, x3: 59.8, x4: 80.9, x5: 62.9, x6: 6.9, x7: 1.6, x8: 66.7, x9: 39.3 },

{ id: "9109", name: "Kabupaten Tambrauw", province: "Papua Barat", cluster: 3, ikp: 47.3, x1: 2.6, x2: 23.1, x3: 63.6, x4: 77.4, x5: 57.1, x6: 6.3, x7: 1.2, x8: 65.4, x9: 44.9 },

{ id: "9110", name: "Kabupaten Maybrat", province: "Papua Barat", cluster: 3, ikp: 48.8, x1: 2.5, x2: 21.9, x3: 62.3, x4: 78.7, x5: 58.9, x6: 6.5, x7: 1.4, x8: 66.0, x9: 43.2 },

{ id: "9111", name: "Kabupaten Manokwari Selatan", province: "Papua Barat", cluster: 2, ikp: 50.3, x1: 2.3, x2: 20.5, x3: 60.8, x4: 80.0, x5: 61.2, x6: 6.8, x7: 1.5, x8: 66.3, x9: 41.0 },

{ id: "9112", name: "Kabupaten Pegunungan Arfak", province: "Papua Barat", cluster: 3, ikp: 46.8, x1: 2.7, x2: 23.6, x3: 64.2, x4: 76.7, x5: 55.9, x6: 6.2, x7: 1.2, x8: 65.2, x9: 46.0 },

{ id: "9171", name: "Kota Sorong", province: "Papua Barat", cluster: 1, ikp: 67.4, x1: 1.1, x2: 10.1, x3: 46.5, x4: 93.2, x5: 80.1, x6: 9.5, x7: 3.5, x8: 71.6, x9: 25.2 },


// PAPUA

{ id: "9401", name: "Kabupaten Merauke", province: "Papua", cluster: 2, ikp: 52.3, x1: 2.1, x2: 19.1, x3: 59.4, x4: 81.4, x5: 63.7, x6: 7.0, x7: 1.7, x8: 67.0, x9: 38.6 },

{ id: "9402", name: "Kabupaten Jayawijaya", province: "Papua", cluster: 3, ikp: 41.8, x1: 3.4, x2: 28.2, x3: 69.4, x4: 71.7, x5: 50.1, x6: 5.4, x7: 0.8, x8: 63.6, x9: 52.3 },

{ id: "9403", name: "Kabupaten Jayapura", province: "Papua", cluster: 3, ikp: 53.7, x1: 2.0, x2: 17.8, x3: 57.3, x4: 83.4, x5: 65.6, x6: 7.4, x7: 1.9, x8: 67.7, x9: 37.4 },

{ id: "9404", name: "Kabupaten Nabire", province: "Papua", cluster: 2, ikp: 51.2, x1: 2.2, x2: 19.9, x3: 60.5, x4: 80.5, x5: 62.0, x6: 6.8, x7: 1.5, x8: 66.3, x9: 40.1 },

{ id: "9405", name: "Kabupaten Kepulauan Yapen", province: "Papua", cluster: 2, ikp: 52.7, x1: 2.1, x2: 19.1, x3: 59.4, x4: 81.4, x5: 63.7, x6: 7.1, x7: 1.7, x8: 67.1, x9: 38.5 },

{ id: "9406", name: "Kabupaten Biak Numfor", province: "Papua", cluster: 2, ikp: 54.3, x1: 2.0, x2: 17.3, x3: 56.9, x4: 83.9, x5: 66.4, x6: 7.5, x7: 1.9, x8: 67.9, x9: 37.0 },

{ id: "9407", name: "Kabupaten Paniai", province: "Papua", cluster: 3, ikp: 39.2, x1: 3.7, x2: 30.8, x3: 72.1, x4: 68.9, x5: 47.3, x6: 5.0, x7: 0.7, x8: 62.9, x9: 55.8 },

{ id: "9408", name: "Kabupaten Puncak Jaya", province: "Papua", cluster: 3, ikp: 37.8, x1: 3.9, x2: 32.4, x3: 73.7, x4: 67.2, x5: 45.5, x6: 4.7, x7: 0.6, x8: 62.4, x9: 57.9 },

{ id: "9409", name: "Kabupaten Mimika", province: "Papua", cluster: 2, ikp: 50.8, x1: 2.3, x2: 20.2, x3: 60.6, x4: 80.2, x5: 61.7, x6: 6.8, x7: 1.5, x8: 66.4, x9: 40.5 },

{ id: "9410", name: "Kabupaten Boven Digoel", province: "Papua", cluster: 3, ikp: 46.7, x1: 2.7, x2: 23.6, x3: 64.2, x4: 76.7, x5: 55.9, x6: 6.2, x7: 1.2, x8: 65.2, x9: 46.0 },

{ id: "9411", name: "Kabupaten Mappi", province: "Papua", cluster: 3, ikp: 44.2, x1: 3.1, x2: 25.8, x3: 67.1, x4: 74.1, x5: 52.8, x6: 5.7, x7: 0.9, x8: 64.4, x9: 49.1 },

{ id: "9412", name: "Kabupaten Asmat", province: "Papua", cluster: 3, ikp: 42.7, x1: 3.3, x2: 27.3, x3: 68.5, x4: 72.6, x5: 51.2, x6: 5.5, x7: 0.8, x8: 64.0, x9: 50.9 },

{ id: "9413", name: "Kabupaten Yahukimo", province: "Papua", cluster: 3, ikp: 38.4, x1: 3.8, x2: 31.7, x3: 73.0, x4: 68.1, x5: 46.4, x6: 4.8, x7: 0.6, x8: 62.7, x9: 57.1 },

{ id: "9414", name: "Kabupaten Pegunungan Bintang", province: "Papua", cluster: 3, ikp: 37.1, x1: 4.0, x2: 33.1, x3: 74.4, x4: 66.5, x5: 44.8, x6: 4.6, x7: 0.6, x8: 62.2, x9: 58.7 },

{ id: "9415", name: "Kabupaten Tolikara", province: "Papua", cluster: 3, ikp: 38.9, x1: 3.8, x2: 31.2, x3: 72.5, x4: 68.5, x5: 46.9, x6: 4.9, x7: 0.7, x8: 62.8, x9: 56.5 },

{ id: "9416", name: "Kabupaten Sarmi", province: "Papua", cluster: 3, ikp: 50.3, x1: 2.3, x2: 20.5, x3: 60.8, x4: 80.0, x5: 61.2, x6: 6.8, x7: 1.5, x8: 66.3, x9: 41.0 },

{ id: "9417", name: "Kabupaten Keerom", province: "Papua", cluster: 3, ikp: 51.8, x1: 2.2, x2: 19.5, x3: 59.9, x4: 80.8, x5: 62.7, x6: 6.9, x7: 1.6, x8: 66.7, x9: 39.4 },

{ id: "9418", name: "Kabupaten Waropen", province: "Papua", cluster: 3, ikp: 49.7, x1: 2.4, x2: 21.3, x3: 61.5, x4: 79.4, x5: 60.1, x6: 6.8, x7: 1.5, x8: 66.4, x9: 42.1 },

{ id: "9419", name: "Kabupaten Supiori", province: "Papua", cluster: 3, ikp: 48.3, x1: 2.5, x2: 22.2, x3: 62.6, x4: 78.2, x5: 58.5, x6: 6.5, x7: 1.3, x8: 65.8, x9: 43.6 },

{ id: "9420", name: "Kabupaten Mamberamo Raya", province: "Papua", cluster: 3, ikp: 43.7, x1: 3.2, x2: 26.4, x3: 67.5, x4: 73.6, x5: 52.3, x6: 5.7, x7: 0.9, x8: 64.3, x9: 49.7 },

{ id: "9421", name: "Kabupaten Nduga", province: "Papua", cluster: 3, ikp: 36.4, x1: 4.1, x2: 33.8, x3: 75.1, x4: 65.9, x5: 44.1, x6: 4.5, x7: 0.5, x8: 62.0, x9: 59.5 },

{ id: "9422", name: "Kabupaten Lanny Jaya", province: "Papua", cluster: 3, ikp: 37.5, x1: 3.9, x2: 32.6, x3: 73.9, x4: 67.0, x5: 45.4, x6: 4.7, x7: 0.6, x8: 62.3, x9: 58.1 },

{ id: "9423", name: "Kabupaten Mamberamo Tengah", province: "Papua", cluster: 3, ikp: 42.1, x1: 3.3, x2: 27.9, x3: 69.1, x4: 71.9, x5: 50.5, x6: 5.3, x7: 0.7, x8: 63.7, x9: 51.8 },

{ id: "9424", name: "Kabupaten Yalimo", province: "Papua", cluster: 3, ikp: 39.6, x1: 3.7, x2: 30.4, x3: 71.7, x4: 69.2, x5: 47.7, x6: 5.1, x7: 0.7, x8: 63.0, x9: 55.3 },

{ id: "9425", name: "Kabupaten Puncak", province: "Papua", cluster: 3, ikp: 36.8, x1: 4.0, x2: 33.4, x3: 74.7, x4: 66.3, x5: 44.5, x6: 4.6, x7: 0.6, x8: 62.1, x9: 59.2 },

{ id: "9426", name: "Kabupaten Dogiyai", province: "Papua", cluster: 3, ikp: 40.3, x1: 3.6, x2: 29.7, x3: 71.0, x4: 69.9, x5: 48.6, x6: 5.2, x7: 0.7, x8: 63.2, x9: 54.6 },

{ id: "9427", name: "Kabupaten Intan Jaya", province: "Papua", cluster: 3, ikp: 38.1, x1: 3.8, x2: 31.9, x3: 73.3, x4: 67.8, x5: 46.1, x6: 4.8, x7: 0.6, x8: 62.6, x9: 57.4 },

{ id: "9428", name: "Kabupaten Deiyai", province: "Papua", cluster: 3, ikp: 39.8, x1: 3.6, x2: 30.2, x3: 71.5, x4: 69.5, x5: 48.2, x6: 5.1, x7: 0.7, x8: 63.1, x9: 54.9 },

{ id: "9471", name: "Kota Jayapura", province: "Papua", cluster: 1, ikp: 76.9, x1: 0.7, x2: 5.9, x3: 39.6, x4: 97.8, x5: 89.8, x6: 11.5, x7: 5.1, x8: 74.4, x9: 15.8 },
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KABUPATEN_DATA;
}
