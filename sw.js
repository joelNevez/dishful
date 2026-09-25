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
  );
});

// Pas de handler 'fetch' du tout : aucune requête n'est interceptée pendant
// la (très brève) fenêtre où ce service worker est encore actif.
//
// Volontairement PAS de client.navigate()/reload forcé ici : ça avait l'air
// pratique pour que le nettoyage s'applique tout de suite, mais combiné au
// re-enregistrement de pwa.js à chaque chargement (tant qu'un enregistrement
// existe), le moindre décalage entre "unregister() a fini" et "le nouveau
// chargement revérifie déjà" rebouclait — page qui se recharge en boucle
// jusqu'au plantage. Sans reload forcé, l'onglet déjà ouvert garde son
// ancien SW jusqu'à sa PROCHAINE navigation naturelle (à ce moment-là plus
// aucun SW n'est enregistré) : un peu moins immédiat, mais aucun risque de
// boucle.
