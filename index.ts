const EventEmitter = require('events');
const { Client } = require('discord.js');

module.exports = class NitroEvents extends EventEmitter {
  constructor(private client) {
    super();
    this.client = client;
    
    if(!client.user) throw new Error(`Discord.Client is invalid.`);
  }
  
  async emit(eventName: string, options) {
    this.emit(eventName, options);
  }
  
  async on(eventName: string, options) {
    this.on(eventName, options);
  }
}
