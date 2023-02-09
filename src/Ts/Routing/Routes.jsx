import { Route } from "react-router-dom";
import { CandidateViewProfile } from "../Components/Candidate/Profile/CandidateViewProfile";
import { Applicants } from "../Components/Pages/Applicants/Applicants";
import { Assessments } from "../Components/Pages/Assessments/Assessments";
import { CandidateAssessment } from "../Components/Pages/Dashboards/Candidate/CandidateAssessment";
import { CandidateDashboard } from "../Components/Pages/Dashboards/Candidate/CandidateDashboard";
import { InstructionsPage } from "../Components/Pages/Dashboards/Candidate/InstructionsPage";
import { HrDashboard } from "../Components/Pages/Dashboards/HR/HrDashboard";
import { Help } from "../Components/Pages/Help/Help";
// import { CandidateHelp } from "../Components/Pages/Help/CandidateHelp/Help";
// import { HrHelp } from "../Components/Pages/Help/HRHelp/Help";
import { Jobs } from "../Components/Pages/Jobs/Jobs";
import { PostJobs } from "../Components/Pages/PostJobs/PostJobs";
import { CandidateProfile } from "../Components/Pages/Profiles/CandidateProfile/Profile";
import { ApplicantProfile } from "../Components/Pages/Profiles/HRProfile/ApplicantProfile";
import { ResumeBuilder } from "../Components/Pages/ResumeBuilder/ResumeBuilder";
import { rolesConfig } from "../Configs/AppConfig";
import { routes } from "../Configs/RoutesConfig";

const RouterMap = [
  {
    path: routes.dashboard,
    component: HrDashboard,
    permission: rolesConfig.HR,
  },
  {
    path: routes.postJobs,
    component: PostJobs,
    permission: rolesConfig.HR,
  },
  {
    path: routes.applicants,
    component: Applicants,
    permission: rolesConfig.HR,
  },
  {
    path: routes.applicantDetails,
    component: ApplicantProfile,
    permission: rolesConfig.HR,
  },
  // {
  //   path: routes.profile,
  //   component: ApplicantProfile,
  //   permission: rolesConfig.HR,
  // },
  {
    path: routes.help,
    component: Help,
    permission: rolesConfig.HR,
  },
  {
    path: routes.dashboard,
    component: CandidateDashboard,
    permission: rolesConfig.CANDIDATE,
  },
  {
    path: routes.jobs,
    component: Jobs,
    permission: rolesConfig.CANDIDATE,
  },
  // {
  //   path: routes.assessments,
  //   component: Assessments,
  //   permission: rolesConfig.HR,
  // },
  {
    path: routes.assessments,
    component: Assessments,
    permission: rolesConfig.CANDIDATE,
  },
  {
    path: routes.assessmentInstruction,
    component: InstructionsPage,
    permission: rolesConfig.CANDIDATE,
  },
  {
    path: routes.candidateAssessment,
    component: CandidateAssessment,
    permission: rolesConfig.CANDIDATE,
  },
  {
    path: routes.profile,
    component: CandidateViewProfile,
    permission: rolesConfig.CANDIDATE,
  },
  {
    path: routes.editProfile,
    component: CandidateProfile,
    permission: rolesConfig.CANDIDATE,
  },
  {
    path: routes.builResume,
    component: ResumeBuilder,
    permission: rolesConfig.CANDIDATE,
  },
  {
    path: routes.help,
    component: Help,
    permission: rolesConfig.CANDIDATE,
  },
];

export const RenderRoute = (route, idx) => {
  return (
    <Route
      key={idx}
      path={routes.base + route.path}
      element={<route.component />}
    />
  );
};

export default RouterMap;
