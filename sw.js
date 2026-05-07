const CACHE_NAME = 'horsley-v2'; // Bumped version to force an update
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './data.js',           // The new narrative engine!
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Install the service worker and cache everything
self.addEventListener('install', (event) => {
    // Skip waiting ensures the new service worker takes over immediately
    self.skipWaiting(); 
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Clean up old caches when a new version is activated
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Serve cached files when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
