const express = require("express"); // importing 'express' package to render a web panel
const app = express();
const port = 3000;

const DiscordJS = require("discord.js"); // importing 'discord.js' package
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require("discord.js"); // importing classes from 'discord.js'
const { ContextMenuCommandBuilder } = require('@discordjs/builders');
const translate = require("@vitalets/google-translate-api"); // importing translation package
const wait = require("node:timers/promises").setTimeout; // importing 'node timeout'
const languageName = require("./functions/languageName"); // importing 'languageName' function
const token = process.env["token"]; // importing bot token from secret keys

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

  app.get("/", (req, res) =>
    res.send(`
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Panel ${client.user.username} Bot</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: #303136;
    color: #fdfdfe;
    text-align: center;
  }

  hr {
    width: 30%;
  }

  img {
    border-radius: 50%;
    border: 2px solid rgb(220,220,220);
  }

  a {
    color: rgb(220,220,220);
  }
@media screen and (max-width: 600px) {
    body {
        margin: 10px;
    }
    
    hr {
      width: 95%;
    }

    div#code {
        width: 80%;
    }
}
</style>
<body>
  <h1>Panel ${client.user.username} Bot</h1>
  <p><b>${guilds.length}</b> guilds and <b>${
      client.channels.cache.size
    }</b> channels.</p>
  <p>Bot ID: ${client.user.id}</p>
  <hr>
  <h3>.setActivity()</h3>
  <code>HIDDEN JSON<!-- ${JSON.stringify(activity)} --></code><br><br>
  Result: <code>${activity.activities[0].type} ${
      activity.activities[0].name
    }</code><br><br>
  <hr>
  <h3>.avatarURL()</h3>
  <img width="100px" src="${client.user.avatarURL()}?size=512"><br>
  <a href="${client.user.avatarURL()}?size=512" target="_blank">Click here to view</a><br><br>
  <hr>
</body>
`)
  );

  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}\n\n`)
  );

  // guild
  //BOTS BETA ID
  const guildId = "777005017474793472";

  const guild = client.guilds.cache.get(guildId);

  //let commands;

  //if (guild) {
  commands = guild.commands;
  //} else {
  //commands = client.application?.commands;
  //}

  commands?.create({
    name: "help",
    description: "View infos about Translator.",
  });

  //commands?.create({
    //name: "feedback",
    //description: "Give a feedback about Translator.",
  //});

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

//const modal = new Modal() // We create a Modal
  //.setCustomId("helpModal")
  //.setTitle("Feedback")
  //.addComponents(
    //new TextInputComponent() // We create a Text Input Component
      //.setCustomId("country")
      //.setLabel("Which country are you from?")
      //.setStyle("SHORT") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
      //.setPlaceholder("Write your country here")
      //.setRequired(true), // If it's required or not

    //new TextInputComponent() // We create a Text Input Component
      //.setCustomId("text")
      //.setLabel("Text")
      //.setStyle("LONG") //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
      //.setPlaceholder("Write a feedback about Translator")
      //.setRequired(true) // If it's required or not
  //);

//client.on("modalSubmit", async (modal) => {
  //if (modal.customId === "helpModal") {
    //const nameResponse = modal.getTextInputValue("country");
    //const themeResponse = modal.getTextInputValue("text");
    //modal.reply(`Thank you for the feedback!\nSo, you are **${nameResponse}** and you like the **${themeResponse}** theme. Awesome!`
    //);
  //}
//});

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
        .setDescription("Click on button below to visit my **GitHub** repository.")

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
  //  if (message.content == 'ping') {
  //    message.reply({
  //      content: 'pong',
  //    })
  //  }
});

client.login(token);
