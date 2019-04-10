const Discord = require('discord.js')
module.exports.run = async (bot,message,args)  =>{
        if(message.member.hasPermission("MANAGE_CHANNELS")) {
          if(!message.guild.channels.find('name','sondages')) {message.channel.send("Le channel sondages n'existe pas. Veuillez le créer puis réassayer."); return}
			
			let args = message.content.split(" ").slice(1);
			let thingToEcho = args.join(" ")
			var cacaembed = new Discord.RichEmbed()
			    .setDescription("Sondage")
				.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
				.setColor('#ffffff')
				.setTimestamp()
        message.guild.channels.find('name','sondages').send(cacaembed)
        .then(function (message){
				message.react("✅")
				message.react("❌")
			}).catch(function(){
				
			});
			message.delete()
		}else{
			return message.reply("Désolé, vous n'avez pas la permission d'utiliser cette commande.")
        }
}
    

module.exports.help = {
name : 'sondage'
}