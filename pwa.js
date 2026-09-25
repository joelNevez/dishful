// L'appli n'enregistre plus de service worker (voir sw.js pour pourquoi :
// rapport de plantage du navigateur en mode mobile, cause pas confirmée
// avec certitude, service worker retiré par précaution). Ce fichier ne fait
// donc plus qu'une chose : si un navigateur a déjà l'ancienne version
// installée (visite précédente), lui donner la nouvelle pour qu'elle se
// désinstalle proprement — jamais de nouvel enregistrement sinon.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    if (registrations.length === 0) return;
    // ?v=... casse le cache HTTP normal du navigateur (indépendant du Cache
    // Storage du service worker lui-même) sur ce fetch précis de sw.js : sans
    // ça, un serveur qui ne renvoie pas d'en-tête Cache-Control adapté peut
    // continuer à servir l'ANCIEN sw.js buggé pendant un bon moment malgré
    // register() rappelé à chaque page — exactement le genre de blocage qui
    // a empêché ce nettoyage de s'appliquer la dernière fois.
    navigator.serviceWorker.register('sw.js?v=' + Date.now()).catch((err) => {
      console.error('[Dishful] Échec du nettoyage du service worker :', err);
    });
  });
}
