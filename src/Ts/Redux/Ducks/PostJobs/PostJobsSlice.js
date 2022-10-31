import { createSlice } from "@reduxjs/toolkit";
import { PostJobsMockData } from "../../../Utils/MockData/DashboardData";

const postJobsSlice = createSlice({
  name: "postJobs",
  initialState: {
    currentEditingJob: {},
    postJobsData: PostJobsMockData(5),
  },
  reducers: {
    getPostJobsData() {},
    setCurrentEditingPostJobData(state, { payload }) {
      state.currentEditingJob = payload;
    },
    setPostJobsData(state, { payload }) {
      state.postJobsData = payload;
    },
  },
});

export const {
  getPostJobsData,
  setPostJobsData,
  setCurrentEditingPostJobData,
} = postJobsSlice.actions;

export default postJobsSlice.reducer;
