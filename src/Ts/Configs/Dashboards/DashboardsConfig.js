import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CallIcon from "@mui/icons-material/Call";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { CandidateDashboardTexts, TabLabelTexts } from "../../Utils/Text";
import themes from "../../Utils/Themes/Themes";

export const accountMenuItems = ["Profile", "Account", "Dashboard", "Logout"];

export const CandidateStatsConfig = [
  {
    title: CandidateDashboardTexts.assessmentsCompleted,
    icon: AssignmentTurnedInIcon,
    total: 25,
    color: "success",
  },
  {
    title: CandidateDashboardTexts.jobsApplied,
    icon: WorkOutlineIcon,
    total: 12,
    color: "info",
  },
  {
    title: CandidateDashboardTexts.interviewCalls,
    icon: CallIcon,
    total: 10,
    color: "warning",
  },
  {
    title: CandidateDashboardTexts.assessmentsCompleted,
    icon: AssignmentTurnedInIcon,
    total: 25,
    color: "success",
  },
];

export const CandidateTabs = [
  TabLabelTexts.all,
  TabLabelTexts.completed,
  TabLabelTexts.blocked,
  TabLabelTexts.pending,
  TabLabelTexts.saved,
];

export const AssessmentTabsConfig = {
  all: "all",
  completed: "completed",
  blocked: "blocked",
  pending: "pending",
  saved: "saved",
};

export const AssessmentStatusMap = {
  completed: themes.light.palette.success.dark,
  blocked: themes.light.palette.error.dark,
  pending: themes.light.palette.warning.dark,
  saved: themes.light.palette.info.dark,
};

export const AssessmentDifficultyLevelColorMap = {
  Recommended: { color: "#000000", bgColor: "#F6F6F6" },
  Difficult: { color: "#EB5757", bgColor: "rgba(235, 87, 87, 0.1)" },
  Easy: { color: "#2F80ED", bgColor: "rgba(47, 128, 237, 0.1)" },
  Medium: { color: "#9747FF", bgColor: "rgba(151, 71, 255, 0.1)" },
};
