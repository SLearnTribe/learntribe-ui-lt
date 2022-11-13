import { takeLatest } from "redux-saga/effects";
import { getApplicantsData } from "../Ducks/Applicants/ApplicantSlice";
import { getAssessments } from "../Ducks/Assessments/AssessmentsSlice";
import { getHrDashboardData } from "../Ducks/Dashboard/HrDashboardSlice";
import { getJobsData } from "../Ducks/Jobs/JobsSlice";
import { getUserProfile, saveUserProfile } from "../Ducks/Profile/ProfileSlice";
import { getUserData } from "../Ducks/userSlice";
import { handleGetUser } from "../Sagas/Handlers/user";
import { handleGetApplicants } from "./Handlers/Applicants/ApplicantsHandler";
import { handleGetAssessments } from "./Handlers/Assessments/AssessmentHandler";
import { handleGetHrDashboard } from "./Handlers/Dashboards/HrDashboardHandler";
import { handleGetJobs } from "./Handlers/Jobs/JobsHandler";
import {
  handleGetUserProfile,
  handleSaveUserProfile,
} from "./Handlers/Profile/Profile";

export function* watcherSaga() {
  // GET
  yield takeLatest(getUserData.type, handleGetUser);
  yield takeLatest(getUserProfile.type, handleGetUserProfile);
  yield takeLatest(getApplicantsData.type, handleGetApplicants);
  yield takeLatest(getAssessments.type, handleGetAssessments);
  yield takeLatest(getHrDashboardData.type, handleGetHrDashboard);
  yield takeLatest(getJobsData.type, handleGetJobs);

  //POST
  yield takeLatest(saveUserProfile.type, handleSaveUserProfile);
}
