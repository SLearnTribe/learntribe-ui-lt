import { createSlice } from "@reduxjs/toolkit";
import { JobsMockData } from "../../../Utils/MockData/DashboardData";

const jobSlice = createSlice({
  name: "jobSlice",
  initialState: {
    currentEditingJob: null,
    jobs: JobsMockData(),
  },
  reducers: {
    getJobsData() {},
    setJobsData(state, { payload }) {
      state.jobs = payload;
    },
    setCurrentEditingJob(state, { payload }) {
      state.currentEditingJob = payload;
    },
  },
});

export const { getJobsData, setJobsData, setCurrentEditingJob } =
  jobSlice.actions;

export default jobSlice.reducer;
