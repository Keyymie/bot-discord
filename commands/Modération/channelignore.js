const Discord = require('discord.js')
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
  let channelignore = JSON.parse(fs.readFileSync("./channelignore.json", "utf8"));
  if(!args[1] || !args[2]) return message.channel.send("Utilisation : .channelignore <channel_id> <on/off>");
  if(!message.guild.channels.find(id => args[0])) return message.channel.send("Veuillez fournir l'id d'un channel valide.")

  if(args[2] === "off") {
    if(!channelignore[args[1]]){message.channel.send("Ce channel n'est déja pas ignoré par le bot.");return}
    delete channelignore[args[1]]
    fs.writeFile("./channelignore.json", JSON.stringify(channelignore), (err) => { if (err) console.error(err);});
    let logsoffembed = new Discord.RichEmbed()
    .setAuthor("Channel activé")
    .setDescription(`ID du channel : \`${args[1]}\`` + `\nNom du channel : <#${args[1]}>`)
    .setTimestamp()
    message.channel.send(logsoffembed)
    
    }else if(args[2] === "on"){
    if(channelignore[args[1]]){message.channel.send("Ce channel est déja ignoré par le bot.");return}
    channelignore[args[1]] = {"channelignore" : "false", "channel" : args[1]}
    fs.writeFile("./channelignore.json", JSON.stringify(channelignore), (err) => { if (err) console.error(err);});
    let logsonembed = new Discord.RichEmbed()
    .setAuthor("Channel désactivé")
    .setDescription(`ID du channel : \`${args[1]}\`` + `\nNom du channel : <#${args[1]}>`)
    .setTimestamp()
    message.channel.send(logsonembed)
    }

}

module.exports.help = {
  name: "channelignore",
  description: 'Permet de définir un channel dans lequel le bot ne répondra à aucun message.',
  usage: `.channelignore <channel_id> <on/off>`
}
