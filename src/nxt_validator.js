const nxtRegex = new RegExp("^NXT(-[A-Z0-9]{4}){3}-[A-Z0-9]{5}$");

module.exports = {
    isValidAddress: function (address, currency, networkType) {
        if (!nxtRegex.test(address)) {
            return false;
        }
        return true;
    },
};
