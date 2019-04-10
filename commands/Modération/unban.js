exports.run = (bot, message, args) => {
    const reason = args.slice(1).join(' ');
    bot.unbanReason = reason;
    bot.unbanAuth = message.author;
    const user = args[0];
if(!message.member.hasPermission("MANAGE_GUILD")){ return message.channel.send(`<:WrongMark:504768105130622986> **${message.author.username}**, tu n'as pas les bonnes permissions.`);}
    if (reason.length < 1) return message.reply(' donnes moi une raison de dé-bannir cet user !');
    if (!user) return message.reply(' vous devez fournir un utilisateur pouvant être résolu, tel qu\'un ID utilisateur.').catch(console.error);
    message.guild.unban(user);
    message.reply(`L'unban de <@${user}> à été fait avec succès!`)
};

exports.help = {
    name : 'unban' 
}