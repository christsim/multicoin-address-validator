module.exports = {
    /**
     * Extends this object and runs the init method.
     * Arguments to create() will be passed to init().
     */
    create: function () {
        var instance = this.extend();
        instance.init.apply(instance, arguments);
        return instance;
    },

    /**
     * Initializes a newly created word array.
     */
    init: function (words, sigBytes) {
        words = this.words = words || [];

        if (sigBytes != undefined) {
            this.sigBytes = sigBytes;
        } else {
            this.sigBytes = words.length * 4;
        }
    },

    /**
     * Creates a new object that inherits from this object.
     */
    extend: function (overrides) {
        // Spawn
        F.prototype = this;
        var subtype = new F();
        // Augment
        if (overrides) {
            subtype.mixIn(overrides);
        }
        // Create default initializer
        if (!subtype.hasOwnProperty('init')) {
            subtype.init = function () {
                subtype.$super.init.apply(this, arguments);
            };
        }
        // Initializer's prototype is the subtype object
        subtype.init.prototype = subtype;
        // Reference supertype
        subtype.$super = this;
        return subtype;
    },

    /**
     * Copies properties into this object.
     */
    mixIn: function (properties) {
        for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
                this[propertyName] = properties[propertyName];
            }
        }
        // IE won't copy toString using the loop above
        if (properties.hasOwnProperty('toString')) {
            this.toString = properties.toString;
        }
    },

    /**
     * Converts this word array to a string.
     */
    toString: function (encoder) {
        if (encoder) {
            return encoder.stringify(this);  
        }
        var wordArray =  this;
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;

        // Convert
        var hexChars = [];
        for (var i = 0; i < sigBytes; i++) {
            var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            hexChars.push((bite >>> 4).toString(16));
            hexChars.push((bite & 0x0f).toString(16));
        }

        return hexChars.join('');
    },

    /**
     * Concatenates a word array to this word array.
     */
    concat: function (wordArray) {
        // Shortcuts
        var thisWords = this.words;
        var thatWords = wordArray.words;
        var thisSigBytes = this.sigBytes;
        var thatSigBytes = wordArray.sigBytes;

        // Clamp excess bits
        this.clamp();

        // Concat
        if (thisSigBytes % 4) {
            // Copy one byte at a time
            for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
            }
        } else if (thatWords.length > 0xffff) {
            // Copy one word at a time
            for (var i = 0; i < thatSigBytes; i += 4) {
                thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
            }
        } else {
            // Copy all words at once
            thisWords.push.apply(thisWords, thatWords);
        }
        this.sigBytes += thatSigBytes;

        // Chainable
        return this;
    },

    /**
     * Removes insignificant bits.
     */
    clamp: function () {
        // Shortcuts
        var words = this.words;
        var sigBytes = this.sigBytes;

        // Clamp
        words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
        words.length = Math.ceil(sigBytes / 4);
    },

    /**
     * Creates a copy of this word array.
     */
    clone: function () {
        var clone = Base.clone.call(this);
        clone.words = this.words.slice(0);
        
        return clone;
    },

    /**
     * Creates a word array filled with random bytes.
     */
    random: function (nBytes) {
        var words = [];
        for (var i = 0; i < nBytes; i += 4) {
            words.push((Math.random() * 0x100000000) | 0);
        }

        return new WordArray.init(words, nBytes);
    },
}