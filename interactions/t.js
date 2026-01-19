const { MessageEmbed } = require("discord.js"),
  strings = require("../languages/strings"),
  { translate } = require("@vitalets/google-translate-api"),
  languageName = require("../functions/languageName");

exports.run = async (interaction, options, client, lang) => {
  const toLanguage = options.getString("to");
  const text = options.getString("text");

  const avatarURL = `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png?size=128`;

  await interaction.deferReply();

  await translate(text, { to: toLanguage })
    .then(async (res) => {
      const embed = new MessageEmbed()
        .setAuthor({
          name: `${interaction.user.username}`,
          iconURL: avatarURL,
        })
        .addField(
          strings.action.detectedLanguage[lang],
          languageName(res.raw.src)
        )
        .addField(
          `${strings.action.translatingTo[lang]} ${languageName(
            toLanguage
          )}...`,
          "`" + res.text + "`"
        )
        .setColor("#03C48A")
        .setTimestamp()
        .setFooter({ text: client.user.username });

      await interaction.editReply({ embeds: [embed], ephemeral: false });
    })
    .catch(async (err) => {
      await interaction.editReply({
        content: "`" + err + "`",
        ephemeral: true,
      });
    });
};