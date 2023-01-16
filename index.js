// index.js
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Discord.Client();
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf-8'));

client.on('ready', () => {
  console.log(`Posted: ${client.user.tag}!`);

  fs.readdir(path.join(__dirname, 'components'), (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      try {
        let component = require(`./components/${file}`);
        component.init(client);
      } catch (err) {
        console.error(err);
      }
    });
  });
});
client.on('message', (msg) => {
  if (!msg.content.startsWith(config.prefix)) return;

  const args = msg.content.slice(config.prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, msg, args);
  } catch (err) {
    msg.channel.send(`Unknown command: ${command}`);
  }
});

client.login(config.token);