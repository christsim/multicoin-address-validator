var cryptoUtils = require('./crypto/utils');
var bech32 = require('./crypto/bech32');
var BTCValidator = require('./bitcoin_validator');

function validateAddress(address, currency, opts) {
    var networkType = opts ? opts.networkType : ''
    var prefix = 'bitcoincash';
    var regexp = new RegExp(currency.regexp);
    var raw_address;

    var res = address.split(':');
    if (res.length === 1) {
        raw_address = address
    } else {
        if (res[0] !== 'bitcoincash') {
            return false;
        }
        raw_address = res[1];
    }

    if (!regexp.test(raw_address)) {
        return false;
    }

    if (raw_address.toLowerCase() != raw_address && raw_address.toUpperCase() != raw_address) {
        return false;
    }

    var decoded = cryptoUtils.base32.b32decode(raw_address);
    if (networkType === 'testnet') {
        prefix = 'bchtest';
    }

    try {
        if (bech32.verifyChecksum(prefix, decoded, bech32.encodings.BECH32)) {
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
