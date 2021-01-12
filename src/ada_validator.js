var cbor = require('cbor-js');
var CRC = require('crc');
var base58 = require('./crypto/base58');
var bech32 = require('./crypto/bech32');

function getDecoded(address) {
    try {
        var decoded = base58.decode(address);
        return cbor.decode(new Uint8Array(decoded).buffer);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}

function isValidAddressV1(address) {
    var decoded = getDecoded(address);

    if (!decoded || (!Array.isArray(decoded) && decoded.length != 2)) {
        return false;
    }

    var tagged = decoded[0];
    var validCrc = decoded[1];
    if (typeof (validCrc) != 'number') {
        return false;
    }

    // get crc of the payload
    var crc = CRC.crc32(tagged);

    return crc == validCrc;
}

function isValidAddressShelley(address, currency, opts) {
    const {networkType = 'prod'} = opts;
    const decoded = bech32.decode(address);
    if(!decoded) {
        return false;
    }

    const bech32Hrp = decoded.hrp;
    let correctBech32Hrps;
    if (networkType === 'prod' || networkType === 'testnet') {
        correctBech32Hrps = currency.bech32Hrp[networkType];
    } else if (currency.bech32Hrp) {
        correctBech32Hrps = currency.bech32Hrp.prod.concat(currency.bech32Hrp.testnet)
    } else {
        return false;
    }

    if (correctBech32Hrps.indexOf(bech32Hrp) === -1) {
        return false;
    }

    return true;
}

module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        return isValidAddressV1(address) || isValidAddressShelley(address, currency, opts);
    }
};
