// =========================================
//   La luz de la luna — Service Worker
//   Permite usar la app sin internet
// =========================================
const CACHE_NOMBRE = "luna-v1";

// Usar rutas relativas es más limpio y evita errores si cambia el dominio
const ARCHIVOS = [
  "./", // Guarda la raíz
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./imagenes/icono-192.webp",
  "./imagenes/icono-512.webp",
  "./imagenes/escena1.webp",
  "./imagenes/escena2.webp",
  "./imagenes/escena8.webp",
  "./imagenes/escena9.webp",
  "./imagenes/escena12.webp",
  "./imagenes/gato1.webp",
  "./imagenes/gato2.webp",
  "./imagenes/gato3.webp",
  "./imagenes/gato4.webp",
  "./imagenes/gato5.webp",
  "./imagenes/gato6.webp",
  "./imagenes/gato7.webp",
  "./imagenes/gato8.webp",
  "./imagenes/gato9.webp",
  "./imagenes/gato10.webp",
  "./imagenes/gato11.webp",
  "./imagenes/gato12.webp",
  "./imagenes/gato13.webp",
  "./imagenes/gato14.webp",
  "./imagenes/luna1.webp",
  "./imagenes/luna2.webp",
  "./imagenes/luna3.webp",
  "./imagenes/fondo-control.webp",
  "./imagenes/boton-regresar.webp",
  "./imagenes/boton-jugar.webp",
  "./imagenes/boton-avanzar.webp",
  "./imagenes/boton-casita.webp",
  "./imagenes/boton-comenzar.webp",
  "./imagenes/mariposa.webp",
  "./imagenes/bola.webp",
  "./imagenes/corazon.webp",
  "./audios/lectura1.mp3",
  "./audios/lectura2.mp3",
  "./audios/lectura3.mp3",
  "./audios/lectura4.mp3",
  "./audios/lectura5.mp3",
  "./audios/lectura6.mp3",
  "./audios/lectura7.mp3",
  "./audios/lectura8.mp3",
  "./audios/lectura9.mp3",
  "./audios/lectura10.mp3",
  "./audios/lectura11.mp3",
  "./audios/lectura12.mp3",
  "./audios/lectura13.mp3",
  "./audios/lectura14.mp3"
];

// Instalación mejorada a prueba de fallos 404
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NOMBRE).then(function(cache) {
      // Mapeamos cada archivo para que si uno falla, los demás sí se guarden
      return Promise.all(
        ARCHIVOS.map(function(url) {
          return cache.add(url).catch(function(error) {
            console.error("Fallo al guardar en caché:", url, error);
          });
        })
      );
    })
  );
  self.skipWaiting();
});

// Activación (Limpieza de cachés antiguos)
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

// Estrategia de respuesta: Cache First (Primero Caché, si no, busca en Red)
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(respuesta) {
      return respuesta || fetch(event.request);
    })
  );
});