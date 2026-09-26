// =====================================================================
// Système de traduction de Dishful. Fichier séparé, chargé AVANT app.js,
// pour que window.I18N.t() / .td() soient disponibles dès le premier rendu
// dynamique de l'app (cartes de recettes, etc.) — voir I18N.ready plus bas,
// attendu au tout début de boot() dans app.js.
//
// Le français reste la langue interne des données (noms d'aliments/outils
// stockés dans les recettes, clés de FOOD_NUTRITION...) : ce fichier ne
// traduit QUE l'affichage, jamais les clés utilisées pour les calculs ou
// les recherches en base. Le contenu généré par les utilisateurs (titres,
// descriptions, textes d'étapes...) n'est pas traduit non plus : seule
// l'interface (et les catalogues finis : catégories, outils, aliments,
// allergènes...) l'est.
// =====================================================================
window.I18N = (function () {
  const SUPPORTED = ['fr', 'en', 'pt', 'es', 'de', 'it', 'ru', 'sv', 'zh', 'hi', 'ar'];
  const FLAGS = { fr: '🇫🇷', en: '🇬🇧', pt: '🇵🇹', es: '🇪🇸', de: '🇩🇪', it: '🇮🇹', ru: '🇷🇺', sv: '🇸🇪', zh: '🇨🇳', hi: '🇮🇳', ar: '🇸🇦' };
  const NAMES = { fr: 'Français', en: 'English', pt: 'Português', es: 'Español', de: 'Deutsch', it: 'Italiano', ru: 'Русский', sv: 'Svenska', zh: '中文', hi: 'हिन्दी', ar: 'العربية' };
  const RTL_LANGS = ['ar'];

  function detect_default_lang() {
    const nav = ((navigator.language || 'fr').split('-')[0] || 'fr').toLowerCase();
    return SUPPORTED.includes(nav) ? nav : 'fr';
  }

  let current = localStorage.getItem('dishful_lang') || detect_default_lang();
  if (!SUPPORTED.includes(current)) current = 'fr';

  const cache = {};

  async function load(lang) {
    if (cache[lang]) return cache[lang];
    try {
      const res = await fetch(`locales/${lang}.json`);
      cache[lang] = await res.json();
    } catch (err) {
      console.error('[Dishful i18n] Impossible de charger la langue', lang, err);
      cache[lang] = { ui: {}, data: {} };
    }
    return cache[lang];
  }

  function get_nested(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  // Traduction d'une chaîne d'interface statique (clé pointée -> texte).
  function t(key, vars) {
    let val = get_nested(cache[current] && cache[current].ui, key);
    if (val === undefined) val = get_nested(cache.fr && cache.fr.ui, key);
    if (val === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        val = val.replace(new RegExp(`\\{\\{${k}\\}\\}`, 'g'), vars[k]);
      });
    }
    return val;
  }

  // Traduction d'affichage pour un catalogue fini (catégories, outils, aliments,
  // allergènes, unités...) — `frValue` est toujours la clé canonique française ;
  // si aucune traduction n'existe (ex : aliment personnalisé ajouté par un
  // utilisateur), on retombe simplement sur le nom français d'origine.
  function td(category, frValue) {
    if (!frValue) return frValue;
    const table = cache[current] && cache[current].data && cache[current].data[category];
    if (table && table[frValue] !== undefined) return table[frValue];
    return frValue;
  }

  function apply_translations(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    root.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    root.querySelectorAll('[data-i18n-title]').forEach((el) => {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    root.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
  }

  function update_switcher_ui() {
    document.querySelectorAll('.lang-switcher-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === current);
    });
    const label = document.getElementById('lang_switcher_current');
    if (label) label.textContent = FLAGS[current] || FLAGS.fr;
  }

  // Changer de langue relance simplement la page : tout le contenu déjà
  // rendu dynamiquement (cartes de recettes, listes d'aliments, badges...)
  // se re-génère alors correctement dans la nouvelle langue, sans avoir à
  // traquer chaque endroit du code qui affiche du texte traduit.
  function set_lang(lang) {
    if (!SUPPORTED.includes(lang) || lang === current) return;
    // Laisse app.js sauver l'état de la page courante (onglet, brouillon en cours dans
    // l'assistant de publication...) dans sessionStorage avant le rechargement, pour ne
    // pas perdre ce qu'on était en train de faire juste en changeant de langue.
    window.dispatchEvent(new CustomEvent('dishful:before-lang-switch'));
    localStorage.setItem('dishful_lang', lang);
    location.reload();
  }

  function get_lang() {
    return current;
  }

  function wire_switcher() {
    document.querySelectorAll('.lang-switcher-btn').forEach((btn) => {
      btn.addEventListener('click', () => set_lang(btn.dataset.lang));
    });
    const toggle = document.getElementById('lang_switcher_toggle');
    const menu = document.getElementById('lang_switcher_menu');
    if (toggle && menu) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('open');
      });
      document.addEventListener('click', () => menu.classList.remove('open'));
    }
  }

  async function init() {
    await load('fr');
    if (current !== 'fr') await load(current);
    document.documentElement.lang = current;
    document.documentElement.dir = RTL_LANGS.includes(current) ? 'rtl' : 'ltr';
    apply_translations(document);
    wire_switcher();
    update_switcher_ui();
  }

  const ready = init();

  return { t, td, apply: apply_translations, setLang: set_lang, getLang: get_lang, ready, SUPPORTED, FLAGS, NAMES, isRTL: () => RTL_LANGS.includes(current) };
})();
