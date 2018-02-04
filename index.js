const { CommandoClient } = require('discord.js-commando');
const config = require("./config.json");
const path = require('path');
//const sqlite = require('sqlite');
//const path = require('sqlite');

const client = new CommandoClient({
    commandPrefix: '<',
    unknownCommandResponse: false,
    owner: '193021560792154112',
    disableEveryone: true
});

//sqlite.open(path.join(__dirname, "settings.sqlite3")).then((db) => {
// client.setProvider(new SQLiteProvider(db));
//});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['group1', 'Dont Know what to call this'],
        ['group2', 'Random Commands'],
        ['group3', 'Administration Commands' ]
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setActivity('A Kawaii Neko');
});

client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
    newUsers[guild.id].set(member.id, member.user);
  
    if (newUsers[guild.id].size > 10) {
      const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
      guild.channels.get(guild.id).send("Welcome our new users!\n" + userlist);
      newUsers[guild.id].clear();
    }
  });
  
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
  });

client.login(config.token);