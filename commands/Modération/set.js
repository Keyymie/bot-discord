module.exports.run = async (bot, message, args) => { // Run the command when a command is called

    const db = require('quick.db')
	const Discord = require(`discord.js`)
    if (!args[0]){
        return message.channel.send("Pour plus d'infos sur la commande faîtes `b!cfg help`")
    }
        // Admin Perms
         let ownerEmbed = new Discord.RichEmbed()
         .setDescription(`**Cette commande est pour les administrateur**`)
         .setFooter(`Vous n'avez pas les permissions pour utiliser cette commande`)
         .setColor(`BLACK`)
         if (!message.member.hasPermission("ADMINISTRATOR")) {
             return message.channel.send(ownerEmbed)

             
         }

         if(args[0] == 'help'){
             let ok = new Discord.RichEmbed()
             .setTitle('Bienvene/Aurevoir')
             .setDescription('Usage Global: `b!wl set`')
             .addField('Channel', 'b!cfg set channel #channel', true)
             .addField('Bienvenue', 'b!cfg set jmessages <Msg Aurevoir>', true)
             .addField('MP message bvn', 'b!cfg set dmessages <Msg en Privé>', true)
             .addField('Aurevoir', 'b!cfg set lmessages <Msg Bienvenue>', true)
             .addField('Tag disponible', `{user} - Mentionne l'utilisateur.
             {guild} - Indique le nom du serveur.
             {members} - Affiche le nombre de membres du serveur. Exemple: {user} a rejoint ! Nous sommes maintenant {members} dans le serveur.`, true)
             .setColor('BLACK')
             message.channel.send(ok)
         }
        // Args Set
         if(`${args[0]}` == `set`){
            // Setting Channel
             if(`${args[1]}` == `channel`) {
                try {
                    // Embed
                     let mentionEmbed = new Discord.RichEmbed()
                     .setDescription('**Mentionne un channel**\n **>** *b!cfg set channel #channel*')
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(ownerEmbed, 120000) // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args[2]) return message.channel.send(`Tu dois insérer un message! Référence: \`b!cfg help\``)
                     if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let newChannel = ''
                     const errorReport = bot.channels.get(`453597878888300544`)
                     if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = '' // If they wrote the word none, it sets newMessage as empty.
                     else newMessage = args.slice(2, 1000, args[2]).join(' ') // If they didn't write none, set what they wrote as the message
                     if(`${message.mentions.channels.first()}` == `undefined`) return
                     let channelEmbed = new Discord.RichEmbed()
                     .setDescription(`**Le message de bienvenue a été mis  dans le channel ${message.mentions.channels.first()}**`)
                
                    // Update Channel
                     db.set(`pmessageChannel_${message.guild.id}`, `${message.mentions.channels.first().id}`)
                        message.channel.send(channelEmbed) // Finally, send in chat that they updated the channel.
                     
                }catch(err) {console.log(`Error with setting channel\n${err}`)}
            // Setting Direct Message
             } else if (`${args[1]}` == `dmessages`) {
                try {
                    // Embed
                     let mentionEmbed = new Discord.RichEmbed()
                     .setDescription('**Mentionne un channel**\n **>** *b!cfg set dmessages <Message Personnalisé>*')            
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(ownerEmbed, 120000) // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let newMessage;
                     if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = ''; // If they wrote the word none, it sets newMessage as empty.
                     else newMessage = args.slice(2, 1000, args[2]).join(' '); // If they didn't write none, set what they wrote as the message
                
                     let dmEmbed = new Discord.RichEmbed()
                     .setDescription(`**Le message de bienvenue en message privé a été activé**\n > *${args.join(" ").trim()}*`)
                
                    // This will update the .text of the joinMessageDM_guildID object.
                     db.set(`pjoinMessageDM_${message.guild.id}`, newMessage)
                        message.channel.send(dmEmbed) // Finally, send in chat that they updated the channel.
                     
                }catch(err) {console.log(`Error with setting DM\n${err}`)}
            // Setting Joining Message
             } else if (`${args[1]}` == `jmessages`) {
                try {
                    // Embed
                     let mentionEmbed = new Discord.RichEmbed()
                     .setDescription('**Mentionne un channel**\n **>** *b!cfg set jmessages <Message Personnalisé>*')
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(ownerEmbed, 120000) // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let newMessage;
                     if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = ''; // If they wrote the word none, it sets newMessage as empty.
                     else newMessage = args.slice(2, 1000, args[2]).join(' '); // If they didn't write none, set what they wrote as the message
                
                    // This will update the .text of the joinMessageDM_guildID object.
                     let welcomeEmbed = new Discord.RichEmbed()
                     .setDescription(`**Le message de bienvenue à été mis/edité**\n > *${newMessage}*`)
                
                     db.set(`pjoinMessage_${message.guild.id}`, newMessage)
                        message.channel.send(welcomeEmbed) // Finally, send in chat that they updated the channel.
                     
                }catch(err) {console.log(`Error with setting welcome\n${err}`)}
            // Setting Leaving Message
             } else if (`${args[1]}` == `lmessages`) {
                try {
                    // Embed
                     let mentionEmbed = new Discord.RichEmbed()
                     .setDescription('**Mentionne un channel**\n **>** *b!cfg set lmessages <Message personnalisé>*')
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(ownerEmbed, 120000) // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                     if (!args.slice(2, 1000, args[2]).join(' ') === 'NONE') return message.channel.send(mentionEmbed) // This returns if they don't message a channel, but we also want it to continue running if they want to disable the log
                
                    // Fetch the new channel they mentioned
                     let newMessage;
                     if (args.slice(2, 1000, args[2]).join(' ') === 'NONE') newMessage = ''; // If they wrote the word none, it sets newMessage as empty.
                     else newMessage = args.slice(2, 1000, args[2]).join(' '); // If they didn't write none, set what they wrote as the message
                
                     let leaveEmbed = new Discord.RichEmbed()
                     .setDescription(`**Le message de bienvenue a été modifié:**\n > *${args.join(" ").trim()}*`)
                
                    // This will update the .text of the joinMessageDM_guildID object.
                     db.set(`pleaveMessage_${message.guild.id}`, newMessage)
                        message.channel.send(leaveEmbed) // Finally, send in chat that they updated the channel.
                     
                }catch(err) {console.log(`Error with setting leave\n${err}`)}
			// Setting Options
             } else {
                let settingsEmbed = new Discord.RichEmbed()
                .setDescription(`**<>** Settings Menu [SET] **<>**\n\n**channel** - b!cfg set channel #channel\n**dmessages** - b!cfg set dmessages <Message Personnalisé de bienvenue en MP>\n**jmessages** - b!cfg set jmessages <Message Perso de bienvenue dans un channel>\n**lmessages** - b!cfg set lmessages <Message Perso Utilisateur Leave>`)
                message.channel.send(settingsEmbed)
             }
            }
        }
    
		module.exports.help = { // This is the config for a command. Able to add things like proper usage & etc.
      	name: "cfg",
  		}