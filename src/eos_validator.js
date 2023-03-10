function isValidEOSAddress (address, currency, networkType) {
  // EOS account name should be less than 12 characters,
  // and only contain the following symbols .12345abcdefghijklmnopqrstuvwxyz
  var regex = /^[.1-5a-z]{1,12}$/g
  if (address.search(regex) !== -1) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isValidAddress: function (address, currency, networkType) {
    return isValidEOSAddress(address, currency, networkType)
  }
}
