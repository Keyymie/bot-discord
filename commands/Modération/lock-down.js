const chalk = require('chalk')
const ms = require('ms')
module.exports.run = async(bot, message) => {
    message.delete() 
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission **LOCK** !!");
    if (!bot.lockit) bot.lockit = [message.channel];
    let args = message.content.split(" ").slice(1);
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.reply('Vous devez définir une durée pour le verrouillage; en heures, minutes ou secondes');
  
    if (validUnlocks.includes(time)) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      }).then(() => {
        message.channel.send('Verrouillage terminé');  '\u2713' + ' Bot chargé'
        clearTimeout(bot.lockit[message.channel.id]);
        delete bot.lockit[message.channel.id];
      })
      
    } else {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {
        message.channel.send(`Canal verrouillé pour ${ms(ms(time), { long:true })}`).then(() => {
  
          bot.lockit[message.channel] = message.channel.send(() => {
            message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: null
            }).then(message.channel.send('Verrouillage terminé'))
            delete bot.lockit[message.channel.id];    
          }, ms(time));
        })
      });
    }
    console.log(`${message.author.username} sur ${message.guild.name} salon ${message.channel.name} : ${(chalk.green('\u2713'))} A ouvert la fonction [ LOCK ]\n--------------------------------------`);
  
}

module.exports.help = {
    name:"lockdown"
}