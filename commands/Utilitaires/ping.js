const Discord = require('discord.js')

module.exports.run = async (bot, message, args, prefix) => {
  let start = Date.now(); message.channel.send('Test de latence').then(message => { 
    let diff = (Date.now() - start); 
    let API = Math.round(bot.ping)
        
        let embed = new Discord.RichEmbed()
        .setTitle(`🔔 Ping`)
        .setColor(0xff2f2f)
        .addField("📶 Latence du BOT", `${diff}ms`, true)
        .addField("💻 Latence de l'API", `${API}ms`, true)
        message.edit(embed);
      
    });
}

module.exports.help = {
  name: "ping",
  description: 'Informe du ping du bot ainsi que celui de l\'api discord js',
  usage: `.ping`
}
