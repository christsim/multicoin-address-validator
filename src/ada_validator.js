var cryptoUtils = require('./crypto/utils');
var base58 = require('./crypto/base58');

const bs58 = require('bs58');
const CRC = require('crc');
const cbor = require('cbor');
const Tagged = cbor.Tagged;

function getDecoded(address) {
    try {
        var decoded = bs58.decode(address);
        return decoded = cbor.decode(decoded);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}

module.exports = {
    isValidAddress: function (address) {
        var decoded = getDecoded(address);

        if (!decoded || (!Array.isArray(decoded) && decoded.length != 2)) {
            return false;
        }

        var [tagged, validCrc] = decoded;
        if (!tagged instanceof Tagged) {
            return false;
        }
        if (typeof (validCrc) != 'number') {
            return false;
        }

        // not sure what this is
        if (tagged.tag != 24) {
            return false;
        }

        // get crc of the payload
        let crc = CRC.crc32(tagged.value);

        return crc == validCrc;
    }
};
