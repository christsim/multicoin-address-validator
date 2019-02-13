# wallet-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**. 

Forked from [ryanralph/altcoin-address](https://github.com/ryanralph/altcoin-address).

**File size is ~17 kB (minifed and gzipped)**.

## Installation

### NPM
```
npm install multicoin-address-validator
```

### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

## API

##### validate (address [, currency = 'bitcoin'[, networkType = 'prod']])

###### Parameters
* address - Wallet address to validate.
* currency - Optional. Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
* networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing. 

> Returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.

### Supported crypto currencies

* 0x/zrx `'0x'` or `'zrx'`
* Aragon/ant `'Aragon'` or `'ant'`
* Augur/rep `'Augur'` or `'rep'`
* AuroraCoin/aur `'AuroraCoin'` or `'aur'`
* Bancor/bnt `'Bancor'` or `'bnt'`
* Bankex/bkx `'Bankex'` or `'bkx'`
* Basic Attention Token/bat `'Basic Attention Token'` or `'bat'`
* BeaverCoin/bvc `'BeaverCoin'` or `'bvc'`
* BioCoin/bio `'BioCoin'` or `'bio'`
* Bitcoin/btc `'Bitcoin'` or `'btc'`
* BitcoinCash/bch `'BitcoinCash'` or `'bch'`
* BitcoinGold/btg `'BitcoinGold'` or `'btg'`
* BitcoinPrivate/btcp `'BitcoinPrivate'` or `'btcp'`
* BitcoinZ/btcz `'BitcoinZ'` or `'btcz'`
* Callisto/clo `'Callisto'` or `'clo'`
* Cardano/ada `'Cardano'` or `'ada'`
* Civic/cvc `'Civic'` or `'cvc'`
* Dash/dash `'Dash'` or `'dash'`
* Decred/dcr `'Decred'` or `'dcr'`
* DigiByte/dgb `'DigiByte'` or `'dgb'`
* District0x/dnt `'District0x'` or `'dnt'`
* DogeCoin/doge `'DogeCoin'` or `'doge'`
* Ethereum/eth `'Ethereum'` or `'eth'`
* EthereumClassic/etc `'EthereumClassic'` or `'etc'`
* EtherZero/etz `'EtherZero'` or `'etz'`
* Expanse/exp `'Expanse'` or `'exp'`
* FreiCoin/frc `'FreiCoin'` or `'frc'`
* GameCredits/game `'GameCredits'` or `'game'`
* GarliCoin/grlc `'GarliCoin'` or `'grlc'`
* Gnosis/gno `'Gnosis'` or `'gno'`
* Golem/gnt `'Golem'` or `'gnt'`
* Hush/hush `'Hush'` or `'hush'`
* hyperspace/xsc `'hyperspace'` or `'xsc'`
* iExec RLC/rlc `'iExec RLC'` or `'rlc'`
* Komodo/kmd `'Komodo'` or `'kmd'`
* lbry/lbc `'lbry'` or `'lbc'`
* LiteCoin/ltc `'LiteCoin'` or `'ltc'`
* Lisk/lsk `'Lisk'` or `'lsk'`
* loki/loki `'loki'` or `'loki'`
* Matchpool/gup `'Matchpool'` or `'gup'`
* MegaCoin/mec `'MegaCoin'` or `'mec'`
* Melon/mln `'Melon'` or `'mln'`
* MonaCoin/mona `'MonaCoin'` or `'mona'`
* Monero/xmr `'Monero'` or `'xmr'`
* NameCoin/nmc `'NameCoin'` or `'nmc'`
* Nano/nano `'Nano'` or `'nano'`
* Nem/nem `'Nem'` or `'xem'`
* Neo/neo `'Neo'` or `'neo'`
* NeoGas/gas `'NeoGas'` or `'gas'`
* Numeraire/nmr `'Numeraire'` or `'nmr'`
* Odyssey/ocn `'Odyssey'` or `'ocn'`
* OmiseGO/omg `'OmiseGO'` or `'omg'`
* PeerCoin/ppc `'PeerCoin'` or `'ppc'`
* PIVX/pivx `'PIVX'` or `'pivx'`
* Polymath/poly `'Polymath'` or `'poly'`
* PrimeCoin/xpm `'PrimeCoin'` or `'xpm'`
* ProtoShares/pts `'ProtoShares'` or `'pts'`
* Qtum/qtum `'Qtum'` or `'qtum'`
* RaiBlocks/xrb `'RaiBlocks'` or `'xrb'`
* Ripio Credit Network/rcn `'Ripio Credit Network'` or `'rcn'`
* Ripple/xrp `'Ripple'` or `'xrp'`
* Salt/salt `'Salt'` or `'salt'`
* siacoin/sc `'siacoin'` or `'sc'`
* SnowGem/sng `'SnowGem'` or `'sng'`
* SolarCoin/slr `'SolarCoin'` or `'slr'`
* Status/snt `'Status'` or `'snt'`
* Storj/storj `'Storj'` or `'storj'`
* Storm/storm `'Storm'` or `'storm'`
* Swarm City/swt `'Swarm City'` or `'swt'`
* TenX/pay `'TenX'` or `'pay'`
* Tether/usdt `'Tether'` or `'usdt'`
* Tron/trono `'Tron'` or `'trx'`
* TrueUSD/tusd `'TrueUSD'` or `'tusd'`
* VertCoin/vtc `'VertCoin'` or `'vtc'`
* Viberate/vib `'Viberate'` or `'vib'`
* VoteCoin/vot `'VoteCoin'` or `'vot'`
* Waves/waves `'Waves'` or `'waves'`
* Wings/wings `'Wings'` or `'wings'`
* ZCash/zec `'ZCash'` or `'zec'`
* ZClassic/zcl `'ZClassic'` or `'zcl'`
* ZenCash/zen `'ZenCash'` or `'zen'`

### Usage example

#### Node
```javascript
var WAValidator = require('multicoin-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// This will log 'This is a valid address' to the console.
```

```javascript
var WAValidator = require('multicoin-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'litecoin', 'testnet');
if(valid)
      console.log('This is a valid address');
else
      console.log('Address INVALID');

// As this is a invalid litecoin address 'Address INVALID' will be logged to console.
```

#### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

```javascript
// WAValidator is exposed as a global (window.WAValidator)
var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'bitcoin');
if(valid)
    alert('This is a valid address');
else
    alert('Address INVALID');

// This should show a pop up with text 'This is a valid address'.
```
