import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isSideMenuCollapsed: true,
  },
  reducers: {
    setIsSideMenuCollapsed(state, { payload }) {
      state.isSideMenuCollapsed = payload;
    },
  },
});

export const { setIsSideMenuCollapsed } = appSlice.actions;

export default appSlice.reducer;
