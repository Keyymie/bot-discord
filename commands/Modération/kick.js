const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{
const member = message.mentions.members.first();

const ok = bot.emojis.find(emoji => emoji.name === "menheraok");
const raison = args.slice(2).join(" ")
if(!message.member.hasPermission("KICK_MEMBERS")) {
    return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu n'as pas les bonnes permissions.`)
}
if(!member) {
    let embed = new Discord.RichEmbed()
    .setDescription(`**Description :** Kick un utilisateur avec une raison optionnelle.`)
    .addField('Utilisation', 'b!kick @user [raison]', true)
    .addField('Exemple','b!kick @user T\'es inutile frère.', true)
    .setAuthor('Remarque command')
    .setThumbnail(bot.user.avatarURL)
    .setColor('GREEN')
    .setFooter(`${message.author.username} • _kick @user`, message.author.displayAvatarURL)
    .setTimestamp()
    return message.channel.send(embed);
}
if(member.hasPermission('KICK_MEMBERS')) return message.channel.send(`**${message.author.username}**, il a les mêmes permissions que moi je ne peux rien faire u_u`)
if(!raison) {
    var r= "Aucune raison"
}else if(raison) {
    var r = raison
}
member.kick(r)
message.channel.send(`${ok} `+member+" expulsé pour : "+r+".")
}

module.exports.help = {
    name :'kick'
}