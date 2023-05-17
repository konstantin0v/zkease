import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialData: [],
  needExp: {},
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
  },
});

export const { setInitialData, setNeedExp } = initialDataSlice.actions;

export const initialDataSelector = (state) => state.initialData;

export default initialDataSlice.reducer;
