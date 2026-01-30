const CACHE_NAME = 'jdp-v14.5';
const ASSETS = [
  '/Jdp_system-0.10/',
  '/Jdp_system-0.10/index.html',
  '/Jdp_system-0.10/manifest.json',
  '/Jdp_system-0.10/service-worker.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

