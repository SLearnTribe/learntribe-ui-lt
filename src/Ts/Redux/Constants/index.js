const ThemeTypes = {
  SET_THEME: "SET_THEME",
};

const AppDrawerTypes = {
  SET_MOBILE_ANCHOR_EL: "SET_MOBILE_ANCHOR_EL",
  SET_IS_MOBILE_OPEN: "SET_IS_MOBILE_OPEN",
};

const UserRoles = {
  SET_ROLE: "SET_ROLE",
};

const HrApplicantTypes = {
  SET_SELECTED_APPLICANT_DETAILS: "SET_SELECTED_APPLICANT_DETAILS",
};

const HrPostJobsTypes = {
  SET_POST_JOBS_DATA: "SET_POST_JOBS_DATA",
  SET_CURRENT_EDITING_POST_JOB: "SET_CURRENT_EDITING_POST_JOB",
};

const ModalTypes = {
  SET_CURRENT_MODAL: "SET_CURRENT_MODAL",
};

const AppTypes = {
  SET_IS_SIDE_MENU_CALLAPSED: "SET_IS_SIDE_MENU_CALLAPSED",
};

const DashboardTypes = {
  SET_HR_DASHBOARD_DATA: "SET_HR_DASHBOARD_DATA",
};

export default {
  ...ThemeTypes,
  ...AppDrawerTypes,
  ...UserRoles,
  ...HrApplicantTypes,
  ...HrPostJobsTypes,
  ...ModalTypes,
  ...AppTypes,
  ...DashboardTypes,
};
