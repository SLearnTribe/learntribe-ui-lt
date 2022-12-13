import { createSlice } from "@reduxjs/toolkit";

const hrDashboardSlice = createSlice({
  name: "hrDashboard",
  initialState: {
    hiringInLastMonth: [],
    hiringInProgress: [],
    isLoading: true,
  },
  reducers: {
    getHrHiringData() {},
    setHrHiringInLastMonthData(state, { payload }) {
      state.hiringInLastMonth = payload;
    },
    setHrHiringData(state, { payload }) {
      state.hiringInProgress = payload;
    },
    setIsHrDashboardLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  getHrHiringData,
  setHrHiringInLastMonthData,
  setHrHiringData,
  setIsHrDashboardLoading,
} = hrDashboardSlice.actions;

export default hrDashboardSlice.reducer;
