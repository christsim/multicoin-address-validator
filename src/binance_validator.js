module.exports = {
  isValidAddress: function (address) {
      var binanceAddress = address.slice(address.indexOf('bnb'));
      if (binanceAddress.length !== 42) {
          return false;
      }
      return true;
  },
};
