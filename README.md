# OrientINSA Projet d'application 2019 - Course d'orientation Partie Web

## Web site for the 2019 application project for tag races

### Matériel nécessaire:

#### Cas 1: balise offline

Un ordinateur ou appareil semblable doté d’au moins une interface réseau sans-fil. La machine peut ne pas être connectée à Internet.
Matériel utilisé pour les tests:: Raspberry PI 3 sous Arch Linux

#### Cas 2: balise online:

Un ordinateur ou appareil accessible par Internet ou au moins dans un réseau sans-fil local. La machine doit être connectée à Internet.
Matériel utilisé pour les tests:: Raspberry PI 3 sous Arch Linux, le smartphone utilisé pour scanner le code est connecté en wifi au point d’accès.

#### Logiciels nécessaires:

Hébergement du site web:
Serveur HTTP, utilisé pour les test: apache v2.4
Serveur de base de donnée, le site utilise actuellement Mariadb, il peut être adapté à un autre service de Base de Données.
PHP v7.0 au moins

### Librairies utilisées:

#### Javascript:

jQuery, The jQuery Fondation https://github.com/jquery/jquery
forge, CDNJS https://github.com/digitalbazaar/forge

#### PHP:

OTPHP, https://github.com/Spomky-Labs/otphp

Les librairies javascript sont déjà présentes dans les fichier du site web. Pour installer la librairie php, on utilise composer, à la racine du site il faut utiliser la commande pour installer automatiquement les librairies.:

php /usr/bin/composer install

Préparation de la base de donnée:
On ouvre l’invite de commande de mysql avec l’utilisateur root:
mysql -u root -p
On exécute ensuite le script deployment.sql qui crée l’utilisateur nécessaire à l’accès par le site web, la base de donnée orientinsa_db et les tables de la base de donnée:
source deploy/deployment.sql

