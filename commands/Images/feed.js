    var {get} = require ("snekfetch")
    var Discord = require('discord.js')

module.exports.run = async (bot, message,args)  =>{

    let member = message.mentions.users.first(); 
    if(!member) {
      get('https://nekos.life/api/v2/img/feed').then(r => { 
        const embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}** donne a manger à Beebop`)
        .setImage(r.body.url)
        .setColor('BLACK')
        .setFooter(`© Éffectué par ${message.author.username}`)  
       message.channel.send({embed})          
      })
    } 
  
    if(member) {
      get('https://nekos.life/api/v2/img/feed').then(r => { 
            const embed = new Discord.RichEmbed()
            .setDescription(`**${message.author.username}** donne a manger à ${member} `)
            .setImage(r.body.url)
            .setColor('BLACK')
            .setFooter(`© Éffectué par ${message.author.username}`)  
           message.channel.send({embed})
    
      })
    }  
}
    
module.exports.help = {
    name : 'feed'
    }
