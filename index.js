const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const fs = require("fs");
const figlet = require('figlet')
const Youtube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const youtube = new Youtube("AIzaSyAN-kK9twI3PvjnPrxvpHoZvgqIsn2Aq9A")
const queue = new Map();
var $ = require('check-valid-url');
let prefix = config.prefix
/////////////////////////////////////////////////////////
figlet('- Anthem™ -', (err, data) => {console.log(data)})
/////////////////////////////////////////////////////////
bot.IMGcommands = new Discord.Collection();
fs.readdir("./commands/Images/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Impossible de trouver des commandes pour la catégorie \"Images\"");
    return;}
jsfile.forEach((f, i) =>{
  let props = require(`./commands/Images/${f}`);
  console.log(`${f} chargé.`);
  bot.IMGcommands.set(props.help.name, props);
})});
/////////////////////////////////////////////////////////
bot.GAMEScommands = new Discord.Collection();
fs.readdir("./commands/Jeux/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Impossible de trouver des commandes pour la catégorie \"Jeux\".");
    return;}
jsfile.forEach((f, i) =>{
  let props = require(`./commands/Jeux/${f}`);
  console.log(`${f} chargé.`);
  bot.GAMEScommands.set(props.help.name, props);
})});
/////////////////////////////////////////////////////////
bot.MODcommands = new Discord.Collection();
fs.readdir("./commands/Modération/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Impossible de trouver des commandes pour la catégorie \"Modération\".");
    return;}
jsfile.forEach((f, i) =>{
  let props = require(`./commands/Modération/${f}`);
  console.log(`${f} chargé.`);
  bot.MODcommands.set(props.help.name, props);
})});
/////////////////////////////////////////////////////////
bot.MUSICcommands = new Discord.Collection();
fs.readdir("./commands/Music/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Impossible de trouver des commandes pour la catégorie \"Musique\".");
    return;}
jsfile.forEach((f, i) =>{
  let props = require(`./commands/Music/${f}`);
  console.log(`${f} chargé.`);
  bot.MUSICcommands.set(props.help.name, props);
})});
/////////////////////////////////////////////////////////
bot.NSFWcommands = new Discord.Collection();
fs.readdir("./commands/Nsfw/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Impossible de trouver des commandes pour la catégorie \"Nsfw\".");
    return;}
jsfile.forEach((f, i) =>{
  let props = require(`./commands/Nsfw/${f}`);
  console.log(`${f} chargé.`);
  bot.NSFWcommands.set(props.help.name, props);
})});
/////////////////////////////////////////////////////////
bot.UTILScommands = new Discord.Collection();
fs.readdir("./commands/Utilitaires/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Impossible de trouver des commandes pour la catégorie \"Utilitaire\".");
    return;}
jsfile.forEach((f, i) =>{
  let props = require(`./commands/Utilitaires/${f}`);
  console.log(`${f} chargé.`);
  bot.UTILScommands.set(props.help.name, props);
})});
/////////////////////////////////////////////////////////
bot.RPGcommands = new Discord.Collection();
fs.readdir("./commands/RPG/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Impossible de trouver des commandes pour la catégorie \"Utilitaire\".");
    return;}
jsfile.forEach((f, i) =>{
  let props = require(`./commands/RPG/${f}`);
  console.log(`${f} chargé.`);
  bot.RPGcommands.set(props.help.name, props);
})});
/////////////////////////////////////////////////////////
bot.INFOScommands = new Discord.Collection();
fs.readdir("./commands/informations/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Impossible de trouver des commandes pour la catégorie \"Informations\"");
    return;}
jsfile.forEach((f, i) =>{
  let props = require(`./commands/informations/${f}`);
  console.log(`${f} chargé.`);
  bot.INFOScommands.set(props.help.name, props);
})});

  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
 // // // // // // // // // // // // // // // // // // // H A N D L E R  // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

bot.on("message", async message => {
  let channelignore = JSON.parse(fs.readFileSync("./channelignore.json", "utf8"));
  if(channelignore[message.channel.id]) {return};
  if(!message.content.startsWith(prefix)) {return};
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  let commandfile = bot.RPGcommands.get(command.slice(prefix.length)) || bot.IMGcommands.get(command.slice(prefix.length)) || bot.GAMEScommands.get(command.slice(prefix.length)) || bot.MODcommands.get(command.slice(prefix.length)) || bot.NSFWcommands.get(command.slice(prefix.length)) || bot.MUSICcommands.get(command.slice(prefix.length)) || bot.UTILScommands.get(command.slice(prefix.length)) || bot.INFOScommands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args, config, prefix);
})

/////////////////////////////////////////////////////////
//////////////////  MUSIQUE  ////////////////////////////
/////////////////////////////////////////////////////////

bot.on("message", async message => {
  let prefix = config.prefix
  var args = message.content.substring(prefix.length).split(" ");
  if (!message.content.startsWith(prefix)) return;
var searchString = args.slice(1).join(' ');
var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
var serverQueue = queue.get(message.guild.id);
  switch (args[0].toLowerCase()) {
    case "play":
  var voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) return message.channel.send('Vous devez être dans un salon vocal pour écouter de la musique.');
  var permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has('CONNECT')) {
    return message.channel.send('Je ne peut pas me connecter au salon vocal.');
  }
  if (!permissions.has('SPEAK')) {
    return message.channel.send('Je n\'ai pas les permissions de parler dans ce salon vocal.');
  }
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
    var playlist = await youtube.getPlaylist(url);
    var videos = await playlist.getVideos();
    for (const video of Object.values(videos)) {
      var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
      await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
    }
    return message.channel.send(`✅ Playlist: **${playlist.title}** a été ajoutée à la queue.`);
  } else {
    try {
      var video = await youtube.getVideo(url);
    } catch (error) {
      try {
        var videos = await youtube.searchVideos(searchString, 10);
        var index = 0;
        message.channel.send(`
__**Sélection de la musique:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Veuillez fournir un nombre de 1 à 10 pour sélectionner votre musique.
        `);
        // eslint-disable-next-line max-depth
        try {
          var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
            maxMatches: 1,
            time: 10000,
            errors: ['time']
          });
        } catch (err) {
          console.error(err);
          return message.channel.send('Valeur entrée invalide ou inexistante, arrêt du processus de recherche.');
        }
        var videoIndex = parseInt(response.first().content);
        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
      } catch (err) {
        console.error(err);
        return message.channel.send('🆘 Je n\'ai pas de résultats pour cette recherche.');
      }
    }
    return handleVideo(video, message, voiceChannel);
  }
      break;
    case "skip":
  if (!message.member.voiceChannel) return message.channel.send('Vous devez être dans un salon vocal pour écouter de la musique.');
  if (!serverQueue) return message.channel.send('Il n\'y a pas de musique que je peut passer pour vous.');
  serverQueue.connection.dispatcher.end('La commande skip a été utilisée.');
  return undefined;
      break;
    case "stop":
  if (!message.member.voiceChannel) return message.channel.send('Vous devez être dans un salon vocal pour écouter de la musique.');
  if (!serverQueue) return message.channel.send('Il n\'y a pas de musique que je peut stopper pour vous.');
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end('La commande stop a été utilisée.');
  return undefined;
break;      
    case "volume":
  if (!message.member.voiceChannel) return message.channel.send('Vous devez être dans un salon vocal pour écouter de la musique.');
  if (!serverQueue) return message.channel.send('Il n\'y a pas de musique jouée actuellement.');
  if (!args[1]) return message.channel.send(`Le volume actuel est : **${serverQueue.volume}**`);
  if (args[1] > 10) return message.channel.send(`Vous ne pouvez pas monter le niveau de volume au dessus de 10.`);
  serverQueue.volume = args[1];
  serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
  return message.channel.send(`Le volume a été réglé à : **${args[1]}**`);
break;
    case "music":
  if (!serverQueue) return message.channel.send('Il n\'y a pas de musique jouée actuellement.');
  
  var volval;
if (serverQueue.volume == 1) {
  volval = `○──── :mute:⠀`
}if (serverQueue.volume == 2) {
  volval = `─○─── :speaker:⠀`
}if (serverQueue.volume == 3) {
  volval = `──○── :sound:⠀`
}if (serverQueue.volume == 4) {
  volval = `───○─ :sound:⠀`
}if (serverQueue.volume == 5) {
  volval = `────○ :loud_sound:⠀`
}if (serverQueue.volume > 5) {
  volval = `────○ :warning: `
}
var NowEmbed = new Discord.RichEmbed().setColor('#ffffff')
.addField(`==========================================================`,`
ɴᴏᴡ ᴘʟᴀʏɪɴɢ: **${serverQueue.songs[0].title}** 
:white_circle:─────────────────────────────────────────── 
◄◄⠀▐▐ ⠀►►⠀⠀${serverQueue.volume}　${volval}    　　 :gear: ❐ ⊏⊐ 
========================================================= `)
.setFooter(message.author.tag, message.author.displayAvatarURL)
.addField("Invite moi sur ton serveur !","La commande est .botinvite", true)
.addField("Invite du serveur support","https://discord.gg/6mvvfSm", true);
message.channel.send(NowEmbed);return
break;

    case "pannel":
  if(message.author.id === config.bot_owner_id || "476816869140070400") {
  message.delete(0)
  const emoji1 = "1⃣"
  const emoji2  = "2⃣"
  const emoji3 = "3⃣"
  let pannelEmbed = new Discord.RichEmbed()
  .setTitle("Pannel sonore")
  .addField(":one:      :two:      :three:", "Mario Zelda WTF")
  return message.channel.send(pannelEmbed).then( msg => {

    msg.react(emoji1).then( r => {
    msg.react(emoji2).then( r => {
    msg.react(emoji3)

    const one = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
    const two = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
    const three = (reaction, user) => reaction.emoji.name === emoji3 && user.id === message.author.id;
  
    const un = msg.createReactionCollector(one, { time: 10000 });
    const deux = msg.createReactionCollector(two, { time: 10000 });
    const trois = msg.createReactionCollector(three, { time: 10000 });

    un.on('collect', r => {
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) return message.channel.send("Veuillez rejoindre un channel vocal.");
  if(!$.isUrl("https://www.youtube.com/watch?v=ZhadLMDWcGA")) return message.channel.send('Erreur d\'URL, veuillez contacter le créateur du bot pour régler le problème.')
  message.member.voiceChannel.join().then(connnection => {
  bot.user.lastMessage.delete();
  message.channel.send("Lecture de l'effet.");
  connnection.playStream(ytdl("https://www.youtube.com/watch?v=ZhadLMDWcGA", {
    filter: 'audioonly'
})).on('end', reason => {
bot.user.lastMessage.edit('``Fin de l\'effet``').then(ms => {
  setTimeout(() => {
      ms.delete()
  }, 500)
})
if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
else console.log(reason);
voiceChannel.leave();
})})})

deux.on('collect', r => {
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) return message.channel.send("Veuillez rejoindre un channel vocal.");
  if(!$.isUrl("https://www.youtube.com/watch?v=SvODpHnV9o4")) return message.channel.send('Erreur d\'URL, veuillez contacter le créateur du bot pour régler le problème.')
  message.member.voiceChannel.join().then(connnection => {
  bot.user.lastMessage.delete();
  message.channel.send("Lecture de l'effet.");
  connnection.playStream(ytdl("https://www.youtube.com/watch?v=SvODpHnV9o4", {
    filter: 'audioonly'
})).on('end', reason => {
bot.user.lastMessage.edit('``Fin de l\'effet``').then(ms => {
  setTimeout(() => {
      ms.delete()
  }, 500)
})
if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
else console.log(reason);
voiceChannel.leave();
})})})

trois.on('collect', r => {
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) return message.channel.send("Veuillez rejoindre un channel vocal.");
  if(!$.isUrl("https://www.youtube.com/watch?v=9jAZrzDe3aQ&index=12&list=PLtVJ2cRYLtngjYbThMZAYNDcizeyAvNIG")) return message.channel.send('Erreur d\'URL, veuillez contacter le créateur du bot pour régler le problème.')
  message.member.voiceChannel.join().then(connnection => {
  bot.user.lastMessage.delete();
  message.channel.send("Lecture de l'effet.");
  connnection.playStream(ytdl("https://www.youtube.com/watch?v=9jAZrzDe3aQ&index=12&list=PLtVJ2cRYLtngjYbThMZAYNDcizeyAvNIG", {
    filter: 'audioonly'
})).on('end', reason => {
bot.user.lastMessage.edit('``Fin de l\'effet``').then(ms => {
  setTimeout(() => {
      ms.delete()
  }, 500)
})
if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
else console.log(reason);
voiceChannel.leave();
})})})


})})})}else {return message.channel.send(`Vous n'avez pas l'autorisation d'utiliser cette commande.`);}
break;

    case "queue":
  if (!serverQueue) return message.channel.send('Il n\'y a pas de musique jouée actuellement.');
  let queueembed = new Discord.RichEmbed()
  .setAuthor("Queue :")
  .setDescription(serverQueue.songs.map(song => `**-** ${song.title}`).join('\n'))
  .setFooter(`Joué actuellement : ${serverQueue.songs[0].title}`)
  return message.channel.send(queueembed);
break;
    case "pause":
  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
    return message.channel.send('⏸ La musique a été mise en pause.');
  }
  return message.channel.send('Il n\'y a pas de musique jouée actuellement.');
break;
    case "resume":
  if (serverQueue && !serverQueue.playing) {
    serverQueue.playing = true;
    serverQueue.connection.dispatcher.resume();
    return message.channel.send('▶ La musique a été relancée.');
  }
  return message.channel.send('Il n\'y a pas de musique jouée actuellement.');


return undefined;
break;


}
async function handleVideo(video, message, voiceChannel, playlist = false) {
var serverQueue = queue.get(message.guild.id);
console.log(video);
var song = {
  id: video.id,
  title: video.title,
  url: `https://www.youtube.com/watch?v=${video.id}`
};
if (!serverQueue) {
  var queueConstruct = {
    textChannel: message.channel,
    voiceChannel: voiceChannel,
    connection: null,
    songs: [],
    volume: 5,
    playing: true
  };
  queue.set(message.guild.id, queueConstruct);

  queueConstruct.songs.push(song);

  try {
    var connection = await voiceChannel.join();
    queueConstruct.connection = connection;
    play(message.guild, queueConstruct.songs[0]);
  } catch (error) {
    console.error(`Je ne peut pas rejoindre le channel vocal : ${error}`);
    queue.delete(message.guild.id);
    return message.channel.send(`Je ne peut pas rejoindre le channel vocal : ${error}`);
  }
} else {
  serverQueue.songs.push(song);
  console.log(serverQueue.songs);
  if (playlist) return undefined;
  else return message.channel.send(`✅ **${song.title}** a été ajouté à la queue.`);
}
return undefined;
}
function play(guild, song) {
var serverQueue = queue.get(guild.id);

if (!song) {
  serverQueue.voiceChannel.leave();
  queue.delete(guild.id);
  return;
}
console.log(serverQueue.songs);

const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
  .on('end', reason => {
    message.channel.send('``La musique est terminée.``');
    if (reason === 'Stream is not generating quickly enough.') console.log('Fin de la musique.');
    else console.log(reason);
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
  })
  .on('error', error => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

serverQueue.textChannel.send(`🎶 Début de la musique : **${song.title}**`);
}
});

/////////////////////////////////////////////////////////
//////////////////////  HELP  ///////////////////////////
/////////////////////////////////////////////////////////
bot.on("message", async message => {
  let channelignore = JSON.parse(fs.readFileSync("./channelignore.json", "utf8"));
  if(channelignore[message.channel.id]) {return};
  if(!message.content.startsWith(prefix)) {return};
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = message.content.slice(config.prefix.length).trim().split(/ +/g);

  if(message.content.startsWith(prefix + "help")) {
    if(args[1]) {
        if(!bot.RPGcommands.get(args[1]) && !bot.IMGcommands.get(args[1]) && !bot.GAMEScommands.get(args[1]) && !bot.MODcommands.get(args[1]) && !bot.MUSICcommands.get(args[1]) && !bot.NSFWcommands.get(args[1]) && !bot.UTILScommands.get(args[1]) && !bot.INFOScommands.get(args[1])) {
            message.channel.send(`La commande \`${args[1]}\` n'existe pas.`); return}
        else if(bot.IMGcommands.get(args[1])) {
            let props = require(`./commands/Images/${args[1]}.js`);
            let embed = new Discord.RichEmbed().setTitle("Slash - Menu d'aide").setDescription(`Commande : ${props.help.name}`).addField("Description", props.help.description).addField("Utilisation", props.help.usage).setTimestamp().setFooter(bot.user.tag, bot.user.displayAvatarURL)
            message.channel.send(embed)}
        else if(bot.GAMEScommands.get(args[1])) {
            let props = require(`./commands/Jeux/${args[1]}.js`);
            let embed = new Discord.RichEmbed().setTitle("Slash - Menu d'aide").setDescription(`Commande : ${props.help.name}`).addField("Description", props.help.description).addField("Utilisation", props.help.usage).setTimestamp().setFooter(bot.user.tag, bot.user.displayAvatarURL)
            message.channel.send(embed)}
        else if(bot.MODcommands.get(args[1])) {
            let props = require(`./commands/Modération/${args[1]}.js`);
            let embed = new Discord.RichEmbed().setTitle("Slash - Menu d'aide").setDescription(`Commande : ${props.help.name}`).addField("Description", props.help.description).addField("Utilisation", props.help.usage).setTimestamp().setFooter(bot.user.tag, bot.user.displayAvatarURL)
            message.channel.send(embed)}
        else if(bot.MUSICcommands.get(args[1])) {
            let props = require(`./commands/Musique/${args[1]}.js`);
            let embed = new Discord.RichEmbed().setTitle("Slash - Menu d'aide").setDescription(`Commande : ${props.help.name}`).addField("Description", props.help.description).addField("Utilisation", props.help.usage).setTimestamp().setFooter(bot.user.tag, bot.user.displayAvatarURL)
            message.channel.send(embed)}
        else if(bot.NSFWcommands.get(args[1])) {
            let props = require(`./commands/Nsfw/${args[1]}.js`);
            let embed = new Discord.RichEmbed().setTitle("Slash - Menu d'aide").setDescription(`Commande : ${props.help.name}`).addField("Description", props.help.description).addField("Utilisation", props.help.usage).setTimestamp().setFooter(bot.user.tag, bot.user.displayAvatarURL)
            message.channel.send(embed)}
        else if(bot.UTILScommands.get(args[1])) {
            let props = require(`./commands/Utilitaires/${args[1]}.js`);
            let embed = new Discord.RichEmbed().setTitle("Slash - Menu d'aide").setDescription(`Commande : ${props.help.name}`).addField("Description", props.help.description).addField("Utilisation", props.help.usage).setTimestamp().setFooter(bot.user.tag, bot.user.displayAvatarURL)
            message.channel.send(embed)}
        else if(bot.RPGcommands.get(args[1])) {
            let props = require(`./commands/RPG/${args[1]}.js`);
            let embed = new Discord.RichEmbed().setTitle("Slash - Menu d'aide").setDescription(`Commande : ${props.help.name}`).addField("Description", props.help.description).addField("Utilisation", props.help.usage).setTimestamp().setFooter(bot.user.tag, bot.user.displayAvatarURL)
              message.channel.send(embed)}
        else if(bot.INFOScommands.get(args[1])) {
            let props = require(`./commands/informations/${args[1]}.js`);
            let embed = new Discord.RichEmbed().setTitle("Slash - Menu d'aide").setDescription(`Commande : ${props.help.name}`).addField("Description", props.help.description).addField("Utilisation", props.help.usage).setTimestamp().setFooter(bot.user.tag, bot.user.displayAvatarURL)
            message.channel.send(embed)}
} else {
let helpembed = new Discord.RichEmbed()
.setAuthor(`${bot.user.username} - Menu d'aide`)
.setDescription("Contactez @sιмση ℓεcℓεяε#5169 pour une aide plus poussée - .help <commande>")
.setFooter(bot.user.tag, bot.user.displayAvatarURL)
.setTimestamp()
.addField(`<:menus2:485045849244565535>Commandes modération`, `\`\`\`${bot.MODcommands.map(cmd => `${prefix + cmd.help.name}`).join("\n")}\`\`\``,true)
.addField("<:picture:485045860829233166>Commandes images",`\`\`\`${bot.IMGcommands.map(cmd => `${prefix + cmd.help.name}`).join("\n")}\`\`\``,true)
.addField("<:casque:485045839455059979>Commandes musique", `\`\`\`${bot.MUSICcommands.map(cmd => `${prefix + cmd.help.name}`).join("\n")}\`\`\``,true)
.addField("<:manette:485046750747426839>Commandes fun", `\`\`\`${bot.GAMEScommands.map(cmd => `${prefix + cmd.help.name}`).join("\n")}\`\`\``,true)
.addField("<:rglages:485045861072633905>Commandes utiles",`\`\`\`${bot.UTILScommands.map(cmd => `${prefix + cmd.help.name}`).join("\n")}\`\`\``,true)
.addField("<:coeur2:485049599590006794>Commandes nsfw", `\`\`\`${bot.NSFWcommands.map(cmd => `${prefix + cmd.help.name}`).join("\n")}\`\`\``,true)
.addField("<:infos:485045851216150539>Nouveautées","```Ajout d'un menu d'aide\nAjouts d'émojis personnalisés\nCréation d'un site internet (lien bientôt disponible)\nFusion des commandes mute et unmute\najout des commandes fliptext, zalgolize et prune```", true)
.addField("Lien serveur support", "[Serveur support](https://discord.gg/vXCQU9T)",true)
.addField("Lien du bot","[Ajouter le bot](https://discordapp.com/oauth2/authorize?client_id=553925243094302720&scope=bot&permissions=8)",true)
message.channel.send(helpembed);
}}})

/////////////////////////////////////////////////////////
//////////////////////  LOGS  ///////////////////////////
/////////////////////////////////////////////////////////

bot.on('ready', function() {
  console.log(`Le Bot a démarré, avec ${bot.users.size} utilisateurs, dans ${bot.channels.size} salons de ${bot.guilds.size} serveurs.`);
  console.log(bot.user.username + " est en ligne.")
  bot.user.setActivity(` les ${bot.users.size} joueurs dont il s'occupe, dans ${bot.channels.size} salons de ${bot.guilds.size} serveurs. | ` + prefix + "help pour de l'aide", { type: 'WATCHING' })
});

bot.on("guildCreate", guild => {
  console.log(`Nouveau serveur rejoint :  ${guild.name} (id: ${guild.id}). Ce serveur possède ${guild.memberCount} membres et l'id de son possesseur est ${guild.owner}`);
  bot.user.setActivity(` les ${bot.users.size} joueurs dont il s'occupe, dans ${bot.channels.size} salons de ${bot.guilds.size} serveurs. | ` + prefix + "help pour de l'aide", { type: 'WATCHING' })
})
bot.on("guildDelete", guild => {
  console.log(`j'ai été expulsé du serveur :  ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(` les ${bot.users.size} joueurs dont il s'occupe, dans ${bot.channels.size} salons de ${bot.guilds.size} serveurs. | ` + prefix + "help pour de l'aide", { type: 'WATCHING' })
});

bot.on('messageUpdate', function(oldMessage, newMessage) {
  let togglelogs = JSON.parse(fs.readFileSync("./togglelogs.json", "utf8"));
  if(!togglelogs[newMessage.guild.id]) return
  if(oldMessage.author.bot) return
  if(!newMessage.cleanContent) return
  if(!oldMessage || !newMessage) return
  if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
    const logembed = new Discord.RichEmbed()
    .setTitle('**Logs** - Message modifié')
    .setAuthor(newMessage.author.tag, newMessage.author.displayAvatarURL)
    .addField("Message original", oldMessage.cleanContent,true)
    .addField("Message modifié", newMessage.cleanContent, true)
    .setDescription(`Message envoyé par ${newMessage.author.username} modifié dans le salon ${newMessage.channel.name}`)
    .setColor('#ffffff')
    .setTimestamp()

    newMessage.guild.channels.find(x => x.id === togglelogs[newMessage.guild.id].channel).send(logembed)}
});
bot.on('guildBanAdd', function(guild, user, reason) {
    let togglelogs = JSON.parse(fs.readFileSync("./togglelogs.json", "utf8"));
    if(!togglelogs[guild.id]) return
    const logembedb = new Discord.RichEmbed()
    .setTitle('**Logs** - Utilisateur banni')
    .setDescription(`L'utilisateur ${user} a été banni dans le salon ${guild.name}`)
    .addField("raison", reason)
    .setColor('#ffffff')
    .setTimestamp()
    guild.channels.find(x => x.id === togglelogs[guild.id].channel).send(logembedb);
});

bot.on('guildBanRemove', function(guild, user) {
    let togglelogs = JSON.parse(fs.readFileSync("./togglelogs.json", "utf8"));
    if(!togglelogs[guild.id]) return
    const logembedub = new Discord.RichEmbed()
    .setTitle('**Logs** - Bannissement révoqué')
    .setDescription(`Le bannissement de l'utilisateur ${user} a été révoqué sur le serveur ${guild.name}`)
    .setColor('#ffffff')
    .setTimestamp()
    guild.channels.find(x => x.id === togglelogs[guild.id].channel).send(logembedub);
});

bot.on('guildMemberAdd',  member => {
  let togglelogs = JSON.parse(fs.readFileSync("./togglelogs.json", "utf8"));
  if(!togglelogs[member.guild.id]) return
    const logembednu = new Discord.RichEmbed()
    .setTitle('**Logs** - Nouvel utilisateur')
    .setDescription(`L'utilisateur ${member} a rejoint le serveur ${member.guild.name}`)
    .setColor('#ffffff')
    .setTimestamp()
    member.guild.channels.find(x => x.id === togglelogs[member.guild.id].channel).send(logembednu);
});
bot.on('guildMemberRemove',  member => {
    let togglelogs = JSON.parse(fs.readFileSync("./togglelogs.json", "utf8"));
    if(!togglelogs[member.guild.id]) return
    const logembedup = new Discord.RichEmbed()
    .setTitle('**Logs** - Utilisateur parti')
    .setDescription(`L'utilisateur ${member} a quitté le serveur ${member.guild.name}`)
    .setColor('#ffffff')
    .setTimestamp()
    member.guild.channels.find(x => x.id === togglelogs[member.guild.id].channel).send(logembedup);
});
bot.on("messageDelete", message => {
    let togglelogs = JSON.parse(fs.readFileSync("./togglelogs.json", "utf8"));
    if(!togglelogs[message.guild.id]) return
    if(!message.content) return
    if(message.author.bot) return
    const logembed = new Discord.RichEmbed()
      .setTitle('**Logs** - Message supprimé')
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .addField(`Message envoyé par ${message.author.username} supprimé dans le salon ${message.channel.name}\n\n`, message.content)
      .setColor('#ffffff')
      .setTimestamp()
    message.guild.channels.find(x => x.id === togglelogs[message.guild.id].channel).send(logembed)
})

/*bot.on('raw', function(event, user) {
  if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
      let initialMessage = `**Cliquez sur les réactions pour obtenir ou supprimer un rôle.**`;
      let channel = bot.channels.get(event.d.channel_id);
      let message = channel.fetchMessage(event.d.message_id).then(msg=> {
      let user = msg.guild.members.get(event.d.user_id);
      
      if (msg.author.id == bot.user.id && msg.content != initialMessage){
     
          var re = `\\*\\*"(.+)?(?="\\*\\*)`;
          var role = msg.content.match(re)[1];
      
          if (user.id != bot.user.id){
              var roleObj = msg.guild.roles.find(r => r.name === role);
              var memberObj = msg.guild.members.get(user.id);
              
              if (event.t === "MESSAGE_REACTION_ADD"){
                  memberObj.addRole(roleObj)
              } else {
                  memberObj.removeRole(roleObj);
}}}})}   
});*/



bot.login(config.token)
