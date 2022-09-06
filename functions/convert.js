const romans = require('romans'),
toHex = require('colornames'),
{ MorseCode } = require('morse-code-lib'),
ColorHelper = require('color-to-name'),
strings = require('../languages/strings');

module.exports = function (type, format, content) {
  if (type == 'encode') {
    if (format == 'roman') {
      try {
        const res = romans.romanize(parseInt(content));
        return {
          type: 'Roman numeral',
          content: content,
          result: res
        };
      } catch (e) {
        return {
          type: 'error',
          message: `**❌ ${e}.**`
        }
      }
    } else if (format == 'hex') {
        const res = toHex(content);
      if (res) {
        return {
          type: 'hexadecimal',
          content: content,
          result: res,
          hex: res
        };
      } else {
        return {
          type: 'error',
          message: `**❌ You need to provide a valid color.**`
        }
      }
    } else if (format == 'morse') {
      try {
        let morseCode = new MorseCode();
        const res = morseCode.morseEncode(content);
        return {
          type: 'Morse code',
          content: content,
          result: '`' + res + '`'
        };
      } catch (e) {
        return {
          type: 'error',
          message: `**❌ ${e}**`
        }
      }
    }
      
  } else {
    if (format == 'roman') {
      try {
        const res = romans.deromanize(content);
        return {
          type: 'numeral',
          content: content,
          result: res
        };
      } catch (e) {
        return {
          type: 'error',
          message: `**❌ ${e}.**`
        }
      }
    } else if (format == 'hex') {
      try {
        if (!content.includes('#'))
          content = content.replace(content, `#${content}`);
        
        const res = ColorHelper.findClosestColor(content);
        return {
          type: 'color name',
          content: content,
          result: res.name,
          hex: content
        };
      } catch (e) {
        return {
          type: 'error',
          message: `**❌ ${e}**`
        }
      }
    } else if (format == 'morse') {
      try {
        let morseCode = new MorseCode();
        const res = morseCode.morseDecode(content);
        return {
          type: 'text',
          content: content,
          result: '`' + res + '`'
        };
      } catch (e) {
        return {
          type: 'error',
          message: `**❌ ${e}**`
        }
      }
    }
  }
}
