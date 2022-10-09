function isValidHBarAddress (address) {
  const split = address.split('.')
  if (split[0] !== '0' || split[1] !== '0') {
    return false
  }
  if (split[2].length <= 6 && /^\d+$/g.test(split[2])) {
    return true
  }
}

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return isValidHBarAddress(address)
  },
}

