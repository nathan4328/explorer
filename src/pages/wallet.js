import { useState } from "react";
import Fts from "./fts";
import Nfts from "./nfts";
import Prices from "./prices";
import Summary from "./summary";

export default function Wallet (props) {

    // market data from coingecko from prices component
    const [prices, setPrices] = useState();

    // used to switch between showing nfts and fts
    const [showNfts, setShowNfts] = useState(false);
    const [nftActive, setNftActive] = useState(false);
    const [ftActive, setFtActive] = useState(true);

    // callback from prices component
    // returns ada price info to be used by 'Fts' component
    function setPriceData(data){
        setPrices(data);
    }

    // used to alternate between showing nfts and fts on button click
    function displayNfts(){
        setFtActive(false);
        setNftActive(true);
        setShowNfts(true);
    }

    // used to alternate between showing nfts and fts on button click
    function displayFts(){
        setNftActive(false);
        setFtActive(true);
        setShowNfts(false);
    }
    
    return (
        <div className="wallet">
            <Prices tokens = {props.tokens} data ={setPriceData}/>
            <Summary tokens = {props.tokens} prices = {prices}/>
             <nav className="setting-nav">
                <div>
                    <button className= {nftActive ? 'active' : 'inactive'}  onClick={displayNfts}>NFTs</button>
                    <button className= {ftActive ? 'active' : 'inactive'} onClick={displayFts}>FTs</button>
                </div>
                <div>
                    <button className="setting-button" >Search</button>
                </div>
             </nav>
             {showNfts ? <Nfts tokens = {props.tokens} /> : <Fts tokens = {props.tokens} prices = {prices}/>}
        </div>
    )
}