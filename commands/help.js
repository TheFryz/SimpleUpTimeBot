// commands/help.js
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Help')
    .setDescription('Commands: t!ping, t!status, t!help')
    .setFooter('Made by Fryz');

    message.channel.send(helpEmbed);
}