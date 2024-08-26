from discord.ext import commands


class BotCommand(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name='command')
    async def your_command(self, ctx):
        await ctx.send("This is your command response!")

def setup(bot):
    bot.add_cog(BotCommand(bot))
