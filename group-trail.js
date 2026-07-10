/* group-trail.js — Majmaʿ
   Affiche un fil de reprise ("1 . 2 . 3") sous le kicker des pages qui
   appartiennent a un groupe d'initiation (GROUPS dans parcours.js). Ces
   groupes ne sont PAS des parcours : chaque texte se lit seul, l'ordre
   n'est qu'une suggestion. Le fil sert seulement a montrer ou l'on est et
   a permettre d'y revenir si on quitte la page (ex. bouton retour), ce que
   le kicker seul ("1 sur 3") ne permettait pas.
*/
(function(){
  'use strict';
  if(!window.MAJMA_GROUPS) return;

  function currentSlug(){
    var p = location.pathname.split('/').pop() || '';
    return p.replace(/\.html$/, '');
  }

  function isRead(slug){
    if(window.MajmaRead && typeof window.MajmaRead.isRead === 'function'){
      return window.MajmaRead.isRead(slug);
    }
    return false;
  }

  function findGroup(slug){
    var groups = window.MAJMA_GROUPS;
    for(var key in groups){
      if(groups[key].slugs.indexOf(slug) > -1) return groups[key];
    }
    return null;
  }

  function render(){
    var slug = currentSlug();
    var group = findGroup(slug);
    var mount = document.getElementById('grpTrail');
    if(!group || !mount) return;

    var html = '<div class="grp-trail" aria-label="' + group.name + '">';
    group.slugs.forEach(function(s, i){
      if(i > 0) html += '<span class="grp-line"></span>';
      var cls = 'grp-dot';
      if(s === slug) cls += ' is-current';
      else if(isRead(s)) cls += ' is-done';
      if(s === slug){
        html += '<span class="' + cls + '" aria-current="page">' + (i+1) + '</span>';
      } else {
        html += '<a class="' + cls + '" href="' + s + '.html">' + (i+1) + '</a>';
      }
    });
    html += '</div>';
    mount.innerHTML = html;
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
  window.addEventListener('majma:read-changed', render);
})();
