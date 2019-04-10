const Discord = require('discord.js')
const figlet = require('figlet')

module.exports.run = async (bot, message, args) => {
  const cooldown = new Set();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send(`Cette commande a un temps de recharge de 5 **Minutes**`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);


  const user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let embed = new Discord.RichEmbed()
  .setAuthor('Image de profil')
  .setDescription(`Avatar de l'utilisateur ${user.username}`)
  .setImage(user.avatarURL)
  .setFooter(bot.user.tag, bot.user.displayAvatarURL)
  .setTimestamp()
  message.channel.send(embed)
}

module.exports.help = {
  name: "avatar",
  description: 'Permet d\'afficher votre avatar ou celui de la personne mentionnée.',
  usage: `b!avatar <pseudo>`
}
