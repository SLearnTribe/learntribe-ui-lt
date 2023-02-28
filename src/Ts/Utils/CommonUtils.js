import moment from "moment";
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

export const ResumeSaveSuccessAlert = {
  ...EmptySnackbarState,
  text: "Resume saved successfully",
  open: true,
};

export const ResumeSaveErrorAlert = {
  ...EmptySnackbarState,
  text: "Resume save failed",
  open: true,
  severity: "error",
};

export const formatMMMYYYDate = (dateString) => {
  return moment(dateString, "YYYYMMDD").format("MMM YYYY");
};

export const isObjectEmpty = (object) => {
  return Object.keys(object).length === 0;
};

export const handleWorkPresenrMap = (workExperiences) => {
  const workMap = {};

  let isWorkPresent = false;

  workExperiences.forEach(({ currentlyWorking = false }, index) => {
    if (currentlyWorking) {
      workMap[index] = true;
      isWorkPresent = true;
    } else {
      workMap[index] = false;
    }
  });

  workExperiences.forEach((ele, index) => {
    if (isWorkPresent) {
      workMap[index] = !workMap[index];
    } else {
      workMap[index] = false;
    }
  });

  return workMap;
};
