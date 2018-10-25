var cbor = require('cbor');
var bs58 = require('bs58');
var CRC = require('crc');

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

        var tagged = decoded[0];
        var validCrc = decoded[1];
        if (!tagged instanceof cbor.Tagged) {
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
        var crc = CRC.crc32(tagged.value);

        return crc == validCrc;
    }
};
