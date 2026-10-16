/* ============================================================
   SIPANTAU-HP — KONFIGURASI FRONTEND
   ⚠️ SATU-SATUNYA file yang WAJIB Anda ubah sebelum push ke GitHub.
   ============================================================

   GAS_URL = URL Web App dari Google Apps Script (Terapkan → Deployment baru →
   Aplikasi web → Jalankan sebagai: Saya, Akses: Siapa saja). Bentuknya:
   https://script.google.com/macros/s/AKfycb........./exec

   File ini aman dipublikasikan: URL /exec memang alamat publik, tidak berisi
   kata sandi. Keamanan data dijaga oleh login NIP + kata sandi di server.
*/
window.SIPANTAU_CONFIG = {
  GAS_URL: 'https://script.google.com/macros/s/AKfycbw-IsXxb9LZBaLlRzpSMj5CbS18Y8ZLmh5fd73ON2d1epEZ-gUwX-z_hKKoPk7AdCL3/exec',

  // Batas waktu tunggu respons server (milidetik). PDF bulanan bisa butuh ±30 detik.
  API_TIMEOUT_MS: 90000,

  // Naikkan angka ini setiap kali Anda mengunggah versi baru file js/ (memaksa browser memuat ulang modul admin)
  VERSI: '2'
};
