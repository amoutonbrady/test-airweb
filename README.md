Airweb - Test Technique 
===

Bonjour !

Voici un petit test afin de juger vos capacités et compétences techniques (mais pas que).

## Le Contexte

Vous avez ci-joint une base de données SQlite ainsi que [des wireframes des pages attendues](https://www.figma.com/file/GB7FZWWMPTg57UxpfogUDc/Maquette-boutique?node-id=0%3A1). Celle-ci contient une liste de catégories et de produits.

Votre mission sera de développer une boutique simple (une page d'accueil *catalogue* et une page *panier*) sous la forme d'une web app, ainsi qu'une petite API permettant d'accéder aux données dans la base.  
Le passage de commandes et le checkout ne sont pas des fonctionnalités attendues, en revanche le panier pourra être stocké côté client ([local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) par exemple).  
Le résultat devra être consultable depuis un mobile.

Pour cela, vous êtes libre d'utiliser les technologies, frameworks et librairies de votre choix (préférence pour le Javascript). 

Le résultat devra être rendu sous la forme d'un lien (ou deux) vers un (ou deux) repository Git, avec les instructions pour lancer les projets en local.

## La base de données

### `products`
`id` - Identifiant unique du produit  
`label` - Nom du produit à afficher  
`decription` - Description du produit  
`price` - Prix en centimes (integer)  
`category_id` - Identifiant de la catégorie parente  
`thumbnail_url` - URL vers l'image miniature  

### `categories`
`id` - Identifiant unique du produit  
`index` - Index de la catégorie dans la boutique  
`label` - Nom du produit à afficher  
`decription` - Description du produit  

> Si l'envie vous venait d'ajouter des fonctionnalités, vous pouvez étendre le contenu de la base, si nécessaire.

## Extras

Toute fonctionnalité supplémentaire sera bienvenue, par exemple :
- **Internationalisation** pour les labels statiques
- **Filtres** et recherche
- **Accessibilité** globale
- ...

Ce test devrait représenter environ 2h à 4h de travail. Pas de panique si c'est trop ou si vous êtes bloqués, on débriefera ensemble.

Bonne chance !