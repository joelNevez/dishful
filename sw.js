// =====================================================================
// Service worker : cache l'app shell (HTML/CSS/JS/traductions/icônes) pour
// que l'appli s'ouvre même hors connexion, et met en cache les photos de
// recettes déjà vues au fil de la navigation pour qu'elles restent visibles
// hors connexion aussi (utile en cuisine, connexion pas toujours fiable).
//
// Ce qui n'est JAMAIS intercepté : tout appel à Supabase (auth, base de
// données, upload) — uniquement les requêtes GET de fichiers statiques et
// d'images sont concernées ici. Les données elles-mêmes restent toujours
// en direct, jamais servies depuis un cache obsolète.
// =====================================================================

const SHELL_CACHE = 'dishful-shell-v1';
const IMAGE_CACHE = 'dishful-images-v1';
const IMAGE_CACHE_MAX_ENTRIES = 80;

const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './mobile.css',
  './app.js',
  './mobile.js',
  './i18n.js',
  './manifest.json',
  './locales/fr.json',
  './locales/en.json',
  './locales/es.json',
  './locales/pt.json',
  './locales/de.json',
  './locales/zh.json',
  './locales/hi.json',
  './locales/ar.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => name !== SHELL_CACHE && name !== IMAGE_CACHE)
          .map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

// Sert depuis le cache immédiatement si présent (rapide, marche hors ligne),
// tout en relançant une requête réseau en tâche de fond pour rafraîchir le
// cache — les mises à jour de l'appli arrivent donc au fil de l'eau, sans
// avoir besoin de changer le nom du cache à chaque déploiement.
async function stale_while_revalidate(request, cache_name) {
  const cache = await caches.open(cache_name);
  const cached = await cache.match(request);
  const network_fetch = fetch(request).then((response) => {
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);
  return cached || network_fetch || fetch(request);
}

async function trim_cache(cache_name, max_entries) {
  const cache = await caches.open(cache_name);
  const keys = await cache.keys();
  if (keys.length <= max_entries) return;
  // Les clés les plus anciennes sont en tête (ordre d'insertion) : on retire
  // juste assez pour repasser sous la limite, pas de LRU précis nécessaire ici.
  await Promise.all(keys.slice(0, keys.length - max_entries).map((k) => cache.delete(k)));
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  // Seules les requêtes GET sont concernées : jamais les POST/PATCH/DELETE
  // (auth, écritures Supabase...) qui doivent toujours atteindre le réseau.
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Fichiers de l'appli elle-même (même origine, notre propre app shell).
  if (url.origin === self.location.origin) {
    event.respondWith(stale_while_revalidate(request, SHELL_CACHE));
    return;
  }

  // Photos (recettes, avatars...) : mise en cache opportuniste au fil de la
  // navigation, plafonnée pour ne pas grossir indéfiniment. Tout le reste
  // (appels API Supabase, polices, scripts CDN) part directement au réseau,
  // sans interception.
  if (request.destination === 'image') {
    event.respondWith(
      stale_while_revalidate(request, IMAGE_CACHE)
        .then((response) => { trim_cache(IMAGE_CACHE, IMAGE_CACHE_MAX_ENTRIES); return response; })
    );
  }
});
