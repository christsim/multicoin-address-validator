var crc = require('crc');
var cryptoUtils = require('./crypto/utils');

// TON addresses, as described in TEP-2: https://github.com/ton-blockchain/TEPs/blob/master/text/0002-address.md
var DEFAULT_NETWORK_TYPE = 'prod';

// user-friendly form: 36 bytes in base64url (or standard base64), always 48 characters
var friendlyRegexp = /^[A-Za-z0-9+/_-]{48}$/;
// raw form: workchain 0 (basechain) or -1 (masterchain), then 256 bits of account id in hex. It has no checksum.
var rawRegexp = /^(0|-1):[0-9a-fA-F]{64}$/;

var BOUNCEABLE_TAG = 0x11;
var NON_BOUNCEABLE_TAG = 0x51;
var TESTNET_ONLY_FLAG = 0x80;
var BASECHAIN = 0x00;
var MASTERCHAIN = 0xff;

function isValidNetwork(isTestnetOnly, networkType) {
    switch (networkType) {
        case 'prod':
            return !isTestnetOnly;
        case 'testnet':
            return isTestnetOnly;
        case 'both':
            return true;
        default:
            return false;
    }
}

function isValidFriendlyAddress(address, networkType) {
    // 1 tag byte, 1 workchain byte, 32-byte account id, 2-byte CRC16 (XModem / CCITT) checksum, big endian
    var bytes = Buffer.from(address.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
    if (bytes.length !== 36) {
        return false;
    }

    var tag = bytes[0] & ~TESTNET_ONLY_FLAG;
    if (tag !== BOUNCEABLE_TAG && tag !== NON_BOUNCEABLE_TAG) {
        return false;
    }
    if (bytes[1] !== BASECHAIN && bytes[1] !== MASTERCHAIN) {
        return false;
    }
    if (!isValidNetwork((bytes[0] & TESTNET_ONLY_FLAG) !== 0, networkType)) {
        return false;
    }

    var computedChecksum = cryptoUtils.numberToHex(crc.crc16xmodem(bytes.slice(0, 34)), 4);
    var checksum = cryptoUtils.toHex(bytes.slice(34));

    return computedChecksum === checksum;
}

module.exports = {
    isValidAddress: function (address, currency, opts) {
        var networkType = (opts && opts.networkType) || DEFAULT_NETWORK_TYPE;

        if (friendlyRegexp.test(address)) {
            return isValidFriendlyAddress(address, networkType);
        }

        return rawRegexp.test(address);
    }
};
