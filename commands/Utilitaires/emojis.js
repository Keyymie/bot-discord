const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  if (!emojiList) return message.channel.send("Il n'y a pas d'émojis sur ce serveur.");
  else {message.channel.send(emojiList);}
}

module.exports.help = {
  name: "emojis",
  description: 'Permet d\'afficher tous les émojis du serveur.',
  usage: `.emojis`
}
