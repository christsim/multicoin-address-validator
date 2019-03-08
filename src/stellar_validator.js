var baseX = require('base-x');
var crc = require('crc');
var cryptoUtils = require('./crypto/utils');

 var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

 var base32 = baseX(ALPHABET);
var regexp = new RegExp('^[' + ALPHABET + ']{56}$');
var ed25519PublicKeyVersionByte = (6 << 3);

 function swap16(number) {
    var lower = number & 0xFF;
    var upper = (number >> 8) & 0xFF;
    return (lower << 8) | upper;
}

 function numberToHex(number) {
    var hex = number.toString(16);
    if(hex.length % 2 === 1) {
        hex = '0' + hex;
    }
    return hex;
}

 module.exports = {
    isValidAddress: function (address) {
        if (regexp.test(address)) {
            return this.verifyChecksum(address);
        }

         return false;
    },

     verifyChecksum: function (address) {
        // based on https://github.com/stellar/js-stellar-base/blob/master/src/strkey.js#L126
        var bytes = base32.decode(address);
        if (bytes[0] !== ed25519PublicKeyVersionByte) {
            return false;
        }

         var computedChecksum = numberToHex(swap16(crc.crc16xmodem(bytes.slice(0, -2))));
        var checksum = cryptoUtils.toHex(bytes.slice(-2));

         return computedChecksum === checksum
    }
};