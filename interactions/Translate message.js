const { MessageEmbed } = require("discord.js"),
  strings = require("../languages/strings"),
  { translate } = require("@vitalets/google-translate-api"),
  languageName = require("../functions/languageName");

exports.run = async (interaction, options, client, lang) => {
  const user = options._hoistedOptions[0].message.author.username;
  const messageContent = options._hoistedOptions[0].message.content;
  const avatarURL = `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png?size=128`;

  await interaction.deferReply();

  await translate(messageContent, { to: lang })
    .then(async (res) => {
      const embed = new MessageEmbed()
        .setAuthor({
          name: `${interaction.user.username} is translating ${user}'s message...`,
          iconURL: avatarURL,
        })
        .addField(
          strings.action.detectedLanguage[lang],
          languageName(res.raw.src)
        )
        .addField(
          `${strings.action.translatingTo[lang]} ${languageName(lang)}...`,
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