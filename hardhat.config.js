// hardhat.config.js
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY || "01234567890123456789";
const infuraId = process.env.INFURA_ID || "";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    // hardhat: {
    //   chainId: 1337
    // },
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },

    rinkeby: {
      // Infura
      url: `https://rinkeby.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },

    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [privateKey]
    },
    bscmainnet: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [privateKey]
    },

    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [privateKey]
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [privateKey]
    }
  },
};