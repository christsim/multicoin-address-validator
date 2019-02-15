var cryptoUtils = require('./crypto/utils');
var bech32 = require('./crypto/bech32');
var BTCValidator = require('./bitcoin_validator');

function validateAddress(address, currency, networkType) {
    var prefix = 'bitcoincash';
    var regexp = new RegExp(currency.regexp);

    if (!regexp.test(address)) {
        return false;
    }

    if (address.toLowerCase() != address && address.toUpperCase() != address) {
        return false;
    }

    var decoded = cryptoUtils.base32.b32decode(address);
    if (networkType === 'testnet') {
        prefix = 'bchtest';
    }

    try {
        if (bech32.verifyChecksum(prefix, decoded)) {
            return false;    
        }
    } catch(e) {
        return false;
    }
    return true;
}

module.exports = {
    isValidAddress: function (address, currency, networkType) {
        return validateAddress(address, currency, networkType) || BTCValidator.isValidAddress(address, currency, networkType);
    }
}