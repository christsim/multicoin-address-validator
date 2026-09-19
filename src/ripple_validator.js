var cryptoUtils = require('./crypto/utils');
var baseX = require('base-x');

var ALLOWED_CHARS = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';

var codec = baseX(ALLOWED_CHARS);
var regexp = new RegExp('^r[' + ALLOWED_CHARS + ']{27,35}$');

// X-addresses (XLS-5d) pack the account and an optional destination tag into one string:
// 2-byte prefix, 20-byte account ID, 1 flags byte, 8-byte tag (little endian), 4-byte checksum.
// https://github.com/XRPLF/XRPL-Standards/tree/master/XLS-0005-tagged-addresses
var xAddressRegexp = new RegExp('^[XT][' + ALLOWED_CHARS + ']{45,50}$');
var X_ADDRESS_LENGTH = 35;
var X_ADDRESS_PREFIXES = {
    prod: [0x05, 0x44],     // starts with X
    testnet: [0x04, 0x93]   // starts with T
};
var DEFAULT_NETWORK_TYPE = 'prod';

function hasPrefix(bytes, prefix) {
    return bytes[0] === prefix[0] && bytes[1] === prefix[1];
}

function isValidXAddressNetwork(bytes, networkType) {
    switch (networkType) {
        case 'prod':
            return hasPrefix(bytes, X_ADDRESS_PREFIXES.prod);
        case 'testnet':
            return hasPrefix(bytes, X_ADDRESS_PREFIXES.testnet);
        case 'both':
            return hasPrefix(bytes, X_ADDRESS_PREFIXES.prod) || hasPrefix(bytes, X_ADDRESS_PREFIXES.testnet);
        default:
            return false;
    }
}

function areZero(bytes) {
    for (var i = 0; i < bytes.length; i++) {
        if (bytes[i] !== 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    /**
     * ripple address validation
     */
    isValidAddress: function (address, currency, opts) {
        if (regexp.test(address)) {
            return this.verifyChecksum(address);
        }

        if (xAddressRegexp.test(address)) {
            var networkType = (opts && opts.networkType) || DEFAULT_NETWORK_TYPE;
            return this.verifyXAddress(address, networkType);
        }

        return false;
    },

    verifyChecksum: function (address) {
        var bytes = codec.decode(address);
        var computedChecksum = cryptoUtils.sha256Checksum(cryptoUtils.toHex(bytes.slice(0, -4)));
        var checksum = cryptoUtils.toHex(bytes.slice(-4));

        return computedChecksum === checksum
    },

    verifyXAddress: function (address, networkType) {
        var bytes = codec.decode(address);
        if (bytes.length !== X_ADDRESS_LENGTH || !isValidXAddressNetwork(bytes, networkType)) {
            return false;
        }

        var flags = bytes[22];
        var tag = bytes.slice(23, 31);
        // no tag: all 8 tag bytes are zero; 32-bit tag: the upper 4 bytes are zero.
        // Other flags (including the reserved 64-bit tag) are not valid on the XRP Ledger.
        if (flags === 0) {
            if (!areZero(tag)) {
                return false;
            }
        } else if (flags === 1) {
            if (!areZero(tag.slice(4))) {
                return false;
            }
        } else {
            return false;
        }

        return this.verifyChecksum(address);
    }
};
