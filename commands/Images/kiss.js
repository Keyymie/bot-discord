module.exports.run = async (bot, message,args)  =>{
    var {get} = require ("snekfetch")
    var Discord = require('discord.js')

let member = message.mentions.users.first(); 
                        if(!member) {
                          get('https://nekos.life/api/v2/img/kiss').then(r => { 
                            const embed = new Discord.RichEmbed()
                            .setDescription(`<:kkiss:473878223676112896> **${message.author.username}** embrasse Beebop`)
                            .setImage(r.body.url)
                            .setColor('BLACK')
                            .setFooter(`© Éffectué par ${message.author.username}`)  
                           message.channel.send({embed})          
                          })
                        } 
                      
                        if(member) {
                          get('https://nekos.life/api/v2/img/kiss').then(r => { 
                                const embed = new Discord.RichEmbed()
                                .setDescription(`<:kkiss:473878223676112896> **${message.author.username}** embrasse ${member} `)
                                .setImage(r.body.url)
                                .setColor('BLACK')
                                .setFooter(`© Éffectué par ${message.author.username}`)  
                               message.channel.send({embed})
                        
                          })
                        }
                    }

module.exports.help = {
name : 'kiss'
}