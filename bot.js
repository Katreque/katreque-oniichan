const Main = require('./src/main/main.js')

Main.inicializar();

client.on('message', message => {
  if (message.content === '!kappa') {
    message.reply('Katreque é o Kappa!');
  }
});

client.login(auth.token);
