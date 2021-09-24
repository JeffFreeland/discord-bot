const fs = require("fs");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { guildId } = require('./config.json');

const logger = require("./logging.js");

function main() {
	const commands = []
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		commands.push(command.data.toJSON());
	}

	const CLIENT_ID = process.env.CLIENT_ID;
	if(!CLIENT_ID){
		logger.warn(`Did not find a CLIENT_ID in the envionment!`);
	}

	const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

	rest.put(Routes.applicationGuildCommands(CLIENT_ID, guildId), {body: commands} )
		.then(() => logger.info('Successfully registered application commands.'))
		.catch(console.error)
}

main()