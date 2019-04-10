const Discord = require('discord.js')
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
  if (!message.channel.nsfw) return message.channel.send("Cette commande est seulement autorisée dans les salons nsfw.");
  superagent.get('https://nekobot.xyz/api/image')
  .query({ type: 'ass'})
  .end((err, response) => {
    let assembed = new Discord.RichEmbed()
    .setTitle("NSFW-Picture | :underage: ")
    .setImage(response.body.message)
    .setFooter(message.author.tag, message.author.displayAvatarURL)
    message.channel.send(assembed);
})
}

module.exports.help = {
  name: "ass",
  description: 'Permet d\'afficher une image pornographique de fessier.',
  usage: `b!ass`
}
