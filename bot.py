import os

import discord
from discord.ext import commands

# Initialize bot with prefix
bot = commands.Bot(command_prefix='!', intents=discord.Intents.all())

# Load token from environment variable
TOKEN = os.getenv('DISCORD_TOKEN')

def load_commands():
    for filename in os.listdir('./commands'):
        if filename.endswith('.py'):
            bot.load_extension(f'commands.{filename[:-3]}')

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')
    await bot.change_presence(activity=discord.Game(name="Bot is online"))

@bot.event
async def on_interaction(interaction):
    if isinstance(interaction, discord.Interaction):
        command = bot.get_command(interaction.data['name'])
        if command:
            await bot.invoke(interaction)
        else:
            await interaction.response.send_message("Command not found.", ephemeral=True)

# Load commands from the commands directory
load_commands()

# Run the bot
if __name__ == '__main__':
    bot.run(TOKEN)
