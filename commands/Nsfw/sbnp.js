const Discord = require('discord.js')
const randomPuppy = require('random-puppy')
module.exports.run = async (bot, message, args) => {
  if (!message.channel.nsfw) return message.reply("Cette commande est seulement autorisée dans les salons nsfw.");
  randomPuppy('SexyButNotPorn')
  .then(url => {
    const embed = new Discord.RichEmbed()
    .setTitle("NSFW-Picture | :underage:")
    .setFooter(message.author.tag, message.author.displayAvatarURL)
    .setImage(url);
       message.channel.send(embed)
  });
}
//name this whatever the command name is.
module.exports.help = {
  name: "sbnp",
  description: 'Permet d\'afficher une image non-considérée comme pornographique.',
  usage: `.sbnp`
}
