import { createSlice } from "@reduxjs/toolkit";
import { userProfileMockData } from "../../../Utils/MockData/DashboardData";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userInfo: userProfileMockData,
  },
  reducers: {
    getUserProfile() {},
    updateUserProfile(state, { payload }) {
      state.userInfo = payload;
    },
  },
});

export const { getUserProfile, updateUserProfile } = profileSlice.actions;

export default profileSlice.reducer;
