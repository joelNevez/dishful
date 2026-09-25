// =====================================================================
// Ce service worker ne fait plus rien d'autre que se retirer proprement.
//
// L'ancienne version (cache de l'app shell + des images pour un mode hors
// connexion) a été retirée après un rapport de plantage du navigateur en
// mode mobile, sans qu'on ait pu confirmer avec certitude lequel de ses
// bugs en était la cause (au moins deux trouvés à la relecture : un
// event.respondWith(null) possible en cas d'échec réseau sans entrée en
// cache, et les images cross-origin — donc la quasi-totalité des photos de
// recettes, hébergées ailleurs — jamais mises en cache à cause du check
// response.ok, toujours faux sur une réponse "opaque"). Plutôt que de
// livrer un correctif non vérifiable sur l'appareil concerné, on retire
// entièrement l'interception réseau : un navigateur qui a déjà installé
// l'ancienne version doit recevoir CE fichier pour se nettoyer, donc
// pwa.js continue à l'enregistrer une dernière fois avant d'arrêter.
// =====================================================================

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.map((name) => caches.delete(name))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll())
      .then((clients) => clients.forEach((client) => client.navigate(client.url)))
  );
});

// Pas de handler 'fetch' du tout : aucune requête n'est interceptée pendant
// la (très brève) fenêtre où ce service worker est encore actif.
