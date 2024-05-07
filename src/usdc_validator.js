var ETHValidator = require('./ethereum_validator');
var Base58Validator = require('./base58_validator');

function checkAllValidators(address, currency, networkType) {
    return ETHValidator.isValidAddress(address, currency, networkType) || Base58Validator.isValidAddress(address, currency, networkType);
}

module.exports = {
    isValidAddress: function (address, currency, opts) {
        if (opts) {
            switch(opts.chainType) {
                case 'erc20':
                case 'ethereum':
                    return ETHValidator.isValidAddress(address, currency, opts.networkType);
                case 'solana':
                    return Base58Validator.isValidAddress(address, currency, opts.networkType);
            }
        }
        return checkAllValidators(address, currency, opts);
    }
};
