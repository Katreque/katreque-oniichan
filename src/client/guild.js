const Client = require('../../bot.js');
const client = Client.client;
const Embed = require('../consts/embeds.js');

var guildEvents = function() {
    client.on('guildMemberAdd', member => {
      var channel = client.channels.find('name', 'lobby');
      var amefuri = client.guilds.find('name', 'Amefuri Blog');
      var amefuriano = amefuri.roles.find('name', 'Amefuriano');

      member.addRole(amefuriano)
        .catch((err) => {
          console.log(err);
        })

      channel.send(Embed.welcomeMessageCreator(member.displayName));
    })
}

module.exports = {
  guildEvents: guildEvents
}
