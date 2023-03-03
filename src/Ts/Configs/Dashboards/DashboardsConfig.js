import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CallIcon from "@mui/icons-material/Call";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { CandidateDashboardTexts, TabLabelTexts } from "../../Utils/Text";

export const accountMenuItems = ["Profile", "Account", "Dashboard", "Logout"];

export const CandidateStatsConfig = [
  {
    title: CandidateDashboardTexts.assessmentsCompleted,
    total: 0,
    color: "success",
  },
  {
    title: CandidateDashboardTexts.jobsApplied,
    total: 0,
    color: "info",
  },
  {
    title: CandidateDashboardTexts.interviewCalls,
    total: 0,
    color: "warning",
  },
];

export const CandidateActivitiesIconMap = {
  [CandidateDashboardTexts.assessmentsCompleted]: AssignmentTurnedInIcon,
  [CandidateDashboardTexts.jobsApplied]: WorkOutlineIcon,
  [CandidateDashboardTexts.interviewCalls]: CallIcon,
};

export const CandidateTabs = [
  TabLabelTexts.all,
  TabLabelTexts.completed,
  TabLabelTexts.blocked,
  TabLabelTexts.pending,
  // TabLabelTexts.saved,
];

export const AssessmentTabsConfig = {
  all: "all",
  completed: "completed",
  blocked: "blocked",
  pending: "pending",
  saved: "saved",
};

export const AssessmentStatusMap = {
  completed: (theme) => theme.palette.success.dark,
  blocked: (theme) => theme.palette.error.dark,
  pending: (theme) => theme.palette.warning.dark,
  saved: (theme) => theme.palette.info.dark,
  primary: (theme) => theme.palette.primary.main,
};

export const JobsStatusMap = {
  completed: (theme) => theme.palette.success.dark,
  blocked: (theme) => theme.palette.error.contrastText,
  pending: (theme) => theme.palette.primary.main,
  saved: (theme) => theme.palette.info.dark,
  start: (theme) => theme.palette.primary.main,
};

export const AssessmentDifficultyLevelColorMap = {
  RECOMMENDED: { color: "#000000", bgColor: "#F6F6F6" },
  ADVANCED: { color: "#EB5757", bgColor: "rgba(235, 87, 87, 0.1)" },
  BEGINNER: { color: "#2F80ED", bgColor: "rgba(47, 128, 237, 0.1)" },
  INTERMEDIATE: { color: "#9747FF", bgColor: "rgba(151, 71, 255, 0.1)" },
};

export const GroupInstructions = [
  "1. You must use a functioning webcam and microphone.",
  "2. No cell phones or other secondary devices in the room or test area.",
  "3. Your desk/table must be clear or any materials except your test-taking device.",
  "4. No one else can be in the room with you.",
  "5. No talking.",
  "6. Do not leave the camera.",
  "7. No dual screens/monitors.",
  "8. The testing room must be well-lit and you must be clearly visible.",
];

export const RelatedInformation = [
  "1. The examination does not require using any paper, pen, pencil and calculator.",
  "2. On computer screen every student will be given objective type type Multiple Choice Questions (MCQs).",
  "3. The students just need to click on the Right Choice / Correct option from the multiple choices /options given with each question. For Multiple Choice Questions, each question has four options, and the candidate has to click the appropriate option.",
];

export const EnumMap = {
  IN_PROGRESS: "In Progress",
  HIRED: "Hired",
  NOT_HIRED: "Not Hired",
};
