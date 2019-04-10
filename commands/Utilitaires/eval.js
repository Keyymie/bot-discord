const Discord = require('discord.js')

module.exports.run = async (bot, message, args, config) => {
    if (message.author.id == config.bot_owner_id) {
      var util = require("util");
      let args = message.content.split(" ").slice(1);   
      let code = args.join(' ');
        if (message.author.id != config.bot_owner_id) return;  
          try {
        let ev = eval(code)
                      let str = util.inspect(ev, {
                          depth: 1})
                       str = `${str.replace(new RegExp(`${bot.token}|${bot.token}`, "g"), "nop?")}`;
                      if(str.length > 1800) {
                          str = str.substr(0, 1800)
                          str = str + "..."}
                      //message.delete(); 
      message.react("✅");
      var embed = new Discord.RichEmbed()
      .addField("\:inbox_tray: **Entrée :**",'```js\n' + code + '```'  )
      .addField("\:outbox_tray: **Sortie :**",'```js\n' + str + '```'  )
  message.channel.send(embed)
        } catch (err) {   
            message.react("❌");
            var embed = new Discord.RichEmbed()
          .addField(":\inbox_tray: **Entrée :**",'```js\n' + code + '```'  )
          .addField("\:outbox_tray: **Sortie :**",'```js\n' + err + '```'  )
      message.channel.send(embed)

    }
    const evalerror = (reaction, user) => reaction.emoji.name === "❌" && user.id === message.author.id;
    const evalreussi = (reaction, user) => reaction.emoji.name === "✅" && user.id === message.author.id;
    const everr = message.createReactionCollector(evalerror, { time: 10000 });
    const evreuss = message.createReactionCollector(evalreussi, { time: 10000 });

    everr.on('collect', r => {
      message.delete()
      bot.user.lastMessage.delete(1);
    })

    evreuss.on('collect', r => {
      message.delete()
      bot.user.lastMessage.delete(1);
    })
  }}

  module.exports.help = {
  name: "eval",
  description: 'Permet d\'executer un morceau de code.',
  usage: `.eval <code>`
}
