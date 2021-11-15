

module.exports = {
  name: `guildMemberUpdate`,
  run: async (client, index, oldmember, newmember) {
    
    if(!oldmember.premium && newmember.premium) {
      const amount = newmember.guild.premiumSubscriptionCount - oldmember.guild.premiumSubscriptionCount;
      index.emit(`nitroBoostAdd`, (newmember, amount);;
    }

    if(oldmember.premium && !newmember.premium) {
      index.emit(`nitroBoostRemove`, (newmember) 
    }
  }
}
