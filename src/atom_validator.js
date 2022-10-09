const { bech32 } = require('bech32');

const ALLOWED_CHARS = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'

var regexp = new RegExp('^(cosmos)1([' + ALLOWED_CHARS + ']+)$') // cosmos + bech32 separated by '1'

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return regexp.exec(address) !== null;
  },

  verifyChecksum: function (address) {
    const decoded = bech32.decode(address);
    return decoded && decoded.words.length === 32;
  },
}
