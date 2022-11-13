import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userProfileDetails: {},
    isLoading: true,
    validations: {},
  },
  reducers: {
    getUserProfile() {},
    saveUserProfile() {},
    updateUserProfile(state, { payload }) {
      state.userProfileDetails = payload;
    },
    setIsProfileLoading(state, { payload }) {
      state.isLoading = false;
    },
    setValidationsOnProfile(state, { payload }) {
      state.validations = payload;
    },
  },
});

export const {
  getUserProfile,
  saveUserProfile,
  setValidationsOnProfile,
  updateUserProfile,
  setIsProfileLoading,
} = profileSlice.actions;

export default profileSlice.reducer;
