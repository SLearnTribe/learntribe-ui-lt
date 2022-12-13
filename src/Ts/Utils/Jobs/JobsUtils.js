import { isNull, uniq, uniqBy } from "lodash";

export const hanldeJobsResponse = (response) => {
  const jobOptions = [];

  const skillsOptions = [];

  response.forEach(({ title, requiredSkills, id }) => {
    if (!isNull(title)) {
      jobOptions.push({ title, id, requiredSkills });
    }
    if (!isNull(requiredSkills)) {
      skillsOptions.push(requiredSkills);
    }
  });

  return {
    jobOptions: uniqBy(jobOptions, "title"),
    skillsOptions: uniq(skillsOptions),
  };
};
