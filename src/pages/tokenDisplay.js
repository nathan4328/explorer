import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Policy from "./policy";
import Prices from "./prices";

export default function TokenDisplay(props){

    const [prices, setPrices] = useState();

    function copyText(event, text) {
        navigator.clipboard.writeText(text).then(() => {
          // Update the button text to "Copied!"
          const button = event.target;
          event.target.innerText = "Copied";
          setTimeout(() => {
            // Reset the button text after 1 second
            button.textContent = "Copy";
          }, 1000);
        });
      }
    function setPriceData(data){
        setPrices(data);
    }


    return(
        <div className="token-main">
            <Prices data = {setPriceData}/>
            <Policy policy = {props.data.token.policy_id} prices = {prices} stake = {props.stake}/>
                <div className="token-box">
                    <div className="token-image">
                        <Image className = "main-img" alt= 'no image' src = {props.data.token.ipfs} width = {500} height = {500}/>
                    </div>
                    <div className="token-data">
                        <div className="token-data-item">
                            Name: <div className="value">{props.data.name}</div>
                        </div>
                        <div className="token-data-item">
                            Created: <div className="value">{props.data.created}</div>
                        </div>
                        <div className="token-data-item">
                            Asset Id: <div className="value">{(props.data.token.asset_name)}</div>
                            <button className="policy-button" onClick={(e) => copyText(e, props.data.token.asset_name)}>Copy</button>
                        </div>
                        <div className="token-data-item">
                            Rarity Rank: <div className="value">{props.data.rarityRank}</div>
                        </div>
                        <div className="token-data-item">
                            Statistical Rank: <div className="value">{props.data.statisticalRank}</div>
                        </div>
                        <div className="token-data-item">
                            Fingerprint: <div className="value">{(props.data.fingerprint).substring(0,15)}...</div>
                            <button className="policy-button" onClick={(e) => copyText(e, props.data.fingerprint)}>Copy</button>
                        </div>
                        <div className="token-data-item">
                            <div className="value">
                                <Link className = 'policy-button' href={'https://www.jpg.store/asset/'+props.data.assetId}>
                                    JPG.store
                                    <Image src={'/jpg.svg'} width={30} height={30} alt='jpg'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="metadata">Metadata: <br/>{JSON.stringify(props.data.token.metadata)}</div>
        </div>
    )
}