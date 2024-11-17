const MY_PORTFOLIO = "my-portfolio-v1",
  assets = [
    "/",
    "/index.html",
    "/style.min.css",
    "/main.js",
    "/manifest.webmanifest",
    "/scripts/language-boilerplate.js",
    "/scripts/one-page-nav.js",
    "/assets/icons/icon-72x72.png",
    "/assets/icons/icon-96x96.png",
    "/assets/icons/icon-128x128.png",
    "/assets/icons/icon-144x144.png",
    "/assets/icons/icon-152x152.png",
    "/assets/icons/icon-192x192.png",
    "/assets/icons/icon-384x384.png",
    "/assets/icons/icon-512x512.png",
  ];

// Do not put in cache network errors
async function cache(request, response) {
  if (response.type === "error" || response.type === "opaque") {
    return Promise.resolve();
  }

  return caches
    .open(MY_PORTFOLIO)
    .then((cache) => cache.put(request, response.clone()));
}

/** Caching process */
self.addEventListener("install", (s) => {
  // self.skipWaiting(),
  s.waitUntil(
    caches.open(MY_PORTFOLIO).then((s) => {
      s.addAll(assets);
    })
  );
});
/**  Check if the request has already been cached otherwise request network */
self.addEventListener("fetch", (event) => {
  // Cache-First Strategy
  event.respondWith(
    caches
      .match(event.request)
      .then((cached) => cached || fetch(event.request))
      .then(
        (response) => {
          console.log(response);
          return cache(event.request, response) // put response in cache
          .then(() => response) // resolve promise with the network response
        }
         
      )
  );
});
// Delete any unexpected caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => keys.filter((key) => key !== MY_PORTFOLIO))
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            console.log(`Deleting cache ${key}`);
            return caches.delete(key);
          })
        )
      )
  );
});
