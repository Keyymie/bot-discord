const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
let time = 500;
let fruits = [":apple:",":tangerine:",":watermelon:",":grapes:",":cherries:",":peach:"];
let rsult1 = (fruits[Math.floor(Math.random() * fruits.length)])
let rsult2 = (fruits[Math.floor(Math.random() * fruits.length)])
let rsult3 = (fruits[Math.floor(Math.random() * fruits.length)])
message.channel.send(new Discord.RichEmbed()
.setTitle("Slots")
.setDescription(rsult1 + " " + rsult2 + " " + rsult3)
).then(m => {
  setTimeout(() => {
      m.edit(new Discord.RichEmbed()
      .setTitle("Slots")
      .setDescription(fruits[Math.floor(Math.random() * fruits.length)] + " " + fruits[Math.floor(Math.random() * fruits.length)] + " " + fruits[Math.floor(Math.random() * fruits.length)])).then(ms => {
          setTimeout(() => {
              ms.edit(new Discord.RichEmbed()
              .setTitle("Slots")
              .setDescription(fruits[Math.floor(Math.random() * fruits.length)] + " " + fruits[Math.floor(Math.random() * fruits.length)] + " " + fruits[Math.floor(Math.random() * fruits.length)])).then(m => {
                setTimeout(() => {
                    m.edit(new Discord.RichEmbed()
                    .setTitle("Slots")
                    .setDescription(fruits[Math.floor(Math.random() * fruits.length)] + " " + fruits[Math.floor(Math.random() * fruits.length)] + " " + fruits[Math.floor(Math.random() * fruits.length)]))
                }, 1500)})
          }, 1000)
      })
  }, 500)})
.then(ms => {
  setTimeout(() => {
if(rsult1 === rsult2 && rsult2 === rsult3){
  bot.user.lastMessage.edit(new Discord.RichEmbed()
  .setTitle("Slots")
  .setDescription(rsult1 + " " + rsult2 + " " + rsult3)
  .addField("Vous avez gagné !", "Vous remportez 500 Beecoins."))
}else{
  bot.user.lastMessage.edit(new Discord.RichEmbed()
  .setTitle("Slots")
  .setDescription(rsult1 + " " + rsult2 + " " + rsult3)
  .addField("Vous avez perdu...", "Retentez votre chance !"))
}}, 5000)
})


}

module.exports.help = {
  name: "slots",
  description: 'Permet de lancer la machine à sous.',
  usage: `.slots`
}
