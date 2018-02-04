const { Command } = require('discord.js-commando')

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nico',
            group: 'group1',
            memberName: 'nico',
            description: 'Sends a Nico Nico Nii!'
        });
    }

    async run(msg) {
       msg.channel.send('Nico Nico <3 ', {
            file: "https://i.imgur.com/lqSm7gk.gif"
        });
    } 
};
