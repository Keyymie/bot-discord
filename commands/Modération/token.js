var snekfetch = require("snekfetch");
// const api = require('https://some-random-api.ml/bottoken');
const Discord = require('discord.js');


module.exports.run = (bot, message, args) => {

    snekfetch.get(`https://some-random-api.ml/bottoken`).then(r => {
    message.channel.send(r.body.token)

})
    // const tokenembed = new Discord.RichEmbed()
    //     .setTitle(`Token de ${args[0]}`)
    //     .setDescription(`\`${api.token}\``)
    // message.channel.send(tokenembed)
}

module.exports.help = {
    name: "jenesuispasla"
}