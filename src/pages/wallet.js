import { useEffect, useState } from "react";
import Link from "next/link";
import DropdownBox from "./dropdownBox";
import Token from "./token";
import { Lucid, Kupmios, Blockfrost } from "lucid-cardano";


function Wallet ({address}) {
  const [isVisibleGrid, setIsVisibleGrid] = useState();
  const [tokens, setTokens] = useState();
  const [policies, setPolicies] = useState();
  const [tokensNumber, setTokensNumber] = useState();
  const [projectsNumber, setProjectNumber] = useState();
  const [balance, setBalance] = useState();
  const [isLoading, setisLoading] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedTokens, setLoadedTokens] = useState();
  const [filter, setFilter] = useState('All');
  const [order, setOrder] = useState('Quantity (Most)');
  

  useEffect(() => {
    const getTokens = async () =>{
      if(address == null){
        //base
      }
      else{
        setisLoading('fetching');
        setIsVisibleGrid(false);
        setIsVisible(true);

        let _tokens = [];



        if (address == 'Typhon Wallet' || address == 'eternl' || address == 'Nami' || address == 'Flint Wallet'){
          _tokens = await getDataFromWallet(address);
        }
        else if (address.startsWith('add')){
          _tokens = await getDataFromBlockfrost(address);
        }

        const _policies = groupTokensByPolicyId(_tokens);
        const out = displayTokens(_policies, 'ALL');
        //sessionStorage.setItem(address, JSON.stringify(_policies));

        setPolicies(_policies);
        setTokens(out);
        setisLoading('done');
        setIsVisible(false);
        setIsVisibleGrid(true);
      }

    }
      
    getTokens();
  }, [address]);

  if(isLoading == 'fetching'){
    return <div>

      <div className="loading-symbol" style={{ visibility: isVisible ? 'visible' : 'hidden' }}></div>
      <label className="loading-info">{loadedTokens}</label>
    </div>
  }



  async function getDataFromWallet(wallet){
    
    var _tokens = [];
    _tokens = await getWalletData(wallet);
    return _tokens;
    //change

  }

  async function getDataFromBlockfrost(address){

    const req = await fetch('https://cardano-mainnet.blockfrost.io/api/v0/addresses/'+address,
    {headers:{project_id: 'mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh', 'cache-control': 'max-age=31536000'}});
    const _tokenJson = await req.json();
    const _tokens = await createTokens(_tokenJson.amount);
    return _tokens;
  }

  async function getWalletData(wallet){
    setLoadedTokens('Connecting to '+wallet+'...');
    const lucid = await Lucid.new(
      new Blockfrost(
        "https://cardano-mainnet.blockfrost.io/api/v0",
        'mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh',
      ),
    );

    var api = '';

    if(wallet == 'Typhon Wallet'){
      api = await window.cardano.typhoncip30.enable();
    }
    if(wallet == 'eternl'){
      api = await window.cardano.eternl.enable();
    }
    if(wallet == 'Nami'){
      api = await window.cardano.nami.enable();
    }
    if(wallet == 'Flint Wallet'){
      api = await window.cardano.flint.enable();
    }
    
    lucid.selectWallet(api);
    setLoadedTokens('Fetching UTxOs...');
    const _utxos = await lucid.wallet.getUtxos();
    
    const _assets = getAssetsFromUTXOs(_utxos);

    let totalLovelace = 0;
    let _tokens = [];
    for(let j = 0; j <_assets.length; j ++){
      setLoadedTokens('Loading tokens from UTXOs: '+j + ' of ' +_assets.length);

      let _utxo = _assets[j];
      let _assetList = Object.keys(_utxo);


      for(const _asset of _assetList){
        if(_asset != 'lovelace'){

          let token = new Token(_asset, parseInt(_utxo[_asset]));
          token.metadata = await token.getMetadata();
          if(token.metadata != null){
            let ipfs = token.getIpfsFromMetadata();
            token.ipfs = ipfs;
          }
          _tokens.push(token);

        }
        else{
          totalLovelace += parseInt(_utxo[_asset]);
        }
      }
    }
    setBalance(((totalLovelace)/1000000).toFixed(2));
    setTokensNumber(_tokens.length);
    return _tokens;

  }

  function getAssetsFromUTXOs(_utxos){
    let _tokens = [];

    for(const utxo of _utxos){
      _tokens.push(utxo.assets);
    }

    return _tokens;
  }

  function groupTokensByPolicyId(tokenList){
    const policyList = {};
    for(const token in tokenList){
      const policyId = tokenList[token].policyId;
      
      if(policyId in policyList){
        policyList[policyId].push(tokenList[token]);
      }else {
        policyList[policyId] = [tokenList[token]];
      }

    }
    const keys= Object.keys(policyList);
    setProjectNumber(keys.length);
    return sortPolicies(policyList);

  }

  function sortPolicies(policiesList){
    //policies
    const keys = Object.keys(policiesList);
    //token lists
    const values = Object.values(policiesList);
    values.sort((a,b) => a.length - b.length).reverse();
    const _sorted = {};
    for (let i=0;i<keys.length;i++){
      _sorted[keys[i]] = values [i];
    }

    return _sorted;
  }

  async function createTokens(assets){


    const _tokens = [];
    for(let i =0; i<assets.length;i++){
      if(assets[i].unit != 'lovelace'){
        setLoadedTokens('Loading tokens: '+i + ' of ' +assets.length)
        let token = new Token(assets[i].unit, assets[i].quantity);
        token.metadata = await token.getMetadata();
        if(token.metadata != null){
          let ipfs = token.getIpfsFromMetadata();
          token.ipfs = ipfs;
         _tokens.push(token);
        }
      }
      else{
        setBalance(((assets[i].quantity)/1000000).toFixed(2));
      }

    }
    setTokensNumber(_tokens.length);
    return _tokens;

  }

  function displayTokens(tokenList, type){

    if(tokenList != null){
      let keys = Object.keys(tokenList);
      let display = [];
  
  
      for(const element of keys){
        let token = tokenList[element][0];
        
        if(type == 'ALL'){
          display.push(<div key = {token.unit + 'all'} className = "grid-item"><img className = "grid-img" src={token.ipfs} alt = 'failed to load image'></img></div>);
        }
        if(type == 'NFT'){
          if(token.quantity == 1){
            display.push(<div key = {token.unit + 'nft'} className = "grid-item"><img className = "grid-img" src={token.ipfs} alt = 'failed to load image'></img></div>);
          }
        }
        if(type == 'FT'){
          if(token.quantity != 1){
            display.push(<div key = {token.unit + 'ft'} className = "grid-item"><img className = "grid-img" src={token.ipfs} alt = 'failed to load image'></img></div>);
          }
        } 
  
      }
      return display;
    }
  }

  function changeDisplay(type){
    setTokens(displayTokens(policies, type));
  }

  return(
    <div style={{ visibility: isVisibleGrid ? 'visible' : 'hidden' }}>
      <nav>
        <div className="wallet-info">Balance: {balance}₳</div>
        <div className="wallet-info">Number of Tokens: {tokensNumber}</div> 
        <div className="wallet-info"> Number of Projects: {projectsNumber}</div>
      </nav>
      <nav>
        <div>
          <button className="sort-button" onClick={() => changeDisplay('ALL')}>Order By:</button>
          <label className="sort-label">{order}</label>
        </div>
        <div>
          <label className="sort-label">Filter:</label>
          <button className="sort-button" onClick={() => changeDisplay('ALL')}>All</button>
          <button className="sort-button" onClick={() => changeDisplay('NFT')}>NFT</button>
          <button className="sort-button" onClick={() => changeDisplay('FT')}>Coins</button>
        </div>
      </nav>
      <div className="tokens">
        {tokens}
      </div>

    </div>
  );
}

export default Wallet;