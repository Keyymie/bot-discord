const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  message.delete(1)
message.channel.send("¯\\_(ツ)_/¯").then(m => {
  setTimeout(() => {
      m.edit("¯\\\\\\-(ツ)-/¯").then(ms => {
          setTimeout(() => {
              ms.edit("¯\\_(ツ)_/¯")
          }, 500)
      })
  }, 500)})
}

module.exports.help = {
  name: "shrug",
  description: 'Permet de jouer une animation d\'haussement d\'épaules.',
  usage: `.shrug`
}
