const Discord = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
  if (!message.channel.nsfw) return message.reply("Cette commande est seulement autorisée dans les salons nsfw.");
  let reply = [
"http://media.obutts.ru/butts_preview/02085.jpg","https://media.tits-guru.com/images?uuid=62fb7fe8-2b00-4351-b942-fd3d51cbc56f","http://media.obutts.ru/butts_preview/04400.jpg","http://media.obutts.ru/butts_preview/04388.jpg","http://media.obutts.ru/butts_preview/04074.jpg","http://media.oboobs.ru/boobs_preview/07305.jpg","http://media.oboobs.ru/boobs_preview/08079.jpg","http://media.oboobs.ru/boobs_preview/11006.jpg","http://media.oboobs.ru/boobs_preview/08576.jpg","http://media.oboobs.ru/boobs_preview/02329.jpg","http://media.oboobs.ru/boobs_preview/04351.jpg","http://media.oboobs.ru/boobs_preview/08816.jpg","http://media.oboobs.ru/boobs_preview/08325.jpg","http://media.obutts.ru/butts_preview/02914.jpg","http://media.obutts.ru/butts_preview/02985.jpg","https://img.rule34.xxx/images/2517/1c7c51ffb5b2ca845f5175801cfc6d1824ee6ac5.png","http://media.obutts.ru/butts_preview/03679.jpg","http://media.oboobs.ru/boobs_preview/08157.jpg","http://media.oboobs.ru/boobs_preview/05563.jpg","http://media.obutts.ru/butts_preview/04301.jpg","http://media.oboobs.ru/boobs_preview/07792.jpg","https://media.giphy.com/media/BT4kHbfcKJdiU/giphy.gif","https://media.giphy.com/media/zuRMAtn1HDg8U/giphy.gif","https://media.giphy.com/media/1h8m1pIizPI1W/giphy.gif","https://tenor.com/view/merry-christmas-boobs-tits-breasts-red-gif-10553379","https://media.giphy.com/media/12SjEUcMRvd9Ru/giphy.gif","https://media.giphy.com/media/qngVhP9OWogKY/giphy.gif","https://images.sex.com/images/pinporn/2017/11/26/460/18708789.gif","https://images.sex.com/images/pinporn/2014/05/22/460/6121679.gif","http://media.oboobs.ru/boobs_preview/07754.jpg","http://media.oboobs.ru/boobs_preview/08479.jpg","http://media.obutts.ru/butts_preview/05032.jpg","http://media.obutts.ru/butts_preview/01732.jpg","http://media.obutts.ru/butts_preview/02792.jpg","http://media.obutts.ru/butts_preview/02256.jpg","http://media.obutts.ru/butts_preview/02016.jpg","http://media.oboobs.ru/boobs_preview/02881.jpg","http://media.oboobs.ru/boobs_preview/04688.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84GO2QLW919_-vswdxEbJUY9lhEpKYT28zizvn2K3NjKtE2Bpng","https://thenypost.files.wordpress.com/2017/03/shutterstock.jpg?quality=90&strip=all&w=618&h=410&crop=1","http://i.dailymail.co.uk/i/pix/2016/09/05/15/37EEE39200000578-3774490-image-a-4_1473086499896.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwziFrP5CE4JjQPdLKQVP9qLLGdln8hWBLRWxly0vq1vJQ1hFLg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84GO2QLW919_-vswdxEbJUY9lhEpKYT28zizvn2K3NjKtE2Bpng","http://www.artistic-nude-images.com/modules/mg3/albums/2013/007-Juillet/238200-big-boobs-sexy-pale-teen-angel-virgin-innocent-with-panties.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VKDwjxwDiMti5E2UGmBCzHCwOmZzIjHqbgP-ej9jOz6iGOrJrQ","https://media.giphy.com/media/Pd67q39KIdy4E/giphy.gif","https://media.giphy.com/media/K9GU4kSrFH7PO/giphy.gif"]
  let reponse = (reply[Math.floor(Math.random() * reply.length)])
  let embed = new Discord.RichEmbed()
  .setTitle("NSFW-Picture | :underage:")
  .setImage(reponse)
  .setFooter(message.author.tag, message.author.displayAvatarURL)
  message.channel.send(embed)
}
//name this whatever the command name is.
module.exports.help = {
  name: "nsfw",
  description: 'Permet d\'afficher une image pornographique quelconque.',
  usage: `.nsfw`
}
