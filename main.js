const Discord = require('discord.js');
const fs = require('fs');
const { Intents } = require('discord.js'); // Ajout de l'import pour les intents
const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] // Ajoutez d'autres intents si nécessaire
});
const token = fs.readFileSync('token.txt', 'utf8').trim();
// const token = 'MTE0NDAxNTIzMzMxNzMzOTIzNw.GgJ0dX.R0TetNDlrRU_I652uF9UkQjwN_EreRGz9UQxLc'; // Remplacez ceci par votre propre token de bot

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === '!test') {
        message.reply('test');
    }
});

client.login(token);
