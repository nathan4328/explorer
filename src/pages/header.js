import { useState} from "react";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Wallet from "./wallet";
import { Blockfrost, Lucid } from "lucid-cardano";

export default function Header({updatedAddress}){

    const [searchQuery, setSearchQuery] = useState('');
    const [addressQuery, setAddressQuery] = useState('');
    const [showModal, setShowModal] = useState(false)
    const [walletLogo, setWalletLogo] = useState('Connect Wallet');
    const router = useRouter();
  
  
    const handleCustomAddress = async (event) =>{
      event.preventDefault();
      setShowModal(false);
      setWalletLogo(addressQuery.substring(0,10)+'...');
      updatedAddress(addressQuery);
    }
    
    const handleSearch = (event) => {
      event.preventDefault();
      // Use the `router.push` method to navigate to the dynamic page with the entered number as the URL parameter.
      if(searchQuery.startsWith('add')){
        router.push(`/address/${searchQuery}`);
      }
      else{
        router.push(`/token/${searchQuery}`);
      }
    }
  
  
    const handleClick = () => {
      setShowModal(true);
    }
  
    const handleClose = () => {
      setShowModal(false);
    }
  
    const handleSelect = async (wallet) => {
      setShowModal(false);
  
      let logo = '';
      if(wallet == 'Typhon Wallet'){
        logo = <img className="logo-img" src="/typhon.svg"></img>
      }
      if(wallet == 'eternl'){
        logo = <img className="logo-img" src="/eternl.png"></img>
      }
      if(wallet == 'Nami'){
        logo = <img className="logo-img" src="/nami.svg"></img>
      }
      if(wallet == 'Flint Wallet'){
        logo = <img className="logo-img" src="/flint.png"></img>
      }
  
      setWalletLogo(logo);

      updatedAddress(wallet);
    }

    

    return (
        <header>
        <label className="main-label">tokenExplr.io</label>
        <form className="searchForm" onSubmit={handleSearch}>
          <input type="text" className = "search-input" placeholder="Search for an address or a specific token..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="connect-wallet">
        <button className="connect-wallet-button" onClick={handleClick}>{walletLogo}</button>
        { showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Select Wallet</h2>
              <div>
                <button className="walletButton" onClick={() => handleSelect('Typhon Wallet')} style={{backgroundImage:`url(${'/typhon.svg'})`}}>Typhon</button>
                <button className="walletButton" onClick={() => handleSelect('eternl')} style={{backgroundImage:`url(${'/eternl.png'})`}}>Eternl</button>
                <button className="walletButton" onClick={() => handleSelect('Nami')} style={{backgroundImage:`url(${'/nami.svg'})`}}>Nami</button>
                <button className="walletButton" onClick={() => handleSelect('Flint Wallet')} style={{backgroundImage:`url(${'/flint.png'})`}}>Flint</button><br/>

                <form className="searchForm" onSubmit={handleCustomAddress}>
                  <input className="search-input" placeholder="Enter wallet address" value={addressQuery} onChange={(event) => setAddressQuery(event.target.value)}></input>
                  <button type="submit" className="search-button">Search</button>
                </form>
              </div>
              <button className="cancel-button" onClick={handleClose}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      </header>
    );
}