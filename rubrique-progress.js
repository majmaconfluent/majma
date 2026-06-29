/* rubrique-progress.js — Majmaʿ
   Sur les pages rubrique (Les textes / L'âme / Le sens) :
   - calcule combien d'essais de la rubrique sont lus
   - affiche une barre de progression en haut de la liste
   - marque chaque essai déjà lu d'une coche
   Dépend de read-tracker.js (window.MajmaRead).
*/
(function(){
  'use strict';
  if(!window.MajmaRead) return;

  function slugFromHref(href){
    return (href || '').split('/').pop().replace(/\.html$/, '').split('#')[0];
  }

  document.addEventListener('DOMContentLoaded', function(){
    var rows = Array.prototype.slice.call(document.querySelectorAll('.erow[href]'));
    if(rows.length === 0) return;

    // dédoublonner par slug (un essai peut apparaître dans plusieurs groupes)
    var slugs = {};
    rows.forEach(function(a){ slugs[slugFromHref(a.getAttribute('href'))] = true; });
    var uniqueSlugs = Object.keys(slugs);
    var total = uniqueSlugs.length;
    var readN = window.MajmaRead.countRead(uniqueSlugs);

    // injecter les styles
    var st = document.createElement('style');
    st.textContent = [
      '.rub-progress{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:1rem 1.15rem;margin:0 auto 1.6rem;max-width:var(--measure,640px);}',
      '.rub-progress-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.55rem;gap:1rem;}',
      '.rub-progress-top .lbl{font-family:var(--display);font-weight:700;font-size:.98rem;color:var(--ink);}',
      '.rub-progress-top .cnt{font-size:.84rem;color:var(--ink-faint);}',
      '.rub-track{height:7px;background:var(--paper-deep);border-radius:4px;overflow:hidden;}',
      '.rub-fill{height:100%;background:var(--accent);border-radius:4px;transition:width .5s ease;}',
      // réaligner les erow qui portent une icône : tout à gauche, meta à droite
      '.erow.has-ic{justify-content:flex-start !important;align-items:center !important;gap:.5rem !important;padding-left:.7rem !important;padding-right:.8rem !important;}',
      '.erow.has-ic::before{display:none !important;}',
      '.erow-num{flex:0 0 auto;width:1.2rem;text-align:center;font-family:var(--display);font-weight:700;font-size:.78rem;color:var(--accent);opacity:.65;}',
      '.erow-ic{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;width:1.9rem;height:1.9rem;}',
      '.erow-ic svg{width:1.7rem;height:1.7rem;}',
      '.erow.has-ic .erow-title{flex:1 1 auto;text-align:left;}',
      '.erow.has-ic .erow-meta{flex:0 0 auto;margin-left:.5rem;}',
      '.erow.is-read .erow-ic{opacity:.5;}',
      '.erow.is-read .erow-title{color:var(--ink-faint);}',
      '.erow-readmark{display:inline-flex;align-items:center;justify-content:center;width:1.15rem;height:1.15rem;border-radius:50%;background:var(--accent);color:#fff;font-size:.7rem;margin-left:.5rem;flex:0 0 auto;vertical-align:middle;}'
    ].join('');
    document.head.appendChild(st);

    // marquer les erow lus + ajouter l'icône thématique alignée
    rows.forEach(function(a, idx){
      var slug = slugFromHref(a.getAttribute('href'));
      a.classList.add('has-ic');
      // icône thématique (placée tout à gauche, le numéro a été retiré)
      if(window.MajmaIcons && !a.querySelector('.thematic-ic')){
        var holder = document.createElement('span');
        holder.className = 'erow-ic';
        holder.innerHTML = window.MajmaIcons.svgFor(slug, 'var(--accent)');
        a.insertBefore(holder, a.firstChild);
      }
      if(window.MajmaRead.isRead(slug)){
        a.classList.add('is-read');
        var t = a.querySelector('.erow-title');
        if(t && !t.querySelector('.erow-readmark')){
          var mark = document.createElement('span');
          mark.className = 'erow-readmark';
          mark.textContent = '✓';
          mark.title = 'Lu';
          t.appendChild(mark);
        }
      }
    });

    // barre de progression, insérée avant la première liste d'essais
    var firstGroup = document.querySelector('.track2');
    if(firstGroup){
      var pct = Math.round(readN / total * 100);
      var box = document.createElement('div');
      box.className = 'rub-progress';
      box.innerHTML =
        '<div class="rub-progress-top"><span class="lbl">Votre progression</span>' +
        '<span class="cnt">' + readN + ' / ' + total + ' essais lus</span></div>' +
        '<div class="rub-track"><div class="rub-fill" style="width:' + pct + '%"></div></div>';
      firstGroup.parentNode.insertBefore(box, firstGroup);
    }
  });
})();
