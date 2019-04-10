module.exports.run = async(bot, message, args) => {
const Discord = require('discord.js')
    if (args[0] == "help") {
        let embed = new Discord.RichEmbed()
        .setDescription('**Description:** Le bot transformera ton message en emoji.')
        .addField('Usage', 'b!bigtext <message>', true)
        .addField('Alias', 'b!let', true)
        .setThumbnail(bot.user.avatarURL)
        .setColor('BLACK')
        .setFooter(`${message.author.username} • b!letter`, message.author.displayAvatarURL)
        .setTimestamp()
        message.channel.send(embed);
        return;
    }
  if (args.length < 1) {

    return message.channel.send(`:x: **${message.author.username}**, mets du texte.`);;
  }

  const mapping = {
    ' ': '   ','0': ':zero:','1': ':one:','2': ':two:','3': ':three:','4': ':four:','5': ':five:','6': ':six:','7': ':seven:','8': ':eight:','9': ':nine:','!': ':grey_exclamation:','?': ':grey_question:','#': ':hash:','*': ':asterisk:'
  };

  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = `\:regional_indicator_${c}:`;
  });
  message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(''))
};

module.exports.help = {
    name : 'bigtext', 
alias:'let'
}