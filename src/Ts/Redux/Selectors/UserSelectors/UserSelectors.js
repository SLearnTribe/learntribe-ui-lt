export const getIsUserDataLoading = (state) => state.userSlice.isLoading;

export const getUserDetails = (state) => state.userSlice.userDetails;

export const getAccessToken = (state) => state.userSlice.access_token;

export const getExpirationToken = (state) => state.userSlice.userDetails.exp;

export const getAssessmentProcData = (state) =>
  state.assessmentProcSlice.procData;
