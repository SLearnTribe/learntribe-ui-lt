import { Route } from "react-router-dom";
import { Applicants } from "../Components/Pages/Applicants/Applicants";
import { Assessments } from "../Components/Pages/Assessments/Assessments";
import { CandidateDashboard } from "../Components/Pages/Dashboards/Candidate/CandidateDashboard";
import { HrDashboard } from "../Components/Pages/Dashboards/HR/HrDashboard";
import { CandidateHelp } from "../Components/Pages/Help/CandidateHelp/Help";
import { HrHelp } from "../Components/Pages/Help/HRHelp/Help";
import { Jobs } from "../Components/Pages/Jobs/Jobs";
import { PostJobs } from "../Components/Pages/PostJobs/PostJobs";
import { CandidateProfile } from "../Components/Pages/Profiles/CandidateProfile/Profile";
import { HrProfile } from "../Components/Pages/Profiles/HRProfile/Profile";
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
    path: routes.profile,
    component: HrProfile,
    permission: rolesConfig.HR,
  },
  {
    path: routes.help,
    component: HrHelp,
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
  {
    path: routes.assessments,
    component: Assessments,
    permission: rolesConfig.HR,
  },

  {
    path: routes.assessments,
    component: Assessments,
    permission: rolesConfig.CANDIDATE,
  },
  {
    path: routes.profile,
    component: CandidateProfile,
    permission: rolesConfig.CANDIDATE,
  },
  {
    path: routes.help,
    component: CandidateHelp,
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
