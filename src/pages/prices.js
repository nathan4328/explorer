import { useEffect, useState } from "react"

export default function Prices () {

    const [prices, setPrices] = useState();
    const [granularity, setGranularity] = useState('24 hours');
    const [color, setColor] = useState('red');

    useEffect(() => {
        const getPrices = async () => { 
            let req = await fetch('https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false');
            let res = await req.json();

            let adaUSD = (res.market_data.current_price.usd).toFixed(2);
            let adaGBP = (res.market_data.current_price.gbp).toFixed(2);
            let adaBTC = (res.market_data.current_price.btc).toFixed(5);
            let adaETH = (res.market_data.current_price.eth).toFixed(5);

            let adaUsdChange = '';
            let adaGbpChange = '';
            let adaBtcChange = '';
            let adaEthChange = '';

            if(granularity == '24 hours'){
                adaUsdChange = (res.market_data.price_change_percentage_24h_in_currency.usd).toFixed(2);
                adaGbpChange = (res.market_data.price_change_percentage_24h_in_currency.gbp).toFixed(2);
                adaBtcChange = (res.market_data.price_change_percentage_24h_in_currency.btc).toFixed(2);
                adaEthChange = (res.market_data.price_change_percentage_24h_in_currency.eth).toFixed(2);
            }
            else if (granularity == '7 days'){
                adaUsdChange = (res.market_data.price_change_percentage_7d_in_currency.usd).toFixed(2);
                adaGbpChange = (res.market_data.price_change_percentage_7d_in_currency.gbp).toFixed(2);
                adaBtcChange = (res.market_data.price_change_percentage_7d_in_currency.btc).toFixed(2);
                adaEthChange = (res.market_data.price_change_percentage_7d_in_currency.eth).toFixed(2);
            }
            else if (granularity == '30 days'){
                adaUsdChange = (res.market_data.price_change_percentage_30d_in_currency.usd).toFixed(2);
                adaGbpChange = (res.market_data.price_change_percentage_30d_in_currency.gbp).toFixed(2);
                adaBtcChange = (res.market_data.price_change_percentage_30d_in_currency.btc).toFixed(2);
                adaEthChange = (res.market_data.price_change_percentage_30d_in_currency.eth).toFixed(2);

            }
            else if (granularity == '60 days'){
                adaUsdChange = (res.market_data.price_change_percentage_60d_in_currency.usd).toFixed(2);
                adaGbpChange = (res.market_data.price_change_percentage_60d_in_currency.gbp).toFixed(2);
                adaBtcChange = (res.market_data.price_change_percentage_60d_in_currency.btc).toFixed(2);
                adaEthChange = (res.market_data.price_change_percentage_60d_in_currency.eth).toFixed(2);

            }
            else if(granularity == '1 year'){
                adaUsdChange = (res.market_data.price_change_percentage_1y_in_currency.usd).toFixed(2);
                adaGbpChange = (res.market_data.price_change_percentage_1y_in_currency.gbp).toFixed(2);
                adaBtcChange = (res.market_data.price_change_percentage_1y_in_currency.btc).toFixed(2);
                adaEthChange = (res.market_data.price_change_percentage_1y_in_currency.eth).toFixed(2);

            }
            
            let color = 'black';

            if(adaUsdChange <=0 ){
                color = 'red';
            }
            else if (adaUsdChange == 0){
                color = 'grey';
            }
            else{
                color = '#7FFF00';
            }

            setPrices(
                <nav>
                    <div className="out-price">
                        <div className="price-label">ADA/USD ${adaUSD}</div>
                        <div className="price-label" style={{color: color}}>({adaUsdChange}%)</div>
                    </div>

                    <div className="out-price">   
                    <div className="price-label">ADA/GBP £{adaGBP}</div>
                    <div className="price-label" style={{color: color}}>({adaGbpChange}%)</div>
                    </div>

                    <div className="out-price">
                    <div className="price-label">ADA/ETH Ξ{adaETH}</div>
                    <div className="price-label" style={{color: color}}>({adaEthChange}%)</div>
                    </div>

                    <div className="out-price">
                    <div className="price-label">ADA/BTC ₿{adaBTC}</div>
                    <div className="price-label" style={{color: color}}>({adaBtcChange}%)</div>
                    </div>
                    <div>
                    <label className="setting-label">Price Time Span</label>
                    <button className="setting-button" onClick={() => increaseGranularity(granularity)}>{granularity}</button>
                    </div>
                </nav>

            )
        }
        getPrices();
    }, [granularity])

    const increaseGranularity = (granularity) => {
        if(granularity == '24 hours'){
            setGranularity('7 days');
        }
        if(granularity == '7 days'){
            setGranularity('30 days');
        }
        if(granularity == '30 days'){
            setGranularity('60 days');
        }
        if(granularity == '60 days'){
            setGranularity('1 year');
        }
        if(granularity == '1 year'){
            setGranularity('25 hours');
        }
    }

    return(<div>{prices}</div>
    )
}