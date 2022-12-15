# wallet-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**.

[![Build Status](https://travis-ci.org/christsim/multicoin-address-validator.svg?branch=master)](https://travis-ci.org/christsim/multicoin-address-validator)

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
* Aave Coin/aave `'Aave Coin'` or `'aave'`
* Algorand/algo `'Algorand'` or `'algo'`
* Aragon/ant `'Aragon'` or `'ant'`
* Augur/rep `'Augur'` or `'rep'`
* AugurV2/repv2 `'AugurV2'` or `'repv2'`
* AuroraCoin/aur `'AuroraCoin'` or `'aur'`
* Avalanche/avax `'Avalanche'` or `'avax'`
* Bancor/bnt `'Bancor'` or `'bnt'`
* Bankex/bkx `'Bankex'` or `'bkx'`
* Basic Attention Token/bat `'Basic Attention Token'` or `'bat'`
* BeaverCoin/bvc `'BeaverCoin'` or `'bvc'`
* Binance/bnb `'Binance'` or `'bnb'`
* BioCoin/bio `'BioCoin'` or `'bio'`
* Bitcoin/btc `'Bitcoin'` or `'btc'`
* Bitcoin SV/bsv `'Bitcoin SV'` or `'bsv'`
* BitcoinCash/bch `'BitcoinCash'` or `'bch'`
* BitcoinGold/btg `'BitcoinGold'` or `'btg'`
* BitcoinPrivate/btcp `'BitcoinPrivate'` or `'btcp'`
* BitcoinZ/btcz `'BitcoinZ'` or `'btcz'`
* BlockTrade/btt `'BlockTrade'` or `'btt'`
* BTU Protocol/btu `'BTU Protocol'` or `'btu'`
* Callisto/clo `'Callisto'` or `'clo'`
* Cardano/ada `'Cardano'` or `'ada'`
* Chainlink/link `'Chainlink'` or `'link'`
* Civic/cvc `'Civic'` or `'cvc'`
* Compound/comp `'Compound'` or `'comp'`
* Cred/lba `'Cred'` or `'lba'`
* Crypto.com Coin/cro `'Crypto.com Coin'` or `'cro'`
* CUSD/cusd `'CUSD'` or `'cusd'`
* Dash/dash `'Dash'` or `'dash'`
* Decentraland/mana `'Decentraland'` or `'mana'`
* Decred/dcr `'Decred'` or `'dcr'`
* DigiByte/dgb `'DigiByte'` or `'dgb'`
* District0x/dnt `'District0x'` or `'dnt'`
* DogeCoin/doge `'DogeCoin'` or `'doge'`
* Enjin Coin/enj `'Enjin Coin'` or `'enj'`
* EOS/eos `'EOS'` or `'eos'`
* Ethereum/eth `'Ethereum'` or `'eth'`
* EthereumClassic/etc `'EthereumClassic'` or `'etc'`
* EthereumPow/ethw `'EthereumPow'` or `'ethw'`
* EtherZero/etz `'EtherZero'` or `'etz'`
* Expanse/exp `'Expanse'` or `'exp'`
* FirmaChain/fct `'FirmaChain'` or `'fct'`
* FreiCoin/frc `'FreiCoin'` or `'frc'`
* Flare/flr `'FLare'` or `'flr'`
* GameCredits/game `'GameCredits'` or `'game'`
* GarliCoin/grlc `'GarliCoin'` or `'grlc'`
* Gnosis/gno `'Gnosis'` or `'gno'`
* Golem/glm `'Golem'` or `'glm'`
* Golem (GNT)/gnt `'Golem (GNT)'` or `'gnt'`
* HedgeTrade/hedg `'HedgeTrade'` or `'hedg'`
* Hush/hush `'Hush'` or `'hush'`
* HyperSpace/xsc `'HyperSpace'` or `'xsc'`
* iExec RLC/rlc `'iExec RLC'` or `'rlc'`
* Komodo/kmd `'Komodo'` or `'kmd'`
* LBRY Credits/lbc `'LBRY Credits'` or `'lbc'`
* Lisk/lsk `'Lisk'` or `'lsk'`
* LiteCoin/ltc `'LiteCoin'` or `'ltc'`
* loki/loki `'loki'` or `'loki'`
* Loom Network/loom `'Loom Network'` or `'loom'`
* Maker/mkr `'Maker'` or `'mkr'`
* Matchpool/gup `'Matchpool'` or `'gup'`
* Matic/matic `'Matic'` or `'matic'`
* MegaCoin/mec `'MegaCoin'` or `'mec'`
* Melon/mln `'Melon'` or `'mln'`
* Metal/mtl `'Metal'` or `'mtl'`
* MonaCoin/mona `'MonaCoin'` or `'mona'`
* Monero/xmr `'Monero'` or `'xmr'`
* Multi-collateral DAI/dai `'Multi-collateral DAI'` or `'dai'`
* NameCoin/nmc `'NameCoin'` or `'nmc'`
* Nano/nano `'Nano'` or `'nano'`
* Nem/xem `'Nem'` or `'xem'`
* Neo/neo `'Neo'` or `'neo'`
* NeoGas/gas `'NeoGas'` or `'gas'`
* Numeraire/nmr `'Numeraire'` or `'nmr'`
* Ocean Protocol/ocean `'Ocean Protocol'` or `'ocean'`
* Odyssey/ocn `'Odyssey'` or `'ocn'`
* OmiseGO/omg `'OmiseGO'` or `'omg'`
* Paxos/pax `'Paxos'` or `'pax'`
* PeerCoin/ppc `'PeerCoin'` or `'ppc'`
* PIVX/pivx `'PIVX'` or `'pivx'`
* Polkadot/dot `'Polkadot'` or `'dot'`
* Polymath/poly `'Polymath'` or `'poly'`
* PrimeCoin/xpm `'PrimeCoin'` or `'xpm'`
* ProtoShares/pts `'ProtoShares'` or `'pts'`
* Qtum/qtum `'Qtum'` or `'qtum'`
* Quant/qnt `'Quant'` or `'qnt'`
* Quantum Resistant Ledger/qrl `'Quantum Resistant Ledger'` or `'qrl'`
* RaiBlocks/xrb `'RaiBlocks'` or `'xrb'`
* Ripio Credit Network/rcn `'Ripio Credit Network'` or `'rcn'`
* Ripple/xrp `'Ripple'` or `'xrp'`
* Salt/salt `'Salt'` or `'salt'`
* Serve/serv `'Serve'` or `'serv'`
* Siacoin/sc `'Siacoin'` or `'sc'`
* SnowGem/sng `'SnowGem'` or `'sng'`
* Solana/sol `'Solana'` or `'sol'`
* SolarCoin/slr `'SolarCoin'` or `'slr'`
* SOLVE/solve `'SOLVE'` or `'solve'`
* Spendcoin/spnd `'Spendcoin'` or `'spnd'`
* Status/snt `'Status'` or `'snt'`
* Stellar/xlm `'Stellar'` or `'xlm'`
* Storj/storj `'Storj'` or `'storj'`
* Storm/storm `'Storm'` or `'storm'`
* StormX/stmx `'StormX'` or `'stmx'`
* Swarm City/swt `'Swarm City'` or `'swt'`
* Synthetix Network/snx `'Synthetix Network'` or `'snx'`
* Tap/xtp `'Tap'` or `'xtp'`
* TEMCO/temco `'TEMCO'` or `'temco'`
* TenX/pay `'TenX'` or `'pay'`
* Tether/usdt `'Tether'` or `'usdt'`
* Tezos/xtz `'Tezos'` or `'xtz'`
* Tron/trx `'Tron'` or `'trx'`
* TrueUSD/tusd `'TrueUSD'` or `'tusd'`
* Uniswap Coin/uni `'Uniswap Coin'` or `'uni'`
* USD Coin/usdc `'USD Coin'` or `'usdc'`
* VeChain/vet `'VeChain'` or `'vet'`
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

```javascript
var WAValidator = require('multicoin-address-validator');

var currency = WAValidator.findCurrency('xrp');
if(currency)
      console.log('This currency exists');
else
      console.log('Currency INVALID');

// As this is a valid currency symbol 'This currency exists' will be logged to console.
```

```javascript
var WAValidator = require('multicoin-address-validator');

var currency = WAValidator.findCurrency('random');
if(currency)
      console.log('This currency exists');
else
      console.log('Currency INVALID');

// As this is not a valid currency symbol 'Currency INVALID' will be logged to console.
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
