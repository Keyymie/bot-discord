const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_GUILD")){ return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu n'as pas les bonnes permissions.`);}
  //  const modlog = message.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Je ne trouve pas l'utilisateur.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.find(`name`, "Muted")) return message.channel.send('Cet utilisateur n\'est pas mute.')
    if (!reason) return message.channel.send('Spécifie une raison pour le unmute!')
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(args[0] == "help"){
      message.reply("Usage: b!unmute <user> <reason>");
      return;
    }
  let muteChannel = message.guild.channels.find(`name`, "mod-logs");
  if (!muteChannel) return message.channel.send('**S\'il te plait créer un channel `mod-logs`**')

    if (!muterole) {
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

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Moderator', `${mod}`)
            .setColor('BLACK')
      		  .setFooter("Bot Version 1.1.0", "https://cdn.discordapp.com/avatars/453870812311584779/72734a7ab1876a3d63e565e70f378fc2.png?size=2048")
        message.channel.send(muteembed)
  
}

module.exports.help = {
    name: "unmute"
  }