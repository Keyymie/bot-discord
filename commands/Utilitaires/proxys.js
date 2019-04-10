const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  var msgcmd = message.content.split(" ")[0].substring(1);
  var params = message.content.substring(msgcmd.length + 2);
  var options = params.split(" ");
  var link = `https://api.proxyscrape.com/?request=displayproxies&proxytype=${options[0]}&timeout=${options[2]}&country=${options[1]}`;

  if(!options[0]) {message.channel.send("Utilisation : `.proxys <http/socks4/socks5> <all/US/GB/DE/CA/NL> <Time-out>`"); return}
  if(options[0] !== "http" && options[0] !== "socks4" && options[0] !== "socks5") {message.channel.send("Utilisation : `.proxys <http/socks4/socks5> <Time-out> <all/US/GB/DE/CA/NL>`"); return}
  if(isNaN(options[2])) {message.channel.send("La valeur du Time-out doit être un nombre compris entre 50 et 10000 (exprimé en ms)."); return}
  if(options[2] > 10000 || options[2] < 50) {message.channel.send("La valeur du Time-out doit être un nombre compris entre 50 et 10000 (exprimé en ms)."); return}
  if(options[1] !== "all" && options[1] !== "US" && options[1] !== "GB" && options[1] !== "DE" && options[1] !== "CA" && options[1] !== "NL") {message.channel.send("Utilisation : `.proxys <http/socks4/socks5> <Time-out> <all/US/GB/DE/CA/NL>`"); return}

  let embed = new Discord.RichEmbed()
  .setTitle("Liste des proxys disponible")
  .addField(`Type : ${options[0]}`, `Location : ${options[1]} | Time-out : ${options[2]}`)
  .setDescription(`[Cliquez ici](${link})`)
  .setFooter("Concu par " + bot.users.find("id", "355779457870725120").tag, bot.users.find("id", "355779457870725120").displayAvatarURL)

  message.channel.send(embed)
}
module.exports.help = {
  name: "proxys",
  description: 'Permet de télécharger une liste de proxys personnalisée.',
  usage: `.proxys <http/socks4/socks5> <Time-out> <all/US/GB/DE/CA/NL>`
}
