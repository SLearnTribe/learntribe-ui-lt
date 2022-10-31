export const routes = {
  base: "/smile-bat",
  exams: "/exams",
  dashboard: "/dashboard",
  jobs: "/jobs",
  candidates: "/candidates",
  admin: "/admin",
  completedExams: "/completed-exams",
  createNewExam: "/create-new-exam",
  assessments: "/assessments",
  postJobs: "/post-jobs",
  applicants: "/applicants",
  profile: "/profile",
  help: "/help",
};

export const examsRoute = routes.base + routes.exams;

export const dashboardRoute = routes.base + routes.dashboard;

export const postJobsRoute = routes.base + routes.postJobs;

export const applicantsRoute = routes.base + routes.applicants;

export const profileRoute = routes.base + routes.profile;

export const helpRoute = routes.base + routes.help;

export const assessmentsRoute = routes.base + routes.assessments;

export const jobsRoute = routes.base + routes.jobs;

export const candidatesRoute = routes.base + routes.candidates;

export const adminRoute = routes.base + routes.admin;

export const completedExamsRoute = examsRoute + routes.completedExams;

export const createNewExamRoute = examsRoute + routes.createNewExam;
