// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const log4js = require("log4js");

var logger = log4js.getLogger();
logger.level = "info";

function main() {
    // Create a new client instance
    const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

    // When the client is ready, run this code (only once)
    client.once('ready', () => {
        logger.info('Bot is ready!');
    });

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const { commandName } = interaction;

        if (commandName === 'ping') {
            await interaction.reply('Pong!');
        } else if (commandName === 'server') {
            await interaction.reply(`Server Name: ${interaction.guild.name}\nTotal Server Members: ${interaction.guild.memberCount}`);
        } else if (commandName === 'user') {
            await interaction.reply('User info.');
        }
    });

    const TOKEN = process.env.TOKEN;
    if(!TOKEN){
        logger.warn("No token found in environment!");
    }
    client.login(TOKEN);
}

main();
