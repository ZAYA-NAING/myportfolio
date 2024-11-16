const myPortfolio = "my-portfolio",
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
self.addEventListener("install", (s) => {
  self.skipWaiting(),
    s.waitUntil(
      caches.open(myPortfolio).then((s) => {
        s.addAll(assets);
      })
    );
}),
  self.addEventListener("fetch", (s) => {
    console.log(s),
      s.respondWith(caches.match(s.request).then((n) => n || fetch(s.request)));
  });
