import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./CoinComplete";
import TestCharts from "./TestCharts";

export default CoinComplete;

function CoinComplete(props) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) => coin.id === props.match.params.id
  );

  return (
    <div className="coin-app">
      <div>
        <TestCharts />
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            id={coin.id}
            symbol1={coin.symbol}
            name1={coin.name}
            image1={coin.image}
            current_price1={coin.current_price}
            market_cap1={coin.market_cap}
            market_cap_rank1={coin.market_cap_rank}
            fully_diluted_valuation1={coin.fully_diluted_valuation}
            total_volume1={coin.total_volume}
            high_24h1={coin.high_24h}
            low_24h1={coin.low_24h}
            price_change_24h1={coin.price_change_24h}
            price_change_percentage_24h1={coin.price_change_percentage_24h}
            market_cap_change_24h1={coin.market_cap_change_24h}
            market_cap_change_percentage_24h1={
              coin.market_cap_change_percentage_24h
            }
            circulating_supply1={coin.circulating_supply}
            total_supply1={coin.total_supply}
            max_supply1={coin.max_supply}
            ath1={coin.ath}
            ath_change_percentage1={coin.ath_change_percentage}
            ath_date1={coin.ath_date}
            atl1={coin.atl}
            atl_change_percentage1={coin.atl_change_percentage}
            atl_date1={coin.atl_date}
            last_updated1={coin.last_updated}
          />
        );
      })}
    </div>
  );
}
