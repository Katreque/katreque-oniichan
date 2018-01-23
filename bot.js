const Discord = require('discord.js');
const client = new Discord.Client();
var auth = require('./auth.json');

client.on('ready', () => {
  client.user.setActivity('https://git.io/vNrBp', {type: 'WATCHING'});
});

client.on('message', message => {
  if (message.content === '!kappa') {
    message.reply('Katreque é o Kappa!');
  }
});

client.login(auth.token);
