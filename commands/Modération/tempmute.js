const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if (args[0] == "help") {
        message.reply("Usage: b!tempmute <1s/m/h/d> <user>");
        return;
    }
    if(!message.member.hasPermission("MANAGE_MESSAGES")){ return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu n'as pas les bonnes permissions.`);}
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Veuillez mentionner un utilisateur !");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas le mute !");
    let reason = message.content.split(" ").slice(3).join(" ");
    if (!reason) return message.reply("Merci d'indiquer une raison !");

    let muterole = message.guild.roles.find(`name`, "TimeMute");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "TimeMute",
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
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("Merci de précisez un temps");

    message.delete().catch(O_o => {});

    try {
        await tomute.send(`Salut ! t'as été muter pour ${mutetime}. Désolé !`)
    } catch (e) {
        message.channel.send(`Un utilisateur a été mute, mais ses MP soont bloqués, il a été mute pour ${mutetime}`)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription(`Mute fait par ${message.author}`)
        .setColor("BLACK")
        .addField("Utilisateur TimeMute :", tomute)
        .addField("TimeMute dans le salon", message.channel)
        .addField("TimeMute à", message.createdAt)
        .addField("Temps du mute", mutetime)
        .addField("Raison", reason);

    //let incidentschannel = message.guild.channels.find(`name`, "mod-logs");
    //if (!incidentschannel) return message.reply("Créer un salon mod-logs !");
    message.channel.send(muteembed);
    message.author.send(`<@${tomute.id}> est mute pour ${mutetime}`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> a été unTimeMute !`);
    }, ms(mutetime));
}

module.exports.help = {
    name: "tempmute"
  }