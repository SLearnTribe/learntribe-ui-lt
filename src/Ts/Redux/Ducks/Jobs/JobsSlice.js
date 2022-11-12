import { createSlice } from "@reduxjs/toolkit";
import { JobsMockData } from "../../../Utils/MockData/DashboardData";

const jobSlice = createSlice({
  name: "jobSlice",
  initialState: {
    currentEditingJob: null,
    jobs: JobsMockData(),
    isLoading: true,
  },
  reducers: {
    getJobsData() {},
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
  getJobsData,
  setJobsData,
  setCurrentEditingJob,
  setIsJobsDataLoading,
} = jobSlice.actions;

export default jobSlice.reducer;
