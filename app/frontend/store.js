import { configureStore } from "@reduxjs/toolkit";

import tickerReducer from "./features/tickers/tickerSlice";

const store = configureStore({
  reducer: {
    ticker: tickerReducer,
  },
});

export default store;
