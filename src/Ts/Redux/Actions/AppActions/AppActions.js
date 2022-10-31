import Types from "../../Constants/index";

export const setMobileAnchorEl = (role) => ({
  type: Types.SET_ROLE,
  payload: role,
});

export const setIsSideMenuCollapsed = (isCollapsed) => ({
  type: Types.SET_IS_SIDE_MENU_CALLAPSED,
  payload: isCollapsed,
});
