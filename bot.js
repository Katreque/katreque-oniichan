const Discord = require('discord.js');
const client = new Discord.Client();
var auth = require('./auth.json');

client.on('ready', () => {
  console.log('Bot up!');
});

client.on('message', message => {
  if (message.content === '!kappa') {
    message.reply('é o Katreque!');
  }
});

client.login(auth.token);
