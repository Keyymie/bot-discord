const Discord = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  if (!message.channel.nsfw) return message.reply("Cette commande est seulement autorisée dans les salons nsfw.");
  randomPuppy('MonsterGirl')
  .then(url => {
    let embed = new Discord.RichEmbed()
    .setTitle("NSFW-Picture | :underage:")
    .setImage(url)
    .setFooter(message.author.tag, message.author.displayAvatarURL)  
       message.channel.send(embed)
  })
}
//name this whatever the command name is.
module.exports.help = {
  name: "mg",
  description: 'Permet d\'afficher une image pornographique hentai d\'apparence monstrueuse.',
  usage: `.mg`
}
