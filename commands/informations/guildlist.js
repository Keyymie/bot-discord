const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{

  message.channel.send('Le bot est sur '+bot.guilds.size+' serveurs !')
}

          
     
     module.exports.help = {
        name: "guildlist",
        alias:"allguild"
      }
      