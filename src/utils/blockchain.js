import React from 'react';
import Web3 from 'web3'
import Color from '../abis/Color.json'
import NFT from '../abis/NFT.json'

export const loadWeb3 =  async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
}


export const loadBlockchainData = async (updateState) =>{
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId()
    const networkData = Color.networks[networkId]
    if(networkData) {
      const abi = Color.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)            
      const totalSupply = await contract.methods.totalSupply().call()
      var colors=[];
      var owners =[];
      var tokens = [];
      for (var i = 1; i <= totalSupply; i++) {
        const color = await contract.methods.colors(i - 1).call();
        colors= [...colors, color];        
        const colorId = await contract.methods.colorId(color).call();        
        const owner = await contract.methods.ownerOf(colorId).call();
        const token = {'owner' : owner, 'color': color, 'id' : colorId}
        tokens= [...tokens, token]  
                      
      }
      updateState(accounts[0], contract, totalSupply, colors, owners, tokens)
    } else {
      window.alert('Color Smart contract not deployed to detected network.')
    }
  }

  export const loadNFTData = async (updateNFTstate) =>{
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()    
    const networkId = await web3.eth.net.getId()
    const networkData = await NFT.networks[networkId]
    
    if(networkData) {
      const abi = NFT.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)            
      const totalSupply = await contract.methods.totalSupply().call()
      var tokens=[];   
      
      for (let i = 1; i <= totalSupply; i++) {        
        const imgUrl = await contract.methods.getImgUrl(i).call();                
        const owner = await contract.methods.ownerOf(i).call();
        const token = {'owner' : owner, 'imgUrl': imgUrl, 'id' : i}        
        tokens= [...tokens, token]                        
      }
      console.log('-->LoadingNFT Data => totalSupply:', totalSupply, ' Tokens:', JSON.stringify(tokens))
      updateNFTstate(accounts[0], contract, totalSupply, tokens)
    } else {
      window.alert('NFT Smart contract not deployed to detected network.')
    }
  }
