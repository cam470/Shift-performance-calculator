/* Shift Report Lite service worker.
   Lets the app be installed on phones and open with a weak signal or none.

   How it works:
   - It only ever handles this site's own files. It never contacts another
     server, and the app has no data to send.
   - App files: try the network first so updates show straight away, and
     fall back to the saved copy when there's no signal.
   - Training photos: always loaded straight from the site.

   When you change the list below, bump VERSION so phones pick it up. */
const VERSION = "lite-v1";
const CACHE = "shift-lite-" + VERSION;
const APP_SHELL = [
  "./",
  "index.html",
  "nightshift.css",
  "training-content.js",
  "routes-config.js",
  "manifest.webmanifest",
  "fonts/archivo-latin.woff2",
  "fonts/archivo-latin-ext.woff2",
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
      .then(keys => Promise.all(keys.filter(k => k.startsWith("shift-lite-") && k !== CACHE).map(k => caches.delete(k))))
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

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Only this site's own files. Anything else is left alone (and the page's
  // Content-Security-Policy blocks it anyway).
  if (url.origin !== self.location.origin) return;
  // Training photos load straight from the site, so a photo is never stuck as "missing".
  if (url.pathname.includes("/training-images/")) return;
  event.respondWith(networkFirst(req));
});
