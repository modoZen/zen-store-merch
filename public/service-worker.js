/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
const doCache = false;
const CACHE_NAME = 'pwa-cache';

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        // eslint-disable-next-line consistent-return
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log(`Deleting cache: ${key}`)
            return caches.delete(key);
          }
        }))
      )
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          fetch("manifest.json")
            .then(response => {
              response.json()
            })
            .then(assets => {
              const urlsToCache = [
                "/",
                assets["bundle.js"]
              ]
              cache.addAll(urlsToCache)
              console.log('cached');
            })
        })
    );
  }
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then((response) => response || fetch(event.request))
    );
  }
});