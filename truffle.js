module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

    /*
     * for usage with TestRPC:
     * > testrpc
     * > truffle test --network development
     */

  networks: {
    development: {
      // for usage with e.g. Ganache
      host: "127.0.0.1",
      port: 8545,
      network_id: "4321", // specify network id to avoid Metamask nonce calculation problem
      gas: 2100000
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 2100000
    }
  }
};
