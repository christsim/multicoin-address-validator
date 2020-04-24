var cryptoUtils = require('./crypto/utils')
var cnBase58 = require('./crypto/cnBase58')

var DEFAULT_NETWORK_TYPE = 'prod'
var addressRegTest = new RegExp(
  '^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$'
)
var integratedAddressRegTest = new RegExp(
  '^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$'
)

function validateNetwork(decoded, currency, networkType, addressType) {
  const at = parseInt(decoded.substr(0, 2), 16).toString()

  if (currency.name === 'loki')  {
      switch (networkType) {
          case 'prod':
              return at === '114' || at === '115' || at === '116'
          default:
              return false
      }
  } else if (currency.name === 'Monero') {
      switch (networkType) {
          case 'prod':
              return at === '18' || at === '42' || at === '19'
          case 'testnet':
              return at === '53' || at === '63' || at === '54'
          default:
              return false
      }
  }
  return false
}

function hextobin(hex) {
  if (hex.length % 2 !== 0) return null
  var res = new Uint8Array(hex.length / 2)
  for (var i = 0; i < hex.length / 2; ++i) {
    res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return res
}

module.exports = {
  isValidAddress: function(address, currency, networkType) {
    networkType = networkType || DEFAULT_NETWORK_TYPE
    var addressType = 'standard'
    if (!addressRegTest.test(address)) {
      if (integratedAddressRegTest.test(address)) {
        addressType = 'integrated'
      } else {
        return false
      }
    }

    var decodedAddrStr = cnBase58.decode(address)
    if (!decodedAddrStr) return false

    if (!validateNetwork(decodedAddrStr, currency, networkType, addressType)) return false

    var addrChecksum = decodedAddrStr.slice(-8)
    var hashChecksum = cryptoUtils.keccak256Checksum(hextobin(decodedAddrStr.slice(0, -8)))

    return addrChecksum === hashChecksum
  }
}
