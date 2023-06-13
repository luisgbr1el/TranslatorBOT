module.exports = function(interaction) {
  guildLocale = interaction.guildLocale;
  let lang;

  if (guildLocale == 'pt-BR') lang = 'pt';
  else lang = 'en';
  
  return lang;
}