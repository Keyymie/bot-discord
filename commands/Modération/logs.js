const Discord = require('discord.js')
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR") && message.member.id != "347278705606918154") return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    let togglelogs = JSON.parse(fs.readFileSync("./togglelogs.json", "utf8"));
    if(!args[1]) return message.channel.send("Utilisation : .logs <on>/<off>")
    if(args[1] === "off") {
if(!togglelogs[message.guild.id]){message.channel.send("Les logs sont déja désactivés sur ce serveur.");return}
delete togglelogs[message.guild.id]
fs.writeFile("./togglelogs.json", JSON.stringify(togglelogs), (err) => { if (err) console.error(err);});
let logsoffembed = new Discord.RichEmbed()
.setAuthor("Logs désactivés")
.addField("~~Suppression de message~~", "**~~Modification de message~~**")
.addField("~~Bannissement ~~", "** ~~Révoquement de ban~~**", true)
.addField("~~Mute~~", "**~~Unmute~~**")
.setDescription("**~~Message de bienvenue et d'aurevoir~~**")
.setTimestamp()
message.channel.send(logsoffembed)

}else if(args[1] === "on"){
if(togglelogs[message.guild.id]){message.channel.send("Les logs sont déja activés sur ce serveur.");return}
togglelogs[message.guild.id] = {"togglelogs" : "false", "channel" : message.channel.id}
fs.writeFile("./togglelogs.json", JSON.stringify(togglelogs), (err) => { if (err) console.error(err);});
let logsonembed = new Discord.RichEmbed()
.setTitle(`Channel : ${message.channel.name} (id : ${message.channel.id})`)
.setAuthor("Logs activés")
.addField("Suppression de message", "**Modification de message**")
.addField("Bannissement", "**Révoquement de ban**", true)
.addField("Mute", "**Unmute**")
.setDescription("**Message de bienvenue et d'aurevoir**")
.setTimestamp()
message.channel.send(logsonembed)
}}


module.exports.help = {
  name: "logs",
  description: 'Permet d\'activer les logs du bot',
  usage: `.logs <on/off>`
}
