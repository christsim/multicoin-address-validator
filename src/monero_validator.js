var Buffer = require('buffer-ponyfill')
var varint = require('varint');
var cryptoUtils = require('./crypto/utils');
var cnBase58 = require('./crypto/cnBase58');

var DEFAULT_NETWORK_TYPE = 'prod'
var addressRegTest = len => new RegExp(
  `^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{${len || 95}}$`
)
var integratedAddressRegTest = len => new RegExp(
  `^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{${len || 106}}$`
)

function validateNetwork(decoded, currency, networkType, addressType) {
  var network = currency.addressTypes
  if (addressType === 'integrated') {
    network = currency.iAddressTypes
  }
  const at = varint.decode(Buffer.from(decoded, 'hex'));

  const isInProd = network.prod.indexOf(at) >= 0 || network.prod.indexOf(at.toString()) >= 0
  const isInTestnet = network.testnet.indexOf(at) >= 0 || network.testnet.indexOf(at.toString()) >= 0
  // const isInStagenet = network.stagenet?.indexOf(at) >= 0 || network.stagenet?.indexOf(at.toString()) >= 0

  switch (networkType) {
    case 'prod':
      return isInProd
    case 'stagenet':
      return isInStagenet
    case 'testnet':
      return isInTestnet
    case 'both':
      return isInProd || isInStagenet || isInTestnet
    default:
      return false
  }
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
    networkType = networkType?.networkType || DEFAULT_NETWORK_TYPE
    var addressType = 'standard'

    if (networkType === 'prod') {
      if (!addressRegTest(currency.expectedLength).test(address)) {
        if (integratedAddressRegTest(currency.expectedIntegratedLength).test(address)) {
          addressType = 'integrated'
        } else {
          return false
        }
      }
    }

    /*if (networkType === 'stagenet' || networkType === 'both') {
      if (!addressRegTest(currency.expectedTestnetLength).test(address)) {
        if (integratedAddressRegTest(currency.expectedIntegratedTestnetLength).test(address)) {
          addressType = 'integrated'
        } else {
          return false
        }
      }
    }*/

    if (networkType === 'testnet') {
      if (!addressRegTest(currency.expectedTestnetLength).test(address)) {
        if (integratedAddressRegTest(currency.expectedIntegratedTestnetLength).test(address)) {
          addressType = 'integrated'
        } else {
          return false
        }
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
