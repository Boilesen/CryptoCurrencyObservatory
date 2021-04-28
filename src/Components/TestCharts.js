import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Dimmer, Loader, Select } from "semantic-ui-react";
import ApexCharts from "apexcharts";
import moment from "moment";

import Chart from "react-apexcharts";

function Charts3(props) {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState("usd");
  const [chartData, setChartData] = useState(null);
  const [series, setSeries] = useState(null);
  const [timestamp, setTimestamp] = useState(new Date());
  const [timestampi, setTimestampi] = useState(new Date(2021, 0, 1));

  const options = [
    { value: "usd", text: "USD" },
    { value: "eur", text: "EUR" },
    { value: "gbp", text: "GPB" },
    { value: "brl", text: "BRL" },
  ];

  useEffect(() => {
    async function fetchPrices() {
      getChartData();
    }
    fetchPrices();
  }, [currency, timestamp, timestampi]);

  const getChartData = async () => {
    var TS = moment(timestamp).format("X");
    var TSi = moment(timestampi).format("X");
    var crypto = `https://api.coingecko.com/api/v3/coins/${props.match.params.id}/market_chart/range?vs_currency=${currency}&from=${TSi}&to=${TS}`;
    const res = await fetch(crypto);
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
  const handleText = (e) => {
    setTimestamp(e.target.value);
  };
  const handleText2 = (e) => {
    setTimestampi(e.target.value);
  };

  return (
    <div className="container">
      <div className="nav" style={{ padding: "15px", backgroundColor: "gray" }}>
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
            <div className="form">
              <Select
                placeholder="Select your currency"
                onChange={handleSelect}
                options={options}
              />
            </div>
            <div>
              <h4>Data Inicial</h4>{" "}
              <input
                type="date"
                id="date"
                name="Date"
                onChange={handleText2}
                value={timestampi}
              />
            </div>
            <div>
              <h4>Data Final</h4>{" "}
              <input
                type="date"
                id="date"
                name="Date"
                onChange={handleText}
                value={timestamp}
              />
            </div>
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
