const { MessageEmbed } = require("discord.js"),
  strings = require("../languages/strings"),
  translate = require("@vitalets/google-translate-api"),
  languageName = require("../functions/languageName");

exports.run = async (interaction, options, client, lang) => {
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
      await interaction.editReply({
        content: "`" + err + "`",
        ephemeral: true,
      });
    });
};