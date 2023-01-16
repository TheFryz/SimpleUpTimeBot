const https = require('https');
const http = require('http');
const fs = require('fs');
const Discord = require('discord.js');
const path = require('path');
let websiteList;

// load the list of websites to ping from a JSON file
exports.init = (client) => {
    websiteList = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'websites.json'), 'utf-8'));
    setInterval(() => {
        websiteList.forEach((website) => {
            const protocol = website.url.startsWith('https') ? https : http;
            protocol.get(website.url, (res) => {
                if (res.statusCode === 200) {
                    client.channels.cache.get(website.channelId).setName(`🟢 ${website.name}`)
                        .catch(console.error);
                } else {
                    client.channels.cache.get(website.channelId).setName(`🔴 ${website.name}`)
                        .catch(console.error);
                }
            }).on("error", (err) => {
                client.channels.cache.get(website.channelId).setName(`🟡 ${website.name}`)
                    .catch(console.error);
            });
        });
    }, 600000);
}