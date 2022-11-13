import { createSlice } from "@reduxjs/toolkit";

const candidateDashboardSlice = createSlice({
  name: "candidateDashboard",
  initialState: {
    activities: [],
    isLoading: true,
  },
  reducers: {
    getCandidateActivities() {},
    setCandidateActivities(state, { payload }) {
      state.activities = payload;
    },
    setIsCandidateActivitiesLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  getCandidateActivities,
  setCandidateActivities,
  setIsCandidateActivitiesLoading,
} = candidateDashboardSlice.actions;

export default candidateDashboardSlice.reducer;
