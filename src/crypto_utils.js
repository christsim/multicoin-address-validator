(function (isNode) {
    var jsSHA = isNode ? require('jssha') : window.jsSHA;
    var blakeHash = require('blake-hash');

    function numberToHex (number) {
        var hex = Math.round(number).toString(16);
        if(hex.length == 1) {
            hex = '0' + hex;
        }
        return hex;
    }

    var cryptoUtils = {
        toHex: function (arrayOfBytes) {
            var hex = '';
            for(var i = 0; i < arrayOfBytes.length; i++) {
                hex += numberToHex(arrayOfBytes[i]);
            }
            return hex;
        },
        sha256: function (hexString) {
            var sha = new jsSHA('SHA-256', 'HEX');
            sha.update(hexString)
            return sha.getHash('HEX');
        },
        sha256Checksum: function (payload) {
            return this.sha256(this.sha256(payload)).substr(0, 8);
        },
        blake256: function (hexString) {
            return blakeHash('blake256').update(hexString, 'hex').digest('hex');
        },
        blake256Checksum: function (payload) {
            return this.blake256(this.blake256(payload)).substr(0, 8);
        }
    };

    // export cryptoUtils module
    if(isNode) {
        module.exports = cryptoUtils;
    } else {
        if(typeof window.WAValidator === 'undefined'){
           window.WAValidator = {__imports: {}};
        }
        window.WAValidator.__imports.cryptoUtils = cryptoUtils;
    }
})(typeof module !== 'undefined' && typeof module.exports !== 'undefined');
