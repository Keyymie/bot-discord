const Discord = require('discord.js')

module.exports.run = async (bot, message, args, config) => {
  if(message.author.id === config.bot_owner_id) {
    message.channel.send("Redémarrage...")
    .then(message => bot.destroy())
    .then(() => bot.login(config.token))
    .then(bot => message.channel.send("Bot redémarré."));
    }
  }
module.exports.help = {
  name: "restartbot",
  description: 'Permet de redémarrer le bot.',
  usage: `.restartbot`
}
