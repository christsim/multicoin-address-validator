var base58 = require('./base58');
var cryptoUtils = require('./crypto_utils');
var currencies = require('./currencies');

var DEFAULT_CURRENCY_NAME = 'bitcoin',
    DEFAULT_NETWORK_TYPE = 'prod';

var WAValidator = {
    getAddressType: function (address, currency) {
        currency = currency || {};
        // should be 25 bytes per btc address spec and 26 decred
        var expectedLength = currency.expectedLength || 25;
        var hashFunction = currency.hashFunction || 'sha256';
        var decoded;

        try {
            decoded = base58.decode(address);
        } catch (e) {
            // if decoding fails, assume invalid address
            return null;
        }

        var length = decoded.length;

        if (length !== expectedLength) {
            return null;
        }

        var checksum = cryptoUtils.toHex(decoded.slice(length - 4, length)),
            body = cryptoUtils.toHex(decoded.slice(0, length - 4)),
            goodChecksum = this.checksum(hashFunction, body);

        return checksum === goodChecksum ? cryptoUtils.toHex(decoded.slice(0, expectedLength - 24)) : null;
    },

    // Each currency may implement different hashing algorithm
    checksum: function (hashFunction, payload) {
        switch (hashFunction) {
            case 'blake256':
                return cryptoUtils.blake256Checksum(payload);
                break;
            case 'sha256':
            default:
                return cryptoUtils.sha256Checksum(payload);
        }
    },

    validate: function (address, currencyNameOrSymbol, networkType) {
        currencyNameOrSymbol = currencyNameOrSymbol || DEFAULT_CURRENCY_NAME;
        networkType = networkType || DEFAULT_NETWORK_TYPE;

        var correctAddressTypes,
            currency = currencies.getByNameOrSymbol(currencyNameOrSymbol),
            addressType = this.getAddressType(address, currency);

        if(networkType === 'prod' || networkType === 'testnet'){
            correctAddressTypes = currency.addressTypes[networkType]
        } else {
            correctAddressTypes = currency.addressTypes.prod.concat(currency.addressTypes.testnet);
        }

        return correctAddressTypes.indexOf(addressType) >= 0;
    }
};

module.exports = WAValidator;
