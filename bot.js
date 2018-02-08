const Discord = require('discord.js');
exports.client = new Discord.Client({autoReconnect: true});

const Main = require('./src/main/main.js')
const Message = require('./src/client/message.js');
const Channel = require('./src/client/channel.js');
const Guild = require('./src/client/guild.js');

Main.inicializarServer();
Main.inicializarBot();
Message.messageEvents();
Channel.channelEvents();
Guild.guildEvents();
Main.autenticarBot();
