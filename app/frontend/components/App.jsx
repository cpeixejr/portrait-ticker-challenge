import React from "react";
import store from "../store";
import { Provider } from "react-redux";
import Ticker from "../components/Ticker";
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
