const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu n'as pas les bonnes permissions.`);
        return;
    }
    let question = args.slice(0).join(" ");


    if (args.length === 0)
    return message.channel.send('**Invalide Format:** b!vote <Question>`')
  
    const embed = new Discord.RichEmbed()
    .setTitle("Vote créer par "+ message.author.username)
    .setColor("BLACK")
    .setDescription('**Veuillez mettre des réactions !**')
    .addField('Question :', `*${question}*`)
    .setFooter(`Poll fait par : ${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send('@everyone')
    message.channel.send({embed})
    .then(msg => {
      msg.react('👍')
      msg.react('👎')
      msg.react('🤷')
    })
    .catch(() => console.error('Emoji failed to react.'));
  
  }
  

module.exports.help = {
    name : 'vote'
}