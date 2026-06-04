(function(){
  var KEY='majma-theme', root=document.documentElement, s=null;
  try{ s=localStorage.getItem(KEY); }catch(e){}
  if(s==='dark'||s==='light') root.setAttribute('data-theme', s);
  function cur(){
    var a=root.getAttribute('data-theme');
    if(a) return a;
    return (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
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
