var cryptoUtils = require('./crypto/utils');

var DEFAULT_NETWORK_TYPE = 'prod';

var CHECKSUM_HASH_LENGTH = 4;

function checkNetworkType(opts, network) {
    const { networkType = DEFAULT_NETWORK_TYPE } = opts;

    var expectedNetworkType = "f";
    if (networkType == 'testnet') {
        expectedNetworkType = "t";
    }
    return network == expectedNetworkType;
}

function isValidP0Address(address, currency, opts) {
    var match = address.match(/^(?<network>[ft])0[0-9]{1,20}$/);
    if (match == null) {
        return false;
    }

    return checkNetworkType(opts, match.groups["network"]);
}

function isValidP1Address(address, currency, opts) {
    var match = address.toLowerCase().match(/^(?<network>[ft])1[0-9a-zA-Z]+$/);
    if (match == null) {
        return false;
    }

    if (!checkNetworkType(opts, match.groups["network"])) {
        return false;
    }

    return testChecksum(address, 1);
}

function isValidP2Address(address, currency, opts) {
    var match = address.toLowerCase().match(/^(?<network>[ft])2[0-9a-zA-Z]{39}$/);
    if (match == null) {
        return false;
    }

    if (!checkNetworkType(opts, match.groups["network"])) {
        return false;
    }

    return testChecksum(address, 2);
}

function isValidP3Address(address, currency, opts) {
    var match = address.toLowerCase().match(/^(?<network>[ft])3[0-9a-zA-Z]{84}$/);
    if (match == null) {
        return false;
    }

    if (!checkNetworkType(opts, match.groups["network"])) {
        return false;
    }

    return testChecksum(address, 3);
}

function testChecksum(address, protocol) {
    // Based on:
    // https://github.com/filecoin-project/go-address/blob/f2023ef3f5BBC513599a3fbf19c4770485146a07/address.go#L318-L338
    var payloadChecksum = cryptoUtils.base32.b32decode(address.slice(2).toUpperCase());

    if (payloadChecksum.length - CHECKSUM_HASH_LENGTH < 0) {
        return false;
    }

    var checksumIndex = payloadChecksum.length - CHECKSUM_HASH_LENGTH;
    var payload = payloadChecksum.slice(0, checksumIndex);
    var checksum = cryptoUtils.byteArray2hexStr(payloadChecksum.slice(checksumIndex)).toLowerCase();

    var hash_payload = new Uint8Array(payload.length + 1);
    hash_payload[0] = protocol;
    hash_payload.set(payload, 1);

    var calcChecksum = cryptoUtils.blake2b(hash_payload, CHECKSUM_HASH_LENGTH);

    return calcChecksum == checksum;
}

module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        var match = address.match(/^.(?<protocol>[0-3])/);
        if (match == null) {
            return false;
        }

        switch(match.groups["protocol"]) {
        case "0":
            return isValidP0Address(address, currency, opts);
        case "1":
            return isValidP1Address(address, currency, opts);
        case "2":
            return isValidP2Address(address, currency, opts);
        case "3":
            return isValidP3Address(address, currency, opts);
        }
    }
};
