# ECV-Paris-2023
Initiation de 32 heures au frontend. Niveau Bachelor 3 section développement web
Outils : React, Gatsby, Contentful, Netlify avec touches de CSS !!!
Ojectif : Réaliser un site vitrine simple sur le modèle suivant : https://squelette.netlify.app/

https://ecv2023.netlify.app/ la version déployée du site travailler en cours et ici le dossier source : https://github.com/knupel/gatsby_lab_ecv_2023

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

#### Introduction au CI/CD

Le CI/CD est l'automatisation du déploiement d'un site entre le moment ou le code est écrit et le moment où il est en ligne, visible de façon publique sur internet.
Le CI/CD ici est un développement sur `VS Code` le code est en suite déposé sur `Github` puis déployé à partir du `master` sur [Netlify](https://www.netlify.com/) qui le construit pour en assurer la mise en ligne.

Pour s'assurer que le site puisse être déployé, il est important de voir la différence entre déploiement local avec la commande `npm run develop` ou `gatsby develop` et le `build` qui est beaucoup plus exigeant. Il est donc conseillé avant de pousser son code vers `Github` et donc `Netlify` de lancer `npm run build` ou `gatsby build` pour éviter des échecs de déploiement et donc de gaspiller inutilement des minutes de construction sur `Netlify`

#### Site

Le code qui sert de support pour le cours pour l'apprentissage https://github.com/knupel/gatsby_lab_ecv_2023 et son déploiement https://ecv2023.netlify.app/ évidement ce site va évoluer tout au le long de la formation !


## Session 5 2022_1_30

Utilisation de fichier `json` pour élaborer l'arborescence.

Introduction à la génération de page automatique via des fichiers `markdown` et la méthode pour y accèder via des appels `graphql`


L'utilisation de fichier `json` et `markdown` permets de rendre le contenu d'un site sans avoir la nécessité de modifier le code et permet donc une plus grande flexibilité.

version du code mise à jour : https://github.com/knupel/gatsby_lab_ecv_2023

## Session 6 2022_2_6

Mise en page à partir de fichier markdown.

Analyse de l'outil `graphql` de `gatsby` afin d'explorer le contenu du site et de préparer des requêtes `query`

Récupération des fichiers via le `graphql` afin de générer automatiquement un menu et que celui si puisse accècer aux pages crées.

version du code mise à jour : https://github.com/knupel/gatsby_lab_ecv_2023

## Session 7 2022_2_20

continuité du 'graphql' pour chargé du contenu de page.

introduction à la notion d'accès `API`  avec pour exemple l'utilsation des polices de charactère Abobe Font.
Utilisation des tokens d'identification pour leur utilisation en local à travers le fichier `.env` 
Puis leur stockage sur l'hébergeur pour une utilisation global quand le site est déployé. Dans notre example sur Netlify et sa partie `environment variables`

## Session 8 2022_2_27

Code et design and controle

# React ce qu'il faut retenir dans la multitude

React est une machine d'état `state` qui ne raffraichit que ce qui est nécessaire.
cela à ses avantages et ses inconvénients. Plus rapide, mais parfois très fastidueux pour coder, car cela peut provoquer beaucoup d'imbrocations.

### Les composants

Ils agissent comme des balises html et commence toujours par une majuscule :
<Comp nom="François" age=12/>

Si il y a besoin de passer quelque chose entre les balises vous pouvez écrire 
<Comp nom="François" age=12>quelque chose à passer</Comp>  

Écrire un composant donne

```js
function Comp(props) {
	return <div>{props.name} à {props.age} ans et fait du {props.children}</div>
}
```
Ce qui est passé entre les balises s'appele `children`

On peut passer des élements à nos composants. Ils sont appelés `props`, par exemple `children` est un `props`.

Un composant doit toujours avoir un retour balisé : `return <div></div>


### JSX

le JSX est une injection de code dans un endroit qui n'est pas censé en recevoir, pour l'injecté de cette façon on utlise des`{}` ce qui donne `{mon_code}` comme vous pouvez le voir dans le composant <Comp/> décrit audessus.

### Hook

React abandonne petits à petis les `Class` au profit des `Hook` pour revenir à une programmation plus fonctionnelle.

Les hooks agissent comme une fonction et commencent toujours par  `use` ce qui permet au compilateur de les repérer et d'afficher un message d'erreur si besoin. 

Les hooks ne peuvent pas s'imbriquer les uns dans les autres.

#### useState()

Le `hook` le plus présent est `useState` car il associe une variable et une fonction.

cela donne :
```js
const [value, set_value] = useState();
```

`useState()` est initialisé une seule fois, lors de sa première lecture.

Il est donc possible d'écrire

```js
let arg = 32;
const [value, set_value] = useState(arg);
console.log(value);
```

le retour donnera : `32` si rien n'avait été passé cela aurait donné `undefined`

la partie fonction de `useState()` permet de modifier la valeur du premier argument.

cela donne

```js
let arg = 32;
const [value, set_value] = useState(arg);
set_value(42)
console.log(value);
```
le retour est maintenant `42`

Attention, il faut être prudent avec les modifications de valeurs, car `React` est fait pour éviter les raffraichisssmeents abusif. C'est ce qui fait sa rapidité.
Donc il vous arrivera devoir utiliser un autre hook pour être sur de rafraichir les valeurs comme il faut : `useEffect()`


#### useEffect()

`useEffect()` est souvent le pendant de  `useState()`

Quand il est utlisé de façon simple cela donne 

```js
useEffect(() => {
	// fonction à chaque rendu
	set_value(22);
})
```

ou 

```js
useEffect(() => {
	// fonction au premier rendu
	set_value(33);
}, [])
```

ou 

```js
function new_value() {
	let ret = value;
	if(Date.now()% 1000) {
		ret = Math.random()
	}
	return ret;
}

useEffect(() => {
	// fonctionne à chaque fois `value` change
	set_value(new_value());
}, [value])
```

# Gatsby

Gatsby est comme un `superset` de React avec beaucoup de modules développés. Une gestion de l'image extrêment rapide. Il exsite énormément d'exemple de code ou de gabarit de site avec Gatsby. À utilisé impérativement !!

### graphql

Gtsby a développé un système de graphql particulièrment intéressant pour explorer les données. il est accessible simplement dès qu'on développe un site par un url dédié.

### ce qui change par rapport à React

Par rapport à une fichier `React` classique, il est nécessaire de réimporter `react` à chaque fichier `import React from "react"`

Pour exporter des pages il faut toujours faire un export par défault

```js
import React from "react"

export default function MaPage() {
	return <div>ma belle page</div>
}
```

# API

l'utilsation de clé api doivent toujours rester secrètes et être utilisées à travers un fichier `.env` en local.
Il ne faut oublié d'ajouter ce fichier `.env` à son fichier `.gitignore` afin que ces clés ne soient pas diffusée de façon public.
Pour les retrouver quand votre site est déployer, il faut les affecté chez votre hébergeur dans un espace qui est prévu à cet effet, en général cet endroit est nommé `variables d'environnement`.



# Ressources

https://www.gatsbyjs.com/

https://storybook.js.org/showcase/tag/react

https://mui.com/

https://www.netlify.com/

https://scrimba.com/




