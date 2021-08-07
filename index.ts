const EventEmitter = require('events');

module.exports = class NitroEvents extends EventEmitter {
  constructor(client) {
    super();
    this.client = client;
    
    if(!client.user) throw new Error(`Discord.Client is invalid.`);
  }
  
  private emit
}
