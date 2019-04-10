const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let embedtest = new Discord.RichEmbed()
    .setTitle("Suppression de channels")
    .setDescription("Quels types de channels voulez vous supprimmer ?")
    const m = await message.channel.send(embedtest);
    m.react("🔉");
    m.react("🔢");
    m.react("❌");
    m.react("🗑");
     
      const vocal = (reaction, user) => reaction.emoji.name === '🔉' && user.id === message.author.id;
      const textuel = (reaction, user) => reaction.emoji.name === '🔢' && user.id === message.author.id; 
      const annuler = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id; 
      const supprimmer = (reaction, user) => reaction.emoji.name === '🗑' && user.id === message.author.id; 

      const vocalf = msg.createReactionCollector(vocal, { time: 60000 }); 
      const textuelf = msg.createReactionCollector(textuel, { time: 60000 }); 
      const annulerf = msg.createReactionCollector(annuler, { time: 60000 }); 
      const supprimmerf = msg.createReactionCollector(supprimmer, { time: 60000 }); 

      
      vocalf.on('collect', r => { 
        var server = bot.guilds.get(message.guild.id);
  for (var i = 0; i < server.voiceChannel.array().length; i++) {
      server.voiceChannel.array()[i].delete();
  }
      })
  }


module.exports.help = {
  name: "test",
  description: 'Permet de faire choisir le bot entre plusieurs éléments.',
  usage: `.choose <1>,<2>,<3>`
}
