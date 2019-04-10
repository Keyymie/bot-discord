const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{
    if (args[0] == "help") {
        let embed = new Discord.RichEmbed()
        .setTitle('Commande GUILDINFO')
        .setDescription('**Description:** Regarde les infos du serveur.')
        .addField('Usage', 'l\'usage est : b!guildinfo', true)
        .addField('Alias', 'b!infos', true)
        .setThumbnail(bot.user.avatarURL)
        .setColor('BLACK')
        .setFooter(`${message.author.username} • b!guildinfo`, message.author.displayAvatarURL)
        .setTimestamp()
        message.channel.send(embed);
        return;
    }
    let online =  message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    
       .setAuthor(message.guild.name, sicon)
       .setFooter(`Serveur Créée • ${day}.${month}.${year}`)
       .setColor("BLACK")
       .setThumbnail(sicon)
       .addField("📓 ID du Serveur", message.guild.id, true)
       .addField("📚 Nom du Serveur", message.guild.name, true)
       .addField("👑 Fondateur du Serveur", message.guild.owner.user.tag, true)
       .addField("📍 Region", message.guild.region, true)
       .addField("📥 Channels", `Il y a **${message.guild.channels.size}** Channels.`, true)
       .addField("👥 Humains", `Il y a **${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}** Humains.`, true)
       .addField("🤖 Bots", `Il y a **${message.guild.members.filter(m => m.user.bot).size}** Robots.`, true)
       .addField("🔋 En ligne", `Il y a **${online.size}** Utilisateurs en Ligne.`, true)
       .addField("🛡 Roles", `Il y a **${message.guild.roles.size}** Rôles.`, true)
       .addField("👥 Membres", `Il y a **${message.guild.memberCount}** Membres.`, true)
       .setFooter(`${message.author.username} • b!guildinfo`, message.author.displayAvatarURL)
       .setTimestamp()
       message.channel.send(serverembed)
    
         }
          
     
     module.exports.help = {
        name: "guildinfo",
        alias:'infos'
      }