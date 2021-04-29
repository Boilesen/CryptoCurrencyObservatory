import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Dimmer, Loader, Select } from "semantic-ui-react";
import "../Styles/Charts.css";
import Chart from "react-apexcharts";
import Chart2 from "./Charts2";
import Chart3 from "./Charts3";

function Charts() {
  const [loading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [series, setSeries] = useState(null);

  const options = [
    { value: "USD", text: "USD" },
    { value: "EUR", text: "EUR" },
    { value: "GBP", text: "GPB" },
  ];

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const data = await res.json();
      setCurrency(data.bpi.USD.code);
      setPriceData(data.bpi);
      getChartData();
    }
  }, []);
  var ts = Math.round(new Date().getTime() / 1000);

  const getChartData = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1556389240&to=${ts}`
    );
    const data = await res.json();
    const categories = Object.values(data.prices.map((X) => X[0]));
    const series = Object.values(data.prices.map((X) => X[1]));
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
    <div className="container gradient">
      <div className="nav gradient" style={{ padding: "15px" }}>
        Coindesk API Data
      </div>
      {loading ? (
        <div>
          <Dimmer active inverted>
            <Loader>Loading</Loader>
          </Dimmer>
        </div>
      ) : (
        <>
          <div
            className="price-container"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: 600,
              height: 300,
              margin: "0 auto",
            }}
          >
            <div className="form">
              <Select
                placeholder="Select your currency"
                onChange={handleSelect}
                options={options}
              />
            </div>

            <div className="price">
              <Card>
                <Card.Content>
                  <Card.Header>{currency} Price</Card.Header>
                  <Card.Description>
                    {priceData[currency].rate}
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Chart
              options={chartData}
              series={series}
              type="line"
              width="1200"
              height="300"
            />
          </div>
          <div>
            <Chart2 />
          </div>
          <div>
            <Chart3 />
          </div>
        </>
      )}
    </div>
  );
}

export default Charts;
