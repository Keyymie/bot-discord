const Discord = require('discord.js')

module.exports.run = async (bot, message, args, prefix) => {
  var msgcmd = message.content.split(" ")[0].substring(1);
  var params = message.content.substring(msgcmd.length + 2);
  var options = params.split(",");

  if(!options[0]) {message.channel.send("Veuillez spécifier les différentes options séparées par des virgules."); return}
  var randomChoice = Math.floor(Math.random() * options.length);
  options[0] = " " + options[0];
  message.channel.send("Vous devriez choisir " + options[randomChoice] + ", " + message.author + ".");

}

module.exports.help = {
  name: "choose",
  description: 'Permet de faire choisir le bot entre plusieurs éléments.',
  usage: `.choose <1>,<2>,<3>`
}