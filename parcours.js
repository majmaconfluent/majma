/* parcours.js — Majmaʿ · Parcours et séries de lecture
   Deux objets distincts :
   - un PARCOURS réunit des essais autour d'une question ; l'ordre est suggéré,
     on peut y entrer et en sortir librement.
   - une SÉRIE réunit des essais qui se suivent ; l'ordre est nécessaire, chaque
     essai reprend là où le précédent s'arrête (badge « 2 / 3 » sur la page).
   Un essai peut appartenir à une série, à un parcours, aux deux, ou à aucun
   (les essais du triptyque du sacrifice ne sont que dans leur série).
   Un essai lu compte partout où il apparaît (lecture partagée, pas de suivi
   indépendant) : "quest-ce-qu-une-lecture" est le seul essai présent dans deux
   parcours (foi + texte), choix éditorial assumé car c'est l'essai de méthode
   fondateur, pertinent comme porte d'entrée pour les deux chemins. */
(function() {
  'use strict';

  var SK = 'majma_parcours_v2';

  /* ═══════════════════════════════════════════════════════════════════
     SOURCE UNIQUE. Ne redéclarer ces données nulle part ailleurs.
     index.html les lit via window.MAJMA_PATHS / window.MAJMA_SERIES.

     Ajouter un PARCOURS  : une entrée dans PATHS (num, name, ar, color,
                            why, endquote, steps[{href,t,min,h}]).
     Ajouter une SÉRIE    : une entrée dans SERIES (name, color,
                            steps[{href,t,min}]). Pas de résumé : les titres,
                            lus dans l'ordre, disent le mouvement.
     Les compteurs (« 2 / 3 », nombre d'essais, durée totale) sont TOUJOURS
     calculés depuis steps. Ne jamais écrire un total à la main.
     ═══════════════════════════════════════════════════════════════════ */
  var PATHS = {
    foi: {
      num: '1', name: 'Je questionne ma foi', ar: 'الإيمان',
      color: '#0e6b60', cls: 'p-foi',
      why: 'Sources, raison, liberté : les grandes questions de la foi, posées honnêtement.',
      endquote: { ar:'وَقُل رَّبِّ زِدْنِي عِلْمًا', fr:'« Et dis : Seigneur, accrois mon savoir. »', ref:'Coran 20:114' },
      steps: [
        { href:'quest-ce-qu-une-lecture', t:'Qu\'est-ce qu\'une lecture ?', min:5, h:'Avant tout, comprendre ce que lire veut dire. Un texte sacré vit, il ne s\'applique pas.' },
        { href:'la-source-et-le-fleuve', t:'La source et le fleuve', min:17, h:'Coran et Sunnah : d\'où viennent les règles que nous suivons ?' },
        { href:'le-siecle-sans-encre', t:'Le siècle sans encre', min:14, h:'Un reçu de moutons, un parchemin, un palimpseste : ce que le premier siècle a écrit, et ce qu\'il a confié aux hommes.' },
        { href:'averroes-la-raison', t:'Averroès et le droit de la raison', min:7, h:'Au XIIe siècle : la raison a-t-elle droit de cité dans l\'islam ?' },
        { href:'lautre-histoire-de-lislam-sunnite', t:'L\'autre histoire de l\'islam sunnite', min:26, h:'Deux traditions théologiques également anciennes, très inégalement connues aujourd\'hui.' },
        { href:'le-libre-arbitre', t:'Le libre arbitre et le décret', min:14, h:'Ce que le Coran dit vraiment, avant que la théologie ne le durcisse.' },
        { href:'le-probleme-du-mal', t:'Le problème du mal', min:10, h:'La question la plus difficile, posée sans raccourci.' },
        { href:'le-coran-en-pratique', t:'Le Coran, concrètement', min:4, h:'Sourate, verset, révélation : ce qu\'il faut savoir avant de lire.' },
        { href:'les-deux-livres', t:'Les deux livres', min:6, h:'Science et foi ne parlent pas de la même chose. Comment les lire ensemble.' },
        { href:'raison-et-revelation', t:'Raison et révélation', min:12, h:'Averroès, Maïmonide, Thomas d\'Aquin : trois réponses à la même question.' },
      ]
    },
    ame: {
      num: '2', name: 'Je veux me connaître', ar: 'النفس',
      color: '#a67c2e', cls: 'p-ame',
      why: 'Un voyage intérieur, entre psychologie des profondeurs et traditions de l\'âme.',
      endquote: { ar:'مَن عَرَفَ نَفْسَهُ فَقَدْ عَرَفَ رَبَّهُ', fr:'« Qui se connaît soi-même connaît son Seigneur. »', ref:'Tradition soufie' },
      steps: [
        { href:'la-fitra', t:'La fiṭra et la dignité', min:5, h:'Ce qui est inscrit en nous avant toute culture.' },
        { href:'jung-en-dix-minutes', t:'Ce qui agit sans qu\'on le sache', min:8, h:'Jung : l\'inconscient, les archétypes, le Soi.' },
        { href:'l-archetype-et-l-animal', t:'L\'archétype et l\'animal totem', min:10, h:'Ce que les tests d\'archétype animal font dire à Jung, et ce qu\'il disait vraiment.' },
        { href:'trois-portes-pour-la-meme-piece', t:'Trois portes pour la même pièce', min:6, h:'Devant une même hésitation, Freud, Jung et Adler n\'auraient pas regardé au même endroit.' },
        { href:'ombre-et-nafs', t:'L\'ombre et le nafs', min:9, h:'Ce que Jung et le Coran disent de la même réalité.' },
        { href:'le-coeur', t:'Le cœur', min:5, h:'Le qalb, organe de la compréhension, pas seulement des émotions.' },
        { href:'maitriser-le-desir', t:'Maîtriser le désir', min:13, h:'Hawā, taṇhā, concupiscence : une même lutte intérieure.' },
        { href:'le-confluent-des-deux-mers', t:'Le confluent des deux mers', min:9, h:'Jung et Khidr au bord du fleuve. Le récit coranique de l\'individuation.' },
        { href:'les-reves', t:'Les rêves', min:9, h:'De Yūsuf à Freud et Jung : le rêve comme langue de l\'âme.' },
        { href:'les-destins-du-moi', t:'Les destins du moi', min:8, h:'Nafs, anattā, ego, Soi : quatre façons d\'appeler la même question.' },
        { href:'le-souffle', t:'Le souffle', min:10, h:'Al-rūḥ et la création d\'Adam : le souffle comme lien entre Dieu et l\'homme.' },
      ]
    },
    texte: {
      num: '3', name: 'Je lis le texte autrement', ar: 'القراءة',
      color: '#0e6b60', cls: 'p-texte',
      why: 'Les outils pour lire le Coran dans sa langue, sa rhétorique et sa structure propres.',
      endquote: { ar:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ', fr:'« Ne méditent-ils donc pas le Coran ? »', ref:'Coran 4:82' },
      steps: [
        { href:'quest-ce-qu-une-lecture', t:'Qu\'est-ce qu\'une lecture ?', min:5, h:'Lire un texte sacré n\'est pas lire un roman. Mais qu\'est-ce que cela change ?' },
        { href:'le-premier-mot', t:'Le premier mot', min:11, h:'Iqraʾ, un ordre de lire, et ce que cela dit de la révélation.' },
        { href:'la-rhetorique-semitique', t:'La rhétorique sémitique', min:4, h:'Symétries concentriques du Coran : une fois qu\'on le sait, on ne lit plus pareil.' },
        { href:'la-lecture-symbolique', t:'La lecture symbolique', min:7, h:'Ẓāhir et bāṭin : la lettre et le sens profond.' },
        { href:'les-mots-et-le-monde', t:'Les mots et le monde', min:5, h:'Izutsu et la sémantique coranique : les mots structurent une vision du monde.' },
        { href:'shahrour-le-livre-et-le-coran', t:'Shahrour : le Livre et le Coran', min:6, h:'Une méthode de lecture déroutante, et ce qu\'elle déplace vraiment.' },
        { href:'la-loi-de-limites', t:'La loi de limites', min:19, h:'Recettes ou cadres ? Ce que change de lire les ḥudūd comme des bornes.' },
        { href:'le-monde-imaginal', t:'Le monde entre deux', min:6, h:'Corbin et Jung ont nommé le même espace : entre matière et abstraction.' },
        { href:'le-sens-avant-le-comment', t:'Le sens avant le comment', min:10, h:'Certaines vérités se donnent dans leur sens sans jamais livrer leur comment.' },
      ]
    },
    monde: {
      num: '4', name: 'Je vis dans ce monde', ar: 'العالم',
      color: '#2d8c6e', cls: 'p-monde',
      why: 'L\'attention, l\'absurde, la relation, la mort : l\'existence à l\'ère des écrans.',
      endquote: { ar:'فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ', fr:'« Où que vous vous tourniez, là est la Face de Dieu. »', ref:'Coran 2:115' },
      steps: [
        { href:'le-scroll-et-la-pause', t:'Le scroll et la pause', min:6, h:'Le design persuasif, le hawā, et comment reprendre son attention.' },
        { href:'le-sens-malgre-tout', t:'Le sens malgré tout', min:4, h:'Frankl dans les camps, Camus face à l\'absurde.' },
        { href:'je-et-tu', t:'Je et Tu', min:5, h:'Martin Buber et la relation vraie à l\'ère des réseaux.' },
        { href:'la-finitude', t:'La finitude', min:6, h:'Heidegger, l\'islam et la mort comme horizon de la vie.' },
        { href:'ce-qui-arrete', t:'Ce qui arrête', min:5, h:'Un paysage, une phrase, une mélodie : ce que dit de nous l\'expérience de ce qui arrête le regard.' },
        { href:'le-moi-et-son-image', t:'Le moi et son image', min:3, h:'Sur les réseaux, on gère une image. Le Coran et Jung ont nommé ce piège.' },
      ]
    },
    signe: {
      num: '5', name: 'Le monde est-il lisible ?', ar: 'الآيات',
      color: '#2d8c6e', cls: 'p-signe',
      why: 'Le monde porte-t-il des signes, ou les y mettons-nous ? Trois textes sur l\'émerveillement et ses limites.',
      endquote: { ar:'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ', fr:'« Nous leur montrerons Nos signes dans les horizons et en eux-mêmes. »', ref:'Coran 41:53' },
      steps: [
        { href:'les-signes', t:'Les signes : lire le monde', min:6, h:'L\'émerveillement comme voie de connaissance, et ses limites honnêtes.' },
        { href:'le-desenchantement', t:'Le désenchantement du monde', min:4, h:'Weber et la perte du sacré dans la modernité.' },
        { href:'l-univers-ajuste', t:'L\'univers ajusté', min:5, h:'Le réglage fin de l\'univers : hasard ou dessein ? Ce que la physique permet de dire.' },
      ]
    }
  };

  /* Une SÉRIE : l'ordre est nécessaire. Chaque essai reprend une question
     laissée ouverte par le précédent et ne tient pas seul. Un PARCOURS,
     lui, réunit des essais autonomes autour d'une question ; son ordre
     n'est que suggéré.
     Une série ne porte PAS de résumé : ses titres, lus dans l'ordre, disent
     le mouvement mieux qu'une glose. Ne pas réintroduire de champ `why` ici. */
  var SERIES = {
    sacrifice: {
      name: 'Ce qu\'on cesse de regarder', color: '#0a4d44',
      steps: [
        { href:'le-sang-quon-ne-voit-plus', t:"Le sang qu'on ne voit plus", min:24 },
        { href:'lignorance-quon-fabrique',  t:"L'ignorance qu'on fabrique", min:20 },
        { href:'la-part-du-temoin',         t:'La part du témoin',          min:15 },
      ]
    }
  };

  /* CARTE. Nœuds et liens du graphe des essais (carte.html n'est qu'une vue).
     cross:true = passerelle entre constellations, révélée par le bouton
     « Voir les liens entre constellations ». Un lien par paire, jamais
     redéclaré ailleurs. g: lire | ame | sens (rubrique du nœud). */
  var MAP = {
    nodes: [
  {id:"maitriser-le-desir",        t:"Maîtriser le désir",                  g:"ame"},
  {id:"raison-et-revelation",      t:"Raison et révélation",                g:"lire"},
  {id:"les-destins-du-moi",        t:"Les destins du moi",                  g:"ame"},
  {id:"averroes-la-raison",        t:"Averroès, la raison",                 g:"lire"},
  {id:"le-premier-mot",            t:"Le premier mot",                      g:"lire"},
  {id:"le-monde-imaginal",         t:"Le monde entre deux",                 g:"lire"},
  {id:"la-lecture-symbolique",     t:"La lecture symbolique",               g:"lire"},
  {id:"la-rhetorique-semitique",   t:"La rhétorique sémitique",             g:"lire"},
  {id:"shahrour-le-livre-et-le-coran",t:"Shahrour : le Livre et le Coran", g:"lire"},
  {id:"la-loi-de-limites",t:"La loi de limites", g:"lire"},
  {id:"les-mots-et-le-monde",      t:"Les mots et le monde",               g:"lire"},
  {id:"le-confluent-des-deux-mers",t:"Le confluent des deux mers",          g:"ame"},
  {id:"ombre-et-nafs",             t:"L'ombre et le nafs",                  g:"ame"},
  {id:"les-reves",                 t:"Les rêves",                           g:"ame"},
  {id:"le-souffle",                t:"Le souffle",                          g:"ame"},
  {id:"le-coeur",                  t:"Le cœur",                             g:"ame"},
  {id:"le-desenchantement",        t:"Le désenchantement",                  g:"sens"},
  {id:"les-signes",                t:"Les signes",                          g:"sens"},
  {id:"l-univers-ajuste",          t:"L'univers ajusté",                    g:"sens"},
  {id:"le-probleme-du-mal",        t:"Le problème du mal",                  g:"sens"},
  {id:"le-libre-arbitre",          t:"Le libre arbitre",                    g:"sens"},
  {id:"les-deux-livres",           t:"Les deux livres",                     g:"sens"},
  {id:"la-fitra",                  t:"La fiṭra et la dignité",              g:"sens"},
  {id:"quest-ce-qu-une-lecture",   t:"Qu'est-ce qu'une lecture ?",          g:"lire"},
  {id:"le-coran-en-pratique",      t:"Le Coran, concrètement",              g:"lire"},
  {id:"le-scroll-et-la-pause",     t:"Le scroll et la pause",               g:"ame"},
  {id:"le-sens-malgre-tout",       t:"Le sens malgré tout",                 g:"sens"},
  {id:"la-finitude",               t:"La finitude",                         g:"sens"},
  {id:"ce-qui-arrete",             t:"Ce qui arrête",                       g:"sens"},
  {id:"je-et-tu",                  t:"Je et Tu",                            g:"ame"},
  {id:"jung-en-dix-minutes",       t:"Ce qui agit sans qu'on le sache",     g:"ame"},
  {id:"l-archetype-et-l-animal",   t:"L'archétype et l'animal totem",       g:"ame"},
  {id:"le-moi-et-son-image", t:"Le moi et son image", g:"ame"},
  {id:"trois-portes-pour-la-meme-piece",t:"Trois portes pour la même pièce",g:"ame"},
  {id:"la-source-et-le-fleuve",    t:"La source et le fleuve",              g:"lire"},
  {id:"le-sens-avant-le-comment",  t:"Le sens avant le comment",            g:"lire"},
  {id:"le-sang-quon-ne-voit-plus", t:"Le sang qu'on ne voit plus",          g:"sens"},
  {id:"lignorance-quon-fabrique",   t:"L'ignorance qu'on fabrique",              g:"sens"},
  {id:"la-part-du-temoin",          t:"La part du témoin",                       g:"sens"}
    ],
    edges: [
  {s:"lignorance-quon-fabrique", t:"le-sang-quon-ne-voit-plus", cross:false},
  {s:"lignorance-quon-fabrique", t:"le-probleme-du-mal", cross:false},
  {s:"le-sang-quon-ne-voit-plus", t:"le-probleme-du-mal", cross:false},
  {s:"le-sang-quon-ne-voit-plus", t:"shahrour-le-livre-et-le-coran", cross:true},
  {s:"la-loi-de-limites", t:"shahrour-le-livre-et-le-coran", cross:false},
  {s:"la-loi-de-limites", t:"quest-ce-qu-une-lecture", cross:false},
  {s:"le-sang-quon-ne-voit-plus", t:"la-loi-de-limites", cross:true},
  {s:"la-part-du-temoin", t:"lignorance-quon-fabrique", cross:false},
  {s:"la-part-du-temoin", t:"le-sang-quon-ne-voit-plus", cross:false},
  {s:"averroes-la-raison", t:"la-lecture-symbolique", cross:false},
  {s:"averroes-la-raison", t:"la-source-et-le-fleuve", cross:false},
  {s:"averroes-la-raison", t:"les-deux-livres", cross:true},
  {s:"averroes-la-raison", t:"quest-ce-qu-une-lecture", cross:false},
  {s:"averroes-la-raison", t:"raison-et-revelation", cross:false},
  {s:"averroes-la-raison", t:"shahrour-le-livre-et-le-coran", cross:false},
  {s:"ce-qui-arrete", t:"la-finitude", cross:false},
  {s:"ce-qui-arrete", t:"le-confluent-des-deux-mers", cross:true},
  {s:"ce-qui-arrete", t:"les-mots-et-le-monde", cross:true},
  {s:"ce-qui-arrete", t:"les-signes", cross:false},
  {s:"ce-qui-arrete", t:"maitriser-le-desir", cross:true},
  {s:"ce-qui-arrete", t:"ombre-et-nafs", cross:true},
  {s:"je-et-tu", t:"la-finitude", cross:true},
  {s:"je-et-tu", t:"le-desenchantement", cross:true},
  {s:"je-et-tu", t:"le-moi-et-son-image", cross:false},
  {s:"je-et-tu", t:"le-scroll-et-la-pause", cross:false},
  {s:"je-et-tu", t:"le-sens-malgre-tout", cross:true},
  {s:"je-et-tu", t:"trois-portes-pour-la-meme-piece", cross:false},
  {s:"jung-en-dix-minutes", t:"la-lecture-symbolique", cross:true},
  {s:"jung-en-dix-minutes", t:"le-confluent-des-deux-mers", cross:false},
  {s:"jung-en-dix-minutes", t:"le-monde-imaginal", cross:true},
  {s:"jung-en-dix-minutes", t:"les-destins-du-moi", cross:false},
  {s:"jung-en-dix-minutes", t:"les-reves", cross:false},
  {s:"jung-en-dix-minutes", t:"ombre-et-nafs", cross:false},
  {s:"jung-en-dix-minutes", t:"trois-portes-pour-la-meme-piece", cross:false},
  {s:"l-univers-ajuste", t:"la-fitra", cross:false},
  {s:"l-univers-ajuste", t:"le-desenchantement", cross:false},
  {s:"l-univers-ajuste", t:"le-libre-arbitre", cross:false},
  {s:"l-univers-ajuste", t:"le-probleme-du-mal", cross:false},
  {s:"l-univers-ajuste", t:"les-deux-livres", cross:false},
  {s:"l-univers-ajuste", t:"les-signes", cross:false},
  {s:"la-finitude", t:"le-coeur", cross:true},
  {s:"la-finitude", t:"le-desenchantement", cross:false},
  {s:"la-finitude", t:"le-probleme-du-mal", cross:false},
  {s:"la-finitude", t:"le-sens-malgre-tout", cross:false},
  {s:"la-finitude", t:"les-signes", cross:false},
  {s:"la-fitra", t:"ce-qui-arrete", cross:false},
  {s:"la-fitra", t:"le-desenchantement", cross:false},
  {s:"la-fitra", t:"le-libre-arbitre", cross:false},
  {s:"la-fitra", t:"le-probleme-du-mal", cross:false},
  {s:"la-fitra", t:"le-souffle", cross:true},
  {s:"la-fitra", t:"les-destins-du-moi", cross:true},
  {s:"la-fitra", t:"les-signes", cross:false},
  {s:"la-lecture-symbolique", t:"la-rhetorique-semitique", cross:false},
  {s:"la-lecture-symbolique", t:"le-confluent-des-deux-mers", cross:true},
  {s:"la-lecture-symbolique", t:"le-monde-imaginal", cross:false},
  {s:"la-lecture-symbolique", t:"le-sens-avant-le-comment", cross:false},
  {s:"la-lecture-symbolique", t:"les-mots-et-le-monde", cross:false},
  {s:"la-lecture-symbolique", t:"quest-ce-qu-une-lecture", cross:false},
  {s:"la-lecture-symbolique", t:"raison-et-revelation", cross:false},
  {s:"la-lecture-symbolique", t:"shahrour-le-livre-et-le-coran", cross:false},
  {s:"la-rhetorique-semitique", t:"le-coran-en-pratique", cross:false},
  {s:"la-rhetorique-semitique", t:"le-premier-mot", cross:false},
  {s:"la-rhetorique-semitique", t:"le-sens-avant-le-comment", cross:false},
  {s:"la-rhetorique-semitique", t:"les-mots-et-le-monde", cross:false},
  {s:"la-rhetorique-semitique", t:"quest-ce-qu-une-lecture", cross:false},
  {s:"la-rhetorique-semitique", t:"shahrour-le-livre-et-le-coran", cross:false},
  {s:"la-source-et-le-fleuve", t:"le-coran-en-pratique", cross:false},
  {s:"la-source-et-le-fleuve", t:"le-libre-arbitre", cross:true},
  {s:"la-source-et-le-fleuve", t:"les-mots-et-le-monde", cross:false},
  {s:"la-source-et-le-fleuve", t:"quest-ce-qu-une-lecture", cross:false},
  {s:"la-source-et-le-fleuve", t:"raison-et-revelation", cross:false},
  {s:"la-source-et-le-fleuve", t:"shahrour-le-livre-et-le-coran", cross:false},
  {s:"le-coeur", t:"ce-qui-arrete", cross:true},
  {s:"le-coeur", t:"le-confluent-des-deux-mers", cross:false},
  {s:"le-coeur", t:"le-souffle", cross:false},
  {s:"le-coeur", t:"les-destins-du-moi", cross:false},
  {s:"le-coeur", t:"les-signes", cross:true},
  {s:"le-coeur", t:"maitriser-le-desir", cross:false},
  {s:"le-coeur", t:"ombre-et-nafs", cross:false},
  {s:"le-confluent-des-deux-mers", t:"le-monde-imaginal", cross:true},
  {s:"le-confluent-des-deux-mers", t:"le-sens-avant-le-comment", cross:true},
  {s:"le-confluent-des-deux-mers", t:"les-destins-du-moi", cross:false},
  {s:"le-confluent-des-deux-mers", t:"les-reves", cross:false},
  {s:"le-confluent-des-deux-mers", t:"ombre-et-nafs", cross:false},
  {s:"le-coran-en-pratique", t:"le-premier-mot", cross:false},
  {s:"le-coran-en-pratique", t:"les-mots-et-le-monde", cross:false},
  {s:"le-coran-en-pratique", t:"quest-ce-qu-une-lecture", cross:false},
  {s:"le-desenchantement", t:"le-probleme-du-mal", cross:false},
  {s:"le-desenchantement", t:"le-scroll-et-la-pause", cross:true},
  {s:"le-desenchantement", t:"le-sens-malgre-tout", cross:false},
  {s:"le-desenchantement", t:"les-deux-livres", cross:false},
  {s:"le-desenchantement", t:"les-signes", cross:false},
  {s:"le-libre-arbitre", t:"le-probleme-du-mal", cross:false},
  {s:"le-libre-arbitre", t:"le-sens-malgre-tout", cross:false},
  {s:"le-libre-arbitre", t:"les-deux-livres", cross:false},
  {s:"le-libre-arbitre", t:"maitriser-le-desir", cross:true},
  {s:"le-moi-et-son-image", t:"la-fitra", cross:true},
  {s:"le-moi-et-son-image", t:"le-scroll-et-la-pause", cross:false},
  {s:"le-moi-et-son-image", t:"les-destins-du-moi", cross:false},
  {s:"le-moi-et-son-image", t:"maitriser-le-desir", cross:false},
  {s:"le-moi-et-son-image", t:"ombre-et-nafs", cross:false},
  {s:"le-moi-et-son-image", t:"trois-portes-pour-la-meme-piece", cross:false},
  {s:"le-monde-imaginal", t:"le-sens-avant-le-comment", cross:false},
  {s:"le-monde-imaginal", t:"les-reves", cross:true},
  {s:"le-monde-imaginal", t:"ombre-et-nafs", cross:true},
  {s:"le-premier-mot", t:"le-souffle", cross:true},
  {s:"le-premier-mot", t:"les-mots-et-le-monde", cross:false},
  {s:"le-premier-mot", t:"quest-ce-qu-une-lecture", cross:false},
  {s:"le-premier-mot", t:"shahrour-le-livre-et-le-coran", cross:false},
  {s:"le-probleme-du-mal", t:"le-sens-malgre-tout", cross:false},
  {s:"le-probleme-du-mal", t:"les-deux-livres", cross:false},
  {s:"le-probleme-du-mal", t:"les-signes", cross:false},
  {s:"le-scroll-et-la-pause", t:"ce-qui-arrete", cross:true},
  {s:"le-scroll-et-la-pause", t:"maitriser-le-desir", cross:false},
  {s:"le-scroll-et-la-pause", t:"ombre-et-nafs", cross:false},
  {s:"le-sens-avant-le-comment", t:"averroes-la-raison", cross:false},
  {s:"le-sens-avant-le-comment", t:"raison-et-revelation", cross:false},
  {s:"le-sens-malgre-tout", t:"ce-qui-arrete", cross:false},
  {s:"le-sens-malgre-tout", t:"la-fitra", cross:false},
  {s:"le-souffle", t:"les-destins-du-moi", cross:false},
  {s:"le-souffle", t:"les-signes", cross:true},
  {s:"le-souffle", t:"ombre-et-nafs", cross:false},
  {s:"les-destins-du-moi", t:"maitriser-le-desir", cross:false},
  {s:"les-destins-du-moi", t:"ombre-et-nafs", cross:false},
  {s:"les-destins-du-moi", t:"trois-portes-pour-la-meme-piece", cross:false},
  {s:"les-deux-livres", t:"les-signes", cross:false},
  {s:"les-deux-livres", t:"raison-et-revelation", cross:true},
  {s:"les-mots-et-le-monde", t:"les-signes", cross:true},
  {s:"les-mots-et-le-monde", t:"raison-et-revelation", cross:false},
  {s:"les-mots-et-le-monde", t:"shahrour-le-livre-et-le-coran", cross:false},
  {s:"les-reves", t:"la-lecture-symbolique", cross:true},
  {s:"les-reves", t:"les-destins-du-moi", cross:false},
  {s:"les-reves", t:"ombre-et-nafs", cross:false},
  {s:"les-reves", t:"trois-portes-pour-la-meme-piece", cross:false},
  {s:"maitriser-le-desir", t:"le-confluent-des-deux-mers", cross:false},
  {s:"maitriser-le-desir", t:"ombre-et-nafs", cross:false},
  {s:"ombre-et-nafs", t:"trois-portes-pour-la-meme-piece", cross:false},
  {s:"quest-ce-qu-une-lecture", t:"les-mots-et-le-monde", cross:false},
  {s:"quest-ce-qu-une-lecture", t:"shahrour-le-livre-et-le-coran", cross:false},
  {s:"raison-et-revelation", t:"le-desenchantement", cross:true},
  {s:"raison-et-revelation", t:"shahrour-le-livre-et-le-coran", cross:false},
  {s:"raison-et-revelation", t:"jung-en-dix-minutes", cross:true},
  {s:"les-signes", t:"jung-en-dix-minutes", cross:true},
  {s:"la-fitra", t:"ombre-et-nafs", cross:true},
  {s:"le-souffle", t:"le-libre-arbitre", cross:true},
  {s:"le-premier-mot", t:"le-confluent-des-deux-mers", cross:true},
  {s:"le-souffle", t:"les-deux-livres", cross:true},
    ]
  };

  /* Alias dérivés : ne jamais les saisir à la main, ils suivent PATHS. */
  var COLORS = {}; Object.keys(PATHS).forEach(function(k){ COLORS[k] = PATHS[k].color; });
  var ENDQUOTES = {}; Object.keys(PATHS).forEach(function(k){ ENDQUOTES[k] = PATHS[k].endquote; });

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

      html += '<div class="pb-block" data-pid="' + pid + '" data-sid="' + m.step.href + '">';
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
        var sHere = (s.href === m.step.href);
        var cls = 'pb-step' + (sDone ? ' is-done' : '') + (sHere ? ' is-here' : '');
        var style = sDone || sHere ? 'style="--sc:' + col + '"' : '';
        var label = sHere ? 'Vous êtes ici : ' + s.t : s.t;
        html += '<a class="' + cls + '" ' + style + ' href="' + s.href + '.html" title="' + label.replace(/"/g,'') + '" aria-label="' + label.replace(/"/g,'') + '">';
        html += '<span class="pb-step-dot">' + (sDone ? '✓' : (si + 1)) + '</span>';
        html += '</a>';
      });
      html += '</div>';

      /* Bouton marquer comme lu */
      html += '<div class="pb-actions">';
      html += '<button class="pb-btn pb-btn-mark" data-pid="' + pid + '" data-sid="' + m.step.href + '" style="' + (isDone ? 'border-color:' + col + ';color:' + col + ';' : '') + '">';
      html += isDone ? '✓ Marqué comme lu' : 'Marquer comme lu';
      html += '</button>';
      html += '<a class="pb-btn pb-btn-path" href="index.html#commencer" style="border-color:' + col + ';color:' + col + '">Voir les parcours →</a>';
      html += '</div>';

      /* Prochaine lecture */
      if (nextStep && isDone) {
        html += '<div class="pb-next">';
        html += '<span class="pb-next-label" style="color:' + col + '">Prochaine étape</span>';
        html += '<a class="pb-next-link" href="' + nextStep.href + '.html">' + nextStep.t + ' →</a>';
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
      '.sb-wrap{margin:0 0 2rem;padding:1.1rem 1.2rem;border:1px solid var(--rule);border-left:3px solid var(--sc);border-radius:8px;}',
      '.sb-head{display:flex;align-items:baseline;gap:.6rem;}',
      '.sb-pos{font-family:var(--display);font-size:.72rem;letter-spacing:.1em;color:var(--sc);border:1px solid var(--sc);border-radius:99px;padding:.1rem .5rem;}',
      '.sb-name{font-family:var(--display);font-size:1rem;color:var(--ink);}',
      '.sb-steps{list-style:none;counter-reset:sb;margin:.8rem 0 0;padding:0;}',
      '.sb-step{counter-increment:sb;display:flex;align-items:baseline;gap:.55rem;padding:.28rem 0;font-family:var(--body);font-size:.92rem;}',
      '.sb-step::before{content:counter(sb);font-family:var(--display);font-size:.72rem;color:var(--ink-soft);opacity:.6;min-width:1rem;}',
      '.sb-step.is-current::before{color:var(--sc);opacity:1;}',
      '.sb-step.is-current .sb-t{color:var(--ink);font-weight:600;}',
      '.sb-step.is-read::before{content:"✓";color:var(--sc);opacity:1;}',
      '.sb-t{color:var(--ink-soft);text-decoration:none;}',
      'a.sb-t:hover{color:var(--sc);}',
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

  /* Trouve la série qui contient cette page (ordre nécessaire) */
  function findSerie(page) {
    var keys = Object.keys(SERIES);
    for (var i = 0; i < keys.length; i++) {
      var s = SERIES[keys[i]];
      for (var j = 0; j < s.steps.length; j++) {
        if (s.steps[j].href === page) {
          return { sid: keys[i], serie: s, idx: j };
        }
      }
    }
    return null;
  }

  function renderSerie(m) {
    var s = m.serie, n = s.steps.length, pos = m.idx + 1;
    var html = '<div class="sb-wrap" style="--sc:' + s.color + '">';
    html += '<div class="sb-head"><span class="sb-pos">' + pos + ' / ' + n + '</span>';
    html += '<span class="sb-name">' + s.name + '</span></div>';
    html += '<ol class="sb-steps">';
    s.steps.forEach(function(step, i) {
      var cur = (i === m.idx);
      var cls = 'sb-step' + (cur ? ' is-current' : '') + (isStepRead(step) ? ' is-read' : '');
      html += '<li class="' + cls + '">';
      html += cur
        ? '<span class="sb-t">' + step.t + '</span>'
        : '<a class="sb-t" href="' + step.href + '.html">' + step.t + '</a>';
      html += '</li>';
    });
    html += '</ol></div>';
    return html;
  }

  function init() {
    var page = getCurrentPage();
    if (!page) return;

    var matches = findPaths(page);
    var serie = findSerie(page);
    if (matches.length === 0 && !serie) return;

    injectStyles();

    /* Créer le conteneur */
    var wrap = document.createElement('div');
    wrap.className = 'pb-wrap';
    function paint() {
      var h = '';
      if (serie) h += renderSerie(serie);
      if (matches.length) {
        h += '<div class="pb-title">Dans votre parcours de lecture</div>' + renderBanner(matches);
      }
      wrap.innerHTML = h;
    }
    paint();

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
      for (var i = 0; i < path.steps.length; i++) { if (path.steps[i].href === sid) { step = path.steps[i]; break; } }
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
      paint();
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
        paint();
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

  /* Exposé pour l'accueil (index.html), qui affiche les séries */
  /* Exposé pour index.html : source unique, jamais redéclarée là-bas. */

  /* PORTES D'INITIATION. Groupes de textes autonomes rangés par domaine, PAS
     des chemins a sens oblige (contrairement a PATHS) : chaque texte se lit
     seul. Sert uniquement a afficher un fil de reprise leger sur la page
     ("1 . 2 . 3") et a retrouver ou l'on s'est arrete si on revient en
     arriere. Ne pas migrer vers PATHS : la difference est volontaire. */
  var GROUPS = {
    religion: {
      name: 'Religion · Pour commencer',
      slugs: ['croire-et-vouloir-comprendre','ce-qui-distingue-une-religion','quand-la-foi-se-met-a-raisonner']
    },
    philosophie: {
      name: 'Philosophie · Pour commencer',
      slugs: ['ce-que-veut-dire-philosopher','ce-qui-distingue-une-ecole']
    }
  };

  window.MAJMA_PATHS = PATHS;
  window.MAJMA_GROUPS = GROUPS;
  window.MAJMA_SERIES = SERIES;
  window.MAJMA_MAP = MAP;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
