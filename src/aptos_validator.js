module.exports = {
    isValidAddress: function (address) {
        // Check if it starts with "0x" and is 64 hex characters long (32 bytes)
        if (!/^0x[0-9a-fA-F]{64}$/.test(address)) {
            return false;
        }

        // No checksum verification needed for Aptos, so if it's valid hex, return true
        return true;
    }
};
