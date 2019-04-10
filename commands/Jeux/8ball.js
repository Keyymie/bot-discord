const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let msg = args.slice(1).join(' ')
  if (!msg) return message.reply("Merci de poser une question qui se répond par oui ou par non !")
  let replyd = ["C'est certain.","Oui","Non","Je sais pas","Je m'en bat les couilles","Je suis qu'un bot","Plutôt","Plutôt pas","Tu te moque de moi !","Très probable","Peu probable","Va s'y chui pas ton ami","IMPOSSIBLE","Possible","Dans tes rêves","Très peu probable","Même gollum a plus de chance que toi que ca tombe sur oui","Je-m'en-branle-de-ta-question ! (le premier qui me traite de rageux j'le bouffe)","C'est certain","Il en est décidé ainsi","Sans aucun doute","Oui, définitivement","Vous pouvez vous y fier","Comme je le vois, oui","Très probablement","Perspectives bonnes","Oui","Les signes indiquent que oui","Demandez encore une fois","La réponse est sûrement au plus profond de ta foi","Redemander plus tard","Mieux vaut ne pas te le dire maintenant","Impossible de prédire maintenant","Concentre-toi et redemande","N'y compte pas","Ma réponse est non","Mes sources disent non","Les perspectives ne sont pas si bonnes","Très douteux","C'est décidément le cas.", "Sans aucun doute. ", "Oui, définitivement.", "Vous pouvez compter dessus.", "Comme je le vois, oui.", "Très probablement.", "Bonne perspective.", "Oui.", "Les signes pointent vers oui.", "Réponse brumeuse réessayer.", "Demandez encore plus tard.", "Mieux vaut ne pas te dire maintenant.", "Impossible de prédire maintenant.", "Concentrez-vous et demandez à nouveau.", "Ne comptez pas dessus. ", "Ma réponse est non.","Mes sources disent non.", "Très douteux."];
  let reponse = (replyd[Math.floor(Math.random() * replyd.length)])
  let embed = new Discord.RichEmbed()
  .setTitle(":8ball: 8ball")
  .addField("Votre question", msg)
  .addField("La réponse", reponse)
  .setFooter(message.author.tag, message.author.displayAvatarURL)
  message.channel.send(embed)
}
module.exports.help = {
  name: "8ball",
  description: 'Permet de soumettre une question au bot.',
  usage: `.8ball <votre question>`
}
