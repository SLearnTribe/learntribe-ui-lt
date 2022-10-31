export const getMobileAnchorEl = (state) => state.AppReducer.mobileMoreAnchorEl;

export const getIsMobileOpen = (state) => state.AppReducer.isMobileOpen;

export const getUserDetails = (state) => state.userSlice.userDetails;

export const getIsSideMenuCollapsed = (state) =>
  state.appSlice.isSideMenuCollapsed;
