const Discord = require('discord.js')
var config = require('../../config.json')
module.exports.run = async (bot,message)  =>{
    if (message.author.bot) return;
if (message.channel.type === "dm") return;



let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
 message.channel.send("**Je fume!**").then(async msg => {
        setTimeout(() => {
            msg.edit('🚬');
        }, 500);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁ ');
        }, 2000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁');
        }, 3000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 3100);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 3200);
        setTimeout(() => {
            msg.edit(`**J'ai fini de fumer!**`);
        }, 9000);
    });
}


module.exports.help = {
    name: "smoke"
  }