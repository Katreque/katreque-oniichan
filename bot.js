const Discord = require('discord.js');
exports.client = new Discord.Client({autoReconnect: true});

const main = require('./src/main/main.js')
const message = require('./src/client/message.js');

main.inicializarServer();
main.inicializarBot();
message.messageManager();
main.finalizarBot();
