// =========================================
//   Toby y los Fantasmas — Service Worker
//   Permite usar la app sin internet
// =========================================

const CACHE_NOMBRE = "toby-v1";

// Todos los archivos que se guardan para uso sin internet
const ARCHIVOS = [
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./imagenes/icono-toby.png",
  "./imagenes/pagina-01.png",
  "./imagenes/pagina-02.png",
  "./imagenes/pagina-03.png",
  "./imagenes/pagina-04.png",
  "./imagenes/pagina-05.png",
  "./imagenes/pagina-06.png",
  "./imagenes/pagina-07.png",
  "./imagenes/pagina-08.png",
  "./imagenes/pagina-09.png",
  "./imagenes/pagina-10.png",
  "./imagenes/pagina-11.png",
  "./imagenes/pagina-12.png",
  "./imagenes/pagina-13.png",
  "./imagenes/pagina-14.png",
  "./imagenes/fondo-control.png",
  "./imagenes/boton-regresar.png",
  "./imagenes/boton-jugar.png",
  "./imagenes/boton-avanzar.png",
  "./imagenes/boton-comenzar.png",
  "./imagenes/fantasma-01.png",
  "./imagenes/fantasma-02.png",
  "./imagenes/fantasma-03.png",
  "./audio/pagina-01.mp3",
  "./audio/pagina-02.mp3",
  "./audio/pagina-03.mp3",
  "./audio/pagina-04.mp3",
  "./audio/pagina-05.mp3",
  "./audio/pagina-06.mp3",
  "./audio/pagina-07.mp3",
  "./audio/pagina-08.mp3",
  "./audio/pagina-09.mp3",
  "./audio/pagina-10.mp3",
  "./audio/pagina-11.mp3",
  "./audio/pagina-12.mp3",
  "./audio/pagina-13.mp3",
  "./audio/pagina-14.mp3"
];

// Instalar — guarda todos los archivos en caché
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NOMBRE).then(function(cache) {
      return cache.addAll(ARCHIVOS);
    })
  );
  self.skipWaiting();
});

// Activar — limpia cachés viejos
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_NOMBRE;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch — sirve desde caché, sin internet funciona igual
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(respuesta) {
      return respuesta || fetch(event.request);
    })
  );
});
