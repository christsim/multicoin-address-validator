var bech32 = require('./crypto/bech32');

const validHrp = ['xch', 'txch']

const isValidAddress = function(address) {
    const decoded = bech32.decode(address, bech32.encodings.BECH32M);

    if (decoded && validHrp.includes(decoded.hrp.toLowerCase())) {
      return true
    }

    return false
}

module.exports = {
    isValidAddress
};
