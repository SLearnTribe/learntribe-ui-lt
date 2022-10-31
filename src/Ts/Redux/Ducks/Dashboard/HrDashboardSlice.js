import { createSlice } from "@reduxjs/toolkit";
import { HrHiringInLastMonthTableMockData } from "../../../Utils/MockData/DashboardData";

const hrDashboardSlice = createSlice({
  name: "hrDashboard",
  initialState: {
    dashboardData: {
      hiringInLastMonth: HrHiringInLastMonthTableMockData(),
      hiringInProgress: HrHiringInLastMonthTableMockData(),
    },
  },
  reducers: {
    getHrDashboardData() {},
    setHrDashboardData(state, { payload }) {
      state.dashboardData = payload;
    },
  },
});

export const { getHrDashboardData, setHrDashboardData } =
  hrDashboardSlice.actions;

export default hrDashboardSlice.reducer;
