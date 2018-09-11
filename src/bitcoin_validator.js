// Copyright (c) 2017 Pieter Wuille
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// Original Source : https://github.com/sipa/bech32/tree/master/ref/javascript

var segwit_addr = require('./crypto/segwit_addr');
var CURRENCY_NAME = 'bitcoin';

function isValidNetworkAddress(address, networkType) {
    return isValidP2PKHandP2SHAddress(address, networkType) || isValidSegwitAddress(address)
}

function isValidP2PKHandP2SHAddress(address, networkType) {
    // TODO: Please find out why these libs need to be here instead of at top. and fix..
    var WAValidator = require('./wallet_address_validator.js');
    var currencies = require('./currencies.js');

    var currency = currencies.getByNameOrSymbol(CURRENCY_NAME);
    
    var correctAddressTypes;
    var addressType = WAValidator.getAddressType(address, currency);
    if (addressType == null) {
        return false;
    }

    if (networkType === 'prod' || networkType === 'testnet'){
        correctAddressTypes = currency.addressTypes[networkType]
    } else {
        correctAddressTypes = currency.addressTypes.prod.concat(currency.addressTypes.testnet);
    }
    
    return correctAddressTypes.indexOf(addressType) >= 0;
}

function isValidSegwitAddress(address) {
    var hrp = "bc";
    var ret = segwit_addr.decode(hrp, address);
    if (ret === null) {
        hrp = "tb";
        ret = segwit_addr.decode(hrp, address);
    }
    var ok = ret !== null;
    if (ok) {
        var recreate = segwit_addr.encode(hrp, ret.version, ret.program);
        ok = (recreate === address.toLowerCase());
    }

    return !!ok;
}

module.exports = {
    isValidNetworkAddress: isValidNetworkAddress
};
