import logging
import os

import discord

logger = logging.getLogger(__file__)

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

if __name__ == "__main__":
    logging.info("Starting bot!")
    token = os.getenv('TOKEN')
    if not token:
        logging.warning("Did not find a token in the environment for the bot!")
    client.run(token)
