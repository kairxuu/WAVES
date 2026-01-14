# WAVES Ocean Initiative 🌊

**WAVES** est une plateforme web immersive dédiée à la préservation des océans, alliant design minimaliste "Apple-style" et narration engageante.

![WAVES Preview](src/public/IMG/underwater-exploration.png)

## 🎯 Objectif

Ce projet a pour but de présenter une organisation fictive de protection marine avec un niveau de finition professionnel, crédible et esthétique. L'accent est mis sur l'expérience utilisateur (UX), la fluidité des animations et la clarté du message.

## ✨ Fonctionnalités Clés

*   **Design "Apple"** : Esthétique épurée, typographie soignée (San Francisco/Inter), contrastes forts, et effets de verre (Glassmorphism).
*   **Interactivité** :
    *   **Smooth Scroll** : Navigation ultra-fluide grâce à [Lenis](https://lenis.studiofreight.com/).
    *   **Parallaxe 3D** : Effets de profondeur sur les images et le texte lors du défilement.
    *   **Animations** : Apparitions progressives (`reveal`), textes respirants (`breathe`), et gradients animés.
*   **Responsivité Totale** : Adaptation parfaite du mobile au desktop, avec des grilles flexibles (Bento Grids).
*   **Contenu Riche** : Navigation dynamique, page "À Propos" avec timeline historique, et page "Contact" avec carte mondiale.

## 🛠️ Technologies

*   **HTML5** : Structure sémantique (`<main>`, `<section>`, etc.).
*   **CSS3** : Variables CSS, Flexbox, Grid, Animations `keyframes`, et Media Queries.
*   **JavaScript (Vanilla)** : Gestion du DOM, animations au scroll, et injection dynamique (Navbar).
*   **Lenis Scroll** : Librairie pour le lissage du défilement.

## 📂 Structure du Projet

```
/
├── index.html          # Page d'accueil (Hero, Impact, Partenaires)
├── about.html          # Page À Propos (Histoire, Équipe)
├── contact.html        # Page Contact (Formulaire, FAQ, Carte)
├── global.css          # Variables et styles globaux
├── index.css           # Styles spécifiques aux composants et animations
├── navbar.css          # Styles de la navigation
├── navbar.js           # Injection dynamique du header
└── src/
    └── public/
        ├── IMG/        # Assets graphiques (Logos, Photos réalistes)
        └── js/         # Scripts utilitaires (effects.js)
```

## 🚀 Installation & Utilisation

Aucune installation complexe n'est requise (pas de Node.js ou de Build step).

1.  Clonez le dépôt :
    ```bash
    git clone https://github.com/kairxuu/WAVES.git
    ```
2.  Ouvrez simplement le fichier `index.html` dans votre navigateur web préféré.

## 🤝 Partenaires

Projet soutenu (fictivement) par :
*   UNESCO Ocean
*   National Geographic
*   Sea Shepherd
*   CNRS

---

*Développé avec 💙 pour l'Océan.*
