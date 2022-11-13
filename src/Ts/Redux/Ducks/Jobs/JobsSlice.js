import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobSlice",
  initialState: {
    currentEditingJob: null,
    jobs: [],
    isLoading: true,
  },
  reducers: {
    getCandidatesJobsData() {},
    setCandidatesJobsData(state, { payload }) {
      state.jobs = payload;
    },
    setCurrentEditingJob(state, { payload }) {
      state.currentEditingJob = payload;
    },
    setIsJobsDataLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  getCandidatesJobsData,
  setCandidatesJobsData,
  setCurrentEditingJob,
  setIsJobsDataLoading,
} = jobSlice.actions;

export default jobSlice.reducer;
