# Guide de Majmaʿ

Revue d’idées (philosophie, psychologie, lecture rationnelle de l’islam).
Site statique, **structure à plat** : aucun sous-dossier, tous les fichiers au même niveau. C’est exprès, pour téléverser depuis un téléphone sans se tromper.

- En ligne : **https://majma.me**
- Dépôt : **github.com/abdnah/majma** · hébergement **GitHub Pages** (branche `main`, racine)
- Écrire à la revue : **contact@majma.me**

Règle d’or : **toute l’apparence est dans `styles.css`.** Les fichiers HTML ne contiennent que le texte et les schémas.

---

## 1. Ce qu’il y a dans le dossier (26 fichiers)

**Pages de structure**
```
index.html        → accueil : manifeste + 4 parcours + index filtrable par fil
styles.css        → l’apparence de TOUT le site
carte.html        → la carte-constellation des essais (liens entre idées)
methode.html      → la méthode de la revue (« lire plutôt que suivre »)
glossaire.html    → ~45 termes (arabe translittéré + définition)
apropos.html      → « Qui écrit ? »
modele.html       → gabarit à copier pour écrire un nouvel essai
GUIDE.md          → ce fichier
```

**Les 18 essais, en 3 fils**

- **Les textes** (comment lire le Coran) : `le-premier-mot`, `averroes-la-raison`, `la-lecture-symbolique`, `la-rhetorique-semitique`, `shahrour-le-livre-et-le-coran`, `les-mots-et-le-monde`.
- **L’âme** (psychologie, le moi) : `freud-et-jung`, `ombre-et-nafs`, `les-reves`, `le-souffle`, `le-confluent-des-deux-mers`.
- **Le sens** (science et foi, sens) : `la-fitra`, `les-signes`, `les-deux-livres`, `l-univers-ajuste`, `le-libre-arbitre`, `le-probleme-du-mal`, `le-desenchantement`.

Chaque essai est un fichier `slug.html` (le *slug* = le nom de fichier, sans accents ni espaces).

---

## 2. Publier ou mettre à jour le site (depuis le téléphone)

⚠️ Faites tout dans **Chrome**, menu → **« Site pour ordinateur »** (l’appli GitHub est trop limitée).

1. **Dézipper** le `.zip` reçu (appli *Fichiers* → *Extraire*).
2. Sur **github.com/abdnah/majma** → **Add file → Upload files**.
3. Glisser **tous les fichiers** (ou seulement ceux qui ont changé). Garder les **mêmes noms** : GitHub remplace l’ancien par le nouveau.
4. En bas, **Commit changes**.
5. Le site se met à jour en 1 à 2 minutes. Pour forcer l’affichage de la nouvelle version, ouvrir **`majma.me/?v=N`** (changer le numéro N à chaque fois).

> Attention : téléverser ne **supprime** pas les anciens fichiers. Si on renomme un essai, l’ancien fichier reste en ligne tant qu’on ne le supprime pas à la main (bouton 🗑️ sur GitHub).

---

## 3. Écrire un nouvel essai

1. **Copier `modele.html`** et le renommer `mon-essai.html` (slug en minuscules, tirets, sans accents).
2. Y mettre le **titre**, le **fil** (`--philo` ou `--psycho` dans le `:root`), le texte, les schémas et les versets.
3. **Le référencer à trois endroits :**
   - **`index.html`** → ajouter une carte `.fcard` dans l’index (avec `data-thread="lire|ame|sens"` et `style="--tc:<couleur du fil>"`), et l’ajouter à un parcours si pertinent.
   - **`carte.html`** → ajouter un nœud dans `NODES` (`{id:"mon-essai",t:"Mon essai",g:"lire|ame|sens"}`) et une ou deux arêtes dans `EDGES` vers les essais liés.
   - **`glossaire.html`** → ajouter les nouveaux termes arabes s’il y en a.

**Couleurs des fils** (pigments) : `lire` = #0e6b60 (vert pétrole), `ame` = #9c6b34 (ocre), `sens` = #3f5e8c (indigo). Sur la page d’un essai, l’accent reste le vert pétrole.

---

## 4. Conventions de la revue (à respecter)

- **Pas de tiret cadratin « — » nulle part.** Utiliser la virgule, le « · » ou les deux-points. (C’est une signature « IA » qu’on évite.)
- **Honnêteté** : présenter les lectures comme des *interprétations, pas des verdicts*. Quand une lecture est symbolique ou minoritaire, le dire dans un encadré `note`.
- **Chute** : chaque essai se termine par un `divider` puis un paragraphe en italique centré, clos par **«وَاللَّهُ أَعْلَم, Dieu seul sait»**.
- **Schémas** : `<figure class="diagram">` + `<svg>` (classes `d-ink`, `d-soft`, `d-accent` pour les remplissages ; `s-accent`, `s-rule` pour les traits) + `<figcaption>`.
- **Versets** : `<p class="verse">` (arabe) + `<span class="ref">` (traduction · référence).
- Texte aligné **à gauche**, mise en forme **sobre**.

---

## 5. Idées d’essais à venir

`ijtihād vs taqlīd` (le droit d’interpréter) · critique de l’`iʿjāz` (le faux « miracle scientifique ») · `les ḥudūd partout` (les limites en science et en justice) · le cœur (`al-qalb`) · le `hawā` (le caprice) · `asbāb al-nuzūl` (les circonstances de la révélation).

*Plus tard, quand il y aura ~25-30 essais : envisager une version multilingue (FR/EN/AR) via un générateur statique (Astro ou Eleventy). Ne pas traduire à la main d’ici là.*
