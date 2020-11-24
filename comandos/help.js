const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

exports.run = (bot,message,args) => {
  	 var nomeServer = message.guild.name;
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const help = new MessageEmbed()
      // Set the title of the field
      .setTitle(`- COMMANDS -`)
      // Set the color of the embed
      .setColor('#03C48A')
      .setThumbnail("https://i.ibb.co/jgg6Fs5/logo-translatorbot.png")
      // Set the main content of the embed
      .setDescription('Guide (this):\n```t.help``` \n Translate from a language to another language:\n (THE MAXIMUM IS 20 WORDS PER SENTENCE!) \n ```t.translate <langFrom-code> <langTo-code> <text>```')
      .addField('Visit my website and invite me to your server!', 'https://translatorbot.gitbook.io/home/')
      .addField('Most used languages:', '**en** - English \n **pt** - Portuguese \n **es** - Spanish \n')
      .addField('What is "lang code"?', 'Is a code to refer a language. So, the code of English is **en**, of Portuguese is **pt**, of Spanish is **es**... \n')
      .addField('Click on this link to view all supported languages and your codes:', 'https://translatorbot.gitbook.io/home/languages')
      .addField('How to use?', 'Example: \n ```t.translate en pt Hey there!``` \n The result will be: \n **From English:**\n Hey There! \n **To Portuguese:**\n Olá!')
      .addField('View my code on GitHub:', 'https://github.com/luisgabriel53/TranslatorBOT')
      .addField('My support server:', 'https://discord.com/invite/stSDv9T')
    // Send the embed to the same channel as the message
      .setFooter('TranslatorBOT v1.2.0 | 2020');

      // message.author.send(help).catch(error => {
      message.channel.send(`<@${message.author.id}>`);
      message.channel.send(help);
      // var ver = "1";
      // console.log(ver)
      // if (ver === "0") {
      //     console.log(ver)
      //     message.reply('I sent a message with a guide in your DM! Check it.');
      //   } 

   // });
    


 
}
exports.help = {
	name: "help"
};