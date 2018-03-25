var cryptoUtils = require('./crypto/utils');
var baseX = require('base-x');
var codec = baseX("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"); // for ripple

module.exports = {
	/**
	 * ripple address validation
	 */
	isValidAddress: function (address) {
		if (/^r[rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz]{27,35}$/.test(address) === false)
			return false;
		return this.verifyChecksum(address);
	},

	verifyChecksum: function (address) {
		var bytes = codec.decode(address);
		var computedChecksum = cryptoUtils.sha256Checksum(cryptoUtils.toHex(bytes.slice(0, -4)));
		var checksum = cryptoUtils.toHex(bytes.slice(-4));

		return computedChecksum === checksum
	}
};
