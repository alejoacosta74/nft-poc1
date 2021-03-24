# NFT token PoC

## Installation:
Run npm install to install packages.

## Development
To run locally, run truffle develop from your terminal.

To compile contracts, run truffle compile.

## Testing
To test contracts, you must have an instance of truffle running locally. Make sure contracts are compiled and deploy them to the local development blockchain. Then, run truffle test.

## Deployment
To deploy to a local development blockchain, run truffle migrate (contracts must already be compiled and a local blockchain must be running).

To deploy to Ethereum mainnet or a Testnet, provide an .env file with the following variables:
```bash
MNEMONIC="<Your mnemonic seed>"
INFURA_API_KEY="<Infura-API-Key>"
Deploy by running truffle migrate --network <Network-Name>.
```
