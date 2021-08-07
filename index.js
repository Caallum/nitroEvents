const EventEmitter = require('events');
const { readdirSync } = require('fs');

module.exports = class NitroEvents extends EventEmitter {
  #client;
  
  constructor(client) {
    super();
    this.#client = client;
    
    if(!client.user) throw new Error(`Discord.Client is invalid.`);
  }
  
  async _EventHandler() {
    const EventFiles = await readdirSync('./handlers').filter(file => file.endsWith('.js'));
    for(const file of EventFiles) {
      const event = require(`./handlers/${file}`);
      this.#client.on(event.name, event.run.bind(null, this, client));
    }
  }
}
