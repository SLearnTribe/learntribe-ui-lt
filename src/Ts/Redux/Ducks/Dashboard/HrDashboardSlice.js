import { createSlice } from "@reduxjs/toolkit";
import { HrHiringInLastMonthTableMockData } from "../../../Utils/MockData/DashboardData";

const hrDashboardSlice = createSlice({
  name: "hrDashboard",
  initialState: {
    dashboardData: {
      hiringInLastMonth: HrHiringInLastMonthTableMockData(),
      hiringInProgress: HrHiringInLastMonthTableMockData(),
      isLoading: true,
    },
  },
  reducers: {
    getHrDashboardData() {},
    setHrDashboardData(state, { payload }) {
      state.dashboardData = payload;
    },
    setIsHrDashboardLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  getHrDashboardData,
  setHrDashboardData,
  setIsHrDashboardLoading,
} = hrDashboardSlice.actions;

export default hrDashboardSlice.reducer;
