/**
 * parcours-widget.js
 * Injecte en bas de chaque essai un widget "Parcours" :
 * - Détecte si l'essai fait partie d'un chemin actif
 * - Affiche "Marquer comme lu" + "Essai suivant"
 * - Sauvegarde en localStorage
 */
(function(){
  var PATHS = {
    foi:{name:"Je questionne ma foi",color:"#0e6b60",steps:["quest-ce-qu-une-lecture","la-source-et-le-fleuve","averroes-la-raison","le-libre-arbitre","le-probleme-du-mal"]},
    ame:{name:"Je veux me connaître",color:"#5a3f7a",steps:["la-fitra","jung-en-dix-minutes","ombre-et-nafs","le-coeur","maitriser-le-desir","le-confluent-des-deux-mers"]},
    texte:{name:"Je lis le texte autrement",color:"#7a5515",steps:["le-premier-mot","quest-ce-qu-une-lecture","la-rhetorique-semitique","la-lecture-symbolique","les-mots-et-le-monde"]},
    monde:{name:"Je vis dans ce monde",color:"#1a4f7a",steps:["le-desenchantement","le-scroll-et-la-pause","le-sens-malgre-tout","je-et-tu","la-finitude"]}
  };
  var SK="majma_parcours_v2";
  function getState(){try{return JSON.parse(localStorage.getItem(SK)||"{}");}catch(e){return{};}}
  function saveState(s){try{localStorage.setItem(SK,JSON.stringify(s));}catch(e){}}

  // Slug de la page courante
  var slug=location.pathname.split("/").pop().replace(".html","");

  // Trouver dans quel(s) chemin(s) cet essai apparaît
  var matches=[];
  Object.keys(PATHS).forEach(function(pid){
    var idx=PATHS[pid].steps.indexOf(slug);
    if(idx>-1) matches.push({pid:pid,idx:idx,path:PATHS[pid]});
  });
  if(!matches.length) return;

  var state=getState();

  // Prendre le premier chemin actif (le plus avancé)
  matches.sort(function(a,b){
    var doneA=Object.values(state[a.pid]||{}).filter(Boolean).length;
    var doneB=Object.values(state[b.pid]||{}).filter(Boolean).length;
    return doneB-doneA;
  });
  var m=matches[0];
  var pid=m.pid; var path=m.path; var idx=m.idx;
  var pd=state[pid]||{};
  var isDone=!!pd[slug];
  var total=path.steps.length;
  var doneN=path.steps.filter(function(s){return pd[s];}).length;
  var nextSlug=path.steps[idx+1]||null;

  // Construire le widget
  var w=document.createElement("div");
  w.id="parcours-widget";
  w.style.cssText="margin:2rem 0 0;padding:1.2rem 1.3rem;border-top:1px solid #e3dfd6;border-left:3px solid "+path.color+";background:#f5f4ef;font-family:'Newsreader',Georgia,serif;";

  function render(){
    var pd2=getState()[pid]||{};
    var isDone2=!!pd2[slug];
    var doneN2=path.steps.filter(function(s){return pd2[s];}).length;
    var pct=Math.round(doneN2/total*100);

    w.innerHTML=
      '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.8rem;flex-wrap:wrap;">'+
      '<div>'+
      '<div style="font-family:\'Fraunces\',Georgia,serif;font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;color:'+path.color+';margin-bottom:.25rem;">Parcours · '+path.name+'</div>'+
      '<div style="font-family:\'Fraunces\',Georgia,serif;font-size:.8rem;color:#8a8276;">Essai '+(idx+1)+' / '+total+' · '+doneN2+' lu'+(doneN2>1?'s':'')+' dans ce chemin</div>'+
      '</div>'+
      '<a href="parcours.html" style="font-family:\'Fraunces\',Georgia,serif;font-size:.75rem;color:#8a8276;text-decoration:underline;">Voir le parcours →</a>'+
      '</div>'+
      '<div style="margin:.75rem 0 .9rem;height:2px;background:#e3dfd6;border-radius:99px;">'+
      '<div style="height:100%;width:'+pct+'%;background:'+path.color+';border-radius:99px;transition:width .4s;"></div>'+
      '</div>'+
      '<div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;">'+
      '<button id="pw-mark" style="display:inline-flex;align-items:center;gap:.3rem;padding:.32rem .8rem;border:1px solid '+(isDone2?path.color:'#e3dfd6')+';background:'+(isDone2?path.color:'transparent')+';color:'+(isDone2?'#fff':'#574f45')+';font-family:\'Fraunces\',Georgia,serif;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .18s;">'+
      (isDone2?'✓ Essai lu':'Marquer comme lu')+'</button>'+
      (nextSlug&&!isDone2?'<a href="'+nextSlug+'.html" style="display:inline-flex;align-items:center;gap:.3rem;padding:.3rem .78rem;background:'+path.color+';color:#fff;font-family:\'Fraunces\',Georgia,serif;font-size:.8rem;font-weight:700;text-decoration:none;">Essai suivant →</a>':'')'+
      (nextSlug&&isDone2?'<a href="'+nextSlug+'.html" style="display:inline-flex;align-items:center;gap:.3rem;padding:.3rem .78rem;background:'+path.color+';color:#fff;font-family:\'Fraunces\',Georgia,serif;font-size:.8rem;font-weight:700;text-decoration:none;">Essai suivant →</a>':'')'+
      '</div>';

    document.getElementById("pw-mark").onclick=function(){
      var s=getState();
      if(!s[pid])s[pid]={};
      s[pid][slug]=!s[pid][slug];
      saveState(s);
      render();
    };
  }
  render();

  // Insérer avant le footer
  var footer=document.querySelector(".site-footer")||document.querySelector("footer");
  var reading=document.querySelector(".reading");
  if(reading){
    var engage=reading.querySelector(".engage");
    if(engage){engage.parentNode.insertBefore(w,engage);}
    else{reading.appendChild(w);}
  } else if(footer){
    footer.parentNode.insertBefore(w,footer);
  }
})();
