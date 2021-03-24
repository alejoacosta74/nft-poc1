import '../App.css';  
import React from 'react';
import {Col } from 'reactstrap';
function Header({account}){
    return (
        <div className = "App-header">
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <Col sm="3">
                <h4>NFT Tokens Dapp</h4> <br/> 
                </Col>
                <Col sm="6">
                <p>Logged in account: {account}</p>
                </Col>
            </nav>
        </div>
    )
}

export default Header;