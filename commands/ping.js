// commands/ping.js
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const pingEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Ping')
    .setDescription(`Ping: ${Math.round(client.ws.ping)}ms`)
    .setFooter('Made by Fryz');

  message.channel.send(pingEmbed);
}