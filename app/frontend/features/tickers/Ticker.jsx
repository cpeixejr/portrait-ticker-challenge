import React from "react";
import { useSelector } from "react-redux";

function Ticker({ ticker }) {
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
              {ticker.max_price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td>
              {ticker.min_price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td>
              {ticker.avg_price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
          <tr>
            <td>Volume</td>
            <td>
              {ticker.max_volume.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
            <td>
              {ticker.min_volume.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
            <td>
              {ticker.avg_volume.toLocaleString("en-US", {
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
