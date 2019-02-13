var cryptoUtils = require('./crypto/utils');
var CryptoJS = require('crypto-js');
 /**
* Convert a public key to a NEM address
*
* @param {string} publicKey - A public key
* @param {number} networkId - A network id
*
* @return {string} - The NEM address
*/
var toAddress = function(publicKey, networkId) {
    var binPubKey = cryptoUtils.enc_hex_parse(publicKey);
    var hash = cryptoUtils.keccak256(binPubKey);
    var hash2 = CryptoJS.RIPEMD160(hash);
    // 98 is for testnet
    var networkPrefix = Network.id2Prefix(networkId);
    var versionPrefixedRipemd160Hash = networkPrefix + cryptoUtils.env_hex_stringify(hash2);
    var tempHash = cryptoUtils.keccak256(cryptoUtils.enc_hex_parse(versionPrefixedRipemd160Hash));
    var stepThreeChecksum = cryptoUtils.env_hex_stringify(tempHash).substr(0, 8);
    var concatStepThreeAndStepSix = cryptoUtils.hex2a(versionPrefixedRipemd160Hash + stepThreeChecksum);
    var ret = cryptoUtils.base32.b32encode(concatStepThreeAndStepSix);
    return ret;
};

 /**
* Check if an address is from a specified network
*
* @param {string} _address - An address
* @param {number} networkId - A network id
*
* @return {boolean} - True if address is from network, false otherwise
*/
var isFromNetwork = function(_address, networkId) {
    var address = _address.toString().toUpperCase().replace(/-/g, '');
    var a = address[0];
    return Network.id2Char(networkId) === a;
};

 /**
* Check if an address is valid
*
* @param {string} _address - An address
*
* @return {boolean} - True if address is valid, false otherwise
*/
var isValidAddress = function(_address) {
    var address = _address.toString().toUpperCase().replace(/-/g, '');
    if (!address || address.length !== 40) {
        return false;
    }
    var decoded = cryptoUtils.ua2hex(cryptoUtils.base32.b32decode(address));
    var versionPrefixedRipemd160Hash = cryptoUtils.enc_hex_parse(decoded.slice(0, 42));
    var tempHash = CryptoJS.SHA3(versionPrefixedRipemd160Hash, {
        outputLength: 256
    });
    var stepThreeChecksum = cryptoUtils.env_hex_stringify(tempHash).substr(0, 8);
    return stepThreeChecksum === decoded.slice(42);
};

 /**
* Remove hyphens from an address
*
* @param {string} _address - An address
*
* @return {string} - A clean address
*/
var clean = function(_address) {
    return _address.toUpperCase().replace(/-|\s/g,"");
};

module.exports = {
    toAddress: toAddress,
    isFromNetwork: isFromNetwork,
    isValidAddress: isValidAddress,
    clean: clean
}