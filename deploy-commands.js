const fs = require("fs");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const logger = require("./logging.js");
const { getCommandsFromDirAsJson } = require("./command-utils.js");

function main() {
	const commands = getCommandsFromDirAsJson();

	const CLIENT_ID = process.env.CLIENT_ID;
	if(!CLIENT_ID){
		logger.warn(`Did not find a CLIENT_ID in the envionment!`);
	}

	const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

	rest.put(Routes.applicationCommands(CLIENT_ID), {body: commands} )
		.then(() => logger.info('Successfully registered application commands.'))
		.catch(console.error)
}

main()