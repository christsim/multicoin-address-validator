/**
 * Validator for NEAR Protocol addresses
 */

module.exports = {
  /**
   * Validates a NEAR Protocol address
   * 
   * NEAR addresses can be:
   * 1. Named accounts (e.g., "alice.near")
   * 2. NEAR-implicit accounts (64 hex characters)
   * 3. ETH-implicit accounts (0x followed by 40 hex characters)
   * 
   * @param {string} address - The NEAR address to validate
   * @returns {boolean} - True if the address is valid, false otherwise
   */
  isValidAddress: function (address) {
    if (!address || typeof address !== 'string') {
      return false;
    }

    // Check NEAR-implicit account
    if (/^[0-9a-fA-F]{64}$/i.test(address)) {
      return true;
    }

    // Check ETH-implicit account
    if (/^0x[0-9a-fA-F]{40}$/i.test(address)) {
      return true;
    }

    const ACCOUNT_ID_REGEX = /^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/;
    
    if (address.length < 2 || address.length > 64) {
      return false;
    }

    if (address === 'system') {
      return false;
    }

    return ACCOUNT_ID_REGEX.test(address);
  }
}; 