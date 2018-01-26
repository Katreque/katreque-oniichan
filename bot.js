const Discord = require('discord.js');
exports.client = new Discord.Client({autoReconnect: true});

const main = require('./src/main/main.js')
const message = require('./src/client/message.js');
const channel = require('./src/client/channel.js');

main.inicializarServer();
main.inicializarBot();
message.messageEvents();
channel.channelEvents();
main.autenticarBot();
