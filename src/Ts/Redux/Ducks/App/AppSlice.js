import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isSideMenuCollapsed: true,
    cityList: [],
  },
  reducers: {
    getAllCities() {},
    setIsSideMenuCollapsed(state, { payload }) {
      state.isSideMenuCollapsed = payload;
    },
    setCityList(state, { payload }) {
      state.cityList = payload;
    },
  },
});

export const { setIsSideMenuCollapsed, setCityList, getAllCities } =
  appSlice.actions;

export default appSlice.reducer;
