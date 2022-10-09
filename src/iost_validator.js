const iostRegex = new RegExp('^[a-z0-9_]{5,11}$')

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return iostRegex.test(address)
  },
}

