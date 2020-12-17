# takoya-car

_-- English bellow --_

Projet de gestion d'entretiens de voitures

## Présentation générale

### Concept

Ce projet a pour ambition de gérer les entretiens d'une ou plusieurs voiture(s).

Cette gestion permettra de lister les entretiens, les voitures et les propriétaires,
de les éditer, ainsi que d'en ajouter ou d'en supprimer.

### Auteurs

@chinjto et @ryuji13

### Version en cours de développement

1.0.0

### Versions disponibles

_Aucune pour le moment_

### Technologies

* Application REST Spring Boot _(back)_
* Gradle _(gestionnaire de configuration)_
* Angular _(front)_

## Consignes de lancement

Des process de lancement ont été mis en place pour faciliter la prise en main du projet.

### Lancer les outils

Pour lancer les outils liés au projet (dont la base de données), suivez les instructions suivantes :
1. Télécharger Docker
2. Monter le docker-compose du projet, sous `config/docker/takoya_car_tools/docker-compose.yml`

### Lancer le back-end

Pour lancer le back-end, suivez les instructions suivantes :
1. Build le projet, avec `mvn clean install`
2. Lancer l'application Spring `CarApplication`

### Lancer le front-end

Pour lancer le front-end, suivez les instructions suivantes :
1. Build le projet, avec `npm install`
2. Lancer l'application Angular, avec `ng serve`

-----

_-- English translation --_

Car servicing manager

## Global presentation

### Concept

Goal of this project is to make a car servicing manager for on or many car(s).

Features will be to create, read, update ou delete (CRUD) some data (or all, 
if allowed privileges) about servicing, car or owned.

### Authors

@chinjto et @ryuji13

### Current dev' release

1.0.0

### Releases map

_None, for this moment_

### Technologies

* REST Spring Boot application _(back)_
* Gradle _(dependencies manager)_
* Angular _(front)_

## Run processes

Run processes exists to easily use this project.

### Run tools

To run tools (includes database instance), follow these instructions :
1. Download Docker
2. Up project docker-compose, on `config/docker/takoya_car_tools/docker-compose.yml`

### Run back-end

To run back-end, follow these instructions :
1. Build project, with `mvn clean install`
2. Run Spring application `CarApplication`

### Lancer le front-end

To run front-end, follow these instructions :
1. Build project, with `npm install`
2. run Angular application, with `ng serve`
