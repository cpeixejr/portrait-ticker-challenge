import React from "react";
import { useSelector } from "react-redux";

function Ticker() {
  const ticker = useSelector((state) => state.ticker);

  return (
    <>
      <p>{ticker.name}</p>
      <table id="ticker-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Maximum</th>
            <th>Minimum</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            <td>
              {ticker.maxPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td>
              {ticker.minPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td>
              {ticker.avgPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
          <tr>
            <td>Volume</td>
            <td>
              {ticker.maxVolume.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
            <td>
              {ticker.minVolume.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
            <td>
              {ticker.avgVolume.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Ticker;
