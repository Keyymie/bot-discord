const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  var games = message.guild.members.filter(m => m.presence.game).filter(m => !m.user.bot)
  message.channel.send(games.map(m => `**${m.user.username}** joue à **${m.presence.game.name}**`).join('\n'))
}

module.exports.help = {
  name: "games",
  description: 'Permet d\'afficher les status de jeu des différents utilisateurs connectés.',
  usage: `.games`
}
