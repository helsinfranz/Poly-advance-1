// This script fetches the prompt for generating DogePound NFT images

const { ethers } = require("hardhat");
const ABI = require("../artifacts/contracts/DogePound.sol/DogePound.json");

async function main() {
  const contractAddress = "0xb9E164CD30B2Ce37B6ac6eD1a9000FBfDdaa019d";
  const contractABI = ABI.abi;
  const networkName = "https://ethereum-goerli.publicnode.com";

  const provider = ethers.getDefaultProvider(networkName);

  // Get an instance of the contract using the contract address and ABI
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Get the prompt description from the contract
  const promptDescription = await contract.promptDescription();

  console.log(`Prompt for generating DogePound NFT images:\n${promptDescription}`);
}

// Call the main function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
