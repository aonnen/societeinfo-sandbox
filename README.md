Sandbox
------------

Cette sandbox inclue les exemples suivants d'intégration de [l'API societeinfo](https://societeinfo.com/api-doc/)

* **Recherche par nom** — Recherche par nom d'entreprise en autocompletion [(doc api)](https://societeinfo.com/api-doc/#autocomplete-company)
* **Recherche d'informations complètes** — Récupération des informations sur l'entreprise à la sélection [(doc api)]https://societeinfo.com/api-doc/#get-company)


Intégration
------------

### Testez le projet

1. Téléchargez/clonez le projet
2. Si vous n'avez pas de compte societeinfo [inscrivez-vous](https://societeinfo.com/app/app/#/register?subscriptionName=Free)
3. Dans fichier assets/js/demo.js, insérez votre clé d'API societeinfo

```javascript
var API_KEY  = 'YOUR_APIKEY';
```

4. Désactivez le contrôle cross-domain de votre navigateur
5. Cliquez sur le fichier index.html à la racine du projet


Dans chrome vous pouvez utiliser le plugin suivant pour la désactivation du CORS

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

Cette sandbox a été développée avec :
* [jquery-ui-bootstrap](https://jquery-ui-bootstrap.github.io/jquery-ui-bootstrap/)
* [easyautocomplete](http://easyautocomplete.com/)
