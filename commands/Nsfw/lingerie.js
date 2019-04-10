const Discord = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  if (!message.channel.nsfw) return message.reply("Cette commande est seulement autorisée dans les salons nsfw.");
  var subreddits = ['lingerie','stockings','pantyfetish','panties']
var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
randomPuppy(sub)
    .then(url => {
        const embed = new Discord.RichEmbed()
                .setTitle("NSFW-Picture | :underage:")
                .setFooter(message.author.tag, message.author.displayAvatarURL)
                .setImage(url);
        return message.channel.send(embed);
    })
}
//name this whatever the command name is.
module.exports.help = {
  name: "lingerie",
  description: 'Permet d\'afficher une image pornographique de lingerie sexy.',
  usage: `.lingerie`
}