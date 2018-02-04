const { Command } = require('discord.js-commando')

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nya',
            group: 'group1',
            memberName: 'nya',
            description: 'Replies with a Message.'
        });
    }

    async run(msg) {
        msg.channel.send('Have a Neko!', {
            file: "https://media.giphy.com/media/M5yyzCim2A6li/giphy.gif"
        });
    }
};
