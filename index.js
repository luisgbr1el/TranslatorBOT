const express = require("express"), // importing 'express' package to render a web panel
  app = express();

const DiscordJS = require("discord.js"), // importing 'discord.js' package
  {
    MessageEmbed,
    MessageActionRow,
    MessageButton,
    MessageSelectMenu,
    MessageAttachment,
  } = require("discord.js"), // importing classes from 'discord.js'
  { ContextMenuCommandBuilder } = require("@discordjs/builders"),
  wait = require("node:timers/promises").setTimeout, // importing 'node timeout'
  languageName = require("./functions/languageName"), // importing 'languageName' function
  getGuildLocale = require("./functions/getGuildLocale"),
  commandsList = require("./languages/commands"), // importing commands list
  strings = require("./languages/strings"), // importing strings
  token = process.env["token"] || process.env.TOKEN, // importing bot token from secret keys
  convert = require("./functions/convert");

const client = new DiscordJS.Client({
  intents: 84992,
}); // declaring bot intents

const discordModals = require("discord-modals");
discordModals(client),
  ({
    Modal,
    showModal,
    TextInputComponent,
    SelectMenuComponent,
  } = require("discord-modals")), // Import all
  (fs = require("fs"));

// when client is ready...
client.on("ready", () => {
  const guilds = client.guilds.cache.map((guild) => guild.id);
  console.log("[TRANSLATOR BOT ESTÁ ONLINE!]");

  const activity = client.user.setActivity(`/help`, {
    type: "LISTENING",
  });

  avatar = client.user.avatarURL();
  avatarr = avatar.replace(".webp", ".png");

  app.get("/", function (req, res) {
    res.render("index.pug", {
      username: client.user.username,
      guilds: guilds.length,
      channels: client.channels.cache.size,
      botId: client.user.id,
      actType: activity.activities[0].type,
      actName: activity.activities[0].name,
      avatarURL: avatarr,
      commands: commandsList,
    });
  });

  app.listen(process.env.PORT || 5000, () =>
    console.log(
      `Example app listening at http://localhost:${
        process.env.PORT || 5000
      }\n\n`
    )
  );
  let commands;
  commands = client.application?.commands;
});

module.exports = app;

// when an user request an interaction (button click, slash command, modal submit, etc.)
client.on("interactionCreate", async (interaction) => {
  let lang = getGuildLocale(interaction);

  fs.readdir("./interactions/", (err, files) => {
    if (err) console.error(err);
    let arquivojs = files.filter((f) => f.split(".").pop() == "js");

    arquivojs.forEach((f) => {
      let props = require(`./interactions/${f}`);
      commandFile = f.replace(".js", "");

      if (
        interaction.commandName == commandFile ||
        interaction.customId == commandFile
      )
        props.run(interaction, interaction.options, client, lang);
    });
  });

  // below this, if interaction is not a command, it returns none
  if (!interaction.isCommand()) return;
});

//client.on("messageCreate", (message) => {
//});

client.login(token);