const Discord = require('discord.js')
const fs = require("fs");
const bot = new Discord.Client();


module.exports.run = async (bot, message, args, prefix) => {

    if(args[1]) {
        let commandes_global = ["warn","channelignore","ban","mute","tempmute","purge","prune","annonce","sondage","vdm","shrug","tableflip","flip","unflip","8ball","say","age","bitcoin","kcal","ascii","zalgolize","fliptext","ri","clap","cowsay","mixuser","gouter","recherche","quizz","pourcent","love","konga","rps","fakehacker","nsfw","boobs","ass","pussy","holo","gif","hentai","thigh","sbnp","trap","mg","lingerie","photo","rip","punch","rh","triggered","burn","cow","snek","hug","url","source","logs","choose","game","setprefix","infodiscord","infos","ping","createrole","wiki","google","roles","report","botinvite","globalchat","invite","weather","pseudo","seen","translate","tts","emojis","timer","icon","help","play","skip","pause","resume","stop","music","volume","queue"]
        if(!commandes_global.includes(args[1])) {
            message.channel.send(`La commande \`${args[1]}\` n'existe pas.`);      
            return;
        } else {
        let props = require(`../commands/${args[1]}.js`);
        let embed = new Discord.RichEmbed()
            .setTitle("Slash - Menu d'aide")
            .setDescription(`Commande : ${props.help.name}`)
            .addField("Description", props.help.description)
            .addField("Utilisation", props.help.usage)
            .setTimestamp()
            .setFooter(bot.user.tag, bot.user.displayAvatarURL)
        message.channel.send(embed)
        }}
    else {
    let modcmd = ["test","warn","ban","mute","tempmute","purge","prune","annonce","sondage"]
    let funcmd = ["test","vdm","shrug","tableflip","flip","unflip","8ball","say","age","bitcoin","kcal","ascii","zalgolize","fliptext","ri","clap","cowsay","mixuser","gouter","recherche","quizz","pourcent","love","konga","rps","fakehacker"]
    let nsfwcmd = ["test","nsfw","boobs","ass","pussy","holo","gif","hentai","thigh","sbnp","trap","mg","lingerie"]
    let imagecmd = ["test","photo","rip","punch","rh","triggered","burn","cow","snek","hug"]
    let utilcmd = ["test","url","source","logs","choose","game","setprefix","infodiscord","infos","ping","createrole","wiki","google","roles","report","botinvite","globalchat","invite","weather","pseudo","seen","translate","tts","emojis","timer","icon","help"]
    let musiccmd = ["test","play","skip","pause","resume","stop","music","volume","queue"]
    let helpembed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.username} - Menu d'aide`)
    .setDescription("Contactez @sιмση ℓεcℓεяε#5169 pour une aide plus poussée - .help <commande>")
    .setFooter(bot.user.tag, bot.user.displayAvatarURL)
    .setTimestamp()
    .addField(`<:menus2:485045849244565535>Commandes modération`, `\`\`\`${modcmd.join("\n.")}\`\`\``,true)
    .addField("<:picture:485045860829233166>Commandes images",`\`\`\`${imagecmd.join("\n.")}\`\`\``,true)
    .addField("<:casque:485045839455059979>Commandes musique", `\`\`\`${musiccmd.join("\n.")}\`\`\``,true)
    .addField("<:manette:485046750747426839>Commandes fun", `\`\`\`${funcmd.join("\n.")}\`\`\``,true)
    .addField("<:rglages:485045861072633905>Commandes utiles",`\`\`\`${utilcmd.join("\n.")}\`\`\``,true)
    .addField("<:coeur2:485049599590006794>Commandes nsfw", `\`\`\`${nsfwcmd.join("\n.")}\`\`\``,true)
    .addField("<:infos:485045851216150539>Nouveautées","```Ajout d'un menu d'aide\nAjouts d'émojis personnalisés\nCréation d'un site internet (lien bientôt disponible)\nFusion des commandes mute et unmute\najout des commandes fliptext, zalgolize et prune```", true)
    .addField("Lien serveur support", "[Serveur support](https://discord.gg/vXCQU9T)",true)
    .addField("Lien du bot","[Ajouter le bot](https://discordapp.com/oauth2/authorize?client_id=439717426687508480&scope=bot&permissions=2146958591)",true)
message.channel.send(helpembed);
    }
}
    module.exports.help = {
      name: "help",
      description: 'Permet d\'obtenir des informations sur le bot, ses commandes ainsi que son changelog.',
      usage: `.help [commande]`
    }