const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  message.channel.startTyping();  
  var cleverbot = require("cleverbot.io"),
  Bbot = new cleverbot('xGHjMrJx8JKlwq25', 'zC3r0fgcWLw9zt1E0XJwt1FD6G9HdRka');
  let input = process.argv.slice(2).join(' ');
  Bbot.setNick("sessionname")
  Bbot.create(function (err, session) {
  Bbot.ask(message.content.split(' ').slice(1).join(' '), function (err, response) {
    message.channel.send(response);
  })
  message.channel.stopTyping();
  })}
module.exports.help = {
  name: "clever",
  description: 'Permet de discuter avec l\'intelligence artificielle Clever.',
  usage: `.clever <votre message>`
}
