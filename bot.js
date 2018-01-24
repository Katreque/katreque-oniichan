const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});
var auth = require('./auth.json');

client.on('ready', () => {
  console.log(process.env.PORT);
});

client.on('message', message => {
  if (message.content === '!kappa') {
    message.reply('Katreque é o Kappa!');
  }
});

client.login(auth.token);
