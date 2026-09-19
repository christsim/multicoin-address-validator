var baseX = require('base-x');
var crc = require('crc');
var cryptoUtils = require('./crypto/utils');

var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

var base32 = baseX(ALPHABET);
var regexp = new RegExp('^[' + ALPHABET + ']{56}$');
var ed25519PublicKeyVersionByte = (6 << 3);

// Muxed accounts (SEP-23, CAP-27): an ed25519 public key plus a 64-bit id, 69 characters starting with M
// https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0023.md
var muxedRegexp = new RegExp('^M[' + ALPHABET + ']{68}$');
var muxedEd25519VersionByte = (12 << 3);
var MUXED_ADDRESS_LENGTH = 43; // version byte, 32-byte key, 8-byte id, 2-byte checksum

function swap16(number) {
    var lower = number & 0xFF;
    var upper = (number >> 8) & 0xFF;
    return (lower << 8) | upper;
}

// RFC 4648 base32 without padding. Returns null when the unused bits of the last character are not zero.
function decodeBase32(address) {
    var bytes = [];
    var buffer = 0;
    var bits = 0;
    for (var i = 0; i < address.length; i++) {
        buffer = ((buffer << 5) | ALPHABET.indexOf(address[i])) & 0xFFF;
        bits += 5;
        if (bits >= 8) {
            bits -= 8;
            bytes.push((buffer >> bits) & 0xFF);
        }
    }
    if ((buffer & ((1 << bits) - 1)) !== 0) {
        return null;
    }
    return bytes;
}

function isValidChecksum(bytes) {
    var computedChecksum = cryptoUtils.numberToHex(swap16(crc.crc16xmodem(Buffer.from(bytes.slice(0, -2)))), 4);
    var checksum = cryptoUtils.toHex(bytes.slice(-2));

    return computedChecksum === checksum;
}

module.exports = {
    isValidAddress: function (address) {
        if (regexp.test(address)) {
            return this.verifyChecksum(address);
        }

        if (muxedRegexp.test(address)) {
            return this.verifyMuxedAddress(address);
        }

        return false;
    },

    verifyChecksum: function (address) {
        // based on https://github.com/stellar/js-stellar-base/blob/master/src/strkey.js#L126
        var bytes = base32.decode(address);
        if (bytes[0] !== ed25519PublicKeyVersionByte) {
            return false;
        }

        return isValidChecksum(bytes);
    },

    verifyMuxedAddress: function (address) {
        var bytes = decodeBase32(address);
        if (!bytes || bytes.length !== MUXED_ADDRESS_LENGTH || bytes[0] !== muxedEd25519VersionByte) {
            return false;
        }

        return isValidChecksum(bytes);
    }
};
