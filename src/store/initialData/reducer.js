import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialData: [],
  needExp: {},
  nftPrice: Number,
  firstNftPrice: Number,
};

export const initialDataSlice = createSlice({
  name: "initialData",
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      state.initialData = action.payload;
    },
    setNeedExp: (state, action) => {
      state.needExp = action.payload;
    },
    setNftPrice: (state, action) => {
      state.nftPrice = action.payload;
    },
    setFirstNftPrice: (state, action) => {
      state.firstNftPrice = action.payload;
    },
  },
});

export const { setInitialData, setNeedExp, setNftPrice, setFirstNftPrice } =
  initialDataSlice.actions;

export const initialDataSelector = (state) => state.initialData;

export default initialDataSlice.reducer;
