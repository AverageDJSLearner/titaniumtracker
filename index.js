const Discord = require('discord.js');
const client = new Discord.Client;
const { botToken } = require('./config.json');

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(botToken);
