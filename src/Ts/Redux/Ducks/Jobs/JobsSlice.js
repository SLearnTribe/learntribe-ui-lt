import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobSlice",
  initialState: {
    currentEditingJob: null,
    jobs: [],
    isLoading: true,
    jobsAssessedForOptions: [],
    skillsOptions: [],
    chartData: {
      series: [],
      categories: [],
    },
  },
  reducers: {
    getJobsData() {},
    postJobsData() {},
    setJobsData(state, { payload: { data, chartData } }) {
      state.jobs = data;
      state.chartData = chartData;
    },
    setCurrentEditingJob(state, { payload }) {
      state.currentEditingJob = payload;
    },
    setIsJobsDataLoading(state, { payload }) {
      state.isLoading = payload;
    },
    setJobsAssessedForOptions(state, { payload }) {
      state.jobsAssessedForOptions = payload;
    },
    setSkillsOptions(state, { payload }) {
      state.skillsOptions = payload;
    },
  },
});

export const {
  postJobsData,
  getJobsData,
  setJobsData,
  setCurrentEditingJob,
  setIsJobsDataLoading,
  setJobsAssessedForOptions,
  setSkillsOptions,
} = jobSlice.actions;

export default jobSlice.reducer;
