import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: undefined,
  exp: undefined,
  storedTasks: {},
  nfts: {},
};

export const zkRecordSlice = createSlice({
  name: "zkRecord",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setExp: (state, action) => {
      state.exp = action.payload;
    },
    setStoredTasks: (state, action) => {
      state.storedTasks = action.payload;
    },
    setNfts: (state, action) => {
      state.nfts = action.payload;
    },
  },
});

export const { setAddress, setExp, setStoredTasks, setNfts } =
  zkRecordSlice.actions;

export const zkRecordSelector = (state) => state.zkRecord;

export default zkRecordSlice.reducer;
