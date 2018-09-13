Sandbox
------------

Bienvenue sur la sandbox societeinfo ! Vous trouverez ici un projet simple implémentant un formulaire d'autocomplétion d'entreprise


Cette sandbox implémente les services suivants de [l'API societeinfo](https://societeinfo.com/api-doc/)

* **AutoComplete** — Recherche par SIREN/nom d'entreprise/ville en autocompletion ([doc api](https://societeinfo.com/api-doc/#autocomplete-company))
* **GetCompany** — Récupération des informations complète de l'entreprise ([doc api](https://societeinfo.com/api-doc/#get-company))


Intégration
------------

### Testez le projet

1. Téléchargez/clonez le projet
2. Si vous n'avez pas de compte societeinfo [inscrivez-vous](https://societeinfo.com/app/app/#/register?subscriptionName=Free)
3. Dans fichier assets/js/demo.js, insérez votre clé d'API societeinfo

```javascript
var API_KEY  = 'YOUR_APIKEY';
```

4. Cliquez sur le fichier index.html à la racine du projet


### Déployez le projet en production

En production nous recommandons de faire une redirection des requêtes API et ainsi cacher votre précieuse clé !
C'est très simple :) le code javascript rendu sur vos pages doit exécuter des requêtes API vers votre serveur (nginx, apache) qui les redirigera ensuite vers nos urls.

Exemple :

Dans assets/js/demo.js remplacez

https://societeinfo.com/app/rest/api/v2/companies.json/autocomplete?query

par

https://votredomaine.com/app/rest/api/v2/companies.json/autocomplete?query=query


Enfin dans votre proxy (apache, nginx) configurez la redirection

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


Nous contacter
--------------

N'hésitez pas à nous contacter ! contact@societeinfo.com