# binks.py

Python port of [binks.js](https://github.com/jmhayes3/binks.js).

## Setup

Create Discord Bot:

1. [Go to Discord developer portal](https://discord.com/developers/applications)
   - Under Application » Bot
     - Enable Message Content Intent
2. Invite the bot to a server
   - Go to Application » OAuth2 » URL Generator
   - Enable `bot`
   - Enable Send Messages, Read Messages/View Channels, and Read Message History
   - Under Generated URL, click Copy and paste the URL in your browser

Start LLM backend:

```sh
ollama pull llama3
ollama serve
```

Run:

```sh
python app.py
```
