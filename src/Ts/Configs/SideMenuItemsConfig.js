import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import HelpIcon from "@mui/icons-material/Help";
import PeopleIcon from "@mui/icons-material/People";
import PostAddIcon from "@mui/icons-material/PostAdd";
import WorkIcon from "@mui/icons-material/Work";
import { TealBadge } from "../CommonJsx/SharedJsxStyles";
import { WhiteColor } from "../CommonStyles/CommonSxStyles";
import { SideMenuTexts } from "../Utils/Text";
import {
  adminRoute,
  applicantsRoute,
  assessmentsRoute,
  candidatesRoute,
  completedExamsRoute,
  createNewExamRoute,
  dashboardRoute,
  examsRoute,
  jobsRoute,
  postJobsRoute,
  profileRoute,
} from "./RoutesConfig";

export const SideMenuItems = [
  {
    title: SideMenuTexts.dashboard,
    path: dashboardRoute,
    icon: <DashboardIcon sx={WhiteColor} />,
  },
  {
    title: SideMenuTexts.jobs,
    path: jobsRoute,
    icon: <WorkIcon sx={WhiteColor} />,
  },
  {
    title: SideMenuTexts.exams,
    path: examsRoute,
    icon: <AssignmentIcon sx={WhiteColor} />,
    children: [
      {
        title: SideMenuTexts.completedExams,
        path: completedExamsRoute,
        icon: <TealBadge badgeContent={4} color="primary" />,
      },
      {
        title: SideMenuTexts.createNewExam,
        path: createNewExamRoute,
        icon: null,
      },
    ],
  },
  {
    title: SideMenuTexts.candidates,
    path: candidatesRoute,
    icon: <PeopleIcon sx={WhiteColor} />,
  },
  {
    title: SideMenuTexts.admin,
    path: adminRoute,
    icon: <AdminPanelSettingsIcon sx={WhiteColor} />,
  },
];

export const hrSideNavMenuItems = [
  {
    title: SideMenuTexts.dashboard,
    path: dashboardRoute,
    icon: <DashboardIcon sx={WhiteColor} />,
  },
  {
    title: SideMenuTexts.postJobs,
    path: postJobsRoute,
    icon: <PostAddIcon sx={WhiteColor} />,
  },
  // {
  //   title: SideMenuTexts.assessments,
  //   path: assessmentsRoute,
  //   icon: <AssignmentIcon sx={WhiteColor} />,
  // },
  {
    title: SideMenuTexts.applicants,
    path: applicantsRoute,
    icon: <PeopleIcon sx={WhiteColor} />,
  },
  // {
  //   title: SideMenuTexts.profile,
  //   path: profileRoute,
  //   icon: <AccountCircleIcon sx={WhiteColor} />,
  // },
  // {
  //   title: SideMenuTexts.help,
  //   path: helpRoute,
  //   icon: <HelpIcon sx={WhiteColor} />,
  // },
];

export const candidateSideNavMenuItems = [
  hrSideNavMenuItems[0],
  {
    title: SideMenuTexts.assessments,
    path: assessmentsRoute,
    icon: <AssignmentIcon sx={WhiteColor} />,
  },
  {
    title: SideMenuTexts.jobs,
    path: jobsRoute,
    icon: <WorkIcon sx={WhiteColor} />,
  },
  {
    title: SideMenuTexts.profile,
    path: profileRoute,
    icon: <AccountCircleIcon sx={WhiteColor} />,
  },
  // {
  //   title: SideMenuTexts.help,
  //   path: helpRoute,
  //   icon: <HelpIcon sx={WhiteColor} />,
  // },
];
