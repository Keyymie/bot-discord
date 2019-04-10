const Discord = require('discord.js')

module.exports.run = async (bot, message, args, config) => {
  if(message.author.id === config.bot_owner_id) {
    message.channel.send("L'arrêt du bot a été demandé.\nArrêt en cours...")
    setTimeout(function() {
      bot.destroy()
    }, 5000)
    setTimeout(function() {
      process.exit()
    }, 2000)
    }
  }
module.exports.help = {
  name: "stopbot",
  description: 'Permet d\'arrêter le processus du bot.',
  usage: `.stopbot`
}
