// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

function main() {
    // Create a new client instance
    const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

    // When the client is ready, run this code (only once)
    client.once('ready', () => {
        console.log('Ready!');
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

    // Login to Discord with your client's token
    client.login(process.env.TOKEN);
}

main();
