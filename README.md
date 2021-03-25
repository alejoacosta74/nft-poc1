# NFT token PoC

## NFT Contract address

The `NFT` smart contract is deployed in Kovan at address [0x9Aa62AB00f41a38a34AF9D6EDEac0F2D2D9746CF](https://kovan.etherscan.io/address/0x9aa62ab00f41a38a34af9d6edeac0f2d2d9746cf)

## Installation

Run `npm install` to install packages.

## Usage

Running `npm start` will start a local web server and a browser tab to access the following Dapp:

![screen example](./src/utils/screen1.png)

## Development

To run locally, run `truffle develop` from your terminal.

To compile contracts, run `truffle compile`.

## Deployment

To deploy to a local development blockchain, run `truffle migrate` (contracts must already be compiled and a local blockchain must be running).

To deploy to Ethereum mainnet or a Testnet, provide an `.env` file with the following variables:

```bash
MNEMONIC="<Your mnemonic seed>"
INFURA_API_KEY="<Infura-API-Key>"
Deploy by running truffle migrate --network <Network-Name>.
```
