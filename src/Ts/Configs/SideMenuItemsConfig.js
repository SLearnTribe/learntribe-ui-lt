import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import PeopleIcon from "@mui/icons-material/People";
import PostAddIcon from "@mui/icons-material/PostAdd";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { TealBadge } from "../CommonJsx/SharedJsxStyles";
import { SideMenuTexts } from "../Utils/Text";
import {
  adminRoute,
  applicantsRoute,
  assessmentsRoute,
  builResumeRoute,
  candidatesRoute,
  completedExamsRoute,
  createNewExamRoute,
  dashboardRoute,
  editProfileRoute,
  examsRoute,
  helpRoute,
  jobsRoute,
  postJobsRoute,
} from "./RoutesConfig";

export const SideMenuItems = [
  {
    title: SideMenuTexts.dashboard,
    path: dashboardRoute,
    icon: <DashboardOutlinedIcon />,
  },
  {
    title: SideMenuTexts.jobs,
    path: jobsRoute,
    icon: <WorkOutlineOutlinedIcon />,
  },
  {
    title: SideMenuTexts.exams,
    path: examsRoute,
    icon: <AssignmentOutlinedIcon />,
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
    icon: <PeopleIcon />,
  },
  {
    title: SideMenuTexts.admin,
    path: adminRoute,
    icon: <AdminPanelSettingsIcon />,
  },
];

export const hrSideNavMenuItems = [
  {
    title: SideMenuTexts.dashboard,
    path: dashboardRoute,
    icon: <DashboardOutlinedIcon />,
  },
  {
    title: SideMenuTexts.postJobs,
    path: postJobsRoute,
    icon: <PostAddIcon />,
  },
  // {
  //   title: SideMenuTexts.assessments,
  //   path: assessmentsRoute,
  //   icon: <AssignmentIcon sx={WhiteColor} />,
  // },
  {
    title: SideMenuTexts.applicants,
    path: applicantsRoute,
    icon: <PeopleIcon />,
  },
  // {
  //   title: SideMenuTexts.profile,
  //   path: profileRoute,
  //   icon: <AccountCircleIcon sx={WhiteColor} />,
  // },
  {
    title: SideMenuTexts.help,
    path: helpRoute,
    icon: <HelpOutlineOutlinedIcon />,
  },
];

export const candidateSideNavMenuItems = [
  hrSideNavMenuItems[0],
  {
    title: SideMenuTexts.assessments,
    path: assessmentsRoute,
    icon: <AssignmentOutlinedIcon />,
  },
  {
    title: SideMenuTexts.jobs,
    path: jobsRoute,
    icon: <WorkOutlineOutlinedIcon />,
  },
  {
    title: SideMenuTexts.profile,
    path: editProfileRoute,
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    title: SideMenuTexts.resumeBuilder,
    path: builResumeRoute,
    icon: <NoteAltOutlinedIcon />,
  },
  {
    title: SideMenuTexts.help,
    path: helpRoute,
    icon: <HelpOutlineOutlinedIcon />,
  },
];
