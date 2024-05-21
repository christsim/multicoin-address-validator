var BTCValidator = require('./bitcoin_validator');
var ETHValidator = require('./ethereum_validator');
var TronValidator = require('./tron_validator');
var Base58Validator = require('./base58_validator');

const solanaValidator = (address, currency, networkType) => Base58Validator.isValidAddress(address, {
    ...currency,
    maxLength: 44,
    minLength: 43
}, networkType);

function checkAllValidators(address, currency, networkType) {
    return BTCValidator.isValidAddress(address, currency, networkType) ||
        ETHValidator.isValidAddress(address, currency, networkType) ||
        TronValidator.isValidAddress(address, currency, networkType) ||
        solanaValidator(address, currency, networkType);
}

module.exports = {
    isValidAddress: function (address, currency, opts) {
        if (opts) {
            const chainType = opts.chainType ? opts.chainType.toLowerCase() : '';
            switch (chainType) {
                case 'erc20':
                case 'ethereum':
                    return ETHValidator.isValidAddress(address, currency, opts.networkType);
                case 'omni':
                    return BTCValidator.isValidAddress(address, currency, opts.networkType);
                case 'tron':
                    return TronValidator.isValidAddress(address, currency, opts.networkType);
                case 'solana':
                    return solanaValidator(address, currency, opts.networkType);
            }
        }
        return checkAllValidators(address, currency, opts);
    }
};
