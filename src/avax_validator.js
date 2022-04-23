var bip173 = require('./bip173_validator.js')

// Checks validity in Avalanche X- & P- chains
module.exports = {
  isValidAddress: function (address, currency, opts = {}) {
    // AVAX addresses can have an ID at the beginning
    let [id, addr] = address.split('-')
    if (!addr) addr = id

    return bip173.isValidAddress(addr, currency, opts)
  }
}
