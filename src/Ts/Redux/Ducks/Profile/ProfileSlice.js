import { createSlice } from "@reduxjs/toolkit";
import { userProfileMockData } from "../../../Utils/MockData/DashboardData";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userProfileDetails: userProfileMockData,
    isLoading: true,
  },
  reducers: {
    getUserProfile() {},
    updateUserProfile(state, { payload }) {
      state.userProfileDetails = payload;
    },
    setIsProfileLoading(state, { payload }) {
      state.isLoading = false;
    },
  },
});

export const { getUserProfile, updateUserProfile, setIsProfileLoading } =
  profileSlice.actions;

export default profileSlice.reducer;
