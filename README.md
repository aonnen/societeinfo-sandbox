Sandbox
------------

Cette sandbox inclue les exemples suivants d'intégration de l'API societeinfo
https://societeinfo.com/api-doc/

* **Recherche par nom** — Recherche par nom d'entreprise en autocompletion
* **Recherche d'informations complètes** — Récupération des informations sur l'entreprise après sélection dans l'autocompletion


Intégration
------------

### Testez le projet

1. Téléchargez/Clonez le projet
2. Insérez votre clé API dans le fichier assets/js/demo.js
3. Désactivez le contrôle cross-domain de votre navigateur

Dans chrome, utilisez le plugin suivant pour désactiver le CORS

https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

### Déployez le projet en production

L'API ne supporte pas le CORS pour des raisons de sécurités, vous devez configurer votre proxy web pour rediriger les requêtes societeinfo et ainsi cacher votre précieuse clé !

Exemple :
Dans assets/js/demo.js remplacez
https://societeinfo.com/app/rest/api/v2/companies.json/autocomplete?query
par
https://votredomaine.com/app/rest/api/v2/companies.json/autocomplete?query=query

Dans votre proxy (apache, nginx) configurez la redirection
https://votredomaine.com/app/rest/api/v2/companies.json/autocomplete?query=query
vers
https://societeinfo.com/app/rest/api/v2/companies.json/autocomplete?query=query&key=YOUR_APIKEY


Voici un exemple de config avec serveur nginx

https://blog.elao.com/fr/infra/acceder-api-cross-domain-depuis-javascript-avec-cors-reverse-proxy-nginx/


Technologies
------------

### Sandbox

La sandbox a été développée avec :
https://jquery-ui-bootstrap.github.io/jquery-ui-bootstrap/
http://easyautocomplete.com/

### API

Les services de l'API societeinfo utilisés sont :
https://societeinfo.com/api-doc/#autocomplete-company
https://societeinfo.com/api-doc/#get-company