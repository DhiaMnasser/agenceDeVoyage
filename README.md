# Description :
## On a choisie comme Sujet "Agence de voyage".\

L'idée est de transformer une base de données dans laquelle il y a des informations concernant l'agence de voyage vers un ensemble de microservices.\

L’architecture distribuée ou l'informatique distribuée désigne un système d'information ou un réseau pour lequel l'ensemble des ressources disponibles ne se trouvent pas au même endroit ou sur la même machine pour cela on a utilisé Docker.\

Les frameworks sont Spring Boot pour le Backend et Angular comme Frontend.\

4 services sont implémenter : Client, Reservation, Facture et Hotel (NodeJs).\
Les serveurs sont :\
Eureka, Zuul et Config