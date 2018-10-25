var XRPValidator = require('./ripple_validator');
var ETHValidator = require('./ethereum_validator');
var BTCValidator = require('./bitcoin_validator');
var ADAValidator = require('./ada_validator');
var XMRValidator = require('./monero_validator');

// defines P2PKH and P2SH address types for standard (prod) and testnet networks
var CURRENCIES = [{
    name: 'bitcoin',
    symbol: 'btc',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'bitcoincash',
    symbol: 'bch',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'litecoin',
    symbol: 'ltc',
    addressTypes: {prod: ['30', '05', '32'], testnet: ['6f', 'c4', '3a']},
    validator: BTCValidator
},{
    name: 'peercoin',
    symbol: 'ppc',
    addressTypes: {prod: ['37', '75'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'dogecoin',
    symbol: 'doge',
    addressTypes: {prod: ['1e', '16'], testnet: ['71', 'c4']},
    validator: BTCValidator
},{
    name: 'beavercoin',
    symbol: 'bvc',
    addressTypes: {prod: ['19', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator,
},{
    name: 'freicoin',
    symbol: 'frc',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'protoshares',
    symbol: 'pts',
    addressTypes: {prod: ['38', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'megacoin',
    symbol: 'mec',
    addressTypes: {prod: ['32', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'primecoin',
    symbol: 'xpm',
    addressTypes: {prod: ['17', '53'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'auroracoin',
    symbol: 'aur',
    addressTypes: {prod: ['17', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'namecoin',
    symbol: 'nmc',
    addressTypes: {prod: ['34'], testnet: []},
    validator: BTCValidator
},{
    name: 'biocoin',
    symbol: 'bio',
    addressTypes: {prod: ['19', '14'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'garlicoin',
    symbol: 'grlc',
    addressTypes: {prod: ['26', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'vertcoin',
    symbol: 'vtc',
    addressTypes: {prod: ['0x', '47'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'bitcoingold',
    symbol: 'btg',
    addressTypes: {prod: ['26', '17'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'komodo',
    symbol: 'kmd',
    addressTypes: {prod: ['3c', '55'], testnet: ['0','5']},
    validator: BTCValidator
},{
    name: 'bitcoinz',
    symbol: 'btcz',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'bitcoinprivate',
    symbol: 'btcp',
    expectedLength: 26,
    addressTypes: {prod: ['1325','13af'], testnet: ['1957', '19e0']},
    validator: BTCValidator
},{
    name: 'hush',
    symbol: 'hush',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'snowgem',
    symbol: 'sng',
    expectedLength: 26,
    addressTypes: {prod: ['1c28','1c2d'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'zcash',
    symbol: 'zec',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'zclassic',
    symbol: 'zcl',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'zencash',
    symbol: 'zen',
    expectedLength: 26,
    addressTypes: {prod: ['2089','2096'], testnet: ['2092','2098']},
    validator: BTCValidator
},{
    name: 'votecoin',
    symbol: 'vot',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'decred',
    symbol: 'dcr',
    addressTypes: {prod: ['073f', '071a'], testnet: ['0f21', '0efc']},
    hashFunction: 'blake256',
    expectedLength: 26,
    validator: BTCValidator
},{
    name: 'gamecredits',
    symbol: 'game',
    addressTypes: {prod: ['26', '05'], testnet: []},
    validator: BTCValidator
},{
    name: 'pivx',
    symbol: 'pivx',
    addressTypes: {prod: ['1e', '0d'], testnet: []},
    validator: BTCValidator
},{
    name: 'SolarCoin',
    symbol: 'slr',
    addressTypes: {prod: ['12', '05'], testnet: []},
    validator: BTCValidator
},{
    name: 'MonaCoin',
    symbol: 'mona',
    addressTypes: {prod: ['32', '37'], testnet: []},
    validator: BTCValidator
},{
    name: 'digibyte',
    symbol: 'dgb',
    addressTypes: {prod: ['1e'], testnet: []},
    validator: BTCValidator
},{
    name: 'Tether',
    symbol: 'usdt',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'ripple',
    symbol: 'xrp',
    validator: XRPValidator,
},{
    name: 'dash',
    symbol: 'dash',
    addressTypes: {prod: ['4c', '10'], testnet: ['8c', '13']},
    validator: BTCValidator
},{
    name: 'neo',
    symbol: 'neo',
    addressTypes: {prod: ['17'], testnet: []},
    validator: BTCValidator
},{
    name: 'neogas',
    symbol: 'gas',
    addressTypes: {prod: ['17'], testnet: []},
    validator: BTCValidator
},{
    name: 'qtum',
    symbol: 'qtum',
    addressTypes: {prod: ['3a', '32'], testnet: ['6f', 'c4']},
    validator: BTCValidator
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
    name: 'bankex',
    symbol: 'bkx',
    validator: ETHValidator
},{
    name: 'cardano',
    symbol: 'ada',
    validator: ADAValidator
},{
    name: 'monero',
    symbol: 'xmr',
    addressTypes: {prod: ['18'], testnet: ['53']},
    iAddressTypes: {prod: ['19'], testnet: ['54']},
    validator: XMRValidator
},{
    name: 'Aragon',
    symbol: 'ant',
    validator: ETHValidator
},{
    name: 'Basic Attention Token',
    symbol: 'bat',
    validator: ETHValidator
},{
    name: 'Bancor',
    symbol: 'bnt',
    validator: ETHValidator
},{
    name: 'cvc',
    symbol: 'Civic',
    validator: ETHValidator
},{
    name: 'dnt',
    symbol: 'District0x',
    validator: ETHValidator
},{
    name: 'Gnosis',
    symbol: 'gno',
    validator: ETHValidator
},{
    name: 'Golem',
    symbol: 'gnt',
    validator: ETHValidator
},{
    name: 'Matchpool',
    symbol: 'gup',
    validator: ETHValidator
},{
    name: 'Melon',
    symbol: 'mln',
    validator: ETHValidator
},{
    name: 'Numeraire',
    symbol: 'nmr',
    validator: ETHValidator
},{
    name: 'OmiseGO',
    symbol: 'omg',
    validator: ETHValidator
},{
    name: 'TenX',
    symbol: 'pay',
    validator: ETHValidator
},{
    name: 'Ripio Credit Network',
    symbol: 'rcn',
    validator: ETHValidator
},{
    name: 'Augur',
    symbol: 'rep',
    validator: ETHValidator
},{
    name: 'Status',
    symbol: 'snt',
    validator: ETHValidator
},{
    name: 'Swarm City',
    symbol: 'swt',
    validator: ETHValidator
},{
    name: 'TrueUSD',
    symbol: 'tusd',
    validator: ETHValidator
},{
    name: 'Wings',
    symbol: 'wings',
    validator: ETHValidator
},{
    name: '0x',
    symbol: 'zrx',
    validator: ETHValidator
},{
    name: 'Expanse',
    symbol: 'exp',
    validator: ETHValidator
}];


module.exports = {
    getByNameOrSymbol: function (currencyNameOrSymbol) {
        var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
        for (var i = 0; i < CURRENCIES.length; i++) {
            var currency = CURRENCIES[i];
            if(currency.name.toLowerCase() === nameOrSymbol || currency.symbol.toLowerCase() === nameOrSymbol) {
                return currency;
            }
        }
        return null;
    }
};


CURRENCIES.forEach(c => console.log(c.symbol));


