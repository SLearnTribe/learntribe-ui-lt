export const getJobs = (state) => state.jobSlice.jobs;

export const getCurrentEditingJob = (state) => state.jobSlice.currentEditingJob;

export const getJobsAssessedForOptions = (state) =>
  state.jobSlice.jobsAssessedForOptions;

export const getSkillsOptions = (state) => state.jobSlice.skillsOptions;

export const getJobsOrCompaniesChartData = (state) => state.jobSlice.chartData;
