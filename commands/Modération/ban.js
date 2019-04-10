const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{
const member = message.mentions.members.first();
const raison = !args[1] ? "Aucune raison" : args[1]
if(!message.member.hasPermission("BAN_MEMBERS")) {
    return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu n'as pas les bonnes permissions.`)
}
if(!member) {
    let embed = new Discord.RichEmbed()
    .setDescription(`**Description :** Ban un utilisateur avec une raison optionnelle.`)
    .addField('Utilisation', 'b!ban @user [raison]', true)
    .addField('Exemple','b!ban @user T\'es inutile frère.', true)
    .setAuthor('Commande BAN')
    .setThumbnail(bot.user.avatarURL)
    .setColor('BLACK')
    .setFooter(`${message.author.username} • _kick @user`, message.author.displayAvatarURL)
    .setTimestamp()
    return message.channel.send(embed);
}
if(member.hasPermission('BAN_MEMBERS')) return message.channel.send(`**${message.author.username}**, il a les mêmes permissions que moi je ne peux rien faire u_u`)
if(!raison) {
    var r= "Aucune raison"
}else if(raison) {
    var r = raison
}
member.ban(r)
const ok = bot.emojis.find(emoji => emoji.name === "menheraok");
message.channel.send(`${ok} `+member+" banni pour : "+r+".")
}

exports.help = {
name:'ban'
}