// Navigate Germany — Service Worker
// Caches all module pages and assets for offline use.
// Emergency numbers always available offline.

const CACHE_NAME = 'navigate-germany-v1';
const OFFLINE_URL = '/navigate-germany/offline.html';

const PRECACHE_URLS = [
  '/navigate-germany/',
  '/navigate-germany/index.html',
  '/navigate-germany/styles.css',
  '/navigate-germany/home.js',
  '/navigate-germany/modules/emergency.html',
  '/navigate-germany/modules/housing.html',
  '/navigate-germany/modules/jobs.html',
  '/navigate-germany/modules/legal.html',
  '/navigate-germany/modules/doctors.html',
  '/navigate-germany/modules/banking.html',
  '/navigate-germany/modules/costs.html',
  '/navigate-germany/modules/language.html',
  '/navigate-germany/modules/family.html',
  '/navigate-germany/modules/bureaucracy.html',
  '/navigate-germany/modules/transport.html',
  '/navigate-germany/modules/education.html',
  '/navigate-germany/modules/modules-shared.css',
  '/navigate-germany/offline.html',
];

// Install: cache all critical pages
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching offline pages');
      return cache.addAll(PRECACHE_URLS.map(url => new Request(url, { cache: 'reload' })));
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network first, fall back to cache, fall back to offline page
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Return offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_URL);
          }
        })
      )
  );
});
