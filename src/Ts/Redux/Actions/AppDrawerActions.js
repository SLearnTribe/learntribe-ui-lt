import Types from "../Constants";

export const setMobileAnchorEl = (mobileMoreAnchorEl) => ({
  type: Types.SET_MOBILE_ANCHOR_EL,
  payload: mobileMoreAnchorEl,
});

export const setIsMobileOpen = (isMobileOpen) => ({
  type: Types.SET_IS_MOBILE_OPEN,
  payload: isMobileOpen,
});
