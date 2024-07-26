if (!global.Buffer) {
    global.Buffer = require('buffer').Buffer;
}

var currencies = require('./currencies');

var DEFAULT_CURRENCY_NAME = 'bitcoin';

module.exports = {
    //validate: function (address, currencyNameOrSymbol, networkType) {
    validate: function (address, currencyNameOrSymbol, opts) {
        var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

        if (opts && opts.chainType) { // First try to validate using the chainType
            var normalizedChainType = opts.chainType.toLowerCase();
            var chainTypeConfig = currencies.chainTypeToValidator[normalizedChainType];
            if (chainTypeConfig) {
                return chainTypeConfig.validator.isValidAddress(address, { ...opts, ...chainTypeConfig }, opts);
            }
        }

        if (currency && currency.validator) {
            if (opts && typeof opts === 'string') {
                return currency.validator.isValidAddress(address, currency, { networkType: opts });
            }
            return currency.validator.isValidAddress(address, currency, opts);
        }

        throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
    },
    getCurrencies: function () {
        return currencies.getAll();
    },
    findCurrency: function(symbol) {
        return currencies.getByNameOrSymbol(symbol) || null ;
    }
};
