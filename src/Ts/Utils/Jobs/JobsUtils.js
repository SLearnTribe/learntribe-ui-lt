import { isNull, uniqBy } from "lodash";

export const hanldeJobsResponse = (response) => {
  const jobOptions = [];

  const skillsOptions = [];

  response.forEach(({ title, requiredSkills }) => {
    if (!isNull(title)) {
      jobOptions.push({ title });
    }
    if (!isNull(requiredSkills)) {
      skillsOptions.push({ title: requiredSkills });
    }
  });

  return {
    jobOptions: uniqBy(jobOptions, "title"),
    skillsOptions: uniqBy(skillsOptions, "title"),
  };
};
