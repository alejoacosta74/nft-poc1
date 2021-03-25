
import '../App.css';  
import React, { Component } from 'react';
import Header from './Header';
import {loadWeb3, loadNFTData} from '../utils/blockchain';
import RenderNFT from './RenderNFT';

class App extends Component {

  constructor(props) {
    super(props)
    this.updateNFTstate = this.updateNFTstate.bind(this);
    this.state = {
      account: '',
      contract: null,
      totalSupply: 0,
      tokens: [],
    }
  }


  async componentDidMount() {    
    loadWeb3();    
    loadNFTData(this.updateNFTstate);
    window.ethereum.on('accountsChanged', (accounts) =>{
      console.log('Metamask event change account received')      
      loadNFTData(this.updateNFTstate);
    
      this.setState({
        account: accounts[0]
      })
    })
  }

  updateNFTstate = (_account, _contract, _totalSupply, _tokens) => {
    this.setState ({
      account: _account,
      contract: _contract,      
      totalSupply: _totalSupply,
      tokens: _tokens
    })
  } 


  mint = (uri) => {    
    this.state.contract.methods.mint(uri).send({
       from: this.state.account
       })
    .on('transactionHash', function(hash){
      console.log('On MINT tXHash: \n', hash);
    })
    .on('confirmation', function(confirmationNumber, receipt){
      console.log('On MINT confirmation: \n', confirmationNumber, " \nConfirmation receipt: ", receipt);
    })
    .on('receipt', (result) => {
          let owner = result.events.Mint.returnValues.owner
          let imgUrl = result.events.Mint.returnValues.imgUrl
          let id = result.events.Mint.returnValues.id
          let token = {'owner' : owner, 'imgUrl': imgUrl, 'id' : id}
          console.log('\nOn MINT receipt => Adding new NFT with id:', id, ' imgUrl: ', imgUrl, ' owner: ', owner)
          this.setState({              
              tokens: [...this.state.tokens, token]      
          });          
    })    
    .on('error', (error, receipt) => {
      console.log('On MINT error: \n --> error:', error);
      console.log('--> receipt: ', receipt);
    })
  }

  burn = async (id) => {    
    this.state.contract.methods.burn(id).send({
       from: this.state.account
       })
    .on('transactionHash', function(hash){
      console.log('On BURN tXHash: \n', hash);
    })
    .on('confirmation', function(confirmationNumber, receipt){
      console.log('On BURN confirmation: \n', confirmationNumber, " \nConfirmation receipt: ", receipt);
    })
    .on('receipt', async (result) => {
          console.log('On BURN receipt:', result)
          let owner = result.events.Burn.returnValues.owner;
          let imgUrl = result.events.Burn.returnValues.imgUrl;
          let id = result.events.Burn.returnValues.id;
          let token = {'owner' : owner, 'imgUrl': imgUrl, 'id' : id}    
          console.log('\nOn receipt => Burn NFT with id:', id, ' imgUrl: ', imgUrl, ' owner: ', owner);
          await loadNFTData(this.updateNFTstate);                
    })    
    .on('error', (error, receipt) => {
      console.log('On BURN error: \n --> error:', error);
      console.log('--> receipt: ', receipt);
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <Header account = {this.state.account}/>
        </div>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Mint NFT Token</h1>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const uri = this.uri.value
                  this.mint(uri)
                }}>
                  <input
                    type='text'
                    className='form-control mb-1'
                    placeholder='paste img uri, e.g. http://google.com/img1.png'
                    ref={(input) => { this.uri = input }}
                  />
                  <input
                    type='submit'
                    className='btn btn-block btn-secondary'
                    value='MINT'
                  />
                </form>
                </div>
                <div className="content mr-auto ml-auto">
                <h1>Burn NFT Token</h1>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const id = this.id.value
                  this.burn(id)
                }}>
                  <input
                    type='text'
                    className='form-control mb-1'
                    placeholder='insert NFT id, e.g. 1'
                    ref={(input) => { this.id = input }}
                  />
                  <input
                    type='submit'
                    className='btn btn-block btn-secondary'
                    value='BURN'
                  />
                </form>
              </div>
            </main>
          </div>
          <hr/>
          <div className="container">
            <RenderNFT tokens = {this.state.tokens}/>        
          </div>
        </div>
      </div>
    );
  }
}

export default App;