const Discord = require('discord.js')
const fs = require("fs");
const snekfetch = require('snekfetch');
var $ = require('check-valid-url');

module.exports.run = async (bot, message, args, prefix) => {
  //var argss = message.content.slice(prefix.length).split(/ +/)
  let pokefusionjson = JSON.parse(fs.readFileSync("./pokefusion.json", "utf8"));

  var msgcmd = message.content.split(" ")[0].substring(1);
  var params = message.content.substring(msgcmd.length + 2);
  var options = params.split(" ");
  
  var permierp = pokefusionjson[options[0]];
  var deuxiemep = pokefusionjson[options[1]];

  const ball_embed = new Discord.RichEmbed()
  .setAuthor(`PokéFusion`, `${bot.user.displayAvatarURL}`)
  .setColor(`fffff`)
  .setTimestamp()
  .setFooter(`${bot.user.username}`, `${bot.user.displayAvatarURL}`);
  
  const url = `http://images.alexonsager.net/pokemon/fused/${permierp}/${permierp}.${deuxiemep}.png`
  //if(!url || !$.isUrl(url) || !pokefusionjson[options[1]] || !pokefusionjson[options[2]]) {message.channel.send("Veuillez fournir des pokémons valides."); return}
  message.delete();

  snekfetch.get(url)
.then(r=>message.channel.send(ball_embed.setImage(`${url}`)));
}


module.exports.help = {
  name: "pokefusion",
  description: 'Permet de fusionner deux pokemons (limités a ceux de la première génération)',
  usage: `.pokefusion <pokemon1> <pokemon2>`
}