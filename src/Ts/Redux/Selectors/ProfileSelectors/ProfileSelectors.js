export const getUserProfileInfo = (state) =>
  state.profileSlice.userProfileDetails;

export const getProfileValidations = (state) => state.profileSlice.validations;

export const getIsProfileLoading = (state) => state.profileSlice.isLoading;
