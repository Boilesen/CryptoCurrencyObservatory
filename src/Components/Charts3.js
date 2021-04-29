import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Dimmer, Loader } from "semantic-ui-react";
import "../Styles/Charts.css";
import Chart from "react-apexcharts";

function Charts3(props) {
  const [loading, setLoading] = useState(true);
  const [, setCurrency] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [series, setSeries] = useState(null);

  useEffect(() => {
    async function fetchPrices() {
      getChartData();
    }
    fetchPrices();
  }, []);
  var ts = Math.round(new Date().getTime() / 1000);

  const getChartData = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1556389240&to=${ts}`
    );
    const data = await res.json();
    const categories = Object.values(data.total_volumes.map((X) => X[0]));
    const series = Object.values(data.total_volumes.map((X) => X[1]));
    const time = categories.map(function (x) {
      return new Date(x).toLocaleDateString("en-US");
    });

    setChartData({
      xaxis: {
        categories: time,
      },
    });
    setSeries([
      {
        name: "Bitcoin Price",
        data: series,
      },
    ]);
    setLoading(false);
  };

  const handleSelect = (e, data) => {
    setCurrency(data.value);
  };

  return (
    <div className="container">
      <div className="nav gradient" style={{ padding: "15px", bottom: "15px" }}>
        total_volumes
      </div>
      {loading ? (
        <div>
          <Dimmer active inverted>
            <Loader>Loading</Loader>
          </Dimmer>
        </div>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Chart
              options={chartData}
              series={series}
              type="line"
              width="1200"
              height="300"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Charts3;
