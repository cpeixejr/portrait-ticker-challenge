import React from "react";
import Ticker from "../features/tickers/Ticker";
import Search from "../features/tickers/Search";
import ErrorMessage from "./ErrorMessage";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const ticker = useSelector((store) => store.ticker);

  return (
    <div className="App">
      <Search />
      {ticker.ticker.name && <Ticker ticker={ticker.ticker} />}
      {ticker.error && <ErrorMessage message={ticker.error} />}
    </div>
  );
}

export default App;
