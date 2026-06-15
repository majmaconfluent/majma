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
  "Psychē":"En grec, l'âme : principe vital et pensant, racine de « psychologie » et de « psychanalyse ».",
  "Persona":"Chez Jung, le masque social que chacun présente aux autres : non un mensonge, mais une façade nécessaire, derrière laquelle se trouvent l'ombre et le reste de la psyché.",
  "Sentiment d’infériorité":"Chez Alfred Adler, le sentiment, commun à tout enfant face aux adultes, d'être petit et dépendant ; un point de départ, pas un défaut, autour duquel s'organise une grande partie de la vie psychique.",  "Tazkiyat al-nafs":"La purification de l'âme dans la tradition islamique : un travail intérieur de discipline et d'affinement qui vise à conduire le nafs ammāra vers la paix du nafs muṭmaʾinna. Proche de l'individuation jungienne dans son mouvement, différent dans son opération : l'islam purifie là où Jung intègre.",
  "Al-dunyā":"En arabe, 'ce qui est proche' : désigne cette vie terrestre, par opposition à al-ākhira. Non pas une condamnation du monde, mais un rappel de sa place relative.",
  "Al-ākhira":"En arabe, 'ce qui vient après' : la vie future dans la cosmologie islamique. Terme souvent traduit par 'au-delà' ou 'vie éternelle'.",
  "Ijtihād":"En droit islamique, l'effort de raisonnement personnel pour déduire une règle d'une situation nouvelle à partir des sources. Opposé au taqlīd, l'imitation sans examen.",
  "Taqlīd":"Dans la tradition islamique, le fait de suivre l'opinion d'un savant ou d'une école sans en examiner les fondements. Contraire de l'ijtihād.",
  "Taqwā":"Souvent traduit par 'crainte de Dieu' ou 'piété', mais mieux rendu par 'conscience de Dieu' : un état d'attention intérieure qui guide les actes, moins une peur qu'une présence.",
  "Āyāt":"Pluriel de āya : à la fois 'verset coranique' et 'signe'. Le Coran utilise le même mot pour désigner les versets du texte et les signes dans la création.",
  "Taqdīr":"Le décret divin dans la pensée islamique : l'idée que Dieu connaît et a 'mesuré' toute chose. Au cœur du débat sur le libre arbitre.",
  "ʿAql":"La raison, l'intellect, en arabe. Dans le Coran, le verbe ʿaqala (d'où vient ʿaql) signifie 'attacher, retenir' : la raison comme ce qui retient et maîtrise.",
  "Nahḍa":"La renaissance culturelle et intellectuelle du monde arabe au XIXe et début XXe siècle : mouvement de réforme qui cherchait à concilier modernité et tradition islamique.",
  "Ruʾyā":"Le rêve prophétique ou véridique dans la tradition islamique : une des 46 parties de la prophétie selon un hadith. Distingué du ḥulm.",
  "Ḥulm":"Le rêve ordinaire dans la tradition islamique, par opposition à la ruʾyā. Peut venir du soi ou, selon la tradition, d'influences perturbatrices.",
  "Ghaḍḍ al-baṣar":"Littéralement 'baisser le regard' (Coran 24:30-31). Non pas fermer les yeux, mais abaisser une partie du regard : une posture générale de mesure et de maîtrise de ce qui entre en soi.",
  "Mīzān":"La balance, la mesure, l'équilibre : l'un des concepts centraux du Coran, qui l'associe à la justice cosmique et à la juste mesure dans les actes humains.",
  "Sharīʿa":"Littéralement 'le chemin vers la source d'eau' : la loi islamique dans son ensemble, couvrant le rituel, l'éthique, le droit. Souvent réduit à la dimension pénale dans le discours public, alors qu'elle est beaucoup plus large.",
  "Bilā kayf":"'Sans demander comment' : position théologique de certains savants musulmans face aux attributs divins anthropomorphes (Dieu 's'installe sur le Trône') : on accepte le texte sans chercher à savoir comment cela se passe.",
  "Burhān":"La preuve démonstrative, le raisonnement rigoureux. Chez Averroès, le plus haut degré de certitude, réservé aux philosophes. Opposé au khaṭāb (le discours persuasif) et au jadal (le débat dialectique).",

  "Compensation":"Chez Alfred Adler, la façon dont chacun répond à son sentiment d'infériorité : apprendre, contribuer, se rendre utile, trouver sa place dans un groupe.",
  "Énantiodromie":"Chez Jung, la loi selon laquelle ce qu'on refoule ou ignore ne disparaît pas, mais s'accumule et revient par-derrière en sens contraire, souvent avec d'autant plus de force qu'on l'a longtemps ignoré.",
    "Mundus Imaginalis":"Terme latin créé par Henry Corbin pour désigner le monde imaginal, 'Alam al-Mithāl en arabe : un espace intermédiaire entre le monde sensible et le monde purement divin, où les symboles, les archétypes et les figures des visions ont une réalité propre. Distinct de l’imaginaire : non pas ce qui n’existe pas, mais ce qui existe selon un autre mode d’être.",
  "Barzakh":"En arabe, l’isthme, la zone entre deux mers. Dans le Coran (55:19-20), il sépare deux mers sans les laisser se mélanger. Dans la cosmologie islamique et soufie, il désigne le monde intermédiaire entre le visible (shahāda) et l’invisible (ghayb), l’espace où le Monde Imaginal prend forme.",
  "Ketmān":"Concept islamique traduit par Henry Corbin par ‘discipline de l’arcane’ : la discrétion sur ce qui ne peut se transmettre que par l’expérience directe, non par le discours. Jung et Corbin l’ont pratiquée sur leur convergence.",
  "ʿAlam al-Mithāl":"Le monde des images archétypales dans la cosmologie islamique classique, traduit par Henry Corbin comme Mundus Imaginalis. L’espace intermédiaire où les esprits se corporalisent et les corps se spiritualisent.",
  "Shahāda":"Le visible, le monde sensible dans la cosmologie islamique. Aussi : l’attestation de foi (il n’y a de dieu que Dieu). Le contexte distingue les deux sens.",
  "Ghayb":"L’invisible, ce qui est caché au sens percevant dans la cosmologie islamique. S’oppose à shahāda. Le Coran s’ouvre sur les croyants qui ‘croient au ghayb’.",
  "Murāqaba":"Dans la tradition islamique, la vigilance intérieure : conscience d'être sous le regard de Dieu, et par extension, qualité de présence attentive au moment et à l'autre.",
  "Ḥuqūq al-ʿibād":"Les droits que les personnes ont sur nous dans la tradition islamique : une catégorie de devoirs envers autrui aussi importante que les devoirs envers Dieu.",
  "Je-Tu":"Chez Martin Buber, le mode de relation où l'autre est rencontré comme un sujet entier, une présence irréductible à son rôle ou à son utilité. Son contraire, le Je-Cela, est la relation où l'autre devient objet ou moyen.",
  "Je-Cela":"Chez Martin Buber, le mode de relation où l'autre est traité comme un objet, un rôle ou un moyen, par opposition au Je-Tu, la rencontre vraie. Le monde Je-Cela est nécessaire, mais problématique quand il envahit ce qui devrait être rencontre.",
  "Dhikr al-mawt":"Le rappel de la mort dans la tradition islamique : non un exercice morbide, mais une pratique de lucidité pour remettre les priorités à leur juste place.",
  "Maraṇasati":"En pali, la pleine conscience de la mort : l'une des méditations bouddhistes les plus directes, qui consiste à visualiser sans détournement du regard le fait que ce corps mourra. Non pour se déprimer, mais pour couper l'illusion d'un temps illimité.",
  "Meditatio mortis":"Dans la philosophie stoïcienne, la méditation sur la mort comme exercice de retour à l'essentiel. Sénèque y voit non un sujet d'angoisse, mais un test de ce qui vaut vraiment la peine.",
  "Iḥsān":"En arabe, la beauté, l'excellence et la bonté réunies en un seul mot. Dans un récit classique de la tradition islamique, l'ange Gabriel demande au Prophète ﷺ de définir l'excellence spirituelle. Réponse : 'Adore Dieu comme si tu Le voyais ; et si tu ne Le vois pas, sache qu'Il te voit.' Une définition non pas de la beauté, mais d'une qualité de présence : agir sous un regard complet, même quand on ne le perçoit pas.",
  "Être-pour-la-mort":"Chez Heidegger, la reconnaissance que la mort est l'horizon certain et personnel de toute existence. Non un pessimisme, mais une invitation à vivre de façon authentique, comme si la vie t'appartenait vraiment.",
  "Désir mimétique":"Chez René Girard, le mécanisme par lequel on désire non pas spontanément un objet, mais ce qu'un autre désire : le désir naît de l'imitation d'un modèle, pas d'un besoin propre.",
  "Logothérapie":"Thérapie fondée par Viktor Frankl : soin par le sens. Sa thèse : la première motivation de l'être humain est la quête de sens, non le plaisir (Freud) ni la puissance (Adler).",
  "Possession":"Chez Jung, l'état dans lequel une énergie psychique a pris le pouvoir sur le moi sans que celui-ci s'en aperçoive : il croit librement vouloir ce à quoi il est en réalité assujetti. Ce que les Anciens nommaient être possédé par un dieu."
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
