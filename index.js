const express = require("express"), // importing 'express' package to render a web panel
      app = express();

const DiscordJS = require("discord.js"), // importing 'discord.js' package
      { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require("discord.js"), // importing classes from 'discord.js'
      { ContextMenuCommandBuilder } = require('@discordjs/builders'),
      translate = require("@vitalets/google-translate-api"), // importing translation package
      wait = require("node:timers/promises").setTimeout, // importing 'node timeout'
      languageName = require("./functions/languageName"), // importing 'languageName' function
      commandsList = require('./languages/commands'), // importing commands list
      strings = require('./languages/strings'), // importing strings
      token = process.env.TOKEN, // importing bot token from secret keys
      convert = require('./functions/convert');

const client = new DiscordJS.Client({
  intents: 84992,
}); // declaring bot intents

const discordModals = require("discord-modals");
discordModals(client),
      { Modal, showModal, TextInputComponent, SelectMenuComponent } = require("discord-modals"); // Import all

const { createCanvas } = require('canvas'),
      fs = require('fs');

//console.log(strings);
// when client is ready...
client.on("ready", () => {
  const guilds = client.guilds.cache.map((guild) => guild.id);
  console.log("[TRANSLATOR BOT ESTÁ ONLINE!]");

  const activity = client.user.setActivity(`/help`, {
    type: "LISTENING",
  });
  
  app.get("/", function(req, res) {
    res.render('index.pug', { username: client.user.username, guilds: guilds.length, channels: client.channels.cache.size, botId: client.user.id, actType: activity.activities[0].type, actName: activity.activities[0].name, avatarURL: client.user.avatarURL(), commands: commandsList });
  });

  app.listen(process.env.PORT || 5000, () =>
    console.log(`Example app listening at http://localhost:${process.env.PORT || 5000}\n\n`)
  );
  let commands;
  commands = client.application?.commands;

  //console.log(commands);
	// CREATING COMMAND GLOBALLY
			  commands?.create({
			  name: "help",
			  description: "View infos about Translator.",
			  name_localizations: {
			    "pt-BR": "ajuda",
			  },
			  description_localizations: {
			    "pt-BR": "Veja informações sobre o Translator.",
			  },
			});

			commands?.create({
			  name: "t",
			  description: "Auto translate text to a language.",
			  name_localizations: {
			    "pt-BR": "t",
			  },
			  description_localizations: {
			    "pt-BR": "Traduza automaticamente um texto para um idioma.",
			  },
			  options: [
			    {
			      name: "to",
			      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
			      min_length: 2,
			      max_length: 5,
			      description: "To this language.",
			      required: true,
			      name_localizations: {
				"pt-BR": "para",
			      },
			      description_localizations: {
				"pt-BR": "Para esse idioma.",
			      },
			    },
			    {
			      name: "text",
			      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
			      required: true,
			      description: "Text you want to translate.",
			      name_localizations: {
				"pt-BR": "texto",
			      },
			      description_localizations: {
				"pt-BR": "Texto que deseja traduzir.",
			      },
			    },
			  ],
			});

			commands?.create({
			  name: "translate",
			  description: "Translate a text from a language to another.",
			  name_localizations: {
			    "pt-BR": "traduzir",
			  },
			  description_localizations: {
			    "pt-BR": "Traduza um texto de um idioma para outro.",
			  },
			  options: [
			    {
			      name: "from",
			      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
			      min_length: 2,
			      max_length: 5,
			      description: "From this language.",
			      required: true,
			      name_localizations: {
				"pt-BR": "de",
			      },
			      description_localizations: {
				"pt-BR": "Desse idioma.",
			      },
			    },
			    {
			      name: "to",
			      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
			      min_length: 2,
			      max_length: 5,
			      description: "To this language.",
			      required: true,
			      name_localizations: {
				"pt-BR": "para",
			      },
			      description_localizations: {
				"pt-BR": "Para esse idioma.",
			      },
			    },
			    {
			      name: "text",
			      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
			      required: true,
			      description: "Text you want to translate.",
			      name_localizations: {
				"pt-BR": "texto",
			      },
			      description_localizations: {
				"pt-BR": "Texto que deseja traduzir.",
			      },
			    },
			  ],
			});

			commands?.create({
			  name: "convert",
			  description: "Convert values/texts to various formats.",
			  name_localizations: {
			    "pt-BR": "converter",
			  },
			  description_localizations: {
			    "pt-BR": "Converta valores/textos para vários formatos.",
			  },
			  options: [
			    {
			      name: "type",
			      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
			      description: "Select type:",
			      required: true,
			      name_localizations: {
				"pt-BR": "tipo",
			      },
			      description_localizations: {
				"pt-BR": "Selecione o tipo:",
			      },
			      choices: [
				{
				  name: "Convert to",
				  value: "encode",
				  name_localizations: {
				    "pt-BR": "Converter para",
				  },
				},
				{
				  name: "Deconvert from",
				  value: "decode",
				  name_localizations: {
				    "pt-BR": "Desconverter de",
				  },
				},
			      ],
			    },
			    {
			      name: "format",
			      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
			      description: "Select format:",
			      required: true,
			      name_localizations: {
				"pt-BR": "formato",
			      },
			      description_localizations: {
				"pt-BR": "Selecione o formato:",
			      },
			      choices: [
				{
				  name: "Roman numeral",
				  value: "roman",
				  name_localizations: {
				    "pt-BR": "Numeral romano",
				  },
				},
				{
				  name: "Hexadecimal color",
				  value: "hex",
				  name_localizations: {
				    "pt-BR": "Cor em Hexadecimal",
				  },
				},
				{
				  name: "Morse Code",
				  value: "morse",
				  name_localizations: {
				    "pt-BR": "Código Morse",
				  },
				},
			      ],
			    },
			    {
			      name: "content",
			      type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
			      required: true,
			      description: "Text/value you want to convert/deconvert.",
			      name_localizations: {
				"pt-BR": "conteúdo",
			      },
			      description_localizations: {
				"pt-BR": "Texto/valor que você deseja converter/desconverter.",
			      },
			    },
			  ],
			});
});

// when an user request an interaction (button click, slash command, modal submit, etc.)
client.on("interactionCreate", async (interaction) => {
  //let serverLang;
  //guildLocale = interaction.guild;
  //console.log(guildLocale)
  //if (guildLocale == 'brazil')
  //  serverLang = 'pt';
  //else
  //  serverLang = 'en';
  let lang = 'en';

  const { commandName, options, customId } = interaction;
  
  if (interaction.customId === "select") {

      if (interaction.values == "commands") {

        const commandsEmbed = new MessageEmbed()
        .setColor("#5865f2")
        .setTitle(strings.title.commandsEmbed[lang])
        .setThumbnail(`https://cdn3.emoji.gg/emojis/6243-blurple-slashcommands.png`)
        .setDescription(strings.info.guideDescription[lang])
        .addField("/translate", strings.command.translate[lang], true)
        .addField("/t", strings.command.t[lang], true)
        .addField("/convert", strings.command.convert[lang], true)
        .setFooter({ text: client.user.username, iconURL: `${client.user.avatarURL()}?size=128` })
        .setTimestamp()

        const row = new MessageActionRow()
      	.addComponents(
      		new MessageButton()
      		.setLabel(strings.button.iso[lang])
          .setEmoji('🌐')
          .setURL('https://translatorbot.gitbook.io/languages/')
      		.setStyle('LINK'),
      		)
        .addComponents(
      		new MessageButton()
      		.setLabel(strings.button.website[lang])
          .setEmoji('🖥')
          .setURL('https://translatorbot.gitbook.io/')
      		.setStyle('LINK'),
      		);
     
        await interaction.update({ components: [row], embeds: [commandsEmbed] });
      } else if (interaction.values == "code") {
        const repoEmbed = new MessageEmbed()
        .setColor("#03C48A")
        .setAuthor({
          name: client.user.username,
          iconURL: `${client.user.avatarURL()}?size=128`,
        })
        .setDescription(`${strings.info.github[lang]}\n\n${strings.info.crowdin[lang]}`)

        const row = new MessageActionRow()
      	.addComponents(
      		new MessageButton()
      		.setLabel(strings.button.github[lang])
          .setEmoji('<:blurple_github:1012563909066117160>')
          .setURL('https://github.com/luisgbr1el/TranslatorBOT/')
      		.setStyle('LINK')
      		)
        .addComponents(
          new MessageButton()
          .setLabel(strings.button.crowdin[lang])
          .setEmoji('🌐')
          .setURL('https://crowdin.com/project/bottranslator/')
          .setStyle('LINK')
        );
        
        await interaction.update({ components: [row], embeds: [repoEmbed] });
      }

  }

  if (interaction.isMessageContextMenu()) {
    const user = options._hoistedOptions[0].message.author.username;
    const messageContent = options._hoistedOptions[0].message.content;
    const avatarURL = `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png?size=128`;
    const toLanguage = "en";

    await interaction.deferReply();

    translate(messageContent, { to: toLanguage })
      .then(async (res) => {
        const embed = new MessageEmbed()
          .setAuthor({
            name: `${interaction.user.username} is translating ${user}'s message...`,
            iconURL: avatarURL,
          })
          .addField(strings.action.detectedLanguage[lang], languageName(res.from.language.iso))
          .addField(
            `${strings.action.translatingTo[lang]} ${languageName(toLanguage)}...`,
            "`" + res.text + "`"
          )
          .setColor("#03C48A")
          .setTimestamp()
          .setFooter({ text: client.user.username });

        await interaction.editReply({ embeds: [embed], ephemeral: false });
      })
      .catch(async (err) => {
        await interaction.editReply({ content: "`" + err + "`", ephemeral: true });
      });
    
  }

  // below this, if interaction is not a command, it returns none
  if (!interaction.isCommand()) return;

  if (commandName === "help") {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("select")
        .setPlaceholder(strings.menu.selectOption[lang])
        .addOptions([
          {
            label: strings.menu.help.myCommands.label[lang],
            description: strings.menu.help.myCommands.description[lang],
            value: "commands",
            emoji: "🤖",
          },
          {
            label: strings.menu.help.myInfo.label[lang],
            description: strings.menu.help.myInfo.description[lang],
            value: "code",
            emoji: "👁‍🗨",
          }
        ])
    );

    const embed = new MessageEmbed()
      .setColor("#03C48A")
      .setAuthor({
        name: client.user.username,
        iconURL: `${client.user.avatarURL()}?size=128`,
      })
      .setDescription(strings.info.aboutTranslator[lang])
      .setFooter({ text: client.user.username })
      .setTimestamp()

    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  //} else if (commandName === "feedback") {
    //showModal(modal, {
      //client: client, // Client to show the Modal through the Discord API.
      //interaction: interaction, // Show the modal with interaction data.
    //});
    //interaction.reply({ content: "oi!!", ephemeral: false });
  } else if (commandName === "t") {
    const toLanguage = options.getString("to");
    const text = options.getString("text");

    const avatarURL = `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png?size=128`;

    await interaction.deferReply();
    
    translate(text, { to: toLanguage })
      .then(async (res) => {
        const embed = new MessageEmbed()
          .setAuthor({
            name: `${interaction.user.username}`,
            iconURL: avatarURL,
          })
          .addField(strings.action.detectedLanguage[lang], languageName(res.from.language.iso))
          .addField(
            `${strings.action.translatingTo[lang]} ${languageName(toLanguage)}...`,
            "`" + res.text + "`"
          )
          .setColor("#03C48A")
          .setTimestamp()
          .setFooter({ text: client.user.username });

        await interaction.editReply({ embeds: [embed], ephemeral: false });
      })
      .catch(async (err) => {
        await interaction.editReply({ content: "`" + err + "`", ephemeral: true });
      });
  } else if (commandName === "translate") {
    const fromLanguage = options.getString("from");
    const toLanguage = options.getString("to");
    const text = options.getString("text");
    const avatarURL = `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png?size=128`;

    await interaction.deferReply();
    
    translate(text, { from: fromLanguage, to: toLanguage })
      .then(async (res) => {

        const translated = new MessageEmbed().setAuthor({
          name: `${interaction.user.username} ${strings.action.isTranslating[lang]}`,
          iconURL: avatarURL,
        });

        if (res.from.text.didYouMean == true) {
          translated.addField(
            `${strings.info.from[lang]} ${languageName(fromLanguage)}:`,
            "`" + res.from.text.value + "`"
          );
        } else {
          translated.addField(
            `${strings.info.from[lang]} ${languageName(fromLanguage)}:`,
            "`" + text + "`"
          );
        }

        translated.addField(
          `${strings.info.to[lang]} ${languageName(toLanguage)}:`,
          "`" + res.text + "`"
        );
        translated.setColor("#03C48A");
        translated.setTimestamp();
        translated.setFooter({ text: client.user.username });

        //await wait(2000);
        await interaction.editReply({ embeds: [translated], ephemeral: false });
      })
      .catch(async (err) => {
        await interaction.editReply({ content: "`" + err + "`", ephemeral: true });
      });
  } else if (commandName === 'convert') {
    const type = options.getString('type'),
    format = options.getString('format'),
    content = options.getString('content');

    const converting = convert(type, format, content);
    const cast = Promise.resolve(converting);

    await interaction.deferReply();

    cast.then(async function(res) {
      try {
        if (res.type == 'error') {
          await interaction.editReply({ content: `${res.message}`, ephemeral: true });
        } else {
          if (format == 'hex') {
            const canvas = createCanvas(50,50);
            const context = canvas.getContext('2d');

            context.fillStyle = `${res.hex}`;
            context.fillRect(0, 0, 50, 50);
                  
            const buffer = canvas.toBuffer('image/png');

            const attachment = new MessageAttachment(buffer, `translator-${res.hex}.png`);
	          await interaction.editReply({ content: `**"${res.content}" → ${res.type} =** ${res.result}`, files: [attachment], ephemeral: false });
          } else {
            await interaction.editReply({ content: `**"${res.content}" → ${res.type} =** ${res.result}`, ephemeral: false });
          }
        }
      } catch (e) {
        await interaction.editReply({ content: `**❌ ${e}**`, ephemeral: true });
      }
    });
  }
});

//client.on("messageCreate", (message) => {
//});

client.login(token);
