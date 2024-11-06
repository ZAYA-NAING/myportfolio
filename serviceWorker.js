const myPortfolio = "my-portfolio-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
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

self.addEventListener("install", installEvent => {
  console.log(installEvent);
  installEvent.waitUntil(
    caches.open(myPortfolio).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});