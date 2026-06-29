/* parcours.js — Majmaʿ · Logique des parcours de lecture */
(function() {
  'use strict';

  var SK = 'majma_parcours_v2';

  var PATHS = {
    foi: {
      name: 'Je questionne ma foi', ar: 'الإيمان', num: '1',
      steps: [
        { id:'a', href:'quest-ce-qu-une-lecture',      title:"Qu'est-ce qu'une lecture ?" },
        { id:'b', href:'la-source-et-le-fleuve',        title:'La source et le fleuve' },
        { id:'c', href:'averroes-la-raison',            title:'Averroès et le droit de la raison' },
        { id:'d', href:'le-libre-arbitre',              title:'Le libre arbitre et le décret' },
        { id:'e', href:'le-probleme-du-mal',            title:'Le problème du mal' },
        { id:'f', href:'le-coran-en-pratique',          title:'Le Coran, concrètement' },
        { id:'g', href:'les-deux-livres',               title:'Les deux livres' },
        { id:'h', href:'raison-et-revelation',          title:'Raison et révélation' },
      ]
    },
    ame: {
      name: 'Je veux me connaître', ar: 'النفس', num: '2',
      steps: [
        { id:'a', href:'la-fitra',                     title:'La fiṭra et la dignité' },
        { id:'b', href:'jung-en-dix-minutes',           title:"Ce qui agit sans qu'on le sache" },
        { id:'c', href:'ombre-et-nafs',                 title:'L\'ombre et le nafs' },
        { id:'d', href:'le-coeur',                      title:'Le cœur' },
        { id:'e', href:'maitriser-le-desir',            title:'Maîtriser le désir' },
        { id:'f', href:'le-confluent-des-deux-mers',    title:'Le confluent des deux mers' },
        { id:'g', href:'les-reves',                     title:'Les rêves' },
        { id:'h', href:'les-destins-du-moi',            title:'Les destins du moi' },
        { id:'i', href:'le-souffle',                    title:'Le souffle' },
      ]
    },
    texte: {
      name: 'Je lis le texte autrement', ar: 'القراءة', num: '3',
      steps: [
        { id:'a', href:'le-premier-mot',               title:'Le premier mot' },
        { id:'b', href:'quest-ce-qu-une-lecture',       title:"Qu'est-ce qu'une lecture ?" },
        { id:'c', href:'la-rhetorique-semitique',       title:'La rhétorique sémitique' },
        { id:'d', href:'la-lecture-symbolique',         title:'La lecture symbolique' },
        { id:'e', href:'les-mots-et-le-monde',          title:'Les mots et le monde' },
        { id:'f', href:'shahrour-le-livre-et-le-coran', title:'Shahrour : le Livre et le Coran' },
        { id:'g', href:'le-monde-imaginal',             title:'Le monde entre deux' },
        { id:'h', href:'le-sens-avant-le-comment',      title:'Le sens avant le comment' },
      ]
    },
    monde: {
      name: 'Je vis dans ce monde', ar: 'العالم', num: '4',
      steps: [
        { id:'a', href:'le-desenchantement',           title:'Le désenchantement du monde' },
        { id:'b', href:'le-scroll-et-la-pause',         title:'Le scroll et la pause' },
        { id:'c', href:'le-sens-malgre-tout',           title:'Le sens malgré tout' },
        { id:'d', href:'je-et-tu',                      title:'Je et Tu' },
        { id:'e', href:'la-finitude',                   title:'La finitude' },
        { id:'f', href:'l-univers-ajuste',              title:"L'univers ajusté" },
        { id:'g', href:'le-moi-et-son-image',           title:'Le moi et son image' },
      ]
    }
  };

  var COLORS = { foi:'#0e6b60', ame:'#a67c2e', texte:'#0e6b60', monde:'#2d8c6e' };

  /* Citation affichée à la fin d'un parcours (au lieu d'un simple alhamdulillah) */
  var ENDQUOTES = {
    foi:   { ar:'وَقُل رَّبِّ زِدْنِي عِلْمًا', fr:'« Et dis : Seigneur, accrois mon savoir. »', ref:'Coran 20:114' },
    ame:   { ar:'مَن عَرَفَ نَفْسَهُ فَقَدْ عَرَفَ رَبَّهُ', fr:'« Qui se connaît soi-même connaît son Seigneur. »', ref:'Tradition soufie' },
    texte: { ar:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ', fr:'« Ne méditent-ils donc pas le Coran ? »', ref:'Coran 4:82' },
    monde: { ar:'فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ', fr:'« Où que vous vous tourniez, là est la Face de Dieu. »', ref:'Coran 2:115' }
  };

  /* Suggestions hors-parcours affichées à la fin (pour aller plus loin) */

  function getState() {
    try { return JSON.parse(localStorage.getItem(SK) || '{}'); } catch(e) { return {}; }
  }
  function saveState(s) {
    try { localStorage.setItem(SK, JSON.stringify(s)); } catch(e) {}
  }

  function getCurrentPage() {
    var p = window.location.pathname;
    var m = p.match(/\/([^\/]+)\.html/);
    return m ? m[1] : null;
  }

  /* Trouve les parcours qui contiennent cette page */
  function findPaths(page) {
    var found = [];
    Object.keys(PATHS).forEach(function(pid) {
      var path = PATHS[pid];
      path.steps.forEach(function(step, idx) {
        if (step.href === page) {
          found.push({ pid: pid, path: path, stepIdx: idx, step: step });
        }
      });
    });
    return found;
  }

  function isStepRead(step){
    // Source de vérité unique : read-tracker (MajmaRead). Repli sur l'état local si absent.
    if (window.MajmaRead && typeof window.MajmaRead.isRead === 'function') {
      return window.MajmaRead.isRead(step.href);
    }
    var s = getState();
    return !!(s._read && s._read[step.href]);
  }

  function renderBanner(matches) {
    var html = '';

    matches.forEach(function(m) {
      var pid = m.pid;
      var path = m.path;
      var col = COLORS[pid];
      var isDone = isStepRead(m.step);
      var doneN = path.steps.filter(function(s) { return isStepRead(s); }).length;
      var total = path.steps.length;
      var pct = Math.round(doneN / total * 100);

      /* Prochaine étape */
      var nextStep = null;
      for (var i = m.stepIdx + 1; i < path.steps.length; i++) {
        if (!isStepRead(path.steps[i])) { nextStep = path.steps[i]; break; }
      }

      html += '<div class="pb-block" data-pid="' + pid + '" data-sid="' + m.step.id + '">';
      html += '<div class="pb-head">';
      html += '<span class="pb-ar" style="color:' + col + '">' + path.ar + '</span>';
      html += '<div class="pb-meta">';
      html += '<span class="pb-name">' + path.name + '</span>';
      html += '<span class="pb-count">' + doneN + ' / ' + total + ' lus</span>';
      html += '</div></div>';

      /* Barre de progression */
      html += '<div class="pb-track"><div class="pb-fill" style="width:' + pct + '%;background:' + col + '"></div></div>';

      /* Frise des étapes : où on en est */
      html += '<div class="pb-steps">';
      path.steps.forEach(function(s, si) {
        var sDone = isStepRead(s);
        var sHere = (s.id === m.step.id);
        var cls = 'pb-step' + (sDone ? ' is-done' : '') + (sHere ? ' is-here' : '');
        var style = sDone || sHere ? 'style="--sc:' + col + '"' : '';
        var label = sHere ? 'Vous êtes ici : ' + s.title : s.title;
        html += '<a class="' + cls + '" ' + style + ' href="' + s.href + '.html" title="' + label.replace(/"/g,'') + '" aria-label="' + label.replace(/"/g,'') + '">';
        html += '<span class="pb-step-dot">' + (sDone ? '✓' : (si + 1)) + '</span>';
        html += '</a>';
      });
      html += '</div>';

      /* Bouton marquer comme lu */
      html += '<div class="pb-actions">';
      html += '<button class="pb-btn pb-btn-mark" data-pid="' + pid + '" data-sid="' + m.step.id + '" style="' + (isDone ? 'border-color:' + col + ';color:' + col + ';' : '') + '">';
      html += isDone ? '✓ Marqué comme lu' : 'Marquer comme lu';
      html += '</button>';
      html += '<a class="pb-btn pb-btn-path" href="index.html#commencer" style="border-color:' + col + ';color:' + col + '">Voir les parcours →</a>';
      html += '</div>';

      /* Prochaine lecture */
      if (nextStep && isDone) {
        html += '<div class="pb-next">';
        html += '<span class="pb-next-label" style="color:' + col + '">Prochaine étape</span>';
        html += '<a class="pb-next-link" href="' + nextStep.href + '.html">' + nextStep.title + ' →</a>';
        html += '</div>';
      } else if (!nextStep && isDone) {
        var q = ENDQUOTES[pid];
        html += '<div class="pb-end">';
        if (q) {
          if (q.ar) html += '<div class="pb-end-ar" style="color:' + col + '">' + q.ar + '</div>';
          html += '<div class="pb-end-fr">' + q.fr + '</div>';
          html += '<div class="pb-end-ref">' + q.ref + '</div>';
        }
        html += '</div>';
      }

      html += '</div>';
    });

    return html;
  }

  function injectStyles() {
    var s = document.createElement('style');
    s.textContent = [
      '.pb-wrap{margin:2rem 0;border-top:1px solid var(--rule);padding-top:1.4rem;}',
      '.pb-title{font-family:var(--display);font-size:.75rem;letter-spacing:.13em;text-transform:uppercase;color:var(--accent);margin-bottom:1rem;font-weight:700;}',
      '.pb-block{padding:1rem 1.1rem;border:1px solid var(--rule);border-left:3px solid var(--accent);margin-bottom:.6rem;background:var(--paper-deep,#ece9e1);}',
      '.pb-block:last-child{margin-bottom:0;}',
      '.pb-head{display:flex;align-items:center;gap:.7rem;margin-bottom:.6rem;}',
      '.pb-ar{font-family:"Amiri",serif;font-size:1.1rem;direction:rtl;line-height:1;}',
      '.pb-meta{flex:1;}',
      '.pb-name{font-family:var(--display);font-weight:700;font-size:.88rem;color:var(--ink);display:block;margin-bottom:.1rem;}',
      '.pb-count{font-size:.72rem;color:var(--ink-faint);letter-spacing:.03em;}',
      '.pb-track{height:2px;background:var(--rule);margin-bottom:.75rem;border-radius:99px;overflow:hidden;}',
      '.pb-fill{height:100%;border-radius:99px;transition:width .5s ease;}',
      '.pb-actions{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:.6rem;}',
      '.pb-btn{font-family:var(--display);font-size:.82rem;font-weight:700;padding:.38rem .9rem;border:1px solid var(--rule);background:none;color:var(--ink-soft);cursor:pointer;letter-spacing:.02em;text-decoration:none;display:inline-flex;align-items:center;transition:all .15s;}',
      '.pb-btn:hover{opacity:.8;}',
      '.pb-btn-mark:hover{border-color:currentColor;}',
      '.pb-next{padding-top:.6rem;border-top:1px solid var(--rule);}',
      '.pb-next-label{font-family:var(--display);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;display:block;margin-bottom:.3rem;}',
      '.pb-next-link{font-family:var(--display);font-weight:700;font-size:.9rem;color:var(--ink);text-decoration:none;}',
      '.pb-next-link:hover{text-decoration:underline;}',
      '.pb-end{padding-top:.7rem;border-top:1px solid var(--rule);text-align:center;}',
      '.pb-end-ar{font-family:"Amiri",serif;font-size:1.15rem;direction:rtl;line-height:1.9;margin-bottom:.35rem;}',
      '.pb-end-fr{font-size:.82rem;color:var(--ink-soft);font-style:italic;line-height:1.5;margin-bottom:.15rem;}',
      '.pb-end-ref{font-size:.7rem;color:var(--ink-faint);letter-spacing:.04em;}',
      '.pb-steps{display:flex;align-items:center;gap:.35rem;margin:.7rem 0 .2rem;flex-wrap:wrap;}',
      '.pb-step{text-decoration:none;}',
      '.pb-step-dot{display:flex;align-items:center;justify-content:center;width:1.55rem;height:1.55rem;border-radius:50%;border:1.5px solid var(--rule);font-family:var(--display);font-size:.72rem;font-weight:700;color:var(--ink-faint);background:var(--card);transition:transform .15s;}',
      '.pb-step.is-done .pb-step-dot{background:var(--sc);border-color:var(--sc);color:#fff;}',
      '.pb-step.is-here .pb-step-dot{border-color:var(--sc);color:var(--sc);box-shadow:0 0 0 3px color-mix(in srgb,var(--sc) 18%,transparent);transform:scale(1.12);}',
      '.pb-step.is-here.is-done .pb-step-dot{color:#fff;}',
      '.pb-step:hover .pb-step-dot{transform:scale(1.15);}',
    ].join('');
    document.head.appendChild(s);
  }

  function init() {
    var page = getCurrentPage();
    if (!page) return;

    var matches = findPaths(page);
    if (matches.length === 0) return;

    injectStyles();

    /* Créer le conteneur */
    var wrap = document.createElement('div');
    wrap.className = 'pb-wrap';
    wrap.innerHTML = '<div class="pb-title">Dans votre parcours de lecture</div>' + renderBanner(matches);

    /* Insérer avant le footer de l'essai */
    var footer = document.querySelector('.essay-footer-nav');
    if (footer) {
      footer.parentNode.insertBefore(wrap, footer);
    } else {
      var article = document.querySelector('article');
      if (article) article.appendChild(wrap);
    }

    /* Gérer le clic sur "Marquer comme lu" */
    wrap.addEventListener('click', function(e) {
      var btn = e.target.closest('.pb-btn-mark');
      if (!btn) return;
      var pid = btn.dataset.pid;
      var sid = btn.dataset.sid;
      /* Retrouver le slug de l'étape courante dans ce parcours */
      var path = PATHS[pid];
      var step = null;
      for (var i = 0; i < path.steps.length; i++) { if (path.steps[i].id === sid) { step = path.steps[i]; break; } }
      if (!step) return;

      var wasComplete = path.steps.every(function(s){ return isStepRead(s); });

      /* Basculer l'état "lu" via la source de vérité unique (read-tracker) */
      var slug = step.href;
      if (window.MajmaRead && typeof window.MajmaRead.isRead === 'function') {
        if (window.MajmaRead.isRead(slug)) { window.MajmaRead.unmark ? window.MajmaRead.unmark(slug) : toggleLocalRead(slug, false); }
        else { window.MajmaRead.mark(slug); }
      } else {
        toggleLocalRead(slug, !(getState()._read && getState()._read[slug]));
      }

      var nowComplete = path.steps.every(function(s){ return isStepRead(s); });
      /* Réinjecter */
      wrap.innerHTML = '<div class="pb-title">Dans votre parcours de lecture</div>' + renderBanner(matches);
      /* Confettis si le parcours vient d'être complété */
      if (nowComplete && !wasComplete) {
        fireConfetti(COLORS[pid] || '#0e6b60');
      }
    });

    /* Rafraîchir le widget si l'état de lecture change ailleurs
       (ex. auto-marquage après 1,5s, ou action sur un autre composant) */
    window.addEventListener('majma:read-changed', function(ev) {
      var changed = ev && ev.detail && ev.detail.slug;
      /* Ne re-render que si l'essai concerné fait partie d'un parcours affiché */
      var relevant = !changed || matches.some(function(m) {
        return m.path.steps.some(function(s) { return s.href === changed; });
      });
      if (relevant) {
        wrap.innerHTML = '<div class="pb-title">Dans votre parcours de lecture</div>' + renderBanner(matches);
      }
    });
  }

  /* Repli local pour (dé)marquer un essai si MajmaRead n'expose pas l'opération */
  function toggleLocalRead(slug, makeRead) {
    var s = getState();
    if (!s._read) s._read = {};
    if (makeRead) { if (!s._read[slug]) s._read[slug] = Date.now(); }
    else { delete s._read[slug]; }
    saveState(s);
  }

  /* Animation de confettis plein écran */
  function fireConfetti(color) {
    var GOLD = '#b8923f';
    var cv = document.createElement('canvas');
    cv.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;';
    document.body.appendChild(cv);
    var ctx = cv.getContext('2d');
    cv.width = window.innerWidth; cv.height = window.innerHeight;
    var cx = cv.width / 2, cy = cv.height * 0.32;
    var P = [];
    for (var i = 0; i < 90; i++) {
      P.push({
        x: cx + (Math.random() - 0.5) * 120, y: cy + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 9, vy: -(Math.random() * 9 + 5),
        col: [color, GOLD, '#e3dfd6', '#2d8c6e'][Math.floor(Math.random() * 4)],
        circle: Math.random() > 0.5, sz: Math.random() * 3.5 + 1.5,
        len: Math.random() * 9 + 4, ang: Math.random() * Math.PI,
        va: (Math.random() - 0.5) * 0.18, a: 1
      });
    }
    function go() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      var alive = false;
      P.forEach(function(p) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.25; p.ang += p.va; p.a -= 0.011;
        if (p.a <= 0) return;
        alive = true;
        ctx.save(); ctx.globalAlpha = Math.max(0, p.a);
        ctx.fillStyle = p.col; ctx.strokeStyle = p.col;
        if (p.circle) { ctx.beginPath(); ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2); ctx.fill(); }
        else { ctx.lineWidth = 2; ctx.beginPath(); ctx.translate(p.x, p.y); ctx.rotate(p.ang); ctx.moveTo(-p.len/2, 0); ctx.lineTo(p.len/2, 0); ctx.stroke(); }
        ctx.restore();
      });
      if (alive) requestAnimationFrame(go);
      else if (cv.parentNode) cv.parentNode.removeChild(cv);
    }
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
      setTimeout(function(){ if (cv.parentNode) cv.parentNode.removeChild(cv); }, 100);
      return;
    }
    requestAnimationFrame(go);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
