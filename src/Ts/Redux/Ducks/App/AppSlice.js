import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isSideMenuCollapsed: true,
    cityList: [],
    opened: true,
    snackbar: { text: "", open: false, variant: "filled", severity: "success" },
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
    updateSnackbar(state, { payload }) {
      state.snackbar = payload;
    },
  },
});

export const {
  setCustomDrawerOpenState,
  setIsSideMenuCollapsed,
  setCityList,
  getAllCities,
  updateSnackbar,
} = appSlice.actions;

export default appSlice.reducer;
