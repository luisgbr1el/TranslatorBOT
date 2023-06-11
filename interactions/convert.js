const { MessageAttachment } = require("discord.js"),
  strings = require("../languages/strings"),
  languageName = require("../functions/languageName"),
  convert = require("../functions/convert"),
  { createCanvas } = require("canvas");

exports.run = async (interaction, options, client, lang) => {
  const type = options.getString("type"),
    format = options.getString("format"),
    content = options.getString("content");

  const converting = convert(type, format, content);
  const cast = Promise.resolve(converting);

  await interaction.deferReply();

  cast.then(async function (res) {
    try {
      if (res.type == "error") {
        await interaction.editReply({
          content: `${res.message}`,
          ephemeral: true,
        });
      } else {
        if (format == "hex") {
          const canvas = createCanvas(50, 50);
          const context = canvas.getContext("2d");

          context.fillStyle = `${res.hex}`;
          context.fillRect(0, 0, 50, 50);

          const buffer = canvas.toBuffer("image/png");

          const attachment = new MessageAttachment(
            buffer,
            `translator-${res.hex}.png`
          );
          await interaction.editReply({
            content: `**"${res.content}" → ${res.type} =** ${res.result}`,
            files: [attachment],
            ephemeral: false,
          });
        } else {
          await interaction.editReply({
            content: `**"${res.content}" → ${res.type} =** ${res.result}`,
            ephemeral: false,
          });
        }
      }
    } catch (e) {
      await interaction.editReply({ content: `**❌ ${e}**`, ephemeral: true });
    }
  });
};