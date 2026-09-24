// Enregistrement du service worker (voir sw.js) : rend l'appli installable
// sur l'écran d'accueil et utilisable hors connexion. Fichier séparé
// d'app.js/mobile.js car ça ne concerne ni le site desktop ni le mode
// téléphone en particulier — c'est une préoccupation transverse aux deux.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.error('[Dishful] Échec de l\'enregistrement du service worker :', err);
    });
  });
}
