const Discord = require('discord.js')
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
  if (!message.channel.nsfw) return message.reply("Cette commande est seulement autorisée dans les salons nsfw.");
  superagent.get('https://nekobot.xyz/api/image')
  .query({ type: 'pussy'})
  .end((err, response) => {
    let assembed = new Discord.RichEmbed()
    .setTitle("NSFW-Picture | :underage: ")
    .setImage(response.body.message)
    .setFooter(message.author.tag, message.author.displayAvatarURL)
    message.channel.send(assembed);
  });
}
//name this whatever the command name is.
module.exports.help = {
  name: "pussy",
  description: 'Permet d\'afficher une image pornographique de sexe féminin.',
  usage: `.pussy`
}
