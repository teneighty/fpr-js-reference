require('dotenv').config();
var FPR = require("kyber-fpr-sdk");
var Web3 = require("web3");
var addresses = require("./addresses.json");
//add credentials to your env variables
const provider = new Web3.providers.HttpProvider(process.env.TESTNET_NODE_URL);
const web3 = new Web3(provider);
const account = web3.eth.accounts.privateKeyToAccount(process.env.TESTNET_ADMIN_PRIVATE_KEY);

const reserveManager = new FPR.Reserve(web3, addresses);
const KNAddress = '0x920B322D4B8BAB34fb6233646F5c87F87e79952b';
web3.eth.accounts.wallet.add(account);

(async ()=>{
    console.log('Linking Contracts');
    await reserveManager.setContracts(account, KNAddress, addresses.conversionRates);
        console.log("Done!")     
     })();