const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
        message.reply("Usage: b!mute <user> <reason>");
        return;
      }
    if (!message.member.hasPermissions('KICK_MEMBERS')) return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu n'as pas les bonnes permissions.`)
    // const modlog = message.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, je ne trouve pas l'utilisateur.`)
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, spécifie une raison de mute.`)
    let muterole = message.guild.roles.find(`name`, "Muted");

  /*let muteChannel = message.guild.channels.find(`name`, "mod-logs");
  if (!muteChannel) return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu as besoin d'avoir le channel \`mod-logs\`.`)
 */ if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('Utilisateur', `<@${user.id}>`)
            .addField('Raison', `${reason}`)
            .addField('Moderateur', `${mod}`)
            .setColor('BLACK')
        message.channel.send(muteembed)
  
  
}

module.exports.help = {
    name: "mute"
}