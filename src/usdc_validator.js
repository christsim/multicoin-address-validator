var ETHValidator = require('./ethereum_validator');
var Base58Validator = require('./base58_validator');

const solanaValidator = (address, currency, networkType) => Base58Validator.isValidAddress(address, {
    ...currency,
    maxLength: 44,
    minLength: 43
}, networkType);

function checkAllValidators(address, currency, networkType) {
    return ETHValidator.isValidAddress(address, currency, networkType) ||
        solanaValidator(address, currency, networkType);
}

module.exports = {
    isValidAddress: function (address, currency, opts) {
        if (opts) {
            switch(opts.chainType) {
                case 'arbitrum':
                case 'avalanche':
                case 'erc20':
                case 'ethereum':
                    return ETHValidator.isValidAddress(address, currency, opts.networkType);
                case 'solana':
                    return solanaValidator(address, currency, opts.networkType);
            }
        }
        return checkAllValidators(address, currency, opts);
    }
};
