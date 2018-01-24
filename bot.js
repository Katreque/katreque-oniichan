const express = require('express');
const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});

const auth = require('./auth.json');
const app = express();
const port = process.env.PORT || 7770;

app.listen(port, () => {
    console.log('Porta:', port);
})

setInterval(function(){
  console.log('Ping no Heroku');
  app.get('https://katreque-oniichan.herokuapp.com/');
}, 1000*60*15);

client.on('ready', () => {
  console.log("Estou pronto Capitão!");
});

client.on('message', message => {
  if (message.content === '!kappa') {
    message.reply('Katreque é o Kappa!');
  }
});

client.login(auth.token);
