#Sandbox Societeinfo

##Résumé

Cette sandbox inclue un example d'intégration de l'API societeinfo pour :
- Un champs de recherche par nom en autocompletion
- Le remplissage automatique de données à partir de l'identifiant de l'autocompletion

##Technologies

La sandbox a été développée avec :
https://jquery-ui-bootstrap.github.io/jquery-ui-bootstrap/
http://easyautocomplete.com/

Les API societeinfo utilisés :
https://societeinfo.com/api-doc/#autocomplete-company
https://societeinfo.com/api-doc/#get-company

##Testez le projet

- Téléchargez/Clonez le projet
- Insérez votre clé API dans le fichier assets/js/demo.js
- Désactivez le contrôle cross-domain de votre navigateur

Pour chrome, j'utilise le plugin suivant
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi


##Déployez le projet en production

L'API ne suppoortant pas le CORS pour des raisons de sécurités, vous devez configurer votre proxy web pour rediriger les requetes societeinfo et ainsi cacher votre précieuse clé !

Exemple :
Dans assets/js/demo.js remplacez
https://societeinfo.com/app/rest/api/v2/companies.json/autocomplete?query
par
https://votredomaine.com/app/rest/api/v2/companies.json/autocomplete?query=query

Dans votre proxy faites la redirection
https://votredomaine.com/app/rest/api/v2/companies.json/autocomplete?query=query
vers
https://societeinfo.com/app/rest/api/v2/companies.json/autocomplete?query=query&key=API_KEY


Voici un exemple de config avec serveur nginx
https://blog.elao.com/fr/infra/acceder-api-cross-domain-depuis-javascript-avec-cors-reverse-proxy-nginx/

