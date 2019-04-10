const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  message.delete(1)
  message.channel.send("(╯°□°)╯  ︵  ┻━┻").then(m => {
  setTimeout(() => {
      m.edit("(╯°□°)╯    ]").then(ms => {
          setTimeout(() => {
              ms.edit("(°-°)\\ ┬─┬")
          }, 500)
      })
  }, 500);
})}

module.exports.help = {
  name: "unflip",
  description: 'Permet de jouer l\animation de rattrapage de table.',
  usage: `.unflip`
}
