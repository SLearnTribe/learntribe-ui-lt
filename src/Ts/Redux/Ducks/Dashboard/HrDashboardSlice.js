import { createSlice } from "@reduxjs/toolkit";

const hrDashboardSlice = createSlice({
  name: "hrDashboard",
  initialState: {
    hiringInLastMonth: [],
    hiringInProgress: [],
    isLoading: true,
    hiringInProgressChartData: {
      series: [],
      categories: [],
    },
    hiringInLastMonthChartData: {
      series: [],
      categories: [],
    },
  },
  reducers: {
    getHrHiringData() {},
    setHrHiringInLastMonthData(
      state,
      { payload: { data, hiringInLastMonthChartData } }
    ) {
      state.hiringInLastMonth = data;
      state.hiringInLastMonthChartData = hiringInLastMonthChartData;
    },
    setHrHiringData(state, { payload: { data, hiringInProgressChartData } }) {
      state.hiringInProgress = data;
      state.hiringInProgressChartData = hiringInProgressChartData;
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
