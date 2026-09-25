// L'appli n'enregistre plus de service worker (voir sw.js pour pourquoi :
// rapport de plantage du navigateur en mode mobile, cause pas confirmée
// avec certitude, service worker retiré par précaution). Ce fichier ne fait
// donc plus qu'une chose : si un navigateur a déjà l'ancienne version
// installée (visite précédente), lui donner la nouvelle pour qu'elle se
// désinstalle proprement — jamais de nouvel enregistrement sinon.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    if (registrations.length === 0) return;
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.error('[Dishful] Échec du nettoyage du service worker :', err);
    });
  });
}
