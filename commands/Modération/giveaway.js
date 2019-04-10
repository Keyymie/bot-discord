const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const ms = require("ms");


function shuffle(arr) {
    for (let i = arr.length; i; i--) {
        const j = Math.floor(Math.random() * i);
        [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    }
    return arr;
}

function draw(list) {
    const shuffled = shuffle(list);
    return shuffled[Math.floor(Math.random() * shuffled.length)];
}

module.exports.run = async (bot, message, args, prefix) => { 

    if (!message.member.hasPermission("MANAGE_MESSAGES")){
        message.reply("Vous n'avez pas les permissions suffisantes pour cette commande !"); return}

    var msgcmd = message.content.split(" ")[0].substring(1);
    var params = message.content.substring(msgcmd.length + 2);
    var options = params.split(" ");

    let channel = message.mentions.channels.first()
    let copunt = options[1]
    let time = options[2]
    let question = args.slice(3).join(" ");

    let embed = new Discord.RichEmbed()
    .setTitle(question)
    .setDescription('Ajoutez la réaction 🎉 pour entrer !\nFin du concours dans ' + time + '.')
    .setColor('fffff')
    .setTimestamp();

    channel.send(embed).then(message => {
        message.react('🎉').then( r => { 
          setTimeout(function(){
           if(message.reactions.get('🎉').count <= 2) {
             let embed2 = new Discord.RichEmbed()
    .setTitle(question)
    .setDescription('Erreur, pas assez de participants.')
    .setColor('fffff')
    .setTimestamp();
             message.edit(embed2);
           } else {
             var winners = [];
              const users = message.reactions.get("🎉").users;
           const list = users.array().filter(u => u.id !== message.author.id);
             let winner = list[Math.floor(Math.random() * list.length)];
                for (let i = 0; i < copunt; i++) {
                 const x = draw(list);

               if (!winners.includes(x)) winners.push(x);
           }

              let embed3 = new Discord.RichEmbed()
             .setTitle(question)
             .setDescription(`Gagnant : ${winners.filter(u => u !== undefined && u !== null).map(u => u.toString()).join(", ")}`)
             .setFooter('Terminé à')
             .setColor('fffff')
             .setFooter(`${copunt} gagnants.`)
             .setTimestamp();
             message.edit(embed3)
           }
       }, ms(time));
        })
    })
       }
    
   

       module.exports.help = {
        name: "giveaways",
        description: 'Permet de lancer un giveaways selon un temps précis, en personnalisant la récompense.',
        usage: `.giveaways <salon> <nombre de gagnants> <temps> <prix>`
      }