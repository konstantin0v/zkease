import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialData: [],
};

export const initialDataSlice = createSlice({
  name: "initialData",
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      state.initialData = action.payload;
    },
  },
});

export const { setInitialData } = initialDataSlice.actions;

export const initialDataSelector = (state) => state.initialData;

export default initialDataSlice.reducer;
