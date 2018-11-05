var cbor = require('cbor-js');
var CRC = require('crc');
var base58 = require('./crypto/base58');


function getDecoded(address) {
    try {
        var decoded = base58.decode(address);
        return cbor.decode(new Uint8Array(decoded).buffer);
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

        var tagged = decoded[0];
        var validCrc = decoded[1];
        if (typeof (validCrc) != 'number') {
            return false;
        }

        // get crc of the payload
        var crc = CRC.crc32(tagged);

        return crc == validCrc;
    }
};
