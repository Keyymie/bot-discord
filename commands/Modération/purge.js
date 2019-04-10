const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(":no_entry `Je n'ai pas les permissions requises pour faire cela.`").catch(console.error).then(msg => {setTimeout(() => {msg.delete()}, 1000)})
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: `" + vousavezpaslapermission + "` :no_entry:");
  if (isNaN(args[1])) return message.channel.send(':warning: `Veuillez fournir un montant valide de messages à supprimer.`').then(msg => {setTimeout(() => {msg.delete()}, 1000)})
  if (args[1] > 100) return message.channel.send(':warning: `Veuillez fournir un nombre inférieur à 100.`').then(msg => {setTimeout(() => {msg.delete()}, 1000)})
  message.channel.bulkDelete(args[1]);
  var cleanEmbed = new Discord.RichEmbed()            
  .setAuthor('Purge')
  .setDescription(`**${args[1]}** messages supprimés. :white_check_mark:`)
  .setFooter('Demandé par ' + message.author.tag, message.author.avatarURL)
  .setColor('#ffffff');
  message.channel.send(cleanEmbed).then(msg => {
    setTimeout(() => {
        msg.delete()
    }, 1000)
})
}

module.exports.help = {
  name: "purge",
  description: 'Permet d\'effacer un nombre précis de messages.',
  usage: `.purge <nombre>`
}
