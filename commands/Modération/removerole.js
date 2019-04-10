const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{
    if(!message.member.hasPermission("MANAGE_GUILD")){ return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu n'as pas les bonnes permissions.`);}

    let roleM =message.guild.members.get(message.mentions.users.first())
    if (!message.mentions.users.first()) return message.channel.send("<:WrongMark:504768105130622986> Je ne trouve pas l'utilisateur, ni le rôle. ```Usage : /addrole @pseudo#1234 @role ```");


    if (!args[0]) return message.channel.send("<:WrongMark:504768105130622986> Il n'y a pas de role.```Usage : b!addrole @pseudo#1234 @role ```").catch(console.error);

    let AddR = message.mentions.roles.first()
    if (!AddR) return message.channel.send("<:WrongMark:504768105130622986> Je ne trouve aucun rôle. ```Usage : b!addrole @pseudo#1234 @role ```").catch(console.error)
    await roleM.removeRole(message.guild.roles.get(AddR.id))
    message.channel.send("<:CheckMark:504768105101393940> Role enlevé avec succès.")
}

module.exports.help = {
    name : 'removerole'
}