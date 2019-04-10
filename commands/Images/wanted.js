const axios = require("axios");

module.exports.run = async (bot, message,args)  =>{
        // let member = message.mentions.members.first() || message.author;

axios.get(`https://arcadia-api.xyz/api/v1/wanted?url=${message.author.displayAvatarURL}&text=${message.author.username}`, {
    headers: {
            Authorization: "fd069f46207b0ab4e94316ff0127ee062a657c3c6b3f58acae2f17852a1e009d"
    },
    responseType: "arraybuffer"
}).then(async(res) => {
    message.channel.send({
        embed: {
          image: {
            url: `attachment://disc.png`
          }
        },
        files: [{ 
          attachment: await res.data, 
          name: 'brr.png' 
        }] 
    });
}).catch((err) => {
    if (err) return message.channel.send(`Je ne peux pas générer l'image car le pseudo de ${message.author.username} contient des caractères spéciaux.`);
});

}

exports.help = {name: "wanted"}