/* Shift Report service worker.
   Lets the app be installed on phones and open with a weak signal.

   How it works:
   - App files (this site): try the network first so updates show straight
     away, and fall back to the saved copy when there's no signal.
   - Training photos: always loaded straight from the site.
   - Firebase and font files from Google: saved the first time they load,
     so the app can still start without signal.
   - Anything else (Firebase sign in and database calls) is left alone.

   When you change the list below, bump VERSION so phones pick it up. */
const VERSION = "v4";
const CACHE = "shift-report-" + VERSION;
const APP_SHELL = [
  "./",
  "index.html",
  "nightshift.css",
  "training-content.js",
  "routes-config.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(APP_SHELL.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("shift-report-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(req){
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    if (req.mode === "navigate") return (await cache.match("index.html")) || Response.error();
    return Response.error();
  }
}
async function cacheFirst(req){
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
  return res;
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin){
    // Training photos load straight from the site, so a photo is never stuck as "missing".
    if (url.pathname.includes("/training-images/")) return;
    return event.respondWith(networkFirst(req));
  }
  // Firebase code and Google fonts never change at the same address, so keep them.
  if ((url.hostname === "www.gstatic.com" && url.pathname.startsWith("/firebasejs/")) ||
      url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com"){
    return event.respondWith(cacheFirst(req));
  }
  // everything else, including Firebase sign in and database traffic, goes straight to the network
});
