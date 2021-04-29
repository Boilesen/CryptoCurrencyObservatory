import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Coin.css";
const Coin = ({
  id,
  name,
  price,
  marketcap,
  volume,
  image,
  priceChange,
  marketcaprank,
}) => {
  return (
    <Link to={`/fullcoin/${id}`}>
      <div className="coin-app">
        <div className="coin-row gradient">
          <div className="coin">
            {" "}
            <img src={image} alt="crypto" /> <span>{name}</span>
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
    </Link>
  );
};

export default Coin;
