const Client = require('../../bot.js');
const client = Client.client;

const LobbyConsts = require('../consts/messageConsts.js');
const Channel = require('./channel.js');

var messageEvents = function() {
    client.on('message', message => {
    if (message.content[0] === '!') {
      switch(message.content) {
        case "!kappa":
          message.reply('Katreque-sama é Kappa-dono!');
          break;

        case "!oniichan":
          message.reply('Katreque é o melhor Onii-chan que se pode ter!');
          break;
      }
    }

    // Verifica se já tiveram mensagens suficientes no canal para poder reenviar a mensagem de boas vindas.
    if (LobbyConsts.numeroMensagensLobby >= 30) {
      Channel.channelEvents();
      LobbyConsts.numeroMensagensLobby = 0;
    }

    LobbyConsts.numeroMensagensLobby++;
  });
}

module.exports = {
  messageEvents: messageEvents
}
