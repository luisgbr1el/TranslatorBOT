const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
const translate = require('translate-google');


exports.run = (bot,message,args) => {

if (!args[0] || args[22] || args[23] || args[24] || args[25] || args[26] || args[27] || args[28] || args[29] || args[30]) {
	const embed = new MessageEmbed()
	.setTitle(`t.translate Helper`)
      // Set the color of the embed
      .setColor('#03C48A')
      .setThumbnail("https://i.ibb.co/jgg6Fs5/logo-translatorbot.png")
      // Set the main content of the embed
      .setDescription('How to use the ``t.translate`` command.')
      .addField('How to use?', 'use ``t.translate <Language> <toLanguage> <text>`` to translate. The maximum is 20 words per sentence.')
      .addField('Example:', '```t.translate en pt Hey there!``` \n The result will be: \n **From English:**\n Hey There! \n **To Portuguese:**\n Olá!')
      .addField('What is "lang code"?', 'Is a code to refer a language. So, the code of English is **en**, of Portuguese is **pt**, of Spanish is **es**... \n')
      .addField('Click on this link to view all supported languages and your codes:', 'https://translatorbot.gitbook.io/home/languages')
    // Send the embed to the same channel as the message
      .setFooter('TranslatorBOT v1.2.0 | 2020');
      message.channel.send(embed);
} else {
	// to format
if (!args[1]) {
	args[1] = '';
}
if (!args[2]) {
	args[2] = '';
}if (!args[3]) {
	args[3] = '';
}
if (!args[4]) {
	args[4] = '';
}
if (!args[5]) {
	args[5] = '';
}
if (!args[6]) {
	args[6] = '';
}
if (!args[7]) {
	args[7] = '';
}
if (!args[8]) {
	args[8] = '';
}
if (!args[9]) {
	args[9] = '';
}
if (!args[10]) {
	args[10] = '';
}
if (!args[11]) {
	args[11] = '';
}
if (!args[12]) {
	args[12] = '';
}
if (!args[13]) {
	args[13] = '';
}
if (!args[14]) {
	args[14] = '';
}
if (!args[15]) {
	args[15] = '';
}
if (!args[16]) {
	args[16] = '';
}
if (!args[17]) {
	args[17] = '';
}
if (!args[18]) {
	args[18] = '';
}
if (!args[19]) {
	args[19] = '';
}
if (!args[20]) {
	args[20] = '';
}
if (!args[21]) {
	args[21] = '';
}

 // available languages
const langs = {
  auto: 'Automatic',
  af: 'Afrikaans',
  sq: 'Albanian',
  ar: 'Arabic',
  hy: 'Armenian',
  az: 'Azerbaijani',
  eu: 'Basque',
  be: 'Belarusian',
  bn: 'Bengali',
  bs: 'Bosnian',
  bg: 'Bulgarian',
  ca: 'Catalan',
  ceb: 'Cebuano',
  ny: 'Chichewa',
  'zh-cn': 'Chinese Simplified',
  'zh-tw': 'Chinese Traditional',
  co: 'Corsican',
  hr: 'Croatian',
  cs: 'Czech',
  da: 'Danish',
  nl: 'Dutch',
  en: 'English',
  eo: 'Esperanto',
  et: 'Estonian',
  tl: 'Filipino',
  fi: 'Finnish',
  fr: 'French',
  fy: 'Frisian',
  gl: 'Galician',
  ka: 'Georgian',
  de: 'German',
  el: 'Greek',
  gu: 'Gujarati',
  ht: 'Haitian Creole',
  ha: 'Hausa',
  haw: 'Hawaiian',
  iw: 'Hebrew',
  hi: 'Hindi',
  hmn: 'Hmong',
  hu: 'Hungarian',
  is: 'Icelandic',
  ig: 'Igbo',
  id: 'Indonesian',
  ga: 'Irish',
  it: 'Italian',
  ja: 'Japanese',
  jw: 'Javanese',
  kn: 'Kannada',
  kk: 'Kazakh',
  km: 'Khmer',
  ko: 'Korean',
  ku: 'Kurdish (Kurmanji)',
  ky: 'Kyrgyz',
  lo: 'Lao',
  la: 'Latin',
  lv: 'Latvian',
  lt: 'Lithuanian',
  lb: 'Luxembourgish',
  mk: 'Macedonian',
  mg: 'Malagasy',
  ms: 'Malay',
  ml: 'Malayalam',
  mt: 'Maltese',
  mi: 'Maori',
  mr: 'Marathi',
  mn: 'Mongolian',
  my: 'Myanmar (Burmese)',
  ne: 'Nepali',
  no: 'Norwegian',
  ps: 'Pashto',
  fa: 'Persian',
  pl: 'Polish',
  pt: 'Portuguese',
  ma: 'Punjabi',
  ro: 'Romanian',
  ru: 'Russian',
  sm: 'Samoan',
  gd: 'Scots Gaelic',
  sr: 'Serbian',
  st: 'Sesotho',
  sn: 'Shona',
  sd: 'Sindhi',
  si: 'Sinhala',
  sk: 'Slovak',
  sl: 'Slovenian',
  so: 'Somali',
  es: 'Spanish',
  su: 'Sudanese',
  sw: 'Swahili',
  sv: 'Swedish',
  tg: 'Tajik',
  ta: 'Tamil',
  te: 'Telugu',
  th: 'Thai',
  tr: 'Turkish',
  uk: 'Ukrainian',
  ur: 'Urdu',
  uz: 'Uzbek',
  vi: 'Vietnamese',
  cy: 'Welsh',
  xh: 'Xhosa',
  yi: 'Yiddish',
  yo: 'Yoruba',
  zu: 'Zulu'
}

// args[0]
if (args[0] == 'auto') {
	var lingua1 = langs.auto;
}
if (args[0] == 'en') {
	var lingua1 = langs.en;
}
if (args[0] == 'pt') {
	var lingua1 = langs.pt;
}
if (args[0] == 'es') {
	var lingua1 = langs.es;
}
if (args[0] == 'ja') {
	var lingua1 = langs.ja;
}
if (args[0] == 'zh-cn') {
	var lingua1 = 'Chinese Simplified';
}
if (args[0] == 'zh-tw') {
	var lingua1 = 'Chinese Traditional';
}
if (args[0] == 'nl') {
	var lingua1 = langs.nl;
}
if (args[0] == 'af') {
	var lingua1 = langs.af;
}
if (args[0] == 'sq') {
	var lingua1 = langs.sq;
}
if (args[0] == 'ar') {
	var lingua1 = langs.ar;
}
if (args[0] == 'hy') {
	var lingua1 = langs.hy;
}
if (args[0] == 'az') {
	var lingua1 = langs.az;
}
if (args[0] == 'eu') {
	var lingua1 = langs.eu;
}
if (args[0] == 'eu') {
	var lingua1 = langs.eu;
}
if (args[0] == 'be') {
	var lingua1 = langs.be;
}
if (args[0] == 'bn') {
	var lingua1 = langs.bn;
}
if (args[0] == 'bs') {
	var lingua1 = langs.bs;
}
if (args[0] == 'bg') {
	var lingua1 = langs.bg;
}
if (args[0] == 'ca') {
	var lingua1 = langs.ca;
}
if (args[0] == 'ceb') {
	var lingua1 = langs.ceb;
}
if (args[0] == 'ny') {
	var lingua1 = langs.ny;
}
if (args[0] == 'co') {
	var lingua1 = langs.co;
}
if (args[0] == 'hr') {
	var lingua1 = langs.hr;
}
if (args[0] == 'cs') {
	var lingua1 = langs.cs;
}
if (args[0] == 'da') {
	var lingua1 = langs.da;
}
if (args[0] == 'eo') {
	var lingua1 = langs.eo;
}
if (args[0] == 'et') {
	var lingua1 = langs.et;
}
if (args[0] == 'tl') {
	var lingua1 = langs.tl;
}
if (args[0] == 'fi') {
	var lingua1 = langs.fi;
}
if (args[0] == 'fr') {
	var lingua1 = langs.fr;
}
if (args[0] == 'fy') {
	var lingua1 = langs.fy;
}
if (args[0] == 'gl') {
	var lingua1 = langs.gl;
}
if (args[0] == 'ka') {
	var lingua1 = langs.ka;
}
if (args[0] == 'de') {
	var lingua1 = langs.de;
}
if (args[0] == 'el') {
	var lingua1 = langs.el;
}
if (args[0] == 'gu') {
	var lingua1 = langs.gu;
}
if (args[0] == 'ht') {
	var lingua1 = langs.ht;
}
if (args[0] == 'ha') {
	var lingua1 = langs.ha;
}
if (args[0] == 'haw') {
	var lingua1 = langs.haw;
}
if (args[0] == 'iw') {
	var lingua1 = langs.iw;
}
if (args[0] == 'hi') {
	var lingua1 = langs.hi;
}
if (args[0] == 'hmn') {
	var lingua1 = langs.hmn;
}
if (args[0] == 'hu') {
	var lingua1 = langs.hu;
}
if (args[0] == 'is') {
	var lingua1 = langs.is;
}
if (args[0] == 'ig') {
	var lingua1 = langs.ig;
}
if (args[0] == 'id') {
	var lingua1 = langs.id;
}
if (args[0] == 'ga') {
	var lingua1 = langs.ga;
}
if (args[0] == 'it') {
	var lingua1 = langs.it;
}
if (args[0] == 'jw') {
	var lingua1 = langs.jw;
}
if (args[0] == 'kn') {
	var lingua1 = langs.kn;
}
if (args[0] == 'kk') {
	var lingua1 = langs.kk;
}
if (args[0] == 'km') {
	var lingua1 = langs.km;
}
if (args[0] == 'ko') {
	var lingua1 = langs.ko;
}
if (args[0] == 'ku') {
	var lingua1 = langs.ku;
}
if (args[0] == 'ky') {
	var lingua1 = langs.ky;
}
if (args[0] == 'lo') {
	var lingua1 = langs.lo;
}
if (args[0] == 'la') {
	var lingua1 = langs.la;
}
if (args[0] == 'lv') {
	var lingua1 = langs.lv;
}
if (args[0] == 'lt') {
	var lingua1 = langs.lt;
}
if (args[0] == 'lb') {
	var lingua1 = langs.lb;
}
if (args[0] == 'mk') {
	var lingua1 = langs.mk;
}
if (args[0] == 'mg') {
	var lingua1 = langs.mg;
}
if (args[0] == 'ms') {
	var lingua1 = langs.ms;
}
if (args[0] == 'ml') {
	var lingua1 = langs.ml;
}
if (args[0] == 'mt') {
	var lingua1 = langs.mt;
}
if (args[0] == 'mi') {
	var lingua1 = langs.mi;
}
if (args[0] == 'mr') {
	var lingua1 = langs.mr;
}
if (args[0] == 'mn') {
	var lingua1 = langs.mn;
}
if (args[0] == 'my') {
	var lingua1 = langs.my;
}
if (args[0] == 'ne') {
	var lingua1 = langs.ne;
}
if (args[0] == 'no') {
	var lingua1 = langs.no;
}
if (args[0] == 'ps') {
	var lingua1 = langs.ps;
}
if (args[0] == 'fa') {
	var lingua1 = langs.fa;
}
if (args[0] == 'pl') {
	var lingua1 = langs.pl;
}
if (args[0] == 'ma') {
	var lingua1 = langs.ma;
}
if (args[0] == 'ro') {
	var lingua1 = langs.ro;
}
if (args[0] == 'ru') {
	var lingua1 = langs.ru;
}
if (args[0] == 'sm') {
	var lingua1 = langs.sm;
}
if (args[0] == 'gd') {
	var lingua1 = langs.gd;
}
if (args[0] == 'sr') {
	var lingua1 = langs.sr;
}
if (args[0] == 'st') {
	var lingua1 = langs.st;
}
if (args[0] == 'sn') {
	var lingua1 = langs.sn;
}
if (args[0] == 'sd') {
	var lingua1 = langs.sd;
}
if (args[0] == 'si') {
	var lingua1 = langs.si;
}
if (args[0] == 'sk') {
	var lingua1 = langs.sk;
}
if (args[0] == 'sl') {
	var lingua1 = langs.sl;
}
if (args[0] == 'so') {
	var lingua1 = langs.so;
}
if (args[0] == 'su') {
	var lingua1 = langs.su;
}
if (args[0] == 'sw') {
	var lingua1 = langs.sw;
}
if (args[0] == 'su') {
	var lingua1 = langs.su;
}
if (args[0] == 'sw') {
	var lingua1 = langs.sw;
}
if (args[0] == 'sv') {
	var lingua1 = langs.sv;
}
if (args[0] == 'tg') {
	var lingua1 = langs.tg;
}
if (args[0] == 'ta') {
	var lingua1 = langs.ta;
}
if (args[0] == 'te') {
	var lingua1 = langs.te;
}
if (args[0] == 'th') {
	var lingua1 = langs.th;
}
if (args[0] == 'tr') {
	var lingua1 = langs.tr;
}
if (args[0] == 'uk') {
	var lingua1 = langs.uk;
}
if (args[0] == 'ur') {
	var lingua1 = langs.ur;
}
if (args[0] == 'uz') {
	var lingua1 = langs.uz;
}
if (args[0] == 'vi') {
	var lingua1 = langs.vi;
}
if (args[0] == 'cy') {
	var lingua1 = langs.cy;
}
if (args[0] == 'xh') {
	var lingua1 = langs.xh;
}
if (args[0] == 'yi') {
	var lingua1 = langs.yi;
}
if (args[0] == 'yo') {
	var lingua1 = langs.yo;
}
if (args[0] == 'zu') {
	var lingua1 = langs.zu;
}

// SEPARANDO ----- -- - -- - -- -  - - -- - - - - -- --- - -- 

// args[1]
if (args[1] == 'en') {
	var lingua2 = langs.en;
}
if (args[1] == 'pt') {
	var lingua2 = langs.pt;
}
if (args[1] == 'es') {
	var lingua2 = langs.es;
}
if (args[1] == 'ja') {
	var lingua2 = langs.ja;
}
if (args[1] == 'zh-cn') {
	var lingua2 = 'Chinese Simplified';
}
if (args[1] == 'zh-tw') {
	var lingua2 = 'Chinese Traditional';
}
if (args[1] == 'nl') {
	var lingua2 = langs.nl;
}
if (args[1] == 'af') {
	var lingua2 = langs.af;
}
if (args[1] == 'sq') {
	var lingua2 = langs.sq;
}
if (args[1] == 'ar') {
	var lingua2 = langs.ar;
}
if (args[1] == 'hy') {
	var lingua2 = langs.hy;
}
if (args[1] == 'az') {
	var lingua2 = langs.az;
}
if (args[1] == 'eu') {
	var lingua2 = langs.eu;
}
if (args[1] == 'eu') {
	var lingua2 = langs.eu;
}
if (args[1] == 'be') {
	var lingua2 = langs.be;
}
if (args[1] == 'bn') {
	var lingua2 = langs.bn;
}
if (args[1] == 'bs') {
	var lingua2 = langs.bs;
}
if (args[1] == 'bg') {
	var lingua2 = langs.bg;
}
if (args[1] == 'ca') {
	var lingua2 = langs.ca;
}
if (args[1] == 'ceb') {
	var lingua2 = langs.ceb;
}
if (args[1] == 'ny') {
	var lingua2 = langs.ny;
}
if (args[1] == 'co') {
	var lingua2 = langs.co;
}
if (args[1] == 'hr') {
	var lingua2 = langs.hr;
}
if (args[1] == 'cs') {
	var lingua2 = langs.cs;
}
if (args[1] == 'da') {
	var lingua2 = langs.da;
}
if (args[1] == 'eo') {
	var lingua2 = langs.eo;
}
if (args[1] == 'et') {
	var lingua2 = langs.et;
}
if (args[1] == 'tl') {
	var lingua2 = langs.tl;
}
if (args[1] == 'fi') {
	var lingua2 = langs.fi;
}
if (args[1] == 'fr') {
	var lingua2 = langs.fr;
}
if (args[1] == 'fy') {
	var lingua2 = langs.fy;
}
if (args[1] == 'gl') {
	var lingua2 = langs.gl;
}
if (args[1] == 'ka') {
	var lingua2 = langs.ka;
}
if (args[1] == 'de') {
	var lingua2 = langs.de;
}
if (args[1] == 'el') {
	var lingua2 = langs.el;
}
if (args[1] == 'gu') {
	var lingua2 = langs.gu;
}
if (args[1] == 'ht') {
	var lingua2 = langs.ht;
}
if (args[1] == 'ha') {
	var lingua2 = langs.ha;
}
if (args[1] == 'haw') {
	var lingua2 = langs.haw;
}
if (args[1] == 'iw') {
	var lingua2 = langs.iw;
}
if (args[1] == 'hi') {
	var lingua2 = langs.hi;
}
if (args[1] == 'hmn') {
	var lingua2 = langs.hmn;
}
if (args[1] == 'hu') {
	var lingua2 = langs.hu;
}
if (args[1] == 'is') {
	var lingua2 = langs.is;
}
if (args[1] == 'ig') {
	var lingua2 = langs.ig;
}
if (args[1] == 'id') {
	var lingua2 = langs.id;
}
if (args[1] == 'ga') {
	var lingua2 = langs.ga;
}
if (args[1] == 'it') {
	var lingua2 = langs.it;
}
if (args[1] == 'jw') {
	var lingua2 = langs.jw;
}
if (args[1] == 'kn') {
	var lingua2 = langs.kn;
}
if (args[1] == 'kk') {
	var lingua2 = langs.kk;
}
if (args[1] == 'km') {
	var lingua2 = langs.km;
}
if (args[1] == 'ko') {
	var lingua2 = langs.ko;
}
if (args[1] == 'ku') {
	var lingua2 = langs.ku;
}
if (args[1] == 'ky') {
	var lingua2 = langs.ky;
}
if (args[1] == 'lo') {
	var lingua2 = langs.lo;
}
if (args[1] == 'la') {
	var lingua2 = langs.la;
}
if (args[1] == 'lv') {
	var lingua2 = langs.lv;
}
if (args[1] == 'lt') {
	var lingua2 = langs.lt;
}
if (args[1] == 'lb') {
	var lingua2 = langs.lb;
}
if (args[1] == 'mk') {
	var lingua2 = langs.mk;
}
if (args[1] == 'mg') {
	var lingua2 = langs.mg;
}
if (args[1] == 'ms') {
	var lingua2 = langs.ms;
}
if (args[1] == 'ml') {
	var lingua2 = langs.ml;
}
if (args[1] == 'mt') {
	var lingua2 = langs.mt;
}
if (args[1] == 'mi') {
	var lingua2 = langs.mi;
}
if (args[1] == 'mr') {
	var lingua2 = langs.mr;
}
if (args[1] == 'mn') {
	var lingua2 = langs.mn;
}
if (args[1] == 'my') {
	var lingua2 = langs.my;
}
if (args[1] == 'ne') {
	var lingua2 = langs.ne;
}
if (args[1] == 'no') {
	var lingua2 = langs.no;
}
if (args[1] == 'ps') {
	var lingua2 = langs.ps;
}
if (args[1] == 'fa') {
	var lingua2 = langs.fa;
}
if (args[1] == 'pl') {
	var lingua2 = langs.pl;
}
if (args[1] == 'ma') {
	var lingua2 = langs.ma;
}
if (args[1] == 'ro') {
	var lingua2 = langs.ro;
}
if (args[1] == 'ru') {
	var lingua2 = langs.ru;
}
if (args[1] == 'sm') {
	var lingua2 = langs.sm;
}
if (args[1] == 'gd') {
	var lingua2 = langs.gd;
}
if (args[1] == 'sr') {
	var lingua2 = langs.sr;
}
if (args[1] == 'st') {
	var lingua2 = langs.st;
}
if (args[1] == 'sn') {
	var lingua2 = langs.sn;
}
if (args[1] == 'sd') {
	var lingua2 = langs.sd;
}
if (args[1] == 'si') {
	var lingua2 = langs.si;
}
if (args[1] == 'sk') {
	var lingua2 = langs.sk;
}
if (args[1] == 'sl') {
	var lingua2 = langs.sl;
}
if (args[1] == 'so') {
	var lingua2 = langs.so;
}
if (args[1] == 'su') {
	var lingua2 = langs.su;
}
if (args[1] == 'sw') {
	var lingua2 = langs.sw;
}
if (args[1] == 'su') {
	var lingua2 = langs.su;
}
if (args[1] == 'sw') {
	var lingua2 = langs.sw;
}
if (args[1] == 'sv') {
	var lingua2 = langs.sv;
}
if (args[1] == 'tg') {
	var lingua2 = langs.tg;
}
if (args[1] == 'ta') {
	var lingua2 = langs.ta;
}
if (args[1] == 'te') {
	var lingua2 = langs.te;
}
if (args[1] == 'th') {
	var lingua2 = langs.th;
}
if (args[1] == 'tr') {
	var lingua2 = langs.tr;
}
if (args[1] == 'uk') {
	var lingua2 = langs.uk;
}
if (args[1] == 'ur') {
	var lingua2 = langs.ur;
}
if (args[1] == 'uz') {
	var lingua2 = langs.uz;
}
if (args[1] == 'vi') {
	var lingua2 = langs.vi;
}
if (args[1] == 'cy') {
	var lingua2 = langs.cy;
}
if (args[1] == 'xh') {
	var lingua2 = langs.xh;
}
if (args[1] == 'yi') {
	var lingua2 = langs.yi;
}
if (args[1] == 'yo') {
	var lingua2 = langs.yo;
}
if (args[1] == 'zu') {
	var lingua2 = langs.zu;
}
if (args[1] == 'auto') {
	message.reply('is not possible translate from a language to Automatic!')
} else {
	var texto = args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[5] + ' ' + args[6] + ' ' + args[7] + ' ' + args[8] + ' ' + args[9]+ ' ' + args[10]+ ' ' + args[11]+ ' ' + args[12]+ ' ' + args[13]+ ' ' + args[14]+ ' ' + args[15]+ ' ' + args[16]+ ' ' + args[17]+ ' ' + args[18]+ ' ' + args[19]+ ' ' + args[20]+ ' ' + args[21];		
translate(texto, {from: args[0], to: args[1]}).then(res => {
	const traducao = new MessageEmbed()
	.setTitle(`Translating...`)
	.setThumbnail("https://i.ibb.co/jgg6Fs5/logo-translatorbot.png")
	.setDescription(`Asked by <@${message.author.id}> \n`)
	.setColor('#03C48A')
	.addField(`From ${lingua1}:`, '``'+ texto + '``')
	.addField(`To ${lingua2}:`, '``' +res + '    ``')
	.addField('Click on this link to view all supported languages and your codes:', 'https://translatorbot.gitbook.io/home/languages')
	.setFooter(`TranslatorBOT v1.2.0 | 2020`); 
    message.channel.send(traducao);
}).catch(err => {
    console.error(err)
    message.channel.send('Language unsupported or unrecognized. Type **t.help** to view the supported languages.')
})
}


}


}

exports.help = {
	name: "translate"
};