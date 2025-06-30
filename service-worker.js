// Nama cache yang digunakan
const CACHE_NAME = 'ytmp3-cache-v1';

// Daftar file yang akan di-cache untuk akses offline
const urlsToCache = [
  'index.html',
  'style.css',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Event: Saat pertama kali service worker diinstal
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache)) // Simpan file ke cache
  );
});

// Event: Saat ada request dari user
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request) // Coba cari dari cache
      .then(response => response || fetch(event.request)) // Jika tidak ada, ambil dari internet
  );
});
