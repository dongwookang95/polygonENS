require("dotenv").config();
require("@nomiclabs/hardhat-waffle");


module.exports = {
    solidity: "0.8.4",
    networks: {
        mumbai: {
            url: process.env.ALCHEMY_MUMBAI_URL,
            accounts: [process.env.TEST_WALLET_PRIVATE_KEY],
        }
    }
};