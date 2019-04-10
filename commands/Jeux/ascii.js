const Discord = require('discord.js')
const figlet = require('figlet')

module.exports.run = async (bot, message, args) => {
  if(args.slice(1).join(' ').length > 14) return message.channel.send(':x:Seulement 14 caractères sont autorisés.')
  if (!args[1]) return message.channel.send('Veuillez fournir du texte à convertir en ascii ! Usage: ascii <text>')
    figlet(args.slice(1).join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
  }
module.exports.help = {
  name: "ascii",
  description: 'Permet d\'envoyer un texte de maximum 14 caractères en ASCII-art.',
  usage: `.ascii <votre texte>`
}
