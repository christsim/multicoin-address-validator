var bech32 = require('./crypto/bech32');

// bip 173 bech 32 addresses (https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)
module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        const { networkType = 'prod' } = opts;
        const decoded = bech32.decode(address, bech32.encodings.BECH32);
        if (!decoded) {
            return false;
        }

        const bech32Hrp = decoded.hrp;
        let correctBech32Hrps;
        if (networkType === 'prod' || networkType === 'testnet') {
            correctBech32Hrps = currency.bech32Hrp[networkType];
        } else if (currency.bech32Hrp) {
            correctBech32Hrps = currency.bech32Hrp.prod.concat(currency.bech32Hrp.testnet)
        } else {
            return false;
        }

        if (correctBech32Hrps.indexOf(bech32Hrp) === -1) {
            return false;
        }

        return true;
    }
};
