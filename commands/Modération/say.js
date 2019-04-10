const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{
message.delete()
    if (message.author.bot) return;
        
        if(message.member.hasPermission("MANAGE_CHANNELS")){    
            const args = message.content.split(" ").slice(1)
            const sayMessage = args.slice(0).join(" ");
          
            if(!args[0]) return message.channel.send(" Veuillez entrer du texte, sinon je ne peux pas répéter"); 
             
             
            message.channel.send(sayMessage) 
            } else {
            message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu n'as pas les bonnes permissions.`)
        }
    }
    module.exports.help = {
        name: "say"
      }