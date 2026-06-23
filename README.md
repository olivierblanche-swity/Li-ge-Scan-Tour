# Liège Scan Tour

## Présentation

Liège Scan Tour est une application web touristique consacrée aux monuments de la ville de Liège.

L'objectif du projet est de permettre aux visiteurs de découvrir rapidement les principaux monuments liégeois grâce à une expérience mobile first centrée sur le scanner photo.

L'utilisateur peut accéder à la caméra de son appareil, prendre une photo d'un monument, confirmer le monument reconnu et consulter immédiatement ses informations historiques et pratiques.

Le projet reste une application front-end statique : aucun backend, aucune base de données et aucune bibliothèque UI externe.

---

## Fonctionnalités

### Accueil

* Présentation du projet.
* Accès rapide à la fonction de scan.
* Affichage des derniers monuments consultés.
* Interface responsive.
* Animations légères d'apparition.

### Monuments

Consultation des principaux monuments de Liège :

* Gare de Liège-Guillemins
* Montagne de Bueren
* Le Perron
* Palais des Princes-Évêques
* Cathédrale Saint-Paul
* Opéra Royal de Wallonie

Chaque monument possède :

* Une image.
* Une catégorie.
* Une description courte.
* Une description détaillée.
* Une adresse.
* Un lien vers Google Maps.
* Une fiche détaillée.

Fonctionnalités disponibles :

* Recherche en temps réel par nom.
* Recherche insensible à la casse.
* Filtrage par catégorie.
* Ajout et retrait des favoris.
* Conservation des favoris après rechargement via `localStorage`.

### Scanner

L'utilisateur peut :

1. Ouvrir la caméra de son appareil.
2. Prendre une photo.
3. Visualiser l'aperçu de la photo.
4. Recevoir un feedback pendant la simulation d'analyse.
5. Confirmer le monument reconnu.
6. Consulter immédiatement ses informations.

### Fiche détail

La fiche détail affiche :

* L'image du monument.
* Son nom.
* Sa catégorie.
* Sa description.
* Son adresse.
* Un lien Google Maps.
* Un bouton favori.

Chaque consultation est enregistrée dans `localStorage` afin d'alimenter la section "Dernièrement consultés" de la page d'accueil.

### Contact

Une page contact permet de saisir :

* Nom.
* Email.
* Message.

La validation JavaScript vérifie :

* Les champs obligatoires.
* Le format de l'email.

Après soumission, un message de confirmation est affiché sans backend.

### Quiz touristique

Une page quiz propose des questions à choix multiples sur les monuments.

Fonctionnalités :

* 5 questions.
* Choix multiples.
* Calcul du score final.
* Bouton recommencer.

### Galerie photo

Une page galerie affiche toutes les photos des monuments.

Fonctionnalités :

* Grille responsive.
* Ouverture des images en grand format.
* Lightbox sans bibliothèque externe.
* Fermeture au clic ou avec la touche `Escape`.

### Navigation et UX

* Menu desktop.
* Menu hamburger mobile.
* Fermeture du menu après navigation.
* État actif dans la navigation.
* Focus accessibles.
* Hovers cohérents.
* Bouton flottant "retour en haut".
* Mode sombre complet.
* Sauvegarde du mode sombre dans `localStorage`.
* Restauration automatique du thème au rechargement.

---

## Technologies utilisées

### Front-End

* HTML5
* Tailwind CSS v4
* JavaScript Vanilla
* Modules ES6

### Outils

* Vite.js
* Git
* GitHub

### Stockage local

* `localStorage` pour les favoris.
* `localStorage` pour le thème sombre.
* `localStorage` pour l'historique des monuments consultés.

### Hébergement

* Application statique.
* Aucune base de données.
* Aucun backend.

---

## Structure du projet

```txt
Liège Scan Tour
│
├── public
│   └── assets
│       └── images
│
├── src
│   ├── components
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── MonumentCard.js
│   │   ├── MonumentDetails.js
│   │   ├── MonumentGrid.js
│   │   └── MonumentsPage.js
│   │
│   ├── data
│   │   └── monuments.js
│   │
│   ├── pages
│   │   ├── ContactPage.js
│   │   ├── GalleryPage.js
│   │   ├── HomePage.js
│   │   ├── QuizPage.js
│   │   └── ScannerPage.js
│   │
│   ├── css
│   │   └── style.css
│   │
│   ├── favorites.js
│   ├── history.js
│   ├── scanner.js
│   ├── theme.js
│   └── main.js
│
├── docs
│   ├── instructions_agent.txt
│   └── sources-images.md
│
├── index.html
├── package.json
└── README.md
```

---

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build

```bash
npm run build
```

---

## Objectif pédagogique

Ce projet a été réalisé afin de mettre en pratique :

* La manipulation du DOM.
* Les modules JavaScript ES6.
* La gestion d'événements.
* L'utilisation de l'API Camera du navigateur.
* La gestion du `localStorage`.
* Le développement responsive mobile first.
* L'accessibilité clavier.
* L'organisation d'un projet Vite.js.
* Tailwind CSS v4.
* Le versionnement avec Git et GitHub.
* La création du site avec l'aide de prompts IA pour le cours de conception de projet IA.

---

## Fonctionnalités restantes possibles

Améliorations futures envisageables :

* Reconnaissance automatique réelle des monuments par IA.
* Géolocalisation des utilisateurs.
* Parcours personnalisés.
* Suggestions de monuments proches.
* Version PWA installable.
* Application mobile native.

---

## Auteur

Projet réalisé par Olivier Blanche dans le cadre de sa formation de Web Developer.

Belgique - 2026
