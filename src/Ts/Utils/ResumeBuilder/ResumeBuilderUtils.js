import { cloneDeep } from "lodash";
import {
  NewEducationObject,
  NewExperienceObject,
  NewProjectsObject,
} from "../../Configs/Profile/ProfileConfig";

export const handleCurrentResume = (currentResume) => {
  const copyCurrentResume = cloneDeep(currentResume);

  if (copyCurrentResume.workExperiences.length === 0) {
    copyCurrentResume.workExperiences = NewExperienceObject;
  }
  if (copyCurrentResume.sideProjects.length === 0) {
    copyCurrentResume.sideProjects = NewProjectsObject;
  }
  if (copyCurrentResume.educationExperiences.length === 0) {
    copyCurrentResume.educationExperiences = NewEducationObject;
  }
  return copyCurrentResume;
};

export const normalizeYearMonthDate = (date) => {
  return date.slice(0, 7).replace("-", "/");
};
