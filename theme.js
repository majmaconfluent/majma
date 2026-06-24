(function(){
  var KEY='majma-theme', root=document.documentElement, s=null;
  try{ s=localStorage.getItem(KEY); }catch(e){}
  if(s==='dark'||s==='light') root.setAttribute('data-theme', s);
  function cur(){
    var a=root.getAttribute('data-theme');
    return a ? a : 'light';
  }
  function upd(){
    var b=document.getElementById('themeBtn'); if(!b) return;
    var d=cur()==='dark';
    b.textContent = d ? '\u2600' : '\u263E';
    b.setAttribute('aria-label', d ? 'Passer en clair' : 'Passer en sombre');
  }
  window.__toggleTheme=function(){
    var n=cur()==='dark'?'light':'dark';
    root.setAttribute('data-theme', n);
    try{ localStorage.setItem(KEY, n); }catch(e){}
    upd();
  };
  if(document.readyState!=='loading') upd();
  else document.addEventListener('DOMContentLoaded', upd);
})();

// Language toggle
function __setLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('majma-lang', lang);
  document.querySelectorAll('.lang-toggle button').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}
function __initLang() {
  var saved = localStorage.getItem('majma-lang') || 'fr';
  __setLang(saved);
}
document.addEventListener('DOMContentLoaded', __initLang);
