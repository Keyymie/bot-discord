module.exports.run = async (bot, message,args)  =>{
    var {get} = require ("snekfetch")
    var Discord = require('discord.js')
    if(message.author.bot) return;
    let member = message.mentions.users.first(); 
            if(!member) {
              get('https://nekos.life/api/v2/img/hug').then(r => { 
                const embed = new Discord.RichEmbed()
                .setDescription(`<:hg:473884653091160074> **${message.author.username}**  Fais un calin a Beebop`)
                .setImage(r.body.url)
                .setColor('RANDOM')
                .setFooter(`© Éffectué par ${message.author.username}`)  
               message.channel.send({embed})          
              })
            } 
          
            if(member) {
              get('https://nekos.life/api/v2/img/hug').then(r => { 
                    const embed = new Discord.RichEmbed()
                    .setDescription(`<:hg:473884653091160074> **${message.author.username}**  Fais un calin a ${member} `)
                    .setImage(r.body.url)
                    .setColor('RANDOM')
                    .setFooter(`© Éffectué par ${message.author.username}`)  
                   message.channel.send({embed})
            
              })
            }  
        }
    module.exports.help = {
        name : 'hug'
    }