const { getNamedAccounts, ethers } = require("hardhat");

const main = async () => {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);

  console.log("Funding Contract...");

  const transactionResponse = await fundMe.withdraw();

  await transactionResponse.wait(1);
  console.log("Got it back");
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
