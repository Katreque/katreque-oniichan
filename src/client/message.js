const Client = require('../../bot.js');
const client = Client.client;

var messageEvents = function() {
    client.on('message', message => {
    if (message.content[0] === '!') {
      switch(message.content) {
        case "kappa":
          message.send('Katreque-sama é Kappa-dono!');
          break;

        case "oniichan":
          message.send('Katreque é o melhor Onii-chan que se pode ter!');
          break;
      }
    }
  });
}

module.exports = {
  messageEvents: messageEvents
}
