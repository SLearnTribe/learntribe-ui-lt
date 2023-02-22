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

export const ResumeUploadSuccessAlert = {
  ...EmptySnackbarState,
  text: "Resume uploaded successfully",
  open: true,
};

export const ResumeUploadErrorAlert = {
  ...EmptySnackbarState,
  text: "Resume upload failed",
  open: true,
  severity: "error",
};

export const ResumeDownloadErrorAlert = {
  ...EmptySnackbarState,
  text: "Resume upload failed",
  open: true,
  severity: "error",
};

export const ResumeDownloadSuccessAlert = {
  ...EmptySnackbarState,
  text: "Resume uploaded successfully",
  open: true,
};
