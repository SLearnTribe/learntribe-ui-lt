import { combineReducers } from "redux";
import userSlice from "../Redux/Ducks/userSlice";
import appSlice from "./Ducks/App/AppSlice";
import AppReducer from "./Ducks/AppReducer";
import applicantSlice from "./Ducks/Applicants/ApplicantSlice";
import assessmentsSlice from "./Ducks/Assessments/AssessmentsSlice";
import candidateDashboardSlice from "./Ducks/Dashboard/CandidateDashboardSlice";
import hrDashboardSlice from "./Ducks/Dashboard/HrDashboardSlice";
import jobSlice from "./Ducks/Jobs/JobsSlice";
import modalSlice from "./Ducks/Modal/ModalSlice";
import postJobsSlice from "./Ducks/PostJobs/PostJobsSlice";
import assessmentProcSlice from "./Ducks/Proctoring/AssessmentProcSlice";
import profileSlice from "./Ducks/Profile/ProfileSlice";
import resumeBuilderSlice from "./Ducks/ResumeBuilder/ResumeBuilderSlice";
import ThemeReducer from "./Ducks/ThemesReducer";

const rootReducer = combineReducers({
  userSlice,
  ThemeReducer,
  AppReducer,
  applicantSlice,
  postJobsSlice,
  modalSlice,
  appSlice,
  hrDashboardSlice,
  assessmentsSlice,
  profileSlice,
  jobSlice,
  candidateDashboardSlice,
  resumeBuilderSlice,
  assessmentProcSlice,
});

export default rootReducer;
