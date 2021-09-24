const fs = require("fs");

module.exports = {
    getCommandsFromDirAsJson,
    getCommandsFromDir
};

function getCommandsFromDirAsJson() {
    const commands = []
	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		commands.push(command.data.toJSON());
	}

    return commands;
}

function getCommandsFromDir() {
    const commands = [];
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command);
    }

    return commands;
}