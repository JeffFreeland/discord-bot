const fs = require("fs");
const { Client, Collection, Intents } = require('discord.js');
const logger = require("./logging.js");
const { getCommandsFromDir } = require("./command-utils.js");

function main() {
    // Create a new client instance
    const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

    client.commands = new Collection();
    const commandsFromFiles = getCommandsFromDir();
    for (const command of commandsFromFiles) {
        client.commands.set(command.data.name, command);
    }

    client.once('ready', () => {
        logger.info('Bot is ready!');
    });

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if(!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            logger.error(error)
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
        
    });

    const TOKEN = process.env.TOKEN;
    if(!TOKEN){
        logger.warn("No token found in environment!");
    }
    client.login(TOKEN);
}

main();



/*
        if (commandName === 'ping') {
            await interaction.reply('Pong!');
        } else if (commandName === 'server') {
            await interaction.reply(`Server Name: ${interaction.guild.name}\nTotal Server Members: ${interaction.guild.memberCount}`);
        } else if (commandName === 'user') {
            await interaction.reply('User info.');
        }
*/