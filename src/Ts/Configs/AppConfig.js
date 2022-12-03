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
  { title: "EASY" },
  { title: "MEDIUM" },
  { title: "HARD" },
];

export const employmentTypeOptions = [
  { label: "Full time", title: "FULL_TIME" },
  { label: "Part time", title: "PART_TIME" },
];

export const employmentTypeBeToUiMap = {
  FULL_TIME: "Full time",
  PART_TIME: "Part time",
};
