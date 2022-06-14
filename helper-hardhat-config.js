const networkConfig = {
  4: {
    name: "rinkeby",
    ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
  },
  137: {
    name: "polygon",
    ethUsdPriceFeed: "",
  },
};

const developmentChain = ["hardhat", "localhost"];
const developmentChains = developmentChain;

const DECIMALS = 8;
const INITIAL_ANSWER = 20000000000;

module.exports = {
  networkConfig,
  developmentChain,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
};
