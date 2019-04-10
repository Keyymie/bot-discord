const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{

    if (args[0] == "help") {
        let embed = new Discord.RichEmbed()
        .setTitle('Commande USERINFO')
        .setDescription('**Description:** Tu peux regarder les infos d\'un utilisateur ou tes infos.')
        .addField('Usage', 'l\'usage est : b!userinfo ou b!userinfo <@mention>', true)
        .addField('Alias', 'b!whois', true)
    .setThumbnail(bot.user.avatarURL)
    .setColor('BLACK')
    .setFooter(`${message.author.username} • b!userinfo`, message.author.displayAvatarURL)
    .setTimestamp()
        message.channel.send(embed);
        return;
    }

    const status = {
        online: "<:enligne:503243588554063894> En ligne",
        idle: "<:inactif:503243589015568404> Inactif",
        dnd: "<:dnd:503243589048991744> Ne pas déranger",
        offline: "<:invisible:503243588956585994> Invisible"
      };
const user = message.mentions.users.first() ? message.mentions.users.first() : message.author
const GuildMember = message.mentions.users.first() ? message.mentions.users.first() : message.member
let embed = new Discord.RichEmbed()
.setThumbnail(`${user.avatarURL}`)
.setAuthor(user.username, message.author.displayAvatarURL)
.addField("📚 Name ", user.username, true)
.addField(":book: Identifiant ", GuildMember.id, true)
.addField(":game_die: Game ", `${GuildMember.presence.game ? `${GuildMember.presence.game.name}` : "Ne joues pas."}`, true)
.addField(":gear: Status ", `${status[user.presence.status]}`, true)
.addField("🛡 Roles", `${message.member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ")}`, true)
.setFooter(`${message.author.username} • b!userinfo`, message.author.displayAvatarURL)
.setTimestamp()
.setColor('BLACK')
message.channel.send(embed)

}
          
     
     module.exports.help = {
        name: "userinfo",
        alias: "whois"
      }
      