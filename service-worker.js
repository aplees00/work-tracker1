const CACHE_NAME = 'work-tracker-v1';
const urlsToCache = [
  'تتبع_العمل.html',
  'manifest.json',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
  'https://unpkg.com/dexie@3.2.2/dist/dexie.js',
  'https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
