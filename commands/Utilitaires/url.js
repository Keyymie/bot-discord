const Discord = require('discord.js')
var isgd = require('isgd');
var $ = require('check-valid-url');

module.exports.run = async (bot, message, args) => {
        let urldumessage = args.slice(0).join(' ')
        if(!urldumessage || !$.isUrl(urldumessage)) {message.channel.send("Veuillez fournir une url valide."); return}
        isgd.shorten(urldumessage, function(res) {
          let embeddelurl = new Discord.RichEmbed()
          .setTitle("Raccoursisseur d'url")
          .setDescription(res)
          .setColor('#ffffff')
    message.channel.send(embeddelurl);
})
message.delete(0)
      }

    exports.conf = {
    aliases: ['urls']
    };

    exports.help = {
    name: 'url', description: "Raccourcit l'url demandée", usage: '.url <url>'
    };