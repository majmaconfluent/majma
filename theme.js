(function(){
  // Menu hamburger
  window.__toggleMenu=function(){
    var d=document.getElementById('menuDrawer'),b=document.getElementById('menuBack');
    if(!d)return;
    var open=d.classList.toggle('open');
    if(b)b.classList.toggle('open',open);
    document.body.style.overflow=open?'hidden':'';
  };
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){var d=document.getElementById('menuDrawer');if(d&&d.classList.contains('open'))window.__toggleMenu();}
  });

  // Header sticky : ombre au scroll
  document.addEventListener('DOMContentLoaded',function(){
    var h=document.querySelector('.site-header');
    if(!h)return;
    function on(){h.classList.toggle('scrolled',window.scrollY>8);}
    on();window.addEventListener('scroll',on,{passive:true});
  });

  // Indicateur de page active dans la nav
  (function(){
    var path=location.pathname.split('/').pop()||'index.html';
    var map={'le-coran.html':'le-coran.html','lame.html':'lame.html','le-sens.html':'le-sens.html','apropos.html':'apropos.html'};
    // rubriques d'essais : surligner la rubrique parente si connue
    document.addEventListener('DOMContentLoaded',function(){
      var links=document.querySelectorAll('.site-nav a[href], .menu-drawer a[href]');
      links.forEach(function(a){
        var href=(a.getAttribute('href')||'').split('/').pop();
        if(href && href===path){a.classList.add('is-active');}
      });
    });
  })();

  // Recherche : la loupe déroule le panneau
  window.__toggleSearch=function(){
    var p=document.getElementById('searchPanel');
    if(!p) return;
    var open=p.classList.toggle('open');
    if(open){
      var i=document.getElementById('srch');
      if(i) setTimeout(function(){i.focus();},60);
    }
  };
  // Fermer la recherche avec Échap
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      var p=document.getElementById('searchPanel');
      if(p) p.classList.remove('open');
    }
  });
})();
