const { SlashCommandBuilder } = require("@discordjs/builders");
const { Random } = require("random-js");
const logger = require("../logging.js");
const fs = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
            .setName('meme')
            .setDescription('A leftist meme for the working class'),
    async execute(interaction) {
        const images = getImages();

        const random = new Random();
        const image_index = random.integer(0, images.length-1);
        const image = images[image_index];
        await interaction.reply(image);
    } 
}

function getImages() {
    let imageFile = process.env.IMAGES_FILE;
    if(!imageFile){
        const DEFAULT_IMAGES_FILE = 'config/image-urls.txt';
        logger.debug(`IMAGES_FILE not specified, using default: ${DEFAULT_IMAGES_FILE}`);
        imageFile = DEFAULT_IMAGES_FILE;
    }

    let images = [];
    images = fs.readFileSync(imageFile, 'utf-8').split('\r\n');
    return images;
}
