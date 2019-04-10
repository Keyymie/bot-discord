const Discord = require('discord.js')
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let rpg_start = JSON.parse(fs.readFileSync("./RPG_START.json", "utf8"));
if(rpg_start[message.author.id]){
    message.channel.send("Vous avez déjà commencé l'aventure. Si votre sauvegarde ne fonctionne pas correctement, contactez un développeur via le serveur support.")
}

if(!rpg_start[message.author.id]) {
    let pages = ['À l\'origine, les dieux ont maîtrisé l\'hymne, une source de création pure. des terres merveilleuses ont vu le jour.', 'Des bêtes, des créatures et des monstres colossaux sont apparus.', 'Mais avant d\'avoir terminé leur œuvre, les dieux ont disparu, laissant derrière eux un monde inachevé , semé des instruments de leur création.', 'Le pouvoir de l\'hymne ne pouvant plus être contenu, des cataclysmes terribles ont été libérés, transformant et corrompant ceux qui essayaient de le dompter.', 'Pour protéger l\'humanité, nos ancêtres ont créé les javelins, des armures exosquelettes qui leur donnaient des capacités surhumaines.', 'Notre monde reste soumis à une lutte éternelle entre le pouvoir de l\'hymne et les instruments des dieux qui l\'ont créé. Aujourd\'hui, le destin de l\'humanité est entre les mains d\'un petit groupe de pilotes de javelins connus sous le nom des freelancers.\n\nSerez vous prêts à protéger Anthem ?']; 
    let page = 1;

    const embed = new Discord.RichEmbed()
    .setTitle('Beebop - Aventure')
    .setDescription(pages[page-1])
    .setFooter(`Page ${page} de ${pages.length}`) 

    let msg = await message.channel.send(embed)
     
        msg.react('⏪').then( r => { 
        msg.react('⏩') 
       
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
       
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 90000 }); 
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 90000 }); 

            
          
        backwards.on('collect', r => { 
          if (page === 1) return; 
          page--; 
          embed.setDescription(pages[page-1]); 
          embed.setFooter(`Page ${page} sur ${pages.length}`); 
          msg.edit(embed);
        })
       
        forwards.on('collect', r => {
        if (page === pages.length - 1) msg.react('✅')
          if (page === pages.length) return
          page++; ;
          embed.setDescription(pages[page-1]); 
          embed.setFooter(`Page ${page} sur ${pages.length}`); 
          msg.edit(embed);
        })

        const checkfilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id; 
        const check = msg.createReactionCollector(checkfilter, { time: 60000 }); 

        check.on('collect', r => { 
            
            const pagess = {
                1: { title: 'Beebop - Aventure', description: 'Veuillez choisir votre javelin. Une fois ce choix fait, vous ne pourrez plus résilier votre sauvegarde.'}, 
                2: { title: 'Beebop - Aventure', description: 'La polyvalence de cet exosquelette emblématique, piloté par les freelancers et les sentinelles, le rend extrêmement dangereux. Doté d\'une grande puissance d\'attaque, de bonnes capacités défensives et d\'un arsenal adapté à toutes les situations, le Commando est le touche-à-tout indispensable à votre escouade.', thumbnail: {url: 'https://cdn.discordapp.com/attachments/451769620634927107/555430313904570368/Commando.png'}, fields: [{name: 'Concentration',value: 'Polyvalence', inline: true}, {name: 'Style d\'attaque',value: 'Cible unique', inline: true}, {name: 'Défense',value: 'Ruée', inline: true},{name: 'Style de jeu',value: 'Soldat', inline: true},{name: 'Capacité de corps à corps',value: 'Masse de choc', inline: true},{name: 'Capacité ultime',value: 'Batterie de missiles à cibles multiples', inline: true}]},
                3: { title: 'Beebop - Aventure', description: 'La subtilité n\'est pas exactement votre fort ? Vous préférez une artillerie capable de décimer une petite armée ? Déchaînez la puissance destructrice brute de cette impressionnante machine de guerre.Même si tous les javelins peuvent s\'équiper de deux armes, le Colosse est le seul à être assez robuste pour manier toutes les armes lourdes.', thumbnail: {url: 'https://cdn.discordapp.com/attachments/451769620634927107/555430313057189889/Colosse.png'}, fields: [{name: 'Concentration',value: 'Résilience', inline: true}, {name: 'Style d\'attaque',value: 'Cibles multiples', inline: true}, {name: 'Défense',value: 'Bouclier', inline: true},{name: 'Style de jeu',value: 'Tank lourd', inline: true},{name: 'Équipement d\'assaut lourd',value: 'Lance-flamme', inline: true},{name: 'Lanceur d\'artillerie',value: 'Mortier hyper explosif', inline: true}]}, 
                4: { title: 'Beebop - Aventure', description: 'L\'Intercepteur est idéal pour approcher les ennemis et leur infliger de lourds dégâts, puis s\'éclipser avant toute contre-attaque.Manœuvrez à la vitesse de l\'éclair pour lancer de puissantes offensives. Avec l\'Intercepteur, l\'impossible devient facile.', thumbnail: {url: 'https://cdn.discordapp.com/attachments/451769620634927107/555430268027273226/Intercepteur.png'}, fields: [{name: 'Concentration',value: 'Agilité', inline: true}, {name: 'Style d\'attaque',value: 'Cible unique', inline: true}, {name: 'Défense',value: 'Triple ruée', inline: true},{name: 'Style de jeu',value: 'Rapide et précis', inline: true},{name: 'Système de soutien',value: 'Balise cible', inline: true},{name: 'Système d\'assaut',value: 'Bombe de venin', inline: true}]},
                5: { title: 'Beebop - Aventure', description: 'Le Tempête canalise l\'énergie pure de l\'Hymne grâce à ses sceaux pour léviter au-dessus du champ de bataille et infliger des dégâts.Avec ses puissants sceaux et son armure minimaliste, le Tempête est un javelin tumultueux capable de mettre à l\'épreuve les lanciers les plus expérimentés', thumbnail: {url: 'https://cdn.discordapp.com/attachments/451769620634927107/555430318518042634/Tempete.png'}, fields: [{name: 'Concentration',value: 'Puissance de feu', inline: true}, {name: 'Style d\'attaque',value: 'Zone d\'effet', inline: true}, {name: 'Défense',value: 'Clignement/téléporteur', inline: true},{name: 'Style de jeu',value: 'Canon de verre', inline: true},{name: 'Sceau de concentration',value: 'Éclats de givre', inline: true},{name: 'Capacité ultime',value: 'Tempête élémentaire', inline: true}]}

            }
            let pagee = 1;

        msg.clearReactions()
        msg.edit({ embed: pagess[pagee] }).then(r => {
        msg.react('⬅').then( r => { 
        msg.react('➡')

        const backwardssFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
        const forwardssFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id; 
       
        const backwardss = msg.createReactionCollector(backwardssFilter, { time: 90000 }); 
        const forwardss = msg.createReactionCollector(forwardssFilter, { time: 90000 }); 
        
        backwardss.on('collect', r => { 
            if (pagee === 1) return; 
            pagee--; 
            msg.edit({ embed: pagess[pagee] });
          })
         
        forwardss.on('collect', r => {
            if (pagee === pagess.lenght) return
            if(pagee === 1) msg.react('🆗')
            pagee++; ;
            msg.edit({ embed: pagess[pagee] });
          })
        })
    })

    const OkFilter = (reaction, user) => reaction.emoji.name === '🆗' && user.id === message.author.id; 
    const Okk = msg.createReactionCollector(OkFilter, { time: 90000 }); 

    Okk.on('collect', r => {
        if(pagee === 1) return msg.edit({ embed: {title: 'Beebop - Aventure', description: 'Erreur, veuillez recommencer le processus d\'enregistrement.'}})
        let javelin;
        if(pagee === 2) {javelin = 'commando'}
        if(pagee === 3) {javelin = 'colosse'}
        if(pagee === 4) {javelin = 'intercepteur'}
        if(pagee === 5) {javelin = 'tempête'}

        rpg_start[message.author.id] = {"javelin" : javelin}
        fs.writeFile("./RPG_START.json", JSON.stringify(rpg_start), (err) => { if (err) console.error(err);});

        let embedfinal = new Discord.RichEmbed()
            .setTitle('Beebop - aventure')
            .setDescription("Félicitation, votre sauvegarde a été créée avec succès selon les paramètres ci-dessous. Si ceux-ci sont erronés, veuillez contacter un développeur via le serveur support. Tapez .rpg help pour continuer l'aventure.")
            .addField('Javelin', javelin)
            msg.clearReactions()
            msg.edit(embedfinal).then(r => {
                msg.react('🗑')
                const TrashFilter = (reaction, user) => reaction.emoji.name === '🗑' && user.id === message.author.id; 
                const trash = msg.createReactionCollector(TrashFilter, { time: 90000 }); 

        trash.on('collect', r => {
            msg.delete()
        })
        })
    })  

  })
 }
)}
}


module.exports.help = {
  name: "start",
  description: 'Permet de commencer l\' aventure RPG intégrée de Beebop.',
  usage: `b!start`
}
