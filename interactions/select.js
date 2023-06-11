const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js"),
  strings = require("../languages/strings");

exports.run = async (interaction, options, client, lang) => {
  if (interaction.values == "commands") {
    const commandsEmbed = new MessageEmbed()
      .setColor("#5865f2")
      .setTitle(strings.title.commandsEmbed[lang])
      .setThumbnail(
        `https://cdn3.emoji.gg/emojis/6243-blurple-slashcommands.png`
      )
      .setDescription(strings.info.guideDescription[lang])
      .addField("/translate", strings.command.translate[lang], true)
      .addField("/t", strings.command.t[lang], true)
      .addField("/convert", strings.command.convert[lang], true)
      .setFooter({
        text: client.user.username,
        iconURL: `${client.user.avatarURL()}?size=128`,
      })
      .setTimestamp();

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel(strings.button.iso[lang])
          .setEmoji("🌐")
          .setURL("https://translatorbot.gitbook.io/languages/")
          .setStyle("LINK")
      )
      .addComponents(
        new MessageButton()
          .setLabel(strings.button.website[lang])
          .setEmoji("🖥")
          .setURL("https://translatorbot.gitbook.io/")
          .setStyle("LINK")
      );

    await interaction.update({ components: [row], embeds: [commandsEmbed] });
  } else if (interaction.values == "code") {
    const repoEmbed = new MessageEmbed()
      .setColor("#03C48A")
      .setAuthor({
        name: client.user.username,
        iconURL: `${client.user.avatarURL()}?size=128`,
      })
      .setDescription(
        `${strings.info.github[lang]}\n\n${strings.info.crowdin[lang]}`
      );

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel(strings.button.github[lang])
          .setEmoji("<:blurple_github:1012563909066117160>")
          .setURL("https://github.com/luisgbr1el/TranslatorBOT/")
          .setStyle("LINK")
      )
      .addComponents(
        new MessageButton()
          .setLabel(strings.button.crowdin[lang])
          .setEmoji("🌐")
          .setURL("https://crowdin.com/project/bottranslator/")
          .setStyle("LINK")
      );

    await interaction.update({ components: [row], embeds: [repoEmbed] });
  }
};