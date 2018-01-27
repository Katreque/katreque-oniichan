const Client = require('../../bot.js');
const client = Client.client;

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
  });
}

module.exports = {
  messageEvents: messageEvents
}
