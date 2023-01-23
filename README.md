# ECV-Paris-2023
Initiation de 32 heures au frontend. Niveau Bachelor 3.
Outils : React, Gatsby, Contentful, Netlify avec touches de CSS !!!
Ojectif : Réaliser un site vitrine simple sur le modèle suivant : https://squelette.netlify.app/

Dans les dossiers `cours #` se trouvent les différents éléments de code abordés lors des différentes sessions.
À noter que si les fichiers ne sont pas directement exploitables c'est qu'il faut utiliser un bac à sable, ou les réinjecter dans un projet existant.
Pour créer ces bouts de code, le bac à sable utilisé est [codesandbox](https://codesandbox.io)

Si les projets vous apparaissent complets c'est qu'il peut être démarré via `npm start` si c'est du pur 'React' ou via `gatsby develop` si c'est un projet Gatsby/React.


## Session 1  2022_1_4

Présentation, intervenant et élèves.
Évaluation du niveau de code en css, javascript et premiers pas sur React pour comprendre les composants.

voir dossier `cours 1`

## Session 2 2022_1_9

Approfondissement des bases React : Composants, JSX et le premier et inévitable hook `useState`.
En parallèle est abordé des schémas de programmation et d'architecture.
Création d'un composant `Layout` afin de préparer les futurs pages des sites internet statiques.
Description de l'objet `props` qui est la variable de dialogue des composants `React`

voir dossier `cours 2`

## Session 3 2022_1_16

Création d'un site single-page en React avec plusieurs pages avec un design pattern pour accéder à l'ensemble des pages
https://github.com/knupel/react_multipage

Création du site à partir de la console
`npx create-react-app mon-site`

à partir de ce gabarit, création d'une arborescence simple avec l'extension `react-router-dom` à travers ses composants `Link`, `BrowserRouter`, `Routes`, `Route` et `Outlet`

Le Design pattern utilisé est celui de l'emboitement des composants `Route` pour optimisé l'utilisation du composant `Layout` par percolation des pages avec le composant `Outlet`.



## Session 4 2022_1_23

Mise en place de l'architecture d'un gabarit de site à travers un design pattern ou le `Layout` est construit autour d’une structure de composants `Header` `children` et `Footer`. Le `children` représentant les pages du site.

### Introduction au CI/CD

Le CI/CD est l'automatisation du déploiement d'un site entre le moment ou le code est écrit et le moment où il est en ligne, visible de façon publique sur internet.
Le CI/CD ici est un développement sur `VS Code` le code est en suite déposé sur `Github` puis déployé à partir du `master` sur [Netlify](https://www.netlify.com/) qui le construit pour en assurer la mise en ligne.

Pour s'assurer que le site puisse être déployé, il est important de voir la différence entre déploiement local avec la commande `npm run develop` ou `gatsby develop` et le `build` qui est beaucoup plus exigeant. Il est donc conseillé avant de pousser son code vers `Github` et donc `Netlify` de lancer `npm run build` ou `gatsby build` pour éviter des échecs de déploiement et donc de gaspiller inutilement des minutes de construction sur `Netlify`

### Site

Le code qui sert de support pour le cours pour l'apprentissage https://github.com/knupel/gatsby_lab_ecv_2023 et son déploiement https://ecv2023.netlify.app/ évidement ce site va évoluer tout au le long de la formation !


## Session 5 2022_1_30

CSS / API Typo

## Session 6 2022_2_6

Code et design / composant de design

## Session 7 2022_2_20

Code et design

## Session 8 2022_2_27

Code et design


# Ressources

https://www.gatsbyjs.com/

https://storybook.js.org/showcase/tag/react

https://mui.com/

https://www.netlify.com/

https://scrimba.com/




