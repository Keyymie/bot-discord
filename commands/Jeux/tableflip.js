const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  message.delete(1)
  message.channel.send("(°-°)\\ ┬─┬").then(m => {
    setTimeout(() => {
        m.edit("(╯°□°)╯    ]").then(ms => {
            setTimeout(() => {
                ms.edit("(╯°□°)╯  ︵  ┻━┻")
            }, 500)
        })
    }, 500);
})}

module.exports.help = {
  name: "tableflip",
  description: 'Permet de jouer une animation de lancement de table.',
  usage: `.tableflip`
}
