const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compileFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  process.env.SEED_ADDRESS,
  // remember to change this to your own phrase!
  process.env.RINKBERY
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compileFactory.interface))
    .deploy({ data: compileFactory.bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
    
  console.log(compileFactory.interface)
  console.log("Contract deployed to", result.options.address);
};
deploy();
