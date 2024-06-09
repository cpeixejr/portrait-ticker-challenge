import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  minPrice: 0,
  maxPrice: 0,
  avgPrice: 0,
  minVolume: 0,
  maxVolume: 0,
  avgVolume: 0,
};

const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    searchTicker(state, action) {
      state.name = action.payload.name;
      state.minPrice = action.payload.min_price;
      state.maxPrice = action.payload.max_price;
      state.avgPrice = action.payload.avg_price;
      state.minVolume = action.payload.min_volume;
      state.maxVolume = action.payload.max_volume;
      state.avgVolume = action.payload.avg_volume;
    },
  },
});

export function searchTicker(ticker) {
  if (ticker === "") return;
  return async function (dispatch, getState) {
    const res = await fetch(`/api/v1/ticker?q=${ticker}`);

    if (res.status != 200) return;

    const data = await res.json();
    dispatch({ type: "ticker/searchTicker", payload: data });
  };
}

export default tickerSlice.reducer;
