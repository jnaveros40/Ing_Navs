// Juan Naveros Portfolio Service Worker
const CACHE_NAME = 'juan-naveros-portfolio-v1.0.0';
const STATIC_CACHE = 'static-cache-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-cache-v1.0.0';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/web/icon-192.png',
  '/web/icon-512.png',
  '/web/favicon.ico',
  '/Projects/InmoSoft.jpg',
  '/Projects/Grupo_Ceiba.jpg',
  '/Projects/Scouting_Goal.jpg',
  '/Projects/Atomic_Ed_Vision.jpg',
  '/Projects/Learn_AI.jpg',
  '/Projects/my_Finanzas_App.jpg',
  '/Projects/Esencia_Viva.jpg',
  '/Projects/LujoReal.jpg'
];

// Install event
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    }).catch(error => {
      console.log('[SW] Error caching static assets:', error);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache-first strategy for static assets, Network-first for dynamic content
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) return;

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match('/');
      })
    );
    return;
  }

  // Handle static assets (images, JS, CSS)
  if (
    request.destination === 'image' ||
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.url.includes('/Projects/') ||
    request.url.includes('/web/')
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Handle API requests or dynamic content
  event.respondWith(networkFirst(request));
});

// Cache-first strategy
async function cacheFirst(request) {
  try {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }

    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Cache-first failed:', error);
    return new Response('Offline content not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    
    return new Response('Offline - content not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(sendPendingMessages());
  }
});

// Handle form submissions in offline mode
async function sendPendingMessages() {
  // Implementation for handling offline form submissions
  console.log('[SW] Processing background sync for contact forms');
}

// Push notification handler
self.addEventListener('push', event => {
  const options = {
    body: 'Nueva actualización disponible en el portfolio de Juan Naveros',
    icon: '/web/icon-192.png',
    badge: '/web/icon-192.png',
    vibrate: [100, 50, 100],
    actions: [
      {
        action: 'view',
        title: 'Ver Portfolio',
        icon: '/web/icon-192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Juan Naveros Portfolio', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});