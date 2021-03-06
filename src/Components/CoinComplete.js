import React from "react";

const Coin = ({
  id,
  symbol1,
  name1,
  image1,
  current_price1,
  market_cap1,
  market_cap_rank1,
  fully_diluted_valuation1,
  total_volume1,
  high_24h1,
  low_24h1,
  price_change_24h1,
  price_change_percentage_24h1,
  market_cap_change_24h1,
  market_cap_change_percentage_24h1,
  circulating_supply1,
  total_supply1,
  max_supply1,
  ath1,
  ath_change_percentage1,
  ath_date1,
  atl1,
  atl_change_percentage1,
  atl_date1,
  last_updated1,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image1} alt="crypto" />
          <h1>{name1}</h1>
          <h2>{id}</h2>
          <p className="coin-symbol">{symbol1}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">current_price: ${current_price1}</p>
          <p className="coin-high">
            high_24h: ${high_24h1.toLocaleString() || ""}
          </p>
          <p className="coin-low">
            low_24h: ${low_24h1.toLocaleString() || ""}
          </p>
          <p className="coin-volume">
            total_volume: ${total_volume1.toLocaleString() || ""}
          </p>

          <p className="coin-volume">
            price_change_24h: ${price_change_24h1.toLocaleString() || ""}
          </p>
          {price_change_percentage_24h1 < 0 ? (
            <p className="coin-percent red">
              {price_change_percentage_24h1.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {price_change_percentage_24h1.toFixed(2)}%
            </p>
          )}
          <p className="coin-rank">
            Mkt Cap Rank: ${market_cap_rank1.toLocaleString() || ""}
          </p>

          <p className="coin-volume">
            total_volume1: ${total_volume1.toLocaleString() || ""}
          </p>

          <p className="coin-marketcap">
            Mkt Cap: ${market_cap1.toLocaleString() || ""}
          </p>

          <p className="coin-change">
            market_cap_change_24h: $
            {market_cap_change_24h1.toLocaleString() || ""}
          </p>

          {market_cap_change_percentage_24h1 < 0 ? (
            <p className="coin-percent red">
              {market_cap_change_percentage_24h1.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {market_cap_change_percentage_24h1.toFixed(2)}%
            </p>
          )}

          <p className="coin-diluted">
            fully_diluted_valuation: ${fully_diluted_valuation1}
          </p>

          <p className="coin-supply">
            circulating_supply: ${circulating_supply1.toLocaleString() || ""}
          </p>
          <p className="coin-supply">total_supply: ${total_supply1}</p>
          <p className="coin-supply">max_supply: ${max_supply1}</p>
          <p className="coin-ath">ath: ${ath1.toLocaleString() || ""}</p>

          {ath_change_percentage1 < 0 ? (
            <p className="coin-percent red">
              {ath_change_percentage1.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {ath_change_percentage1.toFixed(2)}%
            </p>
          )}

          <p className="coin-ath">
            ath_date: ${ath_date1.toLocaleString() || ""}
          </p>
          <p className="coin-ath">atl: ${atl1.toLocaleString() || ""}</p>
          <p className="coin-ath">
            atl_change_percentage: $
            {atl_change_percentage1.toLocaleString() || ""}
          </p>
          <p className="coin-ath">
            atl_date: ${atl_date1.toLocaleString() || ""}
          </p>

          <p className="coin-last_updated">
            last_updated: ${last_updated1.toLocaleString() || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
