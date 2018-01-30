const Discord = require('discord.js');
const Client = require('../../bot.js');
const client = Client.client;

const amefuriBio = {
  embed: {
    title: "Bem vindo ao Discord do Amefuri!",
    description: "Não deixe de nos seguir nas outras redes sociais!",
    color: 16711680,
    fields: [
      {
        name: "Amefuri Blog",
        value: "Acesse: [Amefuriblog.com.br](https://amefuriblog.com.br)"
      },
      {
        name: "Amefuri TV",
        value: "Acesse: [youtube.com/AmefuriTV](https://amefuriblog.com.br)"
      },
      {
        name: "Facebook",
        value: "Acesse: [facebook.com/amefuriBlog](https://amefuriblog.com.br)"
      },
      {
        name: "Instagram",
        value: "Acesse: [@AmefuriBlog](https://amefuriblog.com.br)"
      },
      {
        name: "Twitter",
        value: "Acesse: [@AmefuriBlog](https://amefuriblog.com.br)"
      }
    ],
    footer: {
      text: "Katreque Onii-chan, o melhor bot do Amefuri!"
    }
  }
}

var channelEvents = function() {
  var chEvent = client.channels.find('name', 'lobby');

  //Caso não encontre o canal na pesquisa acima.
  if (!chEvent) {
    return;
  }

  chEvent.send(amefuriBio)
  .catch((err) =>{
    console.log(err)
  })
}

module.exports = {
  channelEvents: channelEvents
}
