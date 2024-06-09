import React from "react";
import Ticker from "../features/tickers/Ticker";
import Search from "../features/tickers/Search";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const ticker = useSelector((store) => store.ticker.name);

  return (
    <div className="App">
      <Search />
      {ticker && <Ticker></Ticker>}
    </div>
  );
}

export default App;
