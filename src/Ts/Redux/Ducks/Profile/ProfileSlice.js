import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userProfileDetails: {},
    updatedUserProfile: {},
    isLoading: true,
    validations: {},
  },
  reducers: {
    getUserProfile() {},
    saveUserProfile() {},
    updateUserProfile(state, { payload }) {
      state.updatedUserProfile = payload;
    },
    setIsProfileLoading(state, { payload }) {
      state.isLoading = false;
    },
    setValidationsOnProfile(state, { payload }) {
      state.validations = payload;
    },
    setUserProfile(state, { payload }) {
      state.userProfileDetails = payload;
    },
  },
});

export const {
  getUserProfile,
  saveUserProfile,
  setValidationsOnProfile,
  updateUserProfile,
  setUserProfile,
  setIsProfileLoading,
} = profileSlice.actions;

export default profileSlice.reducer;
