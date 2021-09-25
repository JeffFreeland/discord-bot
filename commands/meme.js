const { SlashCommandBuilder } = require("@discordjs/builders");

const IMAGE_URLS = [
    'https://i.imgur.com/YE6230n.jpg',
    'https://i.imgur.com/Hprww8w.png',
    'https://i.imgur.com/kfmlKd3.png',
    'https://i.imgur.com/nfvEKOb.jpg',
    'https://i.imgur.com/BkMfLRf.jpg',
    'https://i.imgur.com/sSAFFtt.png',
    'https://i.imgur.com/9rjgZY0.jpg',
    'https://i.imgur.com/Lx26LzO.jpg',
    'https://i.imgur.com/IJS6qwk.jpg',
    'https://i.imgur.com/r1f336f.jpg',
    'https://i.imgur.com/FsMkMcQ.jpg',
    'https://i.imgur.com/WGtcEGy.jpg',
    'https://i.imgur.com/vCeBrsi.jpg',
    'https://i.imgur.com/5ZsKXF0.jpg',
    'https://i.imgur.com/2WghjMO.jpg',
    'https://i.imgur.com/Ihr8YjP.jpg',
    'https://i.imgur.com/5aui968.jpg',
    'https://i.imgur.com/B8ZUuTF.jpg',
    'https://i.imgur.com/GEQx6UH.jpg',
    'https://i.imgur.com/oypvCOm.jpg',
    'https://i.imgur.com/mkc0rMA.jpg',
    'https://i.imgur.com/0N2hP3u.jpg',
    'https://i.imgur.com/OD2C4zi.jpg',
    'https://i.imgur.com/AqFrOOu.jpg',
    'https://i.imgur.com/rozt5IV.jpg',
    'https://i.imgur.com/V3pMcwk.jpg',
    'https://i.imgur.com/N4HRQD1.jpg',
    'https://i.imgur.com/Ct7MRVU.jpg',
    'https://i.imgur.com/lvGuwex.jpg'
];

module.exports = {
    data: new SlashCommandBuilder()
            .setName('meme')
            .setDescription('A leftist meme for the working class'),
    async execute(interaction) {
        const image = IMAGE_URLS[Math.floor(Math.random()*IMAGE_URLS.length)]
        await interaction.reply(image);
    } 
}