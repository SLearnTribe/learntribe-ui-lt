import { EmptySnackbarState } from "./AppUtils";

export const ScheduleCallSuccessSnackbar = {
  ...EmptySnackbarState,
  text: "Invitation sent successfully",
  open: true,
};

export const AssignSuccessSnackbar = {
  ...EmptySnackbarState,
  text: "Assigned assessment successfully",
  open: true,
};
