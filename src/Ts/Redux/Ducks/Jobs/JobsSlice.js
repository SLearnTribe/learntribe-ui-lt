import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobSlice",
  initialState: {
    currentEditingJob: null,
    jobs: [],
    isLoading: true,
  },
  reducers: {
    getJobsData() {},
    postJobsData() {},
    setJobsData(state, { payload }) {
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
  postJobsData,
  getJobsData,
  setJobsData,
  setCurrentEditingJob,
  setIsJobsDataLoading,
} = jobSlice.actions;

export default jobSlice.reducer;
