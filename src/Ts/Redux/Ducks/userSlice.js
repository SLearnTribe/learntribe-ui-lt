import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    access_token: "",
    isLoading: false,
  },
  reducers: {
    getUserData() {},
    setUserData(state, { payload }) {
      state.userDetails = payload.userDetails;
      state.access_token = payload.access_token;
    },
    setUserDataLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const { getUserData, setUserData, setUserDataLoading } =
  userSlice.actions;

export default userSlice.reducer;
