import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTicker } from "./tickerSlice";

function Search() {
  const [tickerName, setTickerName] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!tickerName) return;
    dispatch(searchTicker(tickerName));
    setTickerName("");
  }

  return (
    <>
      <div className="input-group">
        <label className="ticker-label">Enter a Stock Ticker</label>
        <input
          className="form-input"
          value={tickerName}
          onChange={(e) => setTickerName(e.target.value)}
        />
        <button className="btn" onClick={handleClick}>
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
