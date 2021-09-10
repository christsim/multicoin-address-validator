var BTCValidator = require('./bitcoin_validator');
var ETHValidator = require('./ethereum_validator');
var TRXValidator = require('./tron_validator');

function checkAllValidators(address, currency, networkType) {
    return BTCValidator.isValidAddress(address, currency, networkType)
        || ETHValidator.isValidAddress(address, currency, networkType)
        || TRXValidator.isValidAddress(address, currency, networkType);
}

module.exports = {
    isValidAddress: function (address, currency, opts) {
        if (opts) {
            switch(opts.chainType) {
                case 'erc20':
                    return ETHValidator.isValidAddress(address, currency, opts.networkType);
                case 'omni':
                    return BTCValidator.isValidAddress(address, currency, opts.networkType);
                case 'tron':
                    return TRXValidator.isValidAddress(address, currency, opts.networkType);
            }
        }
        return checkAllValidators(address, currency, opts);
    }
};
