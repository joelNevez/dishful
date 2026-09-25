// =====================================================================
// MODE MOBILE — toute la logique JS spécifique au mode téléphone :
// barre de navigation basse, carrousel d'onglets glissable, aperçu
// "Test mobile". Séparé d'app.js pour que le travail sur le site
// desktop (app.js) et le travail sur le mode mobile (ce fichier)
// avancent chacun de leur côté sans se marcher dessus.
//
// app.js et ce fichier sont deux IIFE indépendantes : aucune variable ni
// fonction de l'un n'est visible depuis l'autre sauf ce qui est posé
// explicitement sur window.Dishful (le "pont" entre les deux). Dans ce
// sens-ci (mobile.js -> app.js) : Dishful.switch_tab, .get_current_user,
// .get_visible_tab_name. Dans l'autre sens (app.js -> mobile.js, utilisé
// par switch_tab() pour savoir si le carrousel doit prendre le relais) :
// Dishful.is_mobile_mode, .MOBILE_SWIPE_TABS, .goto_mobile_slide, posés
// tout en bas de ce fichier. Chargé après app.js dans index.html, mais
// l'ordre des deux <script> n'a pas d'importance : rien ici n'appelle le
// pont de façon synchrone au chargement, seulement depuis des handlers
// d'événements (clic, swipe, resize) qui se déclenchent bien après que
// les deux fichiers aient fini de s'exécuter.
// =====================================================================
(function () {

  const Dishful = window.Dishful = window.Dishful || {};
  const auth_modal = document.getElementById('auth_modal');

  // Barre de navigation mobile (bas d'écran, façon Instagram) : les 4 premiers
  // boutons relaient simplement switch_tab, le bouton profil dépend de l'état de
  // connexion (profil si connecté, sinon ouvre la modale d'auth) comme l'avatar
  // du header desktop.
  document.querySelectorAll('.mobile-tab-btn[data-mobiletab]').forEach(btn => {
    btn.addEventListener('click', () => Dishful.switch_tab(btn.dataset.mobiletab));
  });
  document.getElementById('mobile_profile_tab_btn')?.addEventListener('click', () => {
    if (Dishful.get_current_user()) Dishful.switch_tab('profile'); else auth_modal.classList.remove('hidden');
  });

  // Aperçu du mode mobile : une vraie iframe (largeur ~390px), pas un simple
  // habillage CSS de la page — les @media (max-width:700px) et le carrousel JS
  // s'y déclenchent donc tout seuls, exactement comme sur un vrai téléphone.
  // Le src n'est posé qu'à la première ouverture (même origine, donc la
  // session/le localStorage sont partagés) pour ne pas perdre la position de
  // navigation de l'aperçu à chaque réouverture.
  (function setup_mobile_preview() {
    const overlay = document.getElementById('mobile_preview_overlay');
    const iframe = document.getElementById('mobile_preview_iframe');
    const open_btn = document.getElementById('open_mobile_preview_btn');
    const close_btn = document.getElementById('close_mobile_preview_btn');
    if (!overlay || !iframe || !open_btn) return;

    function open_preview() {
      if (!iframe.src) iframe.src = 'index.html';
      overlay.classList.remove('hidden');
    }
    function close_preview() {
      overlay.classList.add('hidden');
    }

    open_btn.addEventListener('click', open_preview);
    close_btn?.addEventListener('click', close_preview);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close_preview(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !overlay.classList.contains('hidden')) close_preview();
    });
  })();

  // =====================================================================
  // Carrousel glissable entre les 5 onglets principaux (mode mobile, sous
  // 700px) : feed / recherche / publier / classement / profil se glissent
  // comme les pages d'une appli native, dans le même ordre que la barre du
  // bas. Le détail recette et le profil public restent des pages plein écran
  // à part (jamais un slide du carrousel) — voir la structure de <main> dans
  // index.html (#mobile_swipe_viewport > #mobile_swipe_track).
  // =====================================================================
  const MOBILE_SWIPE_TABS = ['feed', 'search', 'publish', 'leaderboard', 'profile'];
  const mobile_swipe_mq = window.matchMedia('(max-width: 700px)');
  function is_mobile_mode() { return mobile_swipe_mq.matches; }

  let current_mobile_slide_index = 0;

  function mobile_swipe_els() {
    return {
      viewport: document.getElementById('mobile_swipe_viewport'),
      track: document.getElementById('mobile_swipe_track'),
    };
  }

  // La fenêtre garde sa hauteur NATURELLE (celle du plus grand des 5 onglets) —
  // volontairement pas de hauteur pilotée/mesurée en JS ici. Ça a été tenté
  // (coller la hauteur au contenu de l'onglet actif via ResizeObserver) mais
  // .mobile-swipe-viewport a overflow:hidden sur les deux axes (voir le CSS,
  // piège overflow-x/overflow-y expliqué là-bas) : la moindre hauteur mesurée
  // un peu fausse (contenu chargé de façon async, police qui finit de
  // charger...) faisait apparaître un scroll interne et un effet de
  // scintillement. Le compromis — un peu de vide sous un onglet court — est
  // largement préférable à ce bug.
  function goto_mobile_slide(tab_name, animate) {
    const { viewport, track } = mobile_swipe_els();
    const index = MOBILE_SWIPE_TABS.indexOf(tab_name);
    if (!viewport || !track || index === -1) return;
    current_mobile_slide_index = index;
    track.style.transition = animate === false ? 'none' : '';
    track.style.transform = `translateX(-${index * viewport.clientWidth}px)`;
    if (animate === false) { void track.offsetHeight; track.style.transition = ''; }
  }

  // Le feed est déjà visible par défaut dans le HTML (pas de classe "hidden"),
  // il ne manque donc que de démasquer les 4 autres onglets du carrousel pour
  // que le rail flex soit complet dès le tout premier rendu mobile.
  function init_mobile_swipe_visibility() {
    if (!is_mobile_mode()) return;
    MOBILE_SWIPE_TABS.forEach(id => document.getElementById('tab-' + id)?.classList.remove('hidden'));
  }
  init_mobile_swipe_visibility();

  // Si la fenêtre change de mode en cours de session (rotation d'écran,
  // redimensionnement d'une fenêtre desktop) : on retrouve l'onglet réellement
  // affiché et on rappelle switch_tab pour que la logique d'affichage (masquage
  // classique vs carrousel) se remette dans le bon état pour le nouveau mode.
  mobile_swipe_mq.addEventListener('change', (e) => {
    let target;
    if (!e.matches) {
      // On quitte le mode mobile : plusieurs onglets du carrousel peuvent être
      // démasqués en même temps, get_visible_tab_name() (qui prend le premier
      // trouvé) ne suffit pas ici — seul l'index suivi sait lequel était affiché.
      const overlay_id = ['recipe-detail', 'public-profile'].find(
        id => !document.getElementById('tab-' + id)?.classList.contains('hidden')
      );
      target = overlay_id || MOBILE_SWIPE_TABS[current_mobile_slide_index] || 'feed';
    } else {
      target = Dishful.get_visible_tab_name ? Dishful.get_visible_tab_name() : 'feed';
    }
    Dishful.switch_tab(target);
  });

  // Geste de glissement au doigt : on ne capture le geste comme un swipe de
  // page qu'une fois le mouvement clairement horizontal (sinon un simple
  // scroll vertical du feed déclencherait un changement d'onglet), et jamais
  // quand il démarre dans un carrousel horizontal interne déjà existant
  // (chips de filtres, jours de la semaine des idées...) — celui-ci garde
  // alors son défilement natif intact.
  (function setup_mobile_swipe_gesture() {
    const { viewport, track } = mobile_swipe_els();
    if (!viewport || !track) return;

    let touching = false;
    let start_x = 0, start_y = 0, dx = 0, dy = 0;
    let start_offset_px = 0;
    let gesture = null; // null (indécis) | 'horizontal' | 'vertical'
    let started_in_h_scroller = false;

    function starts_inside_horizontal_scroller(target) {
      let el = target;
      while (el && el !== viewport) {
        if (el.scrollWidth > el.clientWidth + 1) {
          const overflow_x = getComputedStyle(el).overflowX;
          if (overflow_x === 'auto' || overflow_x === 'scroll') return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    viewport.addEventListener('touchstart', (e) => {
      if (!is_mobile_mode() || e.touches.length !== 1) return;
      touching = true;
      gesture = null;
      dx = 0; dy = 0;
      const t = e.touches[0];
      start_x = t.clientX; start_y = t.clientY;
      start_offset_px = current_mobile_slide_index * viewport.clientWidth;
      started_in_h_scroller = starts_inside_horizontal_scroller(e.target);
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      if (!touching || started_in_h_scroller) return;
      const t = e.touches[0];
      dx = t.clientX - start_x;
      dy = t.clientY - start_y;

      if (gesture === null) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        gesture = Math.abs(dx) > Math.abs(dy) * 1.3 ? 'horizontal' : 'vertical';
      }
      if (gesture !== 'horizontal') return;

      e.preventDefault();
      let next_px = start_offset_px - dx;
      const max_px = (MOBILE_SWIPE_TABS.length - 1) * viewport.clientWidth;
      if (next_px < 0) next_px *= 0.35;
      if (next_px > max_px) next_px = max_px + (next_px - max_px) * 0.35;
      track.style.transition = 'none';
      track.style.transform = `translateX(-${next_px}px)`;
    }, { passive: false });

    function end_gesture() {
      if (!touching) return;
      touching = false;
      track.style.transition = '';
      if (gesture !== 'horizontal') { gesture = null; return; }
      gesture = null;

      const threshold = viewport.clientWidth * 0.18;
      let target_index = current_mobile_slide_index;
      if (dx <= -threshold && current_mobile_slide_index < MOBILE_SWIPE_TABS.length - 1) target_index += 1;
      else if (dx >= threshold && current_mobile_slide_index > 0) target_index -= 1;

      Dishful.switch_tab(MOBILE_SWIPE_TABS[target_index]);
    }
    viewport.addEventListener('touchend', end_gesture);
    viewport.addEventListener('touchcancel', end_gesture);
  })();

  // Pont vers app.js : switch_tab() (mode desktop, masquage classique des
  // sections) doit savoir si le carrousel mobile doit prendre le relais à sa
  // place, et avec quelle fonction faire glisser l'onglet demandé.
  Dishful.is_mobile_mode = is_mobile_mode;
  Dishful.MOBILE_SWIPE_TABS = MOBILE_SWIPE_TABS;
  Dishful.goto_mobile_slide = goto_mobile_slide;

})();
