const Discord = require('discord.js')
let os = require('os')
let moment = require('moment')
require('moment-duration-format')


module.exports.run = async (bot,message,args)  =>{

    if (args[0] == "help") {
        let embed = new Discord.RichEmbed()
        .setTitle('Commande INFOBOT')
        .setDescription('**Description:** Regarde les infos sur le bot.')
        .addField('Usage', 'l\'usage est : b!infobot', true)
        .addField('Alias', 'b!infob', true)
        .setThumbnail(bot.user.avatarURL)
        .setColor('BLACK')
        .setFooter(`${message.author.username} • b!infobot`, message.author.displayAvatarURL)
        .setTimestamp()
        message.channel.send(embed);
        return;
    }

    const stats = bot.emojis.find(emoji => emoji.name === "stats");
    const vrsn = bot.emojis.find(emoji => emoji.name === "version");
    const system = bot.emojis.find(emoji => emoji.name === "system");
    const uptime = bot.emojis.find(emoji => emoji.name === "uptime");
    const proces = bot.emojis.find(emoji => emoji.name === "process");
    const own = bot.emojis.find(emoji => emoji.name === "owner");

  var embed_Stats = new Discord.RichEmbed()
  .setTitle(message.author.tag)
  .setColor("GREY")
  .addField(`${own}Owners`, "`Gaarp#8856`\n`sιмση ℓεcℓεяε#5765`", true)
  .addField(`${stats}Stats`, `Servers: \`${bot.guilds.size.toLocaleString()}\`\nChannels: \`${bot.channels.size.toLocaleString()}\`\nUsers: \`${bot.users.size.toLocaleString()}\``, true)
  .addField(`${vrsn}Version`, `Node: \`${process.version}\`\nDiscord.js: \`11.4.2\``, true)
  .addField(`${proces}Mémoire`, `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``, true)
  .addField(`${uptime}Uptime`, `\`${moment.duration(bot.uptime).format(" D[j]:H[h]:m[m]:s[s]")}\``, true)
  .addField(`${system}System`, `CPU: \`\n${os.cpus().map(i => `${i.model}`)[0]}\`\nArch: \`${os.arch()}\`\nPlateforme: \`\`${os.platform()}\`\``, true)
  .setFooter(`${message.author.username} • b!infobot`, message.author.displayAvatarURL)
  .setTimestamp() 
  message.channel.send(embed_Stats)
}

module.exports.help = {
  name: "infobot",
  alias:'infob'
}