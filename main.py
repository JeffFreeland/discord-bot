import logging
import os

import discord
from discord.ext import commands

logger = logging.getLogger(__file__)


class MyClient(commands.Bot):

    def __init__(self, command_prefix) -> None:
        commands.Bot.__init__(self, command_prefix=command_prefix, self_bot=False)
        self.message1 = "[INFO]: Bot now online"
    
    async def on_ready(self):
        print(self.message1)


class Greetings(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self._last_member = None
    
    @commands.command()
    async def hello(self, ctx, *, member: discord.Member = None):
        """Says hello"""
        member = member or ctx.author
        if self._last_member is None or self._last_member.id != member.id:
            await ctx.send('Hello {0.name}~'.format(member))
        else:
            await ctx.send('Hello {0.name}... This feels familiar.'.format(member))
        self._last_member = member


if __name__ == "__main__":
    logging.info("Starting bot!")

    token = os.getenv('TOKEN')
    if not token:
        logging.warning("Did not find a token in the environment for the bot!")

    BOT_COMMAND_PREFIX = "!"

    bot = MyClient(command_prefix=BOT_COMMAND_PREFIX)
    bot.add_cog(Greetings(bot))
    bot.run(token)
