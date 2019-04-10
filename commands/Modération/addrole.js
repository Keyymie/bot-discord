const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{

if(!message.member.hasPermission("MANAGE_GUILD")){ return message.channel.send(`**${message.author.username}**, tu n'as pas les bonnes permissions.`);}

    let roleM =message.guild.members.get(message.mentions.users.first())
    if (!message.mentions.users.first()) return message.channel.send("Je ne trouve pas l'utilisateur, ni le rôle. ```Usage : b!addrole @pseudo#1234 @role ```");
    
    if (!args[0]) return message.channel.send("Il n'y a pas de role.```Usage : b!addrole @pseudo#1234 @role ```").catch(console.error);

    let AddR = message.mentions.roles.first().id
    if (!AddR) return message.channel.send("Je ne trouve aucun rôle. ```Usage : b!addrole @pseudo#1234 @role ```").catch(console.error)
    await roleM.addRole(message.guild.roles.get(AddR.id))
    message.channel.send("Le rôle " + AddR +" à été attribuer à " + roleM + " !")
}

module.exports.help = {
    name : 'addrole',
    usage: 'b!addrole',
    description: 'Ajoute un rôle à un utilisateur'
}
