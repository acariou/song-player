song-player
===========

## Dogme

Créer un player audio en HTML5. En partant d'un markup audio et en utilisant  l'api audio de html5.

Le player doit pouvoir lire un fichier audio de n'importe quel format (mp3, ogg, etc, ...), voir la gestion des codecs.

L'interface utilisateur doit afficher les contrôles (play/pause, morceau précédent, morceau suivant, charger un fichier, barre d'avancement). Si c'est possible on doit afficher une vignette représentant la pochette en relation avec le morceau en cours de lecture.

## Installation

Dans le cas d'une première récupération du projet il y a quelques manipulations à effectuer. Il faut installer bower et grunt 

<pre><code>sudo npm install -g yo grunt-cli bower</code></pre>

se positionner à la racine du dépôt et faire un <pre><code>npm install</code></pre> pour installer tout se qu'il faut puis pour récupérer toutes les dépendances faire un <pre><code>bower install</code></pre>.

Maintenant il faut vérifier que sass est bien installer, mettre à jour ruby et installer compass.

### Mettre à jour ruby

Installation de RVM <pre><code> curl -L https://get.rvm.io | bash -s stable --ruby=1.9.3</code></pre> installer la nouvelle version de ruby et dire à RVM qu'il faut utiliser la version cette version ruby. 

<pre><code>
rvm install 1.9.3
rvm use 1.9.3  --default
</code></pre> 

Mise à jour de rubygem ...

### Lancement 

<pre><code>grunt serve</code></pre> 

