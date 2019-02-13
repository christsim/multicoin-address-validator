var WordArray = require('./wordArray');

var _hexEncodeArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

 /**
* Reversed convertion of hex to Uint8Array
*
* @param {string} hexx - An hex string
*
* @return {Uint8Array}
*/
var hex2ua_reversed = function(hexx) {
    var hex = hexx.toString(); //force conversion
    var ua = new Uint8Array(hex.length / 2);
    for (var i = 0; i < hex.length; i += 2) {
        ua[ua.length - 1 - (i / 2)] = parseInt(hex.substr(i, 2), 16);
    }
    return ua;
};

 /**
* Convert hex to Uint8Array
*
* @param {string} hexx - An hex string
*
* @return {Uint8Array}
*/
var hex2ua = function(hexx) {
    var hex = hexx.toString(); //force conversion
    var ua = new Uint8Array(hex.length / 2);
    for (var i = 0; i < hex.length; i += 2) {
        ua[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return ua;
};

 /**
* Convert an Uint8Array to hex
*
* @param {Uint8Array} ua - An Uint8Array
*
* @return {string}
*/
var ua2hex = function(ua) {
    var s = '';
    for (var i = 0; i < ua.length; i++) {
        var code = ua[i];
        s += _hexEncodeArray[code >>> 4];
        s += _hexEncodeArray[code & 0x0F];
    }
    return s;
};

 /**
* Convert hex to string
*
* @param {string} hexx - An hex string
*
* @return {string}
*/
var hex2a = function(hexx) {
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
};

 /**
* Convert UTF-8 to hex
*
* @param {string} str - An UTF-8 string
*
* @return {string}
*/
var utf8ToHex = function(str) {
    var rawString = rstr2utf8(str);
    var hex = "";
    for (var i = 0; i < rawString.length; i++) {
        hex += strlpad(rawString.charCodeAt(i).toString(16), "0", 2)
    }
    return hex;
};

 // Padding helper for above function
var strlpad = function(str, pad, len) {
    while (str.length < len) {
        str = pad + str;
    }
    return str;
}

 /**
* Convert an Uint8Array to WordArray
*
* @param {Uint8Array} ua - An Uint8Array
* @param {number} uaLength - The Uint8Array length
*
* @return {WordArray}
*/
var ua2words = function(ua, uaLength) {
    var temp = [];
    for (var i = 0; i < uaLength; i += 4) {
        var x = ua[i] * 0x1000000 + (ua[i + 1] || 0) * 0x10000 + (ua[i + 2] || 0) * 0x100 + (ua[i + 3] || 0);
        temp.push((x > 0x7fffffff) ? x - 0x100000000 : x);
    }
    return WordArray.create(temp, uaLength);
}

 /**
* Convert a wordArray to Uint8Array
*
* @param {Uint8Array} destUa - A destination Uint8Array
* @param {WordArray} cryptowords - A wordArray
*
* @return {Uint8Array}
*/
var words2ua = function(destUa, cryptowords) {
    for (var i = 0; i < destUa.length; i += 4) {
        var v = cryptowords.words[i / 4];
        if (v < 0) v += 0x100000000;
        destUa[i] = (v >>> 24);
        destUa[i + 1] = (v >>> 16) & 0xff;
        destUa[i + 2] = (v >>> 8) & 0xff;
        destUa[i + 3] = v & 0xff;
    }
    return destUa;
}

 /**
* Converts a raw javascript string into a string of single byte characters using utf8 encoding.
* This makes it easier to perform other encoding operations on the string.
*
* @param {string} input - A raw string
*
* @return {string} - UTF-8 string
*/
var rstr2utf8 = function (input) {
    var output = "";

     for (var n = 0; n < input.length; n++) {
        var c = input.charCodeAt(n);

         if (c < 128) {
            output += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
            output += String.fromCharCode((c >> 6) | 192);
            output += String.fromCharCode((c & 63) | 128);
        } else {
            output += String.fromCharCode((c >> 12) | 224);
            output += String.fromCharCode(((c >> 6) & 63) | 128);
            output += String.fromCharCode((c & 63) | 128);
        }
    }

     return output;
}

 // Does the reverse of rstr2utf8.
var utf82rstr = function (input) {
    var output = "", i = 0, c = 0, c1 = 0, c2 = 0, c3 = 0;

     while (i < input.length) {
        c = input.charCodeAt(i);

         if (c < 128) {
            output += String.fromCharCode(c);
            i++;
        } else if ((c > 191) && (c < 224)) {
            c2 = input.charCodeAt(i + 1);
            output += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        } else {
            c2 = input.charCodeAt(i + 1);
            c3 = input.charCodeAt(i + 2);
            output += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }

     return output;
}

 module.exports = {
    hex2ua_reversed: hex2ua_reversed,
    hex2ua: hex2ua,
    ua2hex: ua2hex,
    hex2a: hex2a,
    utf8ToHex: utf8ToHex,
    ua2words: ua2words,
    words2ua: words2ua,
    rstr2utf8: rstr2utf8,
    utf82rstr: utf82rstr
}