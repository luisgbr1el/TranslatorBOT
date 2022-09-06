module.exports = function (iso) {
  let languageName;
  const langs = {
  auto: 'Automatic',
  af: '🇿🇦 - Afrikaans',
  sq: '🇦🇱 - Albanian',
  ar: '🇸🇦 - Arabic',
  hy: '🇦🇲 - Armenian',
  az: '🇦🇿 - Azerbaijani',
  eu: '<:Flag_of_Basque_country:799379194944552960> - Basque',
  be: '🇧🇾 - Belarusian',
  bn: '🇧🇩 - Bengali',
  bs: '🇧🇦 - Bosnian',
  bg: '🇧🇬 - Bulgarian',
  ca: '🇦🇩 - Catalan',
  ceb: '🇵🇭 - Cebuano',
  ny: '🇲🇼 - Chichewa',
  'zh-CN': '🇨🇳 - Chinese Simplified',
  'zh-TW': '🇨🇳 - Chinese Traditional',
  co: '🇫🇷 - Corsican',
  hr: '🇭🇷 - Croatian',
  cs: '🇨🇿 - Czech',
  da: '🇩🇰 - Danish',
  nl: '🇳🇱 - Dutch',
  en: '🇺🇸/🇬🇧 - English',
  eo: '<:Flag_of_Esperanto:799378643788627998> - Esperanto',
  et: '🇪🇪 - Estonian',
  tl: '🇵🇭 - Filipino',
  fi: '🇫🇮 - Finnish',
  fr: '🇫🇷 - French',
  fy: '🇳🇱 - Frisian',
  gl: '🇪🇸 - Galician',
  ka: '🇬🇪 - Georgian',
  de: '🇩🇪 - German',
  el: '🇬🇷 - Greek',
  gu: '🇮🇳 - Gujarati',
  ht: '🇭🇹 - Haitian Creole',
  ha: '🇳🇬/🇳🇪/🇹🇩 - Hausa',
  haw: '<:Flag_of_Hawaii:799383953500274739> - Hawaiian',
  iw: '🇮🇱 - Hebrew',
  hi: '🇮🇳 - Hindi',
  hmn: '🇨🇳 - Hmong',
  hu: '🇭🇺 - Hungarian',
  is: '🇮🇸 - Icelandic',
  ig: '🇳🇬 - Igbo',
  id: '🇮🇩 - Indonesian',
  ga: '🇮🇪 - Irish',
  it: '🇮🇹 - Italian',
  ja: '🇯🇵 - Japanese',
  jw: '🇮🇩 - Javanese',
  kn: '🇮🇳 - Kannada',
  kk: '🇰🇿 - Kazakh',
  km: '🇰🇭 - Khmer',
  ko: '🇰🇵/🇰🇷 - Korean',
  ku: '🇹🇷/🇸🇾/🇮🇶/🇮🇷 - Kurdish (Kurmanji)',
  ky: '🇰🇬 - Kyrgyz',
  lo: '🇱🇦 - Lao',
  la: '🇻🇦 - Latin',
  lv: '🇱🇻 - Latvian',
  lt: '🇱🇹 - Lithuanian',
  lb: '🇱🇺 - Luxembourgish',
  mk: '🇲🇰 - Macedonian',
  mg: '🇲🇬 - Malagasy',
  ms: '🇲🇾 - Malay',
  ml: '🇮🇳 - Malayalam',
  mt: '🇲🇹 - Maltese',
  mi: '🇳🇿 - Maori',
  mr: '🇮🇳 - Marathi',
  mn: '🇲🇳 - Mongolian',
  my: '🇲🇲 - Myanmar (Burmese)',
  ne: '🇳🇵 - Nepali',
  no: '🇳🇴 - Norwegian',
  ps: '🇦🇫 - Pashto',
  fa: '🇮🇷 - Persian',
  pl: '🇵🇱 - Polish',
  pt: '🇧🇷/🇵🇹 - Portuguese',
  ma: '🇮🇳 - Punjabi',
  ro: '🇷🇴/🇲🇩 - Romanian',
  ru: '🇷🇺 - Russian',
  sm: '🇼🇸 - Samoan',
  gd: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 - Scots Gaelic',
  sr: '🇷🇸 - Serbian',
  st: '🇿🇦/🇱🇸 - Sesotho',
  sn: '🇿🇼 - Shona',
  sd: '🇵🇰 - Sindhi',
  si: '🇱🇰 - Sinhala',
  sk: '🇸🇰 - Slovak',
  sl: '🇸🇮 - Slovenian',
  so: '🇸🇴 - Somali',
  es: '🇪🇸 - Spanish',
  su: '🇸🇩 - Sudanese',
  sw: '🇰🇪/🇷🇼/🇹🇿/🇺🇬 - Swahili',
  sv: '🇸🇪 - Swedish',
  tg: '🇹🇯 - Tajik',
  ta: '🇮🇳 - Tamil',
  te: '🇮🇳 - Telugu',
  th: '🇹🇭 - Thai',
  tr: '🇹🇷 - Turkish',
  uk: '🇺🇦 - Ukrainian',
  ur: '🇮🇳/🇵🇰 - Urdu',
  uz: '🇺🇿 - Uzbek',
  vi: '🇻🇳 - Vietnamese',
  cy: '🇬🇧 - Welsh',
  xh: '🇿🇦 - Xhosa',
  yi: '🇧🇦/🇲🇩/🇳🇱/🇵🇱/🇷🇴/🇸🇪/🇺🇦 - Yiddish',
  yo: '🇳🇬/🇧🇯/🇹🇬/🇸🇱/🇨🇺/🇧🇷 - Yoruba',
  zu: '🇿🇦 - Zulu'
}

// iso
  if (iso == 'en')
  	languageName = langs.en;
  else if (iso == 'pt')
  	languageName = langs.pt;
  else if (iso == 'es')
  	languageName = langs.es;
  else if (iso == 'ja')
  	languageName = langs.ja;
  else if (iso == 'zh-CN')
  	languageName = langs[iso];
  else if (iso == 'zh-TW')
  	languageName = langs[iso];
  else if (iso == 'nl')
  	languageName = langs.nl;
  else if (iso == 'af')
  	languageName = langs.af;
  else if (iso == 'sq')
  	languageName = langs.sq;
  else if (iso == 'ar')
  	languageName = langs.ar;
  else if (iso == 'hy')
  	languageName = langs.hy;
  else if (iso == 'az')
  	languageName = langs.az;
  else if (iso == 'eu')
  	languageName = langs.eu;
  else if (iso == 'eu')
  	languageName = langs.eu;
  else if (iso == 'be')
  	languageName = langs.be;
  else if (iso == 'bn')
  	languageName = langs.bn;
  else if (iso == 'bs')
  	languageName = langs.bs;
  else if (iso == 'bg')
  	languageName = langs.bg;
  else if (iso == 'ca')
  	languageName = langs.ca;
  else if (iso == 'ceb')
  	languageName = langs.ceb;
  else if (iso == 'ny')
  	languageName = langs.ny;
  else if (iso == 'co')
  	languageName = langs.co;
  else if (iso == 'hr')
  	languageName = langs.hr;
  else if (iso == 'cs')
  	languageName = langs.cs;
  else if (iso == 'da')
  	languageName = langs.da;
  else if (iso == 'eo')
  	languageName = langs.eo;
  else if (iso == 'et')
  	languageName = langs.et;
  else if (iso == 'tl')
  	languageName = langs.tl;
  else if (iso == 'fi')
  	languageName = langs.fi;
  else if (iso == 'fr')
  	languageName = langs.fr;
  else if (iso == 'fy')
  	languageName = langs.fy;
  else if (iso == 'gl')
  	languageName = langs.gl;
  else if (iso == 'ka')
  	languageName = langs.ka;
  else if (iso == 'de')
  	languageName = langs.de;
  else if (iso == 'el')
  	languageName = langs.el;
  else if (iso == 'gu')
  	languageName = langs.gu;
  else if (iso == 'ht')
  	languageName = langs.ht;
  else if (iso == 'ha')
  	languageName = langs.ha;
  else if (iso == 'haw')
  	languageName = langs.haw;
  else if (iso == 'iw')
  	languageName = langs.iw;
  else if (iso == 'hi')
  	languageName = langs.hi;
  else if (iso == 'hmn')
  	languageName = langs.hmn;
  else if (iso == 'hu')
  	languageName = langs.hu;
  else if (iso == 'is')
  	languageName = langs.is;
  else if (iso == 'ig')
  	languageName = langs.ig;
  else if (iso == 'id')
  	languageName = langs.id;
  else if (iso == 'ga')
  	languageName = langs.ga;
  else if (iso == 'it')
  	languageName = langs.it;
  else if (iso == 'jw')
  	languageName = langs.jw;
  else if (iso == 'kn')
  	languageName = langs.kn;
  else if (iso == 'kk')
  	languageName = langs.kk;
  else if (iso == 'km')
  	languageName = langs.km;
  else if (iso == 'ko')
  	languageName = langs.ko;
  else if (iso == 'ku')
  	languageName = langs.ku;
  else if (iso == 'ky')
  	languageName = langs.ky;
  else if (iso == 'lo')
  	languageName = langs.lo;
  else if (iso == 'la')
  	languageName = langs.la;
  else if (iso == 'lv')
  	languageName = langs.lv;
  else if (iso == 'lt')
  	languageName = langs.lt;
  else if (iso == 'lb')
  	languageName = langs.lb;
  else if (iso == 'mk')
  	languageName = langs.mk;
  else if (iso == 'mg')
  	languageName = langs.mg;
  else if (iso == 'ms')
  	languageName = langs.ms;
  else if (iso == 'ml')
  	languageName = langs.ml;
  else if (iso == 'mt')
  	languageName = langs.mt;
  else if (iso == 'mi')
  	languageName = langs.mi;
  else if (iso == 'mr')
  	languageName = langs.mr;
  else if (iso == 'mn')
  	languageName = langs.mn;
  else if (iso == 'my')
  	languageName = langs.my;
  else if (iso == 'ne')
  	languageName = langs.ne;
  else if (iso == 'no')
  	languageName = langs.no;
  else if (iso == 'ps')
  	languageName = langs.ps;
  else if (iso == 'fa')
  	languageName = langs.fa;
  else if (iso == 'pl')
  	languageName = langs.pl;
  else if (iso == 'ma')
  	languageName = langs.ma;
  else if (iso == 'ro')
  	languageName = langs.ro;
  else if (iso == 'ru')
  	languageName = langs.ru;
  else if (iso == 'sm')
  	languageName = langs.sm;
  else if (iso == 'gd')
  	languageName = langs.gd;
  else if (iso == 'sr')
  	languageName = langs.sr;
  else if (iso == 'st')
  	languageName = langs.st;
  else if (iso == 'sn')
  	languageName = langs.sn;
  else if (iso == 'sd')
  	languageName = langs.sd;
  else if (iso == 'si')
  	languageName = langs.si;
  else if (iso == 'sk')
  	languageName = langs.sk;
  else if (iso == 'sl')
  	languageName = langs.sl;
  else if (iso == 'so')
  	languageName = langs.so;
  else if (iso == 'su')
  	languageName = langs.su;
  else if (iso == 'sw')
  	languageName = langs.sw;
  else if (iso == 'su')
  	languageName = langs.su;
  else if (iso == 'sw')
  	languageName = langs.sw;
  else if (iso == 'sv')
  	languageName = langs.sv;
  else if (iso == 'tg')
  	languageName = langs.tg;
  else if (iso == 'ta')
  	languageName = langs.ta;
  else if (iso == 'te')
  	languageName = langs.te;
  else if (iso == 'th')
  	languageName = langs.th;
  else if (iso == 'tr')
  	languageName = langs.tr;
  else if (iso == 'uk')
  	languageName = langs.uk;
  else if (iso == 'ur')
  	languageName = langs.ur;
  else if (iso == 'uz')
  	languageName = langs.uz;
  else if (iso == 'vi')
  	languageName = langs.vi;
  else if (iso == 'cy')
  	languageName = langs.cy;
  else if (iso == 'xh')
  	languageName = langs.xh;
  else if (iso == 'yi')
  	languageName = langs.yi;
  else if (iso == 'yo')
  	languageName = langs.yo;
  else if (iso == 'zu')
  	languageName = langs.zu;

  return languageName;
}
