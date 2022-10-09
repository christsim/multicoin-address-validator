var bech32 = require('./crypto/bech32');
var ETHValidator = require('./ethereum_validator');

const isValidAddress = function(address) {
    if (address && address.substring(0, 3) !== 'one') {
        return ETHValidator.isValidAddress(address);
    }

    const decoded = bech32.decode(address, bech32.encodings.BECH32);

    if (decoded && decoded.hrp.toLowerCase() === 'one') {
      return true;
    }

    return false;
}

module.exports = {
    isValidAddress
};
