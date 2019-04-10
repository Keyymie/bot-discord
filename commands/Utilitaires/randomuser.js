const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

if(!args[1] || args[1] > 50 || isNaN(args[1])) return message.channel.send("Veuillez fournir un nombre valide compris entre 1 et 50.")

  var players = ["test"];
for (let i = 0; i < args[0]; i ++) {
players.push(message.guild.members.random().displayName)
  }

  let embed = new Discord.RichEmbed()
  .setTitle("Utilisateurs aléatoires")
  .setDescription(`\`\`\`${players.join("\n")}\`\`\``)
  message.channel.send(embed)
}

module.exports.help = {
  name: "randomuser",
  description: 'Permet de choisir un ou plusieurs utilisateurs aléatoirement.',
  usage: `.randomuser <nb>`
}
