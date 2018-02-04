const { Command } = require('discord.js-commando')

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wasted',
            group: 'group1',
            memberName: 'wasted',
            description: 'You commit Suicide...'
        });
    }


    async run(msg, args) {
       msg.channel.send('${user.id} Commited Suicide...', {
            file: "https://img.fireden.net/vg/image/1507/50/1507508777036.gif"
        });
    } 
};
