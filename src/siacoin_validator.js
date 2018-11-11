var cryptoUtils = require('./crypto/utils')
var isEqual = require('lodash/isEqual')

function hexToBytes(hex) {
  var bytes = []
  for (var c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16))
  }
  return bytes
}

module.exports = {
  isValidAddress: function(address) {
    if (address.length !== 76) {
      // Check if it has the basic requirements of an address
      return false
    }

    // Otherwise check each case
    return this.verifyChecksum(address)
  },
  verifyChecksum: function(address) {
    var aBytes = hexToBytes(address)
    var checksumBytes = Uint8Array.from(aBytes.slice(0, 32))
    var check = Uint8Array.from(aBytes.slice(32, 38))
    var blakeHash = cryptoUtils.blake2b(checksumBytes, null, 32).slice(0, 6)
    const isValid = !!isEqual(blakeHash, check)
    return isValid
  }
}
