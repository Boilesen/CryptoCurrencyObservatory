import React from "react";
import { Link } from "react-router-dom";
const Coin = ({
  id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  marketcaprank,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <Link to={`/fullcoin/${id}`}>
            {" "}
            <img src={image} alt="crypto" />{" "}
          </Link>
          <h1>{name}</h1>
          <h2>{id}</h2>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
          <p className="coin-marketcap">
            Mkt Cap Rank: ${marketcaprank.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
