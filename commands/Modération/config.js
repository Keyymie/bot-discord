const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{
    if (!args[0]){
        return message.channel.send("Pour plus d'infos sur la commande faîtes `b!config help`")
    }
    if(`${args[0]}` == `help`){
        let config = new Discord.RichEmbed()
        .setTitle("Configuration Channels")
        .setDescription("Voici la liste des configuration possible.")
        .addField("Créer une catégorie", "`config create catergoy <nom de la catégorie>`")
        .addField("Créer     un channel textuel", "`config create textual <nom du channel>`")
        .addField("Créer un channel vocal", "`config create voice <nom du vocal>`")

        .addField("Modifier le topic d'un channel", "`config edit topic <le topic du channel>`")
        .addField("Modifier le nom du channel présent", "`config edit namechannel <nouveau nom du channel>`")
        .setColor('RANDOM')
        .setThumbnail("https://cdn.discordapp.com/attachments/549939588706336779/550639519154700288/549239083549851668.png")

        message.channel.send(config)
    }

if(`${args[0]}` == `create`){
    if(`${args[1]}` == `category`) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
            return message.channel.send(`:x: **${message.author.username}**, tu n'as pas les bonnes permissions.`)
        }
        let met = args.join(" ").slice(16)
        if(!met) return message.channel.send(":x: Veuillez entrer un nom de catégorie.");
        message.guild.createChannel(met, 'category');
        message.channel.send(`:white_check_mark: La catégorie "**${met}**" à bien été créer.`)
    
    }

    if(`${args[1]}` == `textual`) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
            return message.channel.send(`:x: **${message.author.username}**, tu n'as pas les bonnes permissions.`)
        }
        let met = args.join(" ").slice(15)
        if(!met) return message.channel.send(":x: veuillez entrer un nom de channel textuel.");
        message.guild.createChannel(met);
        message.channel.send(`:white_check_mark: Le channel textuel "**${met}**" a bien été créer.`)

    }

    if(`${args[1]}` == `voice`) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
            return message.channel.send(`:x: **${message.author.username}**, tu n'as pas les bonnes permissions.`)
        }
        let met = args.join(" ").slice(13)
        if(!met) return message.channel.send(":x: Veuillez entrer un nom de channel vocal.");
        message.guild.createChannel(met, 'voice');
        message.channel.send(`:white_check_mark: Le channel vocal "**${met}**" a bien été créer.`)
    }

}

if(`${args[0]}` == `edit`){

    if(`${args[1]}` == `topic`) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        return message.channel.send(`:x: **${message.author.username}**, tu n'as pas les bonnes permissions.`)
    }
    let met = args.join(" ").slice(11)
    message.channel.setTopic(met || "Pas de topic.")
    message.channel.send(`:white_check_mark: Le topic du channel à été bien changé par "**${met || "Pas de topic."}**"!`)
        }

    if(`${args[1]}` == `namechannel`) {
        if(!message.member.hasPermission('MANAGE_CHANNELS')){
            return message.channel.send(`:x: **${message.author.username}**, tu n'as pas les bonnes permissions.`)
         }
         let met = args.join(" ").slice(17)
            message.channel.setName(met || "None");
            message.channel.send(`:white_check_mark: Le nom du channel à été bien changé par **${met || "none"}**!`)
    }
    }
}

module.exports.help = {
    name: "config"
  }