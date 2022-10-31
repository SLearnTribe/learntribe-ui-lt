import { ExportReducer } from "../../Utils/ExportReducers";

const defaultState = {
  mobileMoreAnchorEl: null,
  isMobileOpen: false,
  userRole: "HR",
};

const setMobileAnchorEl = (state, mobileMoreAnchorEl) => {
  return {
    ...state,
    mobileMoreAnchorEl,
  };
};

const setIsMobileOpen = (state, isMobileOpen) => {
  return {
    ...state,
    isMobileOpen,
  };
};

const ActionMap = {
  SET_MOBILE_ANCHOR_EL: setMobileAnchorEl,
  SET_IS_MOBILE_OPEN: setIsMobileOpen,
};

export default ExportReducer(ActionMap, defaultState);
