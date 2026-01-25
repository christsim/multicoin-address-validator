var ETHValidator = require('./ethereum_validator');
var BIP173Validator = require('./bip173_validator');

module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        // Native Injective bech32 addresses (inj1...)
        if (address.startsWith('inj1')) {
            return BIP173Validator.isValidAddress(address, currency, opts);
        }
        // EVM addresses (0x...)
        return ETHValidator.isValidAddress(address, currency, opts);
    }
};
