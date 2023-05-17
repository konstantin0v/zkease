import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  allUsers: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { setUsers, setAllUsers } = usersSlice.actions;

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
