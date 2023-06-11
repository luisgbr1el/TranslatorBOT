const {
    MessageActionRow,
    MessageSelectMenu,
    MessageEmbed,
  } = require("discord.js"),
  strings = require("../languages/strings");

exports.run = async (interaction, options, client, lang) => {
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
        },
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
    .setTimestamp();

  await interaction.reply({
    embeds: [embed],
    components: [row],
    ephemeral: true,
  });
};