var ethereum = require('./ethereum_validator')

// Validate C-Chain addresses (AVAXC)
module.exports = {
  isValidAddress: function (address) {
    // While rarely used, C-Chain addresses can include a chain ID
    let [id, addr] = address.split('-')
    if (!addr) addr = id
    return ethereum.isValidAddress(addr)
  }
}
