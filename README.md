poluxxx-beebop
Show
README.md
# Beebop<sup>TM</sup>
​
​
## Description
​
Beebop est un bot qui se veut réunir toutes les commandes utiles a n'importe quel serveur. Créé pour subvenir à n'importe quel besoin, il possède plusieurs catégories de commandes diverses et variées listées ci dessous :
​
- Spécial
- Utilitaires
- Musique
- Images
- Modération
- Role Play Game
- Jeux
​
N'hésitez pas à l'ajouter a votre serveur et à le partager pour le faire connaître. Son préfixe est `b!`.
​
## Contact
​
- Rejoindre son support : [Cliquez ici](https://discord.gg/cD2VyEs)
- Ajoutez le bot à votre serveur : [Cliquez ici](https://discordapp.com/oauth2/authorize?client_id=555050371987406870&scope=bot&permissions=8)
- Lien vers le Discord Bot List : [Cliquez ici](https://discordbots.org/bot/512209185581301760)
- Site internet : [Cliquez ici](http://villaleshydrangeas.bzh/wp-content/uploads/2016/02/Coming-Soon.jpg)
​
​
## Config
​
#### - config.json
```
{
  "prefix": "b!", //Préfixe global du bot
  "token": "S3cr3t_t0k3n", // Token de connexion privé du bot
  "bot_owner_id":"399595429333041172" // ID du SUPERACCESS USER
}
```
​
#### - Commande help
​
La commande help se met à jour automatiquement en fonction des fichiers situés dans le dossier "commands".
​
#### - Démarrage du bot
​
Vous pouvez démarrer le bot avec une session de déboguage ou en tapant "node index.js"
​
Lorsque le programme démarre, une liste des commandes commandes apparait dans la console ainsi que des éventuels messages d'erreur. Vous pouvez commencer a l'utiliser lorsque la console affiche `Beebop™ est en ligne.`
​
​
#### - Modification du code
​
Le fichier `index.js` contient le handler, la commande help, le système de logs désactivables et le système de musique.
N'y touchez que si vous savez ce que vous faites, si vous provoquez des erreurs dedans, tout le bot en sera affecté.
​
Les commandes sont triées dans le dossier `commands`. Pour en rajouter, utilisez le modèle (`example.js`).
