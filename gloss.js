(function(){
  var GLOSS = {
  "Principe anthropique":"Constat que l’univers paraît ajusté pour permettre la vie. Version faible : nous ne pouvons observer qu’un monde compatible avec notre existence.",
  "Rhétorique sémitique":"L’art de composer par symétries, propre à la Bible et au Coran ; et l’analyse de cette composition (Meynet, Cuypers).",
  "Désenchantement":"Le retrait du sacré et du mystère du monde sous l’effet de la rationalisation moderne (Max Weber).",
  "Individuation":"Chez Jung, le travail d’une vie : devenir soi en intégrant l’inconscient, l’ombre d’abord, pour passer du petit moi (l’ego) au Soi, centre plus vaste de la psyché.",
  "Voie négative":"Parler de Dieu en disant non ce qu’il est, mais ce qu’il n’est pas, pour ne pas le réduire à nos idées. Proche du tanzīh, l’absolue transcendance ; Maïmonide en fit une méthode.",
  "Umm al-Kitāb":"La « Mère du Livre » : pour Shahrour, la part législative et morale, le message adressé à la conduite.",
  "qalb salīm":"Le cœur : dans le Coran, non le siège de la seule émotion, mais l’organe de la compréhension, de la foi et de la décision. Il peut être sain (salīm), malade, durci ou scellé. C’est là que le savoir devient conviction.",
  "Théodicée":"La « justice de Dieu » : tout effort pour concilier l’existence du mal avec un Créateur bon et tout-puissant.",
  "al-Kitāb":"Le Livre : pour Shahrour, la totalité du révélé, dont le Coran n'est qu'une part.",
  "Ibtilāʾ":"L’épreuve : la vie comprise comme test, motif central de la lecture coranique du mal et de la souffrance.",
  "Anattā":"Le « non-soi » du bouddhisme : aucun moi permanent ne se cache derrière l’expérience ; le « je » est un flux, et s’y agripper fait souffrir. Non pas « tu n’existes pas », mais « rien de fixe ne te sous-tend ».",
  "Burhān":"La démonstration : la preuve rationnelle rigoureuse, celle du philosophe et du savant.",
  "Furqān":"Le Critère : le noyau moral commun à tous les messagers, ce qui distingue le bien du mal.",
  "Iṣṭafā":"Élire, choisir le meilleur parmi plusieurs. Que Dieu ait « élu » Adam (3:33) suppose un ensemble : on ne choisit pas l’unique, ce qui nourrit la lecture d’un humain distingué d’entre d’autres vivants.",
  "Karāma":"La dignité conférée à l'humain : « Nous avons honoré les fils d'Adam » (17, 70). Intrinsèque, non méritée, non conditionnelle.",
  "Taʾwīl":"L'interprétation : le retour au sens profond quand la lettre heurte ce que la raison démontre.",
  "Taklīf":"L’obligation, donc la responsabilité morale. Elle suppose la raison (ʿaql) et la capacité (qudra) : nul n’est tenu au-delà de ce qu’il peut (Coran 2, 286).",
  "Tawḥīd":"L'unicité : l'idée que tout le réel tient sous un seul principe, une seule source.",
  "Dhikr":"Le Rappel : pour Shahrour, la mise en forme arabe et récitable du Coran, sa face audible.",
  "Fiṭra":"La disposition originelle : la nature première inscrite en l'humain avant toute culture, racine du sens moral.",
  "Ḥudūd":"Les limites. Chez Shahrour, les bornes (un plancher, un plafond) entre lesquelles la raison humaine reste libre de légiférer.",
  "Iʿjāz":"L’« inimitabilité » du Coran. Au sens moderne et contesté, l’apologétique des « miracles scientifiques » qui prétend y trouver la science d’aujourd’hui.",
  "Iblīs":"Celui qui refuse de se prosterner par orgueil (« je suis meilleur », 7:12) et « dévie de l’ordre » (amr) de son Seigneur (18:50). Lu symboliquement : le principe du refus de l’ordre, non une puissance rivale de Dieu.",
  "Iqraʾ":"« Lis » : le premier mot révélé (96:1). Il place la connaissance à la source même de la révélation, avant tout article de foi.",
  "Qalam":"La plume. De la racine q-l-m, couper, tailler (cf. taqlīm). Dans la lecture de Shahrour, le calame renvoie à la faculté de distinguer, de séparer entre les choses, mécanisme de tout savoir.",
  "Qadar":"La mesure : la racine évoque ce qui est proportionné. Lu comme l’ordre et les lois donnés à la création, non comme un scénario écrit d’avance.",
  "Qaḍāʾ":"L’accomplissement : l’acte d’agir à l’intérieur de l’ordre (qadar). De la même racine, le qāḍī, le juge, qui yaqḍī : il tranche selon des lois établies, sans les inventer.",
  "Bāṭin":"Le caché et l’apparent : les deux régimes d’un texte, sa lettre immédiate et son sens profond.",
  "Ẓāhir":"Le caché et l’apparent : les deux régimes d’un texte, sa lettre immédiate et son sens profond.",
  "Ombre":"Chez Jung : le Soi est le centre total de la psyché ; l'ombre, la part de nous que nous refusons de voir.",
  "Hawā":"Le penchant, le caprice, le désir qui tire vers le bas. Le Coran avertit contre celui qui « prend son hawā pour dieu » (45:23) : c’est lui qui aveugle et finit par sceller le cœur.",
  "Ummī":"Traditionnellement « illettré », d’où l’idée d’un miracle. Mais dans le Coran les ummiyyūn s’opposent aux gens du Livre, juifs et chrétiens (3:20 ; 62:2) ; Shahrour y lit « qui n’appartient pas à la communauté du Livre », un gentil, proche de l’hébreu goy.",
  "Kasb":"L’« acquisition » : le compromis d’al-Ashʿarī où Dieu crée l’acte et l’homme se l’approprie.",
  "Nafs":"Le souffle, l'âme-soi. Le Coran en décrit trois stations : instigatrice (ammāra), qui se blâme (lawwāma), apaisée (muṭmaʾinna).",
  "Kufr":"Couvrir, recouvrir, d’où l’ingratitude. Pour Izutsu, l’incroyance est d’abord une ingratitude du cœur, le contraire de la gratitude (shukr), non une erreur de raisonnement.",
  "Qalb":"Le cœur : dans le Coran, non le siège de la seule émotion, mais l’organe de la compréhension, de la foi et de la décision. Il peut être sain (salīm), malade, durci ou scellé. C’est là que le savoir devient conviction.",
  "Āya":"Le signe. Le même mot désigne un verset du Coran et toute chose du monde : la nature se lit comme un texte.",
  "Rūḥ":"L’esprit. Dans la lecture symbolique (Shahrour), non une substance mais l’ordre divin (al-amr) et le saut vers la pensée abstraite : « l’esprit relève de l’amr de mon Seigneur » (17:85).",
  "Soi":"Chez Jung : le Soi est le centre total de la psyché ; l'ombre, la part de nous que nous refusons de voir.",
  "Apatheia":"Chez les stoïciens, l'absence de passions-troubles : non l'insensibilité, mais la liberté à l'égard de ce qui nous agite sans raison.",
  "Sublimation":"Chez Freud, le déplacement de l'énergie pulsionnelle vers un but non sexuel et socialement valorisé : art, pensée, action.",
  "Archétype":"Chez Jung, un motif universel qui structure l'inconscient collectif : le héros, l'ombre, le vieux sage, la mère, et d'autres figures que l'on retrouve dans tous les mythes et tous les rêves.",
  "Inconscient collectif":"Chez Jung, la couche de l'inconscient commune à toute l'humanité, faite d'archétypes : des dispositions héritées, non du contenu, qui structurent les images et récits de toutes les cultures.",
  "Taṇhā":"Dans le bouddhisme, la soif, l'attachement qui s'accroche à ce qui change : la racine de la souffrance (dukkha) selon le deuxième des Quatre Nobles Vérités.",
  "Nirvāṇa":"Dans le bouddhisme, l'extinction de la soif (taṇhā) et donc de la souffrance qu'elle engendre : non un lieu, mais la fin d'un mécanisme.",
  "Verdrängung":"Le refoulement chez Freud : le mécanisme par lequel un contenu psychique inacceptable est repoussé hors de la conscience, sans disparaître.",
  "Contenu manifeste":"Chez Freud, le rêve tel qu'on le vit et le raconte, par opposition au contenu latent, son sens caché que le travail d'interprétation cherche à dégager.",
  "Contenu latent":"Chez Freud, le sens caché d'un rêve, derrière son contenu manifeste : ce que le travail d'interprétation cherche à dégager.",
  "Yetser ha-ra":"Dans la pensée juive, le penchant mauvais : une inclination intérieure à dominer plutôt qu'une force extérieure, proche en cela du hawā coranique.",
  "ʿIlm ladunî":"Le savoir « venu d'auprès de Dieu » : reçu directement, non par apprentissage ni raisonnement, comme celui de Khidr dans le récit coranique.",
  "Fanāʾ":"Dans le soufisme, l'extinction du moi (nafs) dans l'union avec le divin : la dissolution de l'ego comme aboutissement du chemin spirituel.",
  "Psychē":"En grec, l'âme : principe vital et pensant, racine de « psychologie » et de « psychanalyse »."
};

  // Termes tries du plus long au plus court (deja fait a la generation),
  // pour eviter qu'un terme court ne matche a l'interieur d'un plus long.
  var terms = Object.keys(GLOSS);

  // Echappe les caracteres speciaux regex
  function esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}

  // Construit une regex par terme : limites de "mot" tolerantes aux diacritiques arabes
  // (on utilise des frontieres non-lettres/chiffres plutot que \b, qui ne gere pas bien les diacritiques)
  var BOUND = "(^|[^\\p{L}\\p{N}\\u02bf\\u02bb\\u0304\\u0331])";
  var BOUND_END = "(?=[^\\p{L}\\p{N}\\u02bf\\u02bb\\u0304\\u0331]|$)";

  // Termes dont la casse est significative : "Soi" (Jung) ne doit pas matcher
  // "soi" en minuscule (sens ordinaire, tres frequent en francais).
  var CASE_SENSITIVE = {"Soi": true};

  function processTextNode(node, used){
    var text = node.nodeValue;
    if(!text || !text.trim()) return;
    for(var i=0;i<terms.length;i++){
      var term=terms[i];
      if(used[term]) continue;
      var re;
      try{
        var flags = CASE_SENSITIVE[term] ? "u" : "ui";
        re=new RegExp(BOUND+"("+esc(term)+")"+BOUND_END,flags);
      }catch(e){ continue; }
      var m=re.exec(text);
      if(!m) continue;
      var idx=m.index+m[1].length;
      var before=text.slice(0,idx);
      var match=m[2];
      var after=text.slice(idx+match.length);

      var span=document.createElement("span");
      span.className="gt";
      span.tabIndex=0;
      span.setAttribute("data-def",GLOSS[term]);
      span.textContent=match;

      var frag=document.createDocumentFragment();
      if(before) frag.appendChild(document.createTextNode(before));
      frag.appendChild(span);
      if(after) frag.appendChild(document.createTextNode(after));

      node.parentNode.replaceChild(frag,node);
      used[term]=true;
      // continuer le scan sur le texte "after" pour d'autres termes
      // (on relance via le frag deja insere : le noeud texte "after" est dans le DOM)
      var afterNode=frag.lastChild===span?null:frag.lastChild;
      if(afterNode && afterNode.nodeType===3) processTextNode(afterNode, used);
      return;
    }
  }

  function walk(root, used){
    var nodes=[];
    (function collect(n){
      for(var c=n.firstChild;c;c=c.nextSibling){
        if(c.nodeType===3) nodes.push(c);
        else if(c.nodeType===1 && c.tagName!=="A" && c.tagName!=="SPAN" && c.tagName!=="SCRIPT" && c.tagName!=="STYLE") collect(c);
      }
    })(root);
    for(var i=0;i<nodes.length;i++) processTextNode(nodes[i], used);
  }

  function init(){
    var prose=document.querySelector(".prose");
    if(!prose) return;
    var used={};
    var blocks=prose.querySelectorAll("p, li");
    for(var i=0;i<blocks.length;i++){
      // limiter aux blocs sans arabe dominant (eviter de toucher aux versets/inline arabes)
      walk(blocks[i], used);
    }

    // tooltip
    var tip=document.createElement("div");
    tip.className="gt-tip";
    document.body.appendChild(tip);
    var current=null;

    function show(el){
      current=el;
      tip.textContent=el.getAttribute("data-def");
      tip.classList.add("show");
      // forcer un reflow pour obtenir les dimensions a jour avant de positionner
      var r=el.getBoundingClientRect();
      var tw=tip.offsetWidth, th=tip.offsetHeight, vw=window.innerWidth;
      var left=r.left+r.width/2-tw/2;
      if(left<12) left=12;
      if(left+tw>vw-12) left=Math.max(12,vw-12-tw);
      tip.style.left=left+"px";
      var top=r.bottom+8+window.scrollY;
      if(r.bottom+th+16>window.innerHeight){
        top=r.top-th-8+window.scrollY;
        if(top<window.scrollY+8) top=window.scrollY+8;
      }
      tip.style.top=top+"px";
    }
    function hide(){tip.classList.remove("show");current=null;}

    document.querySelectorAll(".gt").forEach(function(el){
      el.addEventListener("mouseenter",function(){show(el);});
      el.addEventListener("mouseleave",hide);
      el.addEventListener("focus",function(){show(el);});
      el.addEventListener("blur",hide);
      el.addEventListener("click",function(e){
        e.stopPropagation();
        if(current===el){hide();}else{show(el);}
      });
    });
    document.addEventListener("click",function(){if(current)hide();});
    document.addEventListener("scroll",function(){if(current)hide();},{passive:true});
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init);
  else init();
})();
