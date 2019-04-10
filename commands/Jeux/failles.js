const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {    await message.delete(300);
  if(!args[1]) {message.channel.send("Veuillez fournir une adresse mail valide.");return}
    let {
        body
    } = await superagent
        .get(`https://haveibeenpwned.com/api/v2/breachedaccount/${args[1]}`)
        .catch(err => {
            message.channel.send(`Aucune failles trouvée pour \`\`${args[1]}\`\``)
        });

    let out = `Des failles on été trouvées pour l'adresse : ${args[1]}`;
    let po = 0;
    const format = body.forEach(i => {
        po++;
        out += `\n${po}.   ${i.Name} a trouvé une faille le :   ${i.BreachDate}`
    })
    message.author.send(out);
};

module.exports.help = {
  name: "failles",
  description: 'Permet de détecter d\'éventuelles failles qui pourraient compromettre votre adresse mail.',
  usage: `.failles <adresse mail>`
}
