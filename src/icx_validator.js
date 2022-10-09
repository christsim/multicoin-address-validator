function isValidICXAddress (address, currency, networkType) {
  var regex = /^hx[0-9a-f]{40}$/g // Begins with hx followed by 40 hex chars
  if (address.search(regex) !== -1) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return isValidICXAddress(address, currency, networkType)
  },
}

