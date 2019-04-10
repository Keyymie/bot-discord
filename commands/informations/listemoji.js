const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{

    if (args[0] == "help") {
        let embed = new Discord.RichEmbed()
        .setTitle('Commande LISTEMOJI')
        .setDescription('**Description:** Tu peux voir tous les emojis présent dans le serveur.')
        .addField('Usage', 'l\'usage est : b!listemoji', true)
        .addField('Alias', 'b!emojis', true)
        .setThumbnail(bot.user.avatarURL)
        .setColor('BLACK')
        .setFooter(`${message.author.username} • b!listemoji`, message.author.displayAvatarURL)
        .setTimestamp()
        message.channel.send(embed);
        return;
    }

const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
let embed = new Discord.RichEmbed()
.setAuthor("Liste des émojis")
.setDescription(emojiList)
.setFooter(`${message.author.username} • b!listemoji`, message.author.displayAvatarURL)
.setTimestamp()
.setColor('BLACK')
message.channel.send(embed);
}

module.exports.help = {
    name: "listemoji",
    alias:"emojis"
  }
