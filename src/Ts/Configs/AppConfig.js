import {
  ErrorAlertSxStyles,
  SuccessAlertSxStyles,
  WarningAlertSxStyles,
} from "../CommonStyles/CommonSxStyles";
import {
  candidateSideNavMenuItems,
  hrSideNavMenuItems,
} from "./SideMenuItemsConfig";

export const rolesConfig = {
  HR: "HR",
  CANDIDATE: "CANDIDATE",
};

export const sideNavMenuItemsConfig = {
  HR: hrSideNavMenuItems,
  CANDIDATE: candidateSideNavMenuItems,
};

export const difficultyOptions = [
  { title: "BEGINNER" },
  { title: "INTERMEDIATE" },
  { title: "ADVANCED" },
];

export const employmentTypeOptions = [
  { label: "Full time", title: "FULL_TIME" },
  { label: "Part time", title: "PART_TIME" },
];

export const employmentTypeBeToUiMap = {
  FULL_TIME: "Full time",
  PART_TIME: "Part time",
};

export const alertStylesConfig = {
  success: SuccessAlertSxStyles,
  warning: WarningAlertSxStyles,
  error: ErrorAlertSxStyles,
};

export const DaysMap = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
