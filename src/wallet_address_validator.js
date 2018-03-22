var base58 = require('./crypto/base58');
var cryptoUtils = require('./crypto/utils');
var currencies = require('./currencies');
var ETHValidator = require('./ethereum_validator');

var DEFAULT_CURRENCY_NAME = 'bitcoin';
var DEFAULT_NETWORK_TYPE = 'prod';

function getDecoded(address) {
    try {
        return base58.decode(address);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}

module.exports = {
    getAddressType: function (address, currency) {
        currency = currency || {};
        // should be 25 bytes per btc address spec and 26 decred
        var expectedLength = currency.expectedLength || 25;
        var hashFunction = currency.hashFunction || 'sha256';
        var decoded = getDecoded(address);

        if (decoded) {
            var length = decoded.length;

            if (length !== expectedLength) {
                return null;
            }

            var checksum = cryptoUtils.toHex(decoded.slice(length - 4, length)),
                body = cryptoUtils.toHex(decoded.slice(0, length - 4)),
                goodChecksum = this.checksum(hashFunction, body);

            return checksum === goodChecksum ? cryptoUtils.toHex(decoded.slice(0, expectedLength - 24)) : null;
        }
        
        return null;
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

        var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol);

        if (currency.validator) {
            return currency.validator.isValidAddress(address);
        }

        if (currency.eip55) {
            return ETHValidator.isAddress(address);
        }
        
        var correctAddressTypes;
        var addressType = this.getAddressType(address, currency);

        if (networkType === 'prod' || networkType === 'testnet'){
            correctAddressTypes = currency.addressTypes[networkType]
        } else {
            correctAddressTypes = currency.addressTypes.prod.concat(currency.addressTypes.testnet);
        }

        return correctAddressTypes.indexOf(addressType) >= 0;
    }
};
