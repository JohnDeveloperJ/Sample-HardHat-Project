require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "gaCXiUJlvYUlSqK2gNLbVD46OfSt_ldE";
const SEPOLIA_PRIVATE_KEY = "562eb4d874fde371080697d03a9f11465ec663cec9311c75e64939e50eb088bd";

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