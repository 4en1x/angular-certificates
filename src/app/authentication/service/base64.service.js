export default class Base64Service {
  constructor() {
    this.keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  }

  encode(input) {
    let output = '';
    let chr1; let chr2; let
      chr3 = '';
    let enc1; let enc2; let enc3; let
      enc4 = '';
    let i = 0;

    do {
      chr1 = input.charCodeAt(i += 1);
      chr2 = input.charCodeAt(i += 1);
      chr3 = input.charCodeAt(i += 1);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output
                + this.keyStr.charAt(enc1)
                + this.keyStr.charAt(enc2)
                + this.keyStr.charAt(enc3)
                + this.keyStr.charAt(enc4);
      chr1 = chr2 = chr3 = '';
      enc1 = enc2 = enc3 = enc4 = '';
    } while (i < input.length);

    return output;
  }

  decode(input) {
    let output = '';
    let chr1; let chr2; let
      chr3 = '';
    let enc1; let enc2; let enc3; let
      enc4 = '';
    let i = 0;

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    const base64test = /[^A-Za-z0-9+/=]/g;
    if (base64test.exec(input)) {
      window.alert('There were invalid base64 characters in the input text.\n'
                + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n"
                + 'Expect errors in decoding.');
    }
    input = input.replace(/[^A-Za-z0-9+/=]/g, '');

    do {
      enc1 = this.keyStr.indexOf(input.charAt(i += 1));
      enc2 = this.keyStr.indexOf(input.charAt(i += 1));
      enc3 = this.keyStr.indexOf(input.charAt(i += 1));
      enc4 = this.keyStr.indexOf(input.charAt(i += 1));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output += String.fromCharCode(chr1);

      if (enc3 !== 64) {
        output += String.fromCharCode(chr2);
      }
      if (enc4 !== 64) {
        output += String.fromCharCode(chr3);
      }

      chr1 = chr2 = chr3 = '';
      enc1 = enc2 = enc3 = enc4 = '';
    } while (i < input.length);

    return output;
  }
}
