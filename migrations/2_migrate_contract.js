const Colors = artifacts.require('Color');
const NFT = artifacts.require('NFT');

module.exports = async function(deployer){
    await deployer.deploy(Colors);    
    await deployer.deploy(NFT);    
}
