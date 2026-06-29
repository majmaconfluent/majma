/* icons.js — Majmaʿ
   Jeu d'icônes thématiques abstraites + assignation par essai.
   Chaque icône est un SVG inline (ligne fine, hérite de --c pour la couleur).
*/
(function(){
  'use strict';

  // Bibliothèque d'icônes (viewBox 0 0 40 40, couleur via var(--c))
  var LIB = {
    lecture:   '<circle cx="20" cy="20" r="11" fill="none" stroke="var(--c)" stroke-width="1.4"/><path d="M12 20 Q20 14 28 20 Q20 26 12 20Z" fill="none" stroke="var(--c)" stroke-width="1.4"/><circle cx="20" cy="20" r="2.2" fill="var(--c)"/>',
    livre:     '<path d="M20 11 C16 13 12 13 9 12 L9 28 C12 29 16 29 20 27 C24 29 28 29 31 28 L31 12 C28 13 24 13 20 11Z" fill="none" stroke="var(--c)" stroke-width="1.4"/><line x1="20" y1="11" x2="20" y2="27" stroke="var(--c)" stroke-width="1.4"/>',
    plume:     '<path d="M27 12 C19 13 13 19 12 28 C20 27 27 21 28 12Z" fill="none" stroke="var(--c)" stroke-width="1.4"/><line x1="12" y1="28" x2="20" y2="20" stroke="var(--c)" stroke-width="1.4"/>',
    ame:       '<circle cx="20" cy="20" r="11" fill="none" stroke="var(--c)" stroke-width="1.4"/><path d="M20 14 C16 16 16 22 20 26 C24 22 24 16 20 14Z" fill="var(--c)" opacity=".5"/>',
    oeil:      '<path d="M9 20 Q20 12 31 20 Q20 28 9 20Z" fill="none" stroke="var(--c)" stroke-width="1.4"/><circle cx="20" cy="20" r="3.5" fill="var(--c)"/>',
    chemin:    '<path d="M13 29 C13 22 27 22 27 15" fill="none" stroke="var(--c)" stroke-width="1.4"/><circle cx="13" cy="29" r="2" fill="var(--c)"/><circle cx="27" cy="13" r="2" fill="var(--c)"/>',
    etoile:    '<path d="M20 10 L22 18 L30 20 L22 22 L20 30 L18 22 L10 20 L18 18Z" fill="none" stroke="var(--c)" stroke-width="1.3" stroke-linejoin="round"/>',
    miroir:    '<circle cx="20" cy="20" r="11" fill="none" stroke="var(--c)" stroke-width="1.4"/><line x1="20" y1="9" x2="20" y2="31" stroke="var(--c)" stroke-width="1.2" stroke-dasharray="2 2"/>',
    croissant: '<path d="M25 12 A9 9 0 1 0 25 28 A7 7 0 1 1 25 12Z" fill="none" stroke="var(--c)" stroke-width="1.4"/>',
    balance:   '<line x1="20" y1="11" x2="20" y2="28" stroke="var(--c)" stroke-width="1.4"/><line x1="12" y1="15" x2="28" y2="15" stroke="var(--c)" stroke-width="1.4"/><path d="M12 15 L9 21 H15Z M28 15 L25 21 H31Z" fill="none" stroke="var(--c)" stroke-width="1.2"/>',
    spirale:   '<path d="M20 20 a3 3 0 1 1 3 -3 a6 6 0 1 1 -6 6 a9 9 0 1 1 9 -9" fill="none" stroke="var(--c)" stroke-width="1.4"/>',
    cercles:   '<circle cx="20" cy="20" r="11" fill="none" stroke="var(--c)" stroke-width="1.3"/><circle cx="20" cy="20" r="6.5" fill="none" stroke="var(--c)" stroke-width="1.3"/><circle cx="20" cy="20" r="2" fill="var(--c)"/>',
    eau:       '<path d="M20 10 C14 18 14 24 20 28 C26 24 26 18 20 10Z" fill="none" stroke="var(--c)" stroke-width="1.4"/><path d="M16 23 Q20 26 24 23" fill="none" stroke="var(--c)" stroke-width="1.2"/>',
    souffle:   '<path d="M11 17 H24 A4 4 0 1 0 20 13" fill="none" stroke="var(--c)" stroke-width="1.4"/><path d="M11 23 H27 A4 4 0 1 1 23 27" fill="none" stroke="var(--c)" stroke-width="1.4"/>',
    porte:     '<rect x="13" y="10" width="14" height="20" rx="1" fill="none" stroke="var(--c)" stroke-width="1.4"/><circle cx="23" cy="20" r="1.4" fill="var(--c)"/>',
    horloge:   '<circle cx="20" cy="20" r="11" fill="none" stroke="var(--c)" stroke-width="1.4"/><path d="M20 14 V20 L24 23" fill="none" stroke="var(--c)" stroke-width="1.4"/>',
    monde:     '<circle cx="20" cy="20" r="11" fill="none" stroke="var(--c)" stroke-width="1.4"/><ellipse cx="20" cy="20" rx="4.5" ry="11" fill="none" stroke="var(--c)" stroke-width="1.2"/><line x1="9" y1="20" x2="31" y2="20" stroke="var(--c)" stroke-width="1.2"/>',
    feu:       '<path d="M20 9 C24 15 26 18 26 23 A6 6 0 0 1 14 23 C14 19 17 17 17 13 C19 15 20 17 20 9Z" fill="none" stroke="var(--c)" stroke-width="1.4"/>',
    deux:      '<circle cx="15" cy="20" r="7" fill="none" stroke="var(--c)" stroke-width="1.4"/><circle cx="25" cy="20" r="7" fill="none" stroke="var(--c)" stroke-width="1.4"/>'
  };

  // Assignation slug -> icône (selon le thème de l'essai)
  var MAP = {
    'quest-ce-qu-une-lecture':'lecture',
    'la-source-et-le-fleuve':'eau',
    'averroes-la-raison':'balance',
    'le-libre-arbitre':'chemin',
    'le-probleme-du-mal':'balance',
    'le-coeur':'ame',
    'le-premier-mot':'plume',
    'la-fitra':'croissant',
    'le-coran-en-pratique':'livre',
    'methode':'chemin',
    'la-rhetorique-semitique':'plume',
    'les-deux-livres':'deux',
    'raison-et-revelation':'balance',
    'la-lecture-symbolique':'oeil',
    'shahrour-le-livre-et-le-coran':'livre',
    'les-signes':'etoile',
    'le-confluent-des-deux-mers':'eau',
    'jung-en-dix-minutes':'spirale',
    'ce-qui-arrete':'spirale',
    'le-moi-et-son-image':'cercles',
    'les-destins-du-moi':'chemin',
    'ombre-et-nafs':'miroir',
    'les-reves':'oeil',
    'le-souffle':'souffle',
    'maitriser-le-desir':'feu',
    'je-et-tu':'deux',
    'le-monde-imaginal':'porte',
    'trois-portes-pour-la-meme-piece':'porte',
    'la-finitude':'horloge',
    'le-desenchantement':'horloge',
    'le-sens-avant-le-comment':'etoile',
    'le-sens-malgre-tout':'etoile',
    'l-univers-ajuste':'monde',
    'les-mots-et-le-monde':'monde',
    'le-scroll-et-la-pause':'horloge'
  };

  function iconFor(slug){
    var key = MAP[slug] || 'lecture';
    return LIB[key] || LIB.lecture;
  }

  // SVG complet prêt à insérer
  function svgFor(slug, color){
    var inner = iconFor(slug);
    return '<svg class="thematic-ic" viewBox="0 0 40 40" style="--c:' + (color||'var(--accent)') + '">' + inner + '</svg>';
  }

  window.MajmaIcons = { lib:LIB, map:MAP, iconFor:iconFor, svgFor:svgFor };
})();
