require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "";
const SEPOLIA_PRIVATE_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: "QHSPPNJMP3QECU7Q8XNQH4CYJ5QWBYZKT7",
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
