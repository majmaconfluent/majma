# Guide de Majmaʿ — version « à plat », publication depuis le téléphone

Cette version du site n'a **aucun sous-dossier** : tous les fichiers sont au même niveau. C'est exprès — ça rend le téléversement depuis un téléphone simple et fiable.

```
index.html                          → page d'accueil
styles.css                          → l'apparence de TOUT le site
le-confluent-des-deux-mers.html     → article 1
shahrour-le-livre-et-le-coran.html  → article 2
modele.html                         → gabarit à copier pour écrire
GUIDE.md                            → ce fichier
```

Règle d'or : **toute l'apparence est dans `styles.css`.** Les fichiers HTML ne contiennent que le texte.

---

## A. Mettre le site en ligne gratuitement (depuis le téléphone)

On utilise **GitHub Pages** : gratuit, fiable, et il garde l'historique de vos modifications.
⚠️ Faites tout dans le **navigateur Chrome** (pas l'appli GitHub, trop limitée). Si une page est trop serrée, menu Chrome → **« Site pour ordinateur »**.

**1. Dézipper.** Dans l'appli *Fichiers* du téléphone, appuyez sur le `.zip` → **Extraire**. Vous obtenez un dossier avec les 6 fichiers ci-dessus.

**2. Créer le compte.** `github.com` → *Sign up* (email, mot de passe, nom d'utilisateur propre). Plan **Free**. Confirmez l'email.

**3. Créer le dépôt.** Allez sur `github.com/new`.
- *Repository name* : `majma`
- Cochez **Public** (obligatoire pour l'hébergement gratuit)
- *Create repository*

**4. Téléverser les fichiers.** Sur la page du dépôt vide : lien **« uploading an existing file »** (ou *Add file → Upload files*).
- *choose your files* → dans le sélecteur, ouvrez le dossier extrait, **sélectionnez les 6 fichiers** (appui long pour cocher plusieurs).
- Patientez, puis bouton vert **Commit changes**.

**5. Activer Pages.** Dans le dépôt → onglet **Settings** → section **Pages**.
- *Source* : **Deploy from a branch**
- *Branch* : **main**, dossier **/ (root)** → **Save**
- Patientez 1–2 min, rechargez : « Your site is live at `https://VOTRE-PSEUDO.github.io/majma/` ». Ouvrez le lien : le site doit s'afficher.

➡️ À ce stade, le site existe déjà en ligne. L'étape suivante (relier `majma.me`) se fait dans le manager Infomaniak — voir la conversation pour les valeurs DNS à jour.

---

## B. Écrire un nouvel article

1. Sur GitHub, ouvrez `modele.html` → bouton crayon (*Edit*) → **Copiez tout le contenu**.
2. *Add file → Create new file* → nommez-le sans accent ni espace, ex. `ombre-et-nafs.html` → collez → adaptez le titre, la rubrique, la couleur, le texte → **Commit**.
3. Ouvrez `index.html` (crayon), copiez un bloc `<a class="entry">…</a>` existant, adaptez-le (titre, résumé, lien `votre-fichier.html`, rubrique via `data-r="philo|psycho|religion"`) → **Commit**.

Le site se met à jour tout seul en ~1 minute. Aucune commande à lancer.

**Briques de mise en forme disponibles :** `<p class="lead">` (1er paragraphe à lettrine), `<p>`, `<h2>`, `<strong>`, `<em>`, `<p class="pull">` (exergue), `<p class="verse">…<span class="ref">…</span></p>` (verset), `<span class="ar-inline">…</span>` (mot arabe), `<div class="note"><span class="label">…</span> …</div>` (encadré), `<div class="divider"></div>` (séparateur).

---

## C. Voir le site sur le téléphone avant publication

Difficile d'ouvrir proprement un site multi-fichiers hors-ligne sur mobile. Le plus simple : publiez d'abord (partie A), puis prévisualisez en ligne. Sur ordinateur, il suffirait d'ouvrir `index.html`.

---

## D. Renommer le site

« Majmaʿ » et le sigle مجمع apparaissent dans l'en-tête et le pied de chaque page (`class="brand"`, `class="mark"`) et dans la balise `<title>`. Modifiez-les si vous voulez un autre nom.

---

## E. Plus tard

La méthode « copier le modèle » est parfaite jusqu'à ~10 articles. Au-delà, un générateur de site statique (**Eleventy** ou **Astro**) automatise la liste des articles et les rubriques. Le texte de vos articles se transposera tel quel. Rien ne presse : commencez par écrire.
