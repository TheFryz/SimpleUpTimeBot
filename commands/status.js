// commands/status.js
const https = require("https");
const http = require("http");
const fs = require("fs");
const Discord = require("discord.js");
const path = require("path");
let websiteList;

exports.run = (client, message, args) => {
  websiteList = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "websites.json"), "utf-8")
  );
  websiteList.forEach((website) => {
    let status;
    if (client.channels.cache.get(website.channelId).name.startsWith("🟢")) {
      status = "Online";
    } else if (
      client.channels.cache.get(website.channelId).name.startsWith("🔴")
    ) {
      status = "Offline";
    } else {
      status = "Error";
    }
    const statusEmbed = new Discord.MessageEmbed()
      .setColor(
        status === "Online"
          ? "#00ff00"
          : status === "Offline"
          ? "#ff0000"
          : "#ffff00"
      )
      .setTitle(`${website.name} Status`)
      .setDescription(`Status: ${status}`)
      .setFooter("Made by Fryz");

    message.channel.send(statusEmbed);
  });
};
