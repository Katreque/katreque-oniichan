const amefuriBio = {
  embed: {
    title: "Conheça o Amefuri!",
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

var welcomeMessageCreator = function(nome) {
  return {
    embed: {
      title: `Seja bem vindo ao Amefuri, ${nome}!`,
      description: 'Esperamos que goste de nosso servidor. Sinta-se em casa!',
      color: 16711680,
      footer: {
        text: "Katreque Onii-chan, o melhor bot do Amefuri!"
      }
    }
  }
}

module.exports = {
  amefuriBio: amefuriBio,
  welcomeMessageCreator: welcomeMessageCreator
}
