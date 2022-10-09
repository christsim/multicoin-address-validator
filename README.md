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
* ATLANT/atl `'ATLANT'` or `'atl'`
* AXpire/axpr `'aXpire'` or `'axpr'`
* Aave Coin/aave `'Aave Coin'` or `'aave'`
* Algorand/algo `'Algorand'` or `'algo'`
* Aave/lend `'Aave'` or `'lend'`
* Abyss Token/abyss `'Abyss Token'` or `'abyss'`
* AdEx/adx `'AdEx'` or `'adx'`
* AdToken/adt `'adToken'` or `'adt'`
* Aelf/elf `'aelf'` or `'elf'`
* Aeron/arn `'Aeron'` or `'arn'`
* Aeternity/ae `'Aeternity'` or `'ae'`
* Agrello/dlt `'Agrello'` or `'dlt'`
* Alg or and/algo `'Alg or and'` or `'algo'`
* All Sp or ts/soc `'All Sp or ts'` or `'soc'`
* Ambrosus/amb `'Ambrosus'` or `'amb'`
* Ankr/ankr `'Ankr'` or `'ankr'`
* AppCoins/appc `'AppCoins'` or `'appc'`
* Aragon/ant `'Aragon'` or `'ant'`
* Arcblock/abt `'Arcblock'` or `'abt'`
* Ard or /ardr `'Ard or '` or `'ardr'`
* Augur/rep `'Augur'` or `'rep'`
* AugurV2/repv2 `'AugurV2'` or `'repv2'`
* AuroraCoin/aur `'AuroraCoin'` or `'aur'`
* Aur or aCoin/aur `'Aur or aCoin'` or `'aur'`
* Avalanche/avax `'Avalanche'` or `'avax'`
* Bancor/bnt `'Bancor'` or `'bnt'`
* BLOCKv/vee `'BLOCKv'` or `'vee'`
* BTU Protocol/btu `'BTU Protocol'` or `'btu'`
* Banc or /bnt `'Banc or '` or `'bnt'`
* Band Protocol/band `'Band Protocol'` or `'band'`
* Bankex/bkx `'Bankex'` or `'bkx'`
* Basic Attention Token/bat `'Basic Attention Token'` or `'bat'`
* BeaverCoin/bvc `'BeaverCoin'` or `'bvc'`
* BetterBetting/betr `'BetterBetting'` or `'betr'`
* Binance Smart Chain/bsc `'Binance Smart Chain'` or `'bsc'`
* Binance USD/busd `'Binance USD'` or `'busd'`
* Binance/bnb `'Binance'` or `'bnb'`
* BioCoin/bio `'BioCoin'` or `'bio'`
* Bitcoin/btc `'Bitcoin'` or `'btc'`
* BitDegree/bdg `'BitDegree'` or `'bdg'`
* BitKan/kan `'BitKan'` or `'kan'`
* Bitcoin Diamond/bcd `'Bitcoin Diamond or `'bcd'`
* Bitcoin SV/bsv `'Bitcoin SV'` or `'bsv'`
* Bitcoin/btc `'Bitcoin'` or `'btc'`
* BitcoinCash/bch `'BitcoinCash'` or `'bch'`
* BitcoinGold/btg `'BitcoinGold'` or `'btg'`
* BitcoinPrivate/btcp `'BitcoinPrivate'` or `'btcp'`
* BitcoinPrivate/btcp `'BitcoinPrivate or `'btcp'`
* BitcoinZ/btcz `'BitcoinZ'` or `'btcz'`
* BlitzPredict/xbp `'BlitzPredict'` or `'xbp'`
* BlockTrade/btt `'BlockTrade'` or `'btt'`
* BTU Protocol/btu `'BTU Protocol'` or `'btu'`
* Blockmason Credit Protocol/bcpt `'Blockmason Credit Protocol'` or `'bcpt'`
* Blocktrade Token/btt `'Blocktrade Token'` or `'btt'`
* Blox/cdt `'Blox'` or `'cdt'`
* Bluzelle/blz `'Bluzelle'` or `'blz'`
* Bread/brd `'Bread'` or `'brd'`
* COS/cos `'COS'` or `'cos'`
* CUSD/cusd `'CUSD'` or `'cusd'`
* Callisto/clo `'Callisto'` or `'clo'`
* Cardano/ada `'Cardano'` or `'ada'`
* Celer Netw or k/celr `'Celer Netw or k'` or `'celr'`
* Chainlink/link `'Chainlink'` or `'link'`
* Chia/xch `'Chia'` or `'xch'`
* Chiliz/chz `'Chiliz'` or `'chz'`
* Chronobank/time `'Chronobank'` or `'time'`
* Cindicat or /cnd `'Cindicat or '` or `'cnd'`
* Civic/cvc `'Civic'` or `'cvc'`
* Cocos-BCX/cocos `'Cocos-BCX'` or `'cocos'`
* Coinlancer/cl `'Coinlancer'` or `'cl'`
* Compound/comp `'Compound'` or `'comp'`
* Cosmo Coin/cosm `'Cosmo Coin'` or `'cosm'`
* Cosmos/atom `'Cosmos'` or `'atom'`
* Covesting/cov `'Covesting'` or `'cov'`
* Cred/lba `'Cred'` or `'lba'`
* Crypterium/crpt `'Crypterium'` or `'crpt'`
* Crypto.com Coin/cro `'Crypto.com Coin'` or `'cro'`
* CUSD/cusd `'CUSD'` or `'cusd'`
* CryptoBossCoin/cbc `'CryptoBossCoin'` or `'cbc'`
* CryptoFranc/xchf `'CryptoFranc'` or `'xchf'`
* Daneel/dan `'Daneel'` or `'dan'`
* Dash/dash `'Dash'` or `'dash'`
* Decentraland/mana `'Decentraland'` or `'mana'`
* Decred/dcr `'Decred'` or `'dcr'`
* Dent/dent `'Dent'` or `'dent'`
* Dentacoin/dcn `'Dentacoin'` or `'dcn'`
* DigiByte/dgb `'DigiByte'` or `'dgb'`
* DigitalBits/xdb `'DigitalBits'` or `'xdb'`
* Digitex Futures/dgtx `'Digitex Futures'` or `'dgtx'`
* DigixDAO/dgd `'DigixDAO'` or `'dgd'`
* District0x/dnt `'District0x'` or `'dnt'`
* Dock/dock `'Dock'` or `'dock'`
* DogeCoin/doge `'DogeCoin'` or `'doge'`
* Enjin Coin/enj `'Enjin Coin'` or `'enj'`
* DomRaider/drt `'DomRaider'` or `'drt'`
* Dusk Netw or k/dusk `'Dusk Netw or k'` or `'dusk'`
* EOS/eos `'EOS'` or `'eos'`
* Edgeless/edg `'Edgeless'` or `'edg'`
* Eidoo/edo `'Eidoo'` or `'edo'`
* Electrify.Asia/elec `'Electrify.Asia or `'elec'`
* Enigma/eng `'Enigma'` or `'eng'`
* Enjin Coin/enj `'Enjin Coin'` or `'enj'`
* EtherZero/etz `'EtherZero'` or `'etz'`
* Ethereum/eth `'Ethereum'` or `'eth'`
* EthereumClassic/etc `'EthereumClassic'` or `'etc'`
* EthereumClassic/etc `'EthereumClassic or `'etc'`
* EthereumPow/ethw `'EthereumPow'` or `'ethw'`
* EtherZero/etz `'EtherZero'` or `'etz'`
* Etherparty/fuel `'Etherparty'` or `'fuel'`
* Everex/evx `'Everex'` or `'evx'`
* Exchange Union/xuc `'Exchange Union'` or `'xuc'`
* Expanse/exp `'Expanse'` or `'exp'`
* Fantom/ftm `'Fantom'` or `'ftm'`
* FirmaChain/fct `'FirmaChain'` or `'fct'`
* FirstBlood/1st `'FirstBlood'` or `'1st'`
* F or tuna/fota `'F or tuna'` or `'fota'`
* FreiCoin/frc `'FreiCoin'` or `'frc'`
* Fujicoin/fjc `'Fujicoin'` or `'fjc'`
* GameCredits/game `'GameCredits'` or `'game'`
* GarliCoin/grlc `'GarliCoin'` or `'grlc'`
* Gemini Dollar/gusd `'Gemini Dollar'` or `'gusd'`
* Genesis Vision/gvt `'Genesis Vision or `'gvt'`
* Gifto/gto `'Gifto'` or `'gto'`
* Gnosis/gno `'Gnosis'` or `'gno'`
* Golem/glm `'Golem'` or `'glm'`
* Golem (GNT)/gnt `'Golem (GNT)'` or `'gnt'`
* Golem/glm `'Golem'` or `'glm'`
* Groestlcoin/grs `'Groestlcoin'` or `'grs'`
* Harmony/one `'Harmony'` or `'one'`
* HOQU/hqx `'HOQU'` or `'hqx'`
* Hedera Hashgraph/hbar `'Hedera Hashgraph'` or `'hbar'`
* HedgeTrade/hedg `'HedgeTrade'` or `'hedg'`
* Holo/hot `'Holo'` or `'hot'`
* Humaniq/hmq `'Humaniq'` or `'hmq'`
* Huobi Token/ht `'Huobi Token'` or `'ht'`
* Hush/hush `'Hush'` or `'hush'`
* HyperSpace/xsc `'HyperSpace'` or `'xsc'`
* iExec RLC/rlc `'iExec RLC'` or `'rlc'`
* ICON/icx `'ICON'` or `'icx'`
* IExec RLC/rlc `'iExec RLC'` or `'rlc'`
* IHT Real Estate Protocol/iht `'IHT Real Estate Protocol'` or `'iht'`
* Insolar/ins `'Insolar'` or `'ins'`
* Internet of Services/IOST `'Internet of Services'` or `'IOST'`
* IoTeX/iotx `'IoTeX'` or `'iotx'`
* KEY/key `'KEY'` or `'key'`
* Kcash/kcash `'Kcash'` or `'kcash'`
* KickToken/kick `'KickToken'` or `'kick'`
* Komodo/kmd `'Komodo'` or `'kmd'`
* Kyber Netw or k/knc `'Kyber Netw or k'` or `'knc'`
* LBRY Credits/lbc `'LBRY Credits'` or `'lbc'`
* LIFE/life `'LIFE'` or `'life'`
* Lambda/lamb `'Lambda'` or `'lamb'`
* Lamden/tau `'Lamden'` or `'tau'`
* LinkEye/let `'LinkEye'` or `'let'`
* Lisk/lsk `'Lisk'` or `'lsk'`
* LiteCoin/ltc `'LiteCoin'` or `'ltc'`
* loki/loki `'loki'` or `'loki'`
* Loom Network/loom `'Loom Network'` or `'loom'`
* LockTrip/loc `'LockTrip'` or `'loc'`
* Loki/loki `'loki'` or `'loki'`
* Loom Netw or k/loom `'Loom Netw or k'` or `'loom'`
* Loopring/lrc `'Loopring'` or `'lrc'`
* Luniverse/luniverse' `'Luniverse'` or `'luniverse'`
* Lunyr/lun `'Lunyr'` or `'lun'`
* MCO/mco `'MCO'` or `'mco'`
* Mainframe/mft `'Mainframe'` or `'mft'`
* Maker/mkr `'Maker'` or `'mkr'`
* Matchpool/gup `'Matchpool'` or `'gup'`
* Matic/matic `'Matic'` or `'matic'`
* Measurable Data Token/mdt `'Measurable Data Token'` or `'mdt'`
* MegaCoin/mec `'MegaCoin'` or `'mec'`
* Melon/mln `'Melon'` or `'mln'`
* Menlo One/one `'Menlo One'` or `'one'`
* Metal/mtl `'Metal'` or `'mtl'`
* Mithril/mith `'Mithril'` or `'mith'`
* Moeda Loyalty Points/mda `'Moeda Loyalty Points'` or `'mda'`
* Molecular Future/mof `'Molecular Future'` or `'mof'`
* MonaCoin/mona `'MonaCoin'` or `'mona'`
* Monero/xmr `'Monero'` or `'xmr'`
* Monetha/mth `'Monetha'` or `'mth'`
* Monolith/tkn `'Monolith'` or `'tkn'`
* Multi-collateral DAI/dai `'Multi-collateral DAI'` or `'dai'`
* Mysterium/myst `'Mysterium'` or `'myst'`
* NAGA/ngc `'NAGA'` or `'ngc'`
* NXT/nxt `'NXT'` or `'nxt'`
* NameCoin/nmc `'NameCoin'` or `'nmc'`
* Nano/nano `'Nano'` or `'nano'`
* Nem/xem `'Nem'` or `'xem'`
* Neo/neo `'Neo'` or `'neo'`
* NeoGas/gas `'NeoGas'` or `'gas'`
* NetKoin/ntk `'NetKoin'` or `'ntk'`
* Nexo/nexo `'Nexo'` or `'nexo'`
* Noah Coin/noah `'Noah Coin'` or `'noah'`
* Nucleus Vision/ncash `'Nucleus Vision'` or `'ncash'`
* Numeraire/nmr `'Numeraire'` or `'nmr'`
* OAX/oax `'OAX'` or `'oax'`
* ORS Group/ or s `'ORS Group'` or `' or s'`
* OST/ost `'OST'` or `'ost'`
* Ocean Protocol/ocean `'Ocean Protocol'` or `'ocean'`
* Odyssey/ocn `'Odyssey'` or `'ocn'`
* OmiseGO/omg `'OmiseGO'` or `'omg'`
* Ontology/ont `'Ontology'` or `'ont'`
* Own (Chainium)/chx `'Own (Chainium)'` or `'chx'`
* PIVX/pivx `'PIVX'` or `'pivx'`
* Patient or y/ptoy `'Patient or y'` or `'ptoy'`
* Patron/pat `'Patron'` or `'pat'`
* Paxos/pax `'Paxos'` or `'pax'`
* Peculium/pcl `'Peculium'` or `'pcl'`
* PeerCoin/ppc `'PeerCoin'` or `'ppc'`
* PIVX/pivx `'PIVX'` or `'pivx'`
* Perlin/perl `'Perlin'` or `'perl'`
* Pillar/plr `'Pillar'` or `'plr'`
* Po.et/poe `'Po.et'` or `'poe'`
* Polkadot/dot `'Polkadot'` or `'dot'`
* Polymath/poly `'Polymath'` or `'poly'`
* Populous/ppt `'Populous'` or `'ppt'`
* Power Ledger/powr `'Power Ledger'` or `'powr'`
* Presearch/pre `'Presearch'` or `'pre'`
* PrimeCoin/xpm `'PrimeCoin'` or `'xpm'`
* ProtoShares/pts `'ProtoShares'` or `'pts'`
* PumaPay/pma `'PumaPay'` or `'pma'`
* Pundi X/npxs `'Pundi X'` or `'npxs'`
* Qtum/qtum `'Qtum'` or `'qtum'`
* Quant/qnt `'Quant'` or `'qnt'`
* Quantum Resistant Ledger/qrl `'Quantum Resistant Ledger'` or `'qrl'`
* Quantstamp/qsp `'Quantstamp'` or `'qsp'`
* Quantum Resistant `'Ledger/qrl Quantum Resistant Ledger` or 'qrl'`
* QuarkChain/qkc `'QuarkChain'` or `'qkc'`
* RaiBlocks/xrb `'RaiBlocks'` or `'xrb'`
* Ripio Credit Network/rcn `'Ripio Credit Network'` or `'rcn'`
* Raiden Netw or k Token/rdn `'Raiden Netw or k Token'` or `'rdn'`
* Ravencoin/rvn `'Ravencoin'` or `'rvn'`
* Refereum/rfr `'Refereum'` or `'rfr'`
* Ren/ren `'Ren'` or `'ren'`
* Request/req `'Request'` or `'req'`
* Revain/r `'Revain'` or `'r'`
* Ripio Credit Netw or k/rcn `'Ripio Credit Netw or k'` or `'rcn'`
* Ripple/xrp `'Ripple'` or `'xrp'`
* SIRIN LABS Token/srn `'SIRIN LABS Token'` or `'srn'`
* SOLVE/solve `'SOLVE'` or `'solve'`
* SONM/snm `'SONM'` or `'snm'`
* STASIS EURO/eurs `'STASIS EURO'` or `'eurs'`
* STEEM/steem `'STEEM'` or `'steem'`
* Salt/salt `'Salt'` or `'salt'`
* Scopuly/sky `'Scopuly'` or `'sky'`
* Sentinel/sent `'Sentinel'` or `'sent'`
* Serve/serv `'Serve'` or `'serv'`
* SiaCashCoin/scc `'SiaCashCoin'` or `'scc'`
* Siacoin/sc `'Siacoin'` or `'sc'`
* SingularDTV/sngls `'SingularDTV'` or `'sngls'`
* SingularityNET/agi `'SingularityNET'` or `'agi'`
* SkinCoin/skin `'SkinCoin'` or `'skin'`
* SnowGem/sng `'SnowGem'` or `'sng'`
* SoMee.Social/ong `'SoMee.Social'` or `'ong'`
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
* St or j/st or j `'St or j'` or `'st or j'`
* St or m/st or m `'St or m'` or `'st or m'`
* St or mX/stmx `'St or mX'` or `'stmx'`
* Stox/stx `'Stox'` or `'stx'`
* Streamr DATAcoin/data `'Streamr DATAcoin'` or `'data'`
* Substratum/sub `'Substratum'` or `'sub'`
* SunContract/snc `'SunContract'` or `'snc'`
* Swarm City/swt `'Swarm City or `'swt'`
* SwftCoin/swftc `'SwftCoin'` or `'swftc'`
* Synthetix Netw or k/snx `'Synthetix Netw or k'` or `'snx'`
* Syscoin/sys `'Syscoin'` or `'sys'`
* TEMCO/temco `'TEMCO'` or `'temco'`
* Tael/wabi `'Tael'` or `'wabi'`
* Tap/xtp `'Tap'` or `'xtp'`
* Telcoin/tel `'Telcoin'` or `'tel'`
* TenX/pay `'TenX'` or `'pay'`
* Tether/usdt `'Tether'` or `'usdt'`
* Tezos/xtz `'Tezos'` or `'xtz'`
* Tierion/tnt `'Tierion'` or `'tnt'`
* Time New Bank/tnb `'Time New Bank'` or `'tnb'`
* Tripio/trio `'Tripio'` or `'trio'`
* Tron/trx `'Tron'` or `'trx'`
* TrueUSD/tusd `'TrueUSD'` or `'tusd'`
* Uniswap Coin/uni `'Uniswap Coin'` or `'uni'`
* USD Coin/usdc `'USD Coin'` or `'usdc'`
* USDT ERC-20/usdt20 `'USDT ERC-20'` or `'usdt20'`
* Uniswap Coin/uni `'Uniswap Coin'` or `'uni'`
* Utrust/utk `'Utrust'` or `'utk'`
* VIBE/vibe `'VIBE'` or `'vibe'`
* VeChain/vet `'VeChain'` or `'vet'`
* Verge/xvg `'Verge'` or `'xvg'`
* VertCoin/vtc `'VertCoin'` or `'vtc'`
* Viberate/vib `'Viberate'` or `'vib'`
* VoteCoin/vot `'VoteCoin'` or `'vot'`
* Waltonchain/wtc `'Waltonchain'` or `'wtc'`
* Waves/waves `'Waves'` or `'waves'`
* WePower/wpr `'WePower'` or `'wpr'`
* WeTrust/trst `'WeTrust'` or `'trst'`
* Wings/wings `'Wings'` or `'wings'`
* YOU COIN/you `'YOU COIN'` or `'you'`
* ZCash/zec `'ZCash'` or `'zec'`
* ZClassic/zcl `'ZClassic'` or `'zcl'`
* Zap/zap `'Zap'` or `'zap'`
* ZenCash/zen `'ZenCash'` or `'zen'`
* Zilliqa/zil `'Zilliqa'` or `'zil'`

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
