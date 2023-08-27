const Discord = require('discord.js');
const { Intents } = require('discord.js'); // Ajout de l'import pour les intents
const client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] // Ajoutez d'autres intents si nécessaire
});
const token = 'MTE0NDAxNTIzMzMxNzMzOTIzNw.GgJ0dX.R0TetNDlrRU_I652uF9UkQjwN_EreRGz9UQxLc'; // Remplacez ceci par votre propre token de bot

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === '!test') {
        message.reply('test');
    }
});

client.login(token);
