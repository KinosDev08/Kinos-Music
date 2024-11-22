const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = "https://www.facebook.com/KinosMMO";
      const githubLink = "https://github.com/KinosDev08";
      const instagramLink = "https://www.instagram.com/@punoo.4ever";
      const facebookLink = "https://www.facebook.com/KinosMMO";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Contact For Support',
              iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&', 
              url: 'https://www.facebook.com/KinosMMO'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Instagram - ${instagramLink}\n- Facebook - ${facebookLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1113800537402527903/1236803979996958740/11.png?ex=663956f7&is=66380577&hm=3b3c19a11adcb979517a133f2907f671305d23f1f5092cf7df043e6d5cab07bc&')
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
