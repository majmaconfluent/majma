/* read-tracker.js — Majmaʿ
   Marque un essai comme "lu" et expose l'état global de lecture.
   Stockage : même clé que les parcours (majma_parcours_v2), sous-objet "_read".

   MARQUAGE : un essai est marqué lu quand le lecteur atteint la fin du
   texte (scroll jusqu'au bloc .reading, à 85% de sa hauteur), pas après un
   simple délai de présence sur la page. Ancien comportement (setTimeout
   1500ms) marquait un essai "lu" même si l'utilisateur n'avait fait que
   l'ouvrir par erreur ou le survoler en navigant — d'où des essais
   apparaissant cochés sans lecture réelle.
*/
(function(){
  'use strict';
  var SK = 'majma_parcours_v2';

  function getState(){ try { return JSON.parse(localStorage.getItem(SK) || '{}'); } catch(e){ return {}; } }
  function saveState(s){ try { localStorage.setItem(SK, JSON.stringify(s)); } catch(e){} }

  // slug de la page courante (sans .html)
  function currentSlug(){
    var p = location.pathname.split('/').pop() || '';
    return p.replace(/\.html$/, '');
  }

  // Liste des slugs considérés comme des essais (pas les pages de navigation)
  var NON_ESSAIS = ['index','le-coran','lame','le-sens','apropos','carte','glossaire','parcours','figures','modele','template','freud-et-jung','le-desir-de-lautre'];

  function markRead(slug){
    if(!slug || NON_ESSAIS.indexOf(slug) > -1) return;
    var s = getState();
    if(!s._read) s._read = {};
    if(!s._read[slug]){
      s._read[slug] = Date.now();
      saveState(s);
      emitChange(slug, true);
    }
  }

  function emitChange(slug, isRead){
    try {
      window.dispatchEvent(new CustomEvent('majma:read-changed', { detail: { slug: slug, isRead: isRead } }));
    } catch(e){}
  }

  function unmarkRead(slug){
    if(!slug) return;
    var s = getState();
    if(s._read && s._read[slug]){
      delete s._read[slug];
      saveState(s);
      emitChange(slug, false);
    }
  }

  // API publique
  window.MajmaRead = {
    isRead: function(slug){ var s=getState(); return !!(s._read && s._read[slug]); },
    allRead: function(){ var s=getState(); return s._read || {}; },
    countRead: function(slugs){ var s=getState(); var r=s._read||{}; return slugs.filter(function(x){return r[x];}).length; },
    mark: markRead,
    unmark: unmarkRead
  };

  // Marquer la page courante comme lue quand le lecteur atteint la fin du
  // texte (scroll), pas après un simple délai. On observe la progression
  // de scroll dans le bloc .reading ; au-delà de 85% de sa hauteur, on
  // considère que l'essentiel du texte a été parcouru.
  var slug = currentSlug();
  if(slug && NON_ESSAIS.indexOf(slug) === -1){
    var triggered = false;
    var ticking = false;
    function checkScrollProgress(){
      if(triggered) return;
      var reading = document.querySelector('.reading');
      if(!reading) return;
      var rect = reading.getBoundingClientRect();
      var readingHeight = reading.scrollHeight || rect.height;
      var readingTop = rect.top + window.scrollY;
      var readingBottom = readingTop + readingHeight;
      var viewBottom = window.scrollY + window.innerHeight;
      var threshold = readingTop + readingHeight * 0.85;
      if(viewBottom >= threshold){
        triggered = true;
        markRead(slug);
        window.removeEventListener('scroll', onScroll);
      }
    }
    // CORRECTIF : getBoundingClientRect() force un recalcul de layout coûteux.
    // L'appeler à chaque event 'scroll' (qui peut se déclencher des dizaines
    // de fois par seconde sur mobile) pouvait rendre le défilement saccadé.
    // On limite désormais à un calcul par frame via requestAnimationFrame.
    function onScroll(){
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(function(){
        checkScrollProgress();
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    // Vérifier aussi à l'arrivée (essai déjà court, visible sans scroll,
    // ou ouverture directe avec ancre en bas de page)
    setTimeout(checkScrollProgress, 600);
  }
})();
