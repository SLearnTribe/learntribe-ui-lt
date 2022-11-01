import { combineReducers } from "redux";
import userSlice from "../Redux/Ducks/userSlice";
import appSlice from "./Ducks/App/AppSlice";
import applicantSlice from "./Ducks/Applicants/ApplicantSlice";
import AppReducer from "./Ducks/AppReducer";
import assessmentsSlice from "./Ducks/Assessments/AssessmentsSlice";
import hrDashboardSlice from "./Ducks/Dashboard/HrDashboardSlice";
import jobSlice from "./Ducks/Jobs/JobsSlice";
import modalSlice from "./Ducks/Modal/ModalSlice";
import postJobsSlice from "./Ducks/PostJobs/PostJobsSlice";
import profileSlice from "./Ducks/Profile/ProfileSlice";
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
});

export default rootReducer;
