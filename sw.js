// asignar un nombre y versión al cache

const CACHE_NAME = "v1_Scooby_PWA",
  urlsToCache = [
    "./",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
    "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap",
    "./styles.css",
    "./script.js",
    "./fonts/scooby.ttf",
    "./img/favicon.png",
    "./img/scooby1.jpg",
    "./img/scooby3.jpg",
    "./img/shaggy.jpg",
  ];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("Falló el registro del caché" + err))
  );
});

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request);
    })
  );
});
