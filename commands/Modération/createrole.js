
const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

if(message.member.hasPermission("MANAGE_CHANNELS")){  
    const rolename = args.slice(1).join(" ")
    const arsgs = message.content.split(" ").slice(1)
    const sayMessage = arsgs[0]
    if(!sayMessage) return message.channel.send("Mets un code couleur avec #")
    if(!rolename) return message.channel.send("Mets le nom du rôle !")
  
           
message.guild.createRole({
      name: rolename,
      hoist: true,
      mentionable: false,
      color: sayMessage
  });
  message.channel.send("Le rôle **"+rolename+"** vient d'être créer avec la couleur **"+sayMessage+"** !")
} else {
    message.channel.send(`:x: **${message.author.username}**, tu n'as pas les bonnes permissions.`)
}

}


exports.help = {
    name: "create_role",
    alias:'role'
}