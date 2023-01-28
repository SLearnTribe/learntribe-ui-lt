import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isSideMenuCollapsed: true,
    cityList: [],
    opened: true,
  },
  reducers: {
    getAllCities() {},
    setIsSideMenuCollapsed(state, { payload }) {
      state.isSideMenuCollapsed = payload;
    },
    setCityList(state, { payload }) {
      state.cityList = payload;
    },

    setCustomDrawerOpenState(state, { payload }) {
      state.opened = payload;
    },
  },
});

export const {
  setCustomDrawerOpenState,
  setIsSideMenuCollapsed,
  setCityList,
  getAllCities,
} = appSlice.actions;

export default appSlice.reducer;
