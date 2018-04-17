var XRPValidator = require('./ripple_validator');
var ETHValidator = require('./ethereum_validator');

// defines P2PKH and P2SH address types for standard (prod) and testnet networks
var CURRENCIES = [{
    name: 'bitcoin',
    symbol: 'btc',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']}
},{
    name: 'bitcoincash',
    symbol: 'bch',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']}
},{
    name: 'litecoin',
    symbol: 'ltc',
    addressTypes: {prod: ['30', '05', '32'], testnet: ['6f', 'c4']}
},{
    name: 'peercoin',
    symbol: 'ppc',
    addressTypes: {prod: ['37', '75'], testnet: ['6f', 'c4']}
},{
    name: 'dogecoin',
    symbol: 'doge',
    addressTypes: {prod: ['1e', '16'], testnet: ['71', 'c4']}
},{
    name: 'beavercoin',
    symbol: 'bvc',
    addressTypes: {prod: ['19', '05'], testnet: ['6f', 'c4']}
},{
    name: 'freicoin',
    symbol: 'frc',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']}
},{
    name: 'protoshares',
    symbol: 'pts',
    addressTypes: {prod: ['38', '05'], testnet: ['6f', 'c4']}
},{
    name: 'megacoin',
    symbol: 'mec',
    addressTypes: {prod: ['32', '05'], testnet: ['6f', 'c4']}
},{
    name: 'primecoin',
    symbol: 'xpm',
    addressTypes: {prod: ['17', '53'], testnet: ['6f', 'c4']}
},{
    name: 'auroracoin',
    symbol: 'aur',
    addressTypes: {prod: ['17', '05'], testnet: ['6f', 'c4']}
},{
    name: 'namecoin',
    symbol: 'nmc',
    addressTypes: {prod: ['34'], testnet: []}
},{
    name: 'biocoin',
    symbol: 'bio',
    addressTypes: {prod: ['19', '14'], testnet: ['6f', 'c4']}
},{
    name: 'garlicoin',
    symbol: 'grlc',
    addressTypes: {prod: ['26', '05'], testnet: ['6f', 'c4']}
},{
    name: 'vertcoin',
    symbol: 'vtc',
    addressTypes: {prod: ['0x', '47'], testnet: ['6f', 'c4']}
},{
    name: 'bitcoingold',
    symbol: 'btg',
    addressTypes: {prod: ['26', '17'], testnet: ['6f', 'c4']}
},{
    name: 'komodo',
    symbol: 'kmd',
    addressTypes: {prod: ['3c', '55'], testnet: ['0','5']}
},{
    name: 'bitcoinz',
    symbol: 'btcz',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']}
},{
    name: 'bitcoinprivate',
    symbol: 'btcp',
    expectedLength: 26,
    addressTypes: {prod: ['1325','13af'], testnet: ['1957', '19e0']}
},{
    name: 'hush',
    symbol: 'hush',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']}
},{
    name: 'snowgem',
    symbol: 'sng',
    expectedLength: 26,
    addressTypes: {prod: ['1c28','1c2d'], testnet: ['1d25', '1cba']}
},{
    name: 'zcash',
    symbol: 'zec',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']}
},{
    name: 'zclassic',
    symbol: 'zcl',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']}
},{
    name: 'zencash',
    symbol: 'zen',
    expectedLength: 26,
    addressTypes: {prod: ['2089','2096'], testnet: ['2092','2098']}
},{
    name: 'votecoin',
    symbol: 'vot',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']}
},{
    name: 'decred',
    symbol: 'dcr',
    addressTypes: {prod: ['073f', '071a'], testnet: ['0f21', '0efc']},
    hashFunction: 'blake256',
    expectedLength: 26
},{
    name: 'digibyte',
    symbol: 'dgb',
    addressTypes: {prod: ['1e'], testnet: []},
},{
    name: 'ethereum',
    symbol: 'eth',
    validator: ETHValidator,
},{
    name: 'etherzero',
    symbol: 'etz',
    validator: ETHValidator,
},{
    name: 'ethereumclassic',
    symbol: 'etc',
    validator: ETHValidator,
},{
    name: 'callisto',
    symbol: 'clo',
    validator: ETHValidator,
},{
    name: 'ripple',
    symbol: 'xrp',
    validator: XRPValidator,
},{
    name: 'dash',
    symbol: 'dash',
    addressTypes: {prod: ['4c', '10'], testnet: ['8c', '13']}
},{
    name: 'neo',
    symbol: 'neo',
    addressTypes: {prod: ['17'], testnet: []}
},{
    name: 'neogas',
    symbol: 'gas',
    addressTypes: {prod: ['17'], testnet: []}
},{
    name: 'qtum',
    symbol: 'qtum',
    addressTypes: {prod: ['3a', '32'], testnet: ['6f', 'c4']}
}];


module.exports = {
    getByNameOrSymbol: function (currencyNameOrSymbol) {
        var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
        for (var i = 0; i < CURRENCIES.length; i++) {
            var currency = CURRENCIES[i];
            if(currency.name === nameOrSymbol || currency.symbol === nameOrSymbol) {
                return currency;
            }
        }
        return null;
    }
};
