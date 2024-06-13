import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  ticker: {},
  error: "",
};

const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    searchTicker(state, action) {
      (state.error = ""), (state.ticker = action.payload);
    },
    setError(state, action) {
      state.error = action.payload;
      state.ticker = {};
    },
  },
});

export function searchTicker(ticker) {
  if (ticker === "") return;

  return async function (dispatch, getState) {
    const res = await fetch(`/api/v1/ticker?q=${ticker}`);
    const data = await res.json();

    if (res.status != 200) {
      dispatch({ type: "ticker/setError", payload: data.message });
      return;
    }

    dispatch({ type: "ticker/searchTicker", payload: data });
  };
}

export default tickerSlice.reducer;
