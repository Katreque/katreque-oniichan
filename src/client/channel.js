const Discord = require('discord.js');
const Client = require('../../bot.js');
const client = Client.client;
const Embed = require('../consts/embeds.js');

var channelEvents = function() {
  var chEvent = client.channels.find('name', 'lobby');

  //Caso não encontre o canal na pesquisa acima.
  if (!chEvent) {
    return;
  }

  chEvent.send(Embed.amefuriBio)
  .catch((err) =>{
    console.log(err)
  })
}

module.exports = {
  channelEvents: channelEvents
}
