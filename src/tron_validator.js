var cryptoUtils = require('./crypto/utils');

function decodeBase58Address(base58String) {
    if (typeof (base58String) !== 'string') {
        return false;
    }
    if (base58String.length !== 34) {
        return false;
    }

    try {
        var address = cryptoUtils.base58(base58String);
    } catch (e) {
        return false
    }

    var len = address.length;
    var offset = len - 4;
    var checkSum = address.slice(offset);
    address = address.slice(0, offset);
    var hash0 = cryptoUtils.sha256(cryptoUtils.byteArray2hexStr(address));
    var hash1 = cryptoUtils.hexStr2byteArray(cryptoUtils.sha256(hash0));
    var checkSum1 = hash1.slice(0, 4);
    if (checkSum[0] === checkSum1[0] && checkSum[1] === checkSum1[1] && checkSum[2]
        === checkSum1[2] && checkSum[3] === checkSum1[3]
    ) {
        return address;
    }

    return false;
}

module.exports = {
    /**
     * tron address validation
     */
    isValidAddress: function (mainAddress, currency, opts) {
        var address = decodeBase58Address(mainAddress);

        if (!address) {
            return false;
        }

        if (address.length !== 21) {
            return false;
        }

        const TRON_ADDRESS_VERSION_BYTE = 0x41;

        // Check if the address starts with the correct byte 0x41, ( decimal 65 )
        return address[0] === TRON_ADDRESS_VERSION_BYTE;
    }
};
