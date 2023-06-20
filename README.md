# Polygon-1

This Markdown file provides instructions for deploying and managing our NFT contract on the Ethereum testnet and Polygon Mumbai network.

## Getting Started

### Executing the Program

To check the functionality of the contract, you can run the test file using the following command:

\`\`\`shell
npx hardhat test
\`\`\`

### Deploying the ERC721A Contract

1. Create a `.env` file and assign your private key to the `PRIVATE_KEY` variable.
2. Run the deployment script by executing the following command:

\`\`\`shell
npx hardhat run scripts/deploy.js --network goerli 
\`\`\`

The deployment script will output the contract address in the console and save it in the "contractAddress.js" file located in the metadata folder.

### Batch Minting NFTs

To mint NFTs in the contract, run the following command:

\`\`\`shell
npx hardhat run scripts/batchMint.js --network goerli
\`\`\`

### Approving and Depositing NFTs to Polygon Mumbai

To approve and deposit the minted NFTs from the Ethereum testnet to the Polygon Mumbai network using the FxPortal Bridge, execute the following command:

\`\`\`shell
npx hardhat run scripts/approveDeposit.js --network goerli
\`\`\`

### Viewing the Prompt

If you want to generate images of the NFTs, you can view the prompt by running the following command:

\`\`\`shell
yarn hardhat run scripts/viewPrompt.js
\`\`\`
