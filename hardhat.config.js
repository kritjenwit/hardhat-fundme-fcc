require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
// require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-deploy");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // solidity: "0.8.9",
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
      { version: "0.6.6" },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: process.env.RINKBY_RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 4,
      blockConfirmations: 6,
    },
  },
  // gasReporter: {
  //   enabled: true,
  //   currency: "USD",
  //   outputFile: "gas-report.txt",
  //   noColors: true,
  // },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: 0,
    user: {
      default: 1,
    },
  },
};
