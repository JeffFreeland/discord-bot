const fs = require("fs");

module.exports = {
    getCommandsFromDir,
    getCommandsFromDirAsJson
};

function getCommandsFromDir() {
    const commands = [];
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command);
    }
    return commands;
}

function getCommandsFromDirAsJson() {
    const commands = getCommandsFromDir();
    const commandsAsJSON = commands.map(command => command.data.toJSON());
    return commandsAsJSON;
}

