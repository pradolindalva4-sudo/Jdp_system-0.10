// Arquivo: service-worker.js
// Desenvolvido por Eng. José Divino Prado
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
