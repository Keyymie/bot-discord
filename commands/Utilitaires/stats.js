const Discord = require('discord.js')
var os = require('os');
const { version } = require("discord.js");
const moment = require("moment");
let cpuStat = require("cpu-stat")
const m = require("moment-duration-format");
const ms = require("ms");
module.exports.run = async (bot, message, args, prefix) => {
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
        return console.log(err);
    }
    function convertMS(ms) {
      var d, h, m, s;
      s = Math.floor(ms / 1000);
      m = Math.floor(s / 60);
      s = s % 60;
      h = Math.floor(m / 60);
      m = m % 60;
      d = Math.floor(h / 24);
      h = h % 24;
      return {
          d: d
          , h: h
          , m: m
          , s: s
      };
  };
  let u = convertMS(bot.uptime);
  let uptime = u.d + "j," + u.h + "h," + u.m + "mn," + u.s + "sc"
    const duration = moment.duration(bot.uptime).format("ms [ms]");
    const embedStats = new Discord.RichEmbed()
        .setAuthor(bot.user.username)
        .setTitle("**Statistiques**")
        .addField("• Mémoire vive", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
        .addField("• Latence BOT ", `${duration}`,true)
        .addField("• Latence API", `${Math.round(bot.ping)}ms`, true)  
        .addField("• Utilisateurs", `${bot.users.size.toLocaleString()}`, true)
        .addField("• Serveurs", `${bot.guilds.size.toLocaleString()}`, true)
        .addField("• Channels ", `${bot.channels.size.toLocaleString()}`, true)
        .addField("• Discord.js", `v${version}`, true)
        .addField("• Node", `${process.version}`, true)
        .addField("• Uptime", `${uptime}`, true)
        .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
        .addField("• Usage du CPU", `\`${percent.toFixed(2)}%\``, true)
        .addField("• Architecture", `\`${os.arch()}\``, true)
        .addField("• Platforme", `\`\`${os.platform()}\`\``, true)
    message.channel.send(embedStats)
});
}

module.exports.help = {
  name: "stats",
  description: 'Affiche les stats du bot.',
  usage: `.stats`
}
