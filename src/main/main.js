const Client = require('../../bot.js');
const client = Client.client;

//Inicializa o servidor do Express para subir no Heroku.
var inicializarServer = function(){
  var express = require('express');
  var app = express();
  var port = process.env.PORT || 7770;

  app.listen(port, () => {
    console.log('Porta:', port);
  })

  //Manda um ping a cada 20 minutos para manter o servidor do Heroku rodando.
  setInterval(function(){
    console.log('Ping no Heroku');
    app.get('https://katreque-oniichan.herokuapp.com/');
  }, 1000*60*15);
}

//Conecta o bot com o Discord.
var inicializarBot = function(){
  client.on('ready', () => {
    console.log("Estou pronto Capitão!");
  });
}

//Conecta o bot com o Discord.
var autenticarBot = function(){
  var auth = require('../auth/auth.js');
  client.login(auth.token);
}

module.exports = {
  inicializarServer: inicializarServer,
  inicializarBot: inicializarBot,
  autenticarBot: autenticarBot
}
