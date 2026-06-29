/* read-tracker.js — Majmaʿ
   Marque automatiquement un essai comme "lu" et expose l'état global de lecture.
   Stockage : même clé que les parcours (majma_parcours_v2), sous-objet "_read".
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

  // Marquer la page courante comme lue (après un court délai = lecture réelle, pas un rebond)
  var slug = currentSlug();
  if(slug && NON_ESSAIS.indexOf(slug) === -1){
    setTimeout(function(){ markRead(slug); }, 1500);
  }
})();
