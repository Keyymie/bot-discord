exports.run = async (bot, message, args) => {

    let channel = message.mentions.channels.first();
    if (!channel) {
      if (parseInt(args[0]) < 9223372036854775807) {
        channel = message.guild.channels.get(args[0]);
      }
      else channel = message.channel;
    }
  
    if (channel) {
      let title;
      if (channel.type === 'text') {
        title = 'Text Channel Info';
      }
      else {
        title = 'Voice Channel Info';
      }
      message.channel.send({
        embed: {
          color: 00000,
          title: title,
          fields: [
            {
              name: 'Nom',
              value: channel.name,
              inline: true
            },
            {
              name: 'ID',
              value: channel.id,
              inline: true
            },
            {
              name: 'Topic',
              value: (channel.topic === null || channel.topic.length < 2) ? '-' : channel.topic,
              inline: false
            },
            {
              name: 'Créer le',
              value: channel.createdAt.toUTCString(),
              inline: true
            },
            {
              name: 'Utilisateurs',
              value: channel.members.size,
              inline: true
            }
          ]
        }
      }).catch(e => {
        bot.log.error(e);
      });
    }
}

exports.help = {
    name : 'channelinfo',
description : "Regarde les infos d\'un ou du channel présent.",
usage : "l\'usage est : b!channelinfo ou b!channelinfo #channel"
}
