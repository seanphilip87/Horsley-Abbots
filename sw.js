const CACHE_NAME = 'horsley-v3'; // Bumped version to force an update
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './data.js',           
    './manifest.json',
    './icon-192.png',
    './icon-512.png',
    // Newly added assets
    './assets/village_hall.png',
    './assets/gloved_fist.png',
    './assets/churchyard.png',
    './assets/manor_house.png',
    './assets/mini_mart.png',
    './assets/play_park.png',
    './assets/faffingdales.png',
    './assets/peacocks_queef.png',
    './assets/cricket_pavilion.png',
    './assets/barmaid.png',
    './assets/vicar.png',
    './assets/chef.png',
    './assets/butcher.png',
    './assets/minimart_owner.png',
    './assets/busybody.png',
    './assets/cleaver.png',
    './assets/gin_bottle.png',
    './assets/flapjack.png',
    './assets/stump.png',
    './assets/fan_belt.png',
    './assets/bell_pull.png',
    './assets/wellies.png',
    './assets/iron_key.png',
    './assets/lantern.png',
    './assets/theme.mp3'
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