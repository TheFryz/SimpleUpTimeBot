# SimpleUpTimeBot
Simple Discord bot to ping http/https then set channel names by ID to Green/Red/Yellow Circle.

1. Basic Setup
 - https://discord.com/developers/applications ; Get token
 - Set token in config.json
 - Open cmd in dir and run "npm i"
 2. Runtime Setup
 - Inside of websites.json you have 3 entrys: name, url, channelID. Self explainable. (I Recommend the Channel to be a locked VC)
 - Inside of components\ping-websites.js change counter to any. (Self set to 10minutes ; 600000ms)
 - You can also change the characters for Online/Offline/Error. If you do change it make sure you change the startwith in /commands/status.js
 3. Run
 - node index.js
