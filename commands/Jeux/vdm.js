const Discord = require('discord.js')
const request = require('request')
module.exports.run = async (bot, message, args) => {
    const regex = /<p class=\"block hidden-xs\">\n<a href=\".*\">\n(.*) VDM/
    request('https://www.viedemerde.fr/aleatoire', (error, response, body) => {
        if (error) {
            return console.error(error);
        }
        let vdm = regex.exec(body);
        message.channel.send(vdm[1]);})
};

    exports.conf = {
    aliases: ['viedemerde']
    };

    exports.help = {
    name: 'vdm', description: 'Vous propose un vdm, issu du site du site officiel de VDM.', usage: '.vdm'
    };