# wallet-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**. 

Forked from [ryanralph/altcoin-address](https://github.com/ryanralph/altcoin-address).

I forked it to remove all Node.js dependencies (crypro, Buffer etc.) to make it usable in the browser as well. I didn't use browserify to achieve smaller footprint, **file size is 4.0 kB (minifed and gzipped)**.

## Installation

### NPM
```
npm install wallet-address-validator
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

##### getAddressType (address)

###### Parameters
* address - Wallet address.

> Returns address type (as 2 character hex string) if valid base58 address, otherwise null.

### Supported crypto currencies

* Bitcoin/BTC, `'bitcoin'` or `'BTC'`
* Litecoin/LTC, `'litecoin'` or `'LTC'`
* Peercoin/PPCoin/PPC, `'peercoin'` or `'PPC'`
* Dogecoin/DOGE, `'dogecoin'` or `'DOGE'`
* BeaverCoin/BVC, `'beavercoin'` or `'BVC'`
* Freicoin/FRC, `'freicoin'` or `'FRC'`
* Protoshares/PTS, `'protoshares'` or `'PTS'`
* Megacoin/MEC, `'megacoin'` or `'MEC'`
* Primecoin/XPM, `'primecoin'` or `'XPM'`
* Auroracoin/AUR, `'auroracoin'` or `'AUR'`
* Namecoin/NMC, `'namecoin'` or `'NMC'`
* Biocoin/BIO, `'biocoin'` or `'BIO'`
* Garlicoin/GRLC, `'garlicoin'` or `'grlc'`

### Usage example

#### Node
```javascript
var WAValidator = require('wallet-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// This will log 'This is a valid address' to the console.
```

```javascript
var WAValidator = require('wallet-address-validator');

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
