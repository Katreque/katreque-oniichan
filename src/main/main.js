const express = require('express');
const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});

const auth = require('../auth/auth.json');
const app = express();
const port = process.env.PORT || 7770;

var inicializar = (() => {
  //Inicializa o servidor do Express para subir no Heroku.
  app.listen(port, () => {
      console.log('Porta:', port);
  })

  //Manda um ping a cada 20 minutos para manter o servidor do Heroku rodando.
  setInterval(function(){
    console.log('Ping no Heroku');
    app.get('https://katreque-oniichan.herokuapp.com/');
  }, 1000*60*15);

  //Conecta o bot com o Discord.
  client.on('ready', () => {
    console.log("Estou pronto Capitão!");
  });
})
