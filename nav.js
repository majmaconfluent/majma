/* nav.js — navigation précédent / suivant dans les essais */
(function () {
  var ORDER = [
    // Chapitre 1 · Premiers pas
    { href: "quest-ce-qu-une-lecture.html", ch: 1, title: "Qu'est-ce qu'une lecture ?" },
    { href: "le-coran-en-pratique.html",    ch: 1, title: "Le Coran, concrètement" },
    { href: "methode.html",                  ch: 1, title: "Méthode" },
    { href: "la-fitra.html",                 ch: 1, title: "La fiṭra et la dignité" },
    { href: "le-coeur.html",                 ch: 1, title: "Le cœur" },
    { href: "le-premier-mot.html",           ch: 1, title: "Le premier mot" },
    // Chapitre 2 · Apprendre à lire
    { href: "averroes-la-raison.html",           ch: 2, title: "Averroès et le droit de la raison" },
    { href: "la-lecture-symbolique.html",         ch: 2, title: "La lecture symbolique" },
    { href: "le-monde-imaginal.html",             ch: 2, title: "Le monde entre deux" },
    { href: "la-rhetorique-semitique.html",       ch: 2, title: "La rhétorique sémitique" },
    { href: "les-mots-et-le-monde.html",          ch: 2, title: "Les mots et le monde" },
    { href: "shahrour-le-livre-et-le-coran.html", ch: 2, title: "Shahrour : le livre et le Coran" },
    { href: "raison-et-revelation.html",          ch: 2, title: "Raison et révélation" },
    // Chapitre 3 · Le voyage intérieur
    { href: "jung-en-dix-minutes.html",           ch: 3, title: "Ce qui agit sans qu'on le sache" },
    { href: "ombre-et-nafs.html",                 ch: 3, title: "L'ombre et le nafs" },
    { href: "trois-portes-pour-la-meme-piece.html", ch: 3, title: "Trois portes pour la même pièce" },
    { href: "les-reves.html",                     ch: 3, title: "Les rêves" },
    { href: "le-souffle.html",                    ch: 3, title: "Le souffle" },
    { href: "le-confluent-des-deux-mers.html",    ch: 3, title: "Le Confluent des deux mers" },
    { href: "les-destins-du-moi.html",            ch: 3, title: "Les destins du moi" },
    { href: "maitriser-le-desir.html",            ch: 3, title: "Maîtriser le désir" },
    // Chapitre 4 · Lire le monde
    { href: "les-signes.html",           ch: 4, title: "Les signes" },
    { href: "l-univers-ajuste.html",     ch: 4, title: "L'univers ajusté" },
    { href: "les-deux-livres.html",      ch: 4, title: "Les deux livres" },
    { href: "le-desenchantement.html",   ch: 4, title: "Le désenchantement du monde" },
    { href: "le-sens-malgre-tout.html",  ch: 4, title: "Le sens malgré tout" },
    { href: "la-finitude.html",          ch: 4, title: "La finitude" },
    { href: "ce-qui-arrete.html",        ch: 4, title: "Ce qui arrête" },
    { href: "le-libre-arbitre.html",     ch: 4, title: "Le libre arbitre" },
    { href: "le-probleme-du-mal.html",   ch: 4, title: "Le problème du mal" },
    // Chapitre 5 · Aujourd'hui
    { href: "le-scroll-et-la-pause.html", ch: 5, title: "Le scroll et la pause" },
    { href: "le-moi-et-son-image.html",   ch: 5, title: "Le moi et son image" },
    { href: "je-et-tu.html",              ch: 5, title: "Je et Tu" }
  ];

  var CH_TITLES = {
    1: "Premiers pas",
    2: "Apprendre à lire",
    3: "Le voyage intérieur",
    4: "Lire le monde",
    5: "Aujourd'hui"
  };

  // Use meta tag for reliable detection (works on deployed site + previews)
  var metaId = document.querySelector('meta[name="essay-id"]');
  var page = metaId ? metaId.getAttribute('content') + '.html' : location.pathname.split("/").pop();
  var idx = -1;
  for (var i = 0; i < ORDER.length; i++) {
    if (ORDER[i].href === page) { idx = i; break; }
  }
  if (idx < 0) return;

  var cur = ORDER[idx];
  var prev = idx > 0 ? ORDER[idx - 1] : null;
  var next = idx < ORDER.length - 1 ? ORDER[idx + 1] : null;

  // Inject breadcrumb + prev/next bar
  var bar = document.createElement("nav");
  bar.className = "essay-nav";
  bar.setAttribute("aria-label", "Navigation dans les essais");

  var bread = '<span class="en-chap">Chapitre ' + cur.ch + ' · ' + CH_TITLES[cur.ch] + '</span>';
  var pos = '<span class="en-pos">' + (idx + 1) + ' / ' + ORDER.length + '</span>';

  var prevLink = prev
    ? '<a class="en-link en-prev" href="' + prev.href + '" title="' + prev.title + '">← ' + prev.title + '</a>'
    : '<span class="en-link en-prev en-disabled"></span>';

  var nextLink = next
    ? '<a class="en-link en-next" href="' + next.href + '" title="' + next.title + '">' + next.title + ' →</a>'
    : '<span class="en-link en-next en-disabled"></span>';

  bar.innerHTML =
    '<div class="en-bar">' +
      '<div class="en-meta">' + bread + pos + '</div>' +
      '<div class="en-arrows">' + prevLink + nextLink + '</div>' +
    '</div>';

  // Insert after article header
  var articleHead = document.querySelector(".article-head");
  if (articleHead && articleHead.parentNode) {
    articleHead.parentNode.insertBefore(bar, articleHead.nextSibling);
  }
})();
