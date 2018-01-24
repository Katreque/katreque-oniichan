const Client = require('../../bot.js');
const client = Client.client;

var messageManager = function() {
    client.on('message', message => {
    if (message.content === '!kappa') {
      message.reply('Katreque é o Kappa!');
    }
  });
}

module.exports = {
  messageManager: messageManager
}
