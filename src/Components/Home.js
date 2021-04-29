import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home gradient">
      <Link className="lista" to="/lista">
        <h2>Cryptomoedas</h2>
        <p>
          Clique aqui para acessar mais informações sobre as cryptomoedas e
          gráficos em tempo real de acordo com a data
        </p>
      </Link>
      {/* <Link className="completecoin" to="/completecoin">
        <h2>Completa</h2>
        <p>Todas nmfgkdhngfkhjn</p>
      </Link> */}
      <Link className="charts" to="/charts">
        <h2>Graficos</h2>
        <p>
          Clique aqui para acessar os gráficos atualizados de BitCoin, desde
          2019
        </p>
      </Link>

      {/* <Link className="fullcoin" to="/fullcoin">
        <h2>fullcoin</h2>
        <p>fullcoin elas</p>
      </Link> */}
      {/* <Link className="testcharts" to="/testcharts">
        <h2>testcharts</h2>
        <p>testcharts elas</p>
      </Link> */}
    </div>
  );
};

export default Home;
