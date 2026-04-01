/* ============================================================
   IMPERIUM PRIVATE PROTECTION – Language Auto-Detection
   Runs on FR pages. Redirects English-speaking users to /en/
   ============================================================ */
(function () {
  // If user has manually chosen a language, respect it
  var stored = localStorage.getItem('imperium_lang');
  if (stored) return;

  var lang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
  if (!lang.toLowerCase().startsWith('en')) return;

  // Map current FR page to EN equivalent
  var page = window.location.pathname.split('/').pop().replace(/\/$/, '') || 'index.html';
  var map = {
    'index.html'                    : '/en/',
    ''                              : '/en/',
    'protection-rapprochee.html'    : '/en/close-protection.html',
    'protection-personnalite.html'  : '/en/vip-protection.html',
    'accompagnement-international.html': '/en/international-escort.html',
    'securisation-residence.html'   : '/en/residence-security.html',
    'intelligence-analyse-risque.html': '/en/intelligence-risk.html',
    'cyber-securite.html'           : '/en/cyber-security.html'
  };

  var dest = map[page] !== undefined ? map[page] : '/en/';
  window.location.replace(dest);
})();
