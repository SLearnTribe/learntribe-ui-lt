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
    postLogout() {},
    setUserData(state, { payload: { userDetails, access_token } }) {
      state.userDetails = userDetails;
      state.access_token = access_token;
    },
    setUserDataLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const { getUserData, setUserData, setUserDataLoading, postLogout } =
  userSlice.actions;

export default userSlice.reducer;
