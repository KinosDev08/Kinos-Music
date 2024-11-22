const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Check the bot\'s ping',
    execute(message, args) {
        const ping = message.client.ws.ping;
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Bot Latency')
            .setDescription(`📊 The bot's ping is ${ping}ms.`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

/*

╔════════════════════════════════════════════════════════════════════════╗
║                                                                                     ║
║  ## Created by KinosDev!                                                            ║
║  ## Facebook :  https://www.facebook.com/KinosMMO                                   ║
║  © Copyright 2024 · Coder by Kieu Anh Khoi                                          ║
║                                                                                     ║
╚════════════════════════════════════════════════════════════════════════╝
*/
