var currencies = require('./currencies');

var DEFAULT_CURRENCY_NAME = 'bitcoin';

module.exports = {
    //validate: function (address, currencyNameOrSymbol, networkType) {
    validate: function (address, currencyNameOrSymbol, opts) {
        var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

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
