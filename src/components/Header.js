import '../App.css';  
import React from 'react';
function Header({account}){
    return (
        <div className = "App-header">
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <h4>NFT Tokens Dapp</h4> <br/> 
                <p>Logged in account: {account}</p>
            </nav>
        </div>
    )
}

export default Header;