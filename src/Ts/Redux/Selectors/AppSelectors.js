export const getMobileAnchorEl = (state) => state.AppReducer.mobileMoreAnchorEl;

export const getIsMobileOpen = (state) => state.AppReducer.isMobileOpen;

export const getIsSideMenuCollapsed = (state) =>
  state.appSlice.isSideMenuCollapsed;

export const getAllCityList = (state) => state.appSlice.cityList;

export const getIsCustomDrawerOpen = (state) => state.appSlice.opened;
