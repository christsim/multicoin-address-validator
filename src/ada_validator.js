var cbor = require('cbor-js');
var bs58 = require('bs58');
var CRC = require('crc');

function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}

function getDecoded(address) {
    try {
        var decoded = bs58.decode(address);
        return decoded = cbor.decode(toArrayBuffer(decoded));
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
