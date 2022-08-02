const express = require("express"), // importing 'express' package to render a web panel
      app = express();

const DiscordJS = require("discord.js"), // importing 'discord.js' package
      { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require("discord.js"), // importing classes from 'discord.js'
      { ContextMenuCommandBuilder } = require('@discordjs/builders'),
      translate = require("@vitalets/google-translate-api"), // importing translation package
      wait = require("node:timers/promises").setTimeout, // importing 'node timeout'
      languageName = require("./functions/languageName"), // importing 'languageName' function
      commandsList = require('./functions/commands'), // importing commands list
      token = process.env.TOKEN; // importing bot token from secret keys

const client = new DiscordJS.Client({
   intents: 84992,
}); // declaring bot intents

const discordModals = require("discord-modals");
discordModals(client);
const { Modal, showModal, TextInputComponent, SelectMenuComponent } = require("discord-modals"); // Import all

// when client is ready...
client.on("ready", () => {
  const guilds = client.guilds.cache.map((guild) => guild.id);
  console.log("[TRANSLATOR BOT ESTÁ ONLINE!]");

  const activity = client.user.setActivity(`${guilds.length} guilds`, {
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

  commands?.create({
    name: "help",
    description: "View infos about Translator.",
  });

  commands?.create({
    name: "translate",
    description: "Translate a text from a language to other.",
    options: [
      {
        name: "from",
        description: "From this language.",
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
      },
      {
        name: "to",
        description: "To this language.",
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
      },
      {
        name: "text",
        description: "Text you want to translate.",
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
      },
    ],
  });

  commands?.create({
    name: "t",
    description: "Auto translate text to a language.",
    options: [
      {
        name: "to",
        description: "To this language.",
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
      },
      {
        name: "text",
        description: "Text you want to translate.",
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.STRING,
      },
    ],
  });
  
  commands?.create({
    name: 'Translate message',
    type: DiscordJS.Constants.ApplicationCommandTypes.MESSAGE
  });

});

// when an user request an interaction (button click, slash command, modal submit, etc.)
client.on("interactionCreate", async (interaction) => {

  const { commandName, options, customId } = interaction;
  
  if (interaction.customId === "select") {

      if (interaction.values == "commands") {

        const commandsEmbed = new MessageEmbed()
        .setColor("#03C48A")
        .setTitle("Commands")
        .setThumbnail(`${client.user.avatarURL()}?size=512`)
        .setDescription("Translator's commands guide.\nAll ISO codes are available on bot website.")
        .addField("/translate", "You can translate from a language to another with this command.\n**Example:**\n`/translate en pt Hey there!`\n\nIt will return `Olá!`.", true)
        .addField("/t", "This command is a quick version of **/translate**, you don't need to identify what is the language you're providing. The bot will try to identify it.\n**Example:**\n`/t en Bom dia!`\n\nIt will detect **Portuguese** and return `Good morning!`.", true)
        .setFooter({ text: "Translator", iconURL: `${client.user.avatarURL()}?size=128` })
        .setTimestamp()

        const row = new MessageActionRow()
	.addComponents(
		new MessageButton()
		.setLabel('ISO codes')
          	.setURL('https://translatorbot.gitbook.io/languages/')
		.setStyle('LINK'),
		);
     
        await interaction.update({ components: [row], embeds: [commandsEmbed] });
      } else if (interaction.values == "code") {
        const repoEmbed = new MessageEmbed()
        .setColor("#03C48A")
        .setAuthor({
          name: "Translator",
          iconURL: `${client.user.avatarURL()}?size=128`,
        })
        .setDescription("Click on button below to visit my **GitHub** repository and give me a star. ⭐")

        const row = new MessageActionRow()
	.addComponents(
		new MessageButton()
		.setLabel('GitHub repository')
          	.setURL('https://github.com/luisgbr1el/TranslatorBOT/')
		.setStyle('LINK'),
		);
        
        await interaction.update({ components: [row], embeds: [repoEmbed] });
      }

  }

  if (interaction.isMessageContextMenu()) {
    const user = options._hoistedOptions[0].message.author.username;
    const messageContent = options._hoistedOptions[0].message.content;
    const avatarURL = `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png?size=128`;
    const toLanguage = "en";

    translate(messageContent, { to: toLanguage })
      .then((res) => {
        const embed = new MessageEmbed()
          .setAuthor({
            name: `${interaction.user.username} is translating ${user}'s message...`,
            iconURL: avatarURL,
          })
          .addField("Detected language:", languageName(res.from.language.iso))
          .addField(
            `Translating to ${languageName(toLanguage)}...`,
            "`" + res.text + "`"
          )
          .setColor("#03C48A")
          .setTimestamp()
          .setFooter({ text: "Translator" });

        interaction.reply({ embeds: [embed], ephemeral: false });
      })
      .catch((err) => {
        interaction.reply({ content: "`" + err + "`", ephemeral: true });
      });
    
  }

  // below this, if interaction is not a command, it returns none
  if (!interaction.isCommand()) return;

  if (commandName === "help") {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("select")
        .setPlaceholder("Select an option")
        .addOptions([
          {
            label: "My commands",
            description: "View infos about my commands.",
            value: "commands",
            emoji: "🤖",
          },
          {
            label: "My code",
            description: "View my source code on GitHub.",
            value: "code",
            emoji: "👁‍🗨",
          }
        ])
    );

    const embed = new MessageEmbed()
      .setColor("#03C48A")
      .setAuthor({
        name: "Translator",
        iconURL: `${client.user.avatarURL()}?size=128`,
      })
      .setDescription("Hey there! I can translate everything you type.\nView more in my **about me** section. \n\nDeveloped by [luisgbr1el](https://github.com/luisgbr1el)")
      .setFooter({ text: "Translator" })
      .setTimestamp()

    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
  } else if (commandName === "feedback") {
    //showModal(modal, {
      //client: client, // Client to show the Modal through the Discord API.
      //interaction: interaction, // Show the modal with interaction data.
    //});
    //interaction.reply({ content: "oi!!", ephemeral: false });
  } else if (commandName === "t") {
    const toLanguage = options.getString("to");
    const text = options.getString("text");

    const avatarURL = `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png?size=128`;
    translate(text, { to: toLanguage })
      .then((res) => {
        const embed = new MessageEmbed()
          .setAuthor({
            name: `${interaction.user.username}`,
            iconURL: avatarURL,
          })
          .addField("Detected language:", languageName(res.from.language.iso))
          .addField(
            `Translating to ${languageName(toLanguage)}...`,
            "`" + res.text + "`"
          )
          .setColor("#03C48A")
          .setTimestamp()
          .setFooter({ text: "Translator" });

        interaction.reply({ embeds: [embed], ephemeral: false });
      })
      .catch((err) => {
        interaction.reply({ content: "`" + err + "`", ephemeral: true });
      });
  } else if (commandName === "translate") {
    const fromLanguage = options.getString("from");
    const toLanguage = options.getString("to");
    const text = options.getString("text");
    const avatarURL = `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png?size=128`;

    const loadingEmbed = new MessageEmbed()
      .setDescription("**<a:loading_blue:812410783651856424> Translating...**")
      .setColor("#03C48A");

    interaction.reply({ embeds: [loadingEmbed], ephemeral: false });
    translate(text, { from: fromLanguage, to: toLanguage })
      .then(async (res) => {

        const translated = new MessageEmbed().setAuthor({
          name: `${interaction.user.username} is translating...`,
          iconURL: avatarURL,
        });

        if (res.from.text.didYouMean == true) {
          translated.addField(
            `From ${languageName(fromLanguage)}:`,
            "`" + res.from.text.value + "`"
          );
        } else {
          translated.addField(
            `From ${languageName(fromLanguage)}:`,
            "`" + text + "`"
          );
        }

        translated.addField(
          `To ${languageName(toLanguage)}:`,
          "`" + res.text + "`"
        );
        translated.setColor("#03C48A");
        translated.setTimestamp();
        translated.setFooter({ text: "Translator" });

        await wait(2000);
        interaction.editReply({ embeds: [translated], ephemeral: false });
      })
      .catch((err) => {
        interaction.reply({ content: "`" + err + "`", ephemeral: true });
      });
  }
});

client.on("messageCreate", (message) => {
    if (message.content == "t.t") {
      message.reply({
        content: 'This command type was **deprecated**. :(\nPlease, update my permissions to use my commands.',
      })
    }
});

client.login(token);
