const CACHE_NAME = 'site-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/icon-192.png',
    '/icon-512.png',
    '/official/index.html',
    '/official/js.html',
    '/clients/astra/js/ES6shimScript.txt',
    '/clients/astra/js/assets.epk',
    '/clients/astra/js/classes.js',
    '/clients/astra/js/favicon.png',
    '/clients/astra/js/index.html',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
