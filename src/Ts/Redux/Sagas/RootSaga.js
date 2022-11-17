import { takeLatest } from "redux-saga/effects";
import { getApplicantsData } from "../Ducks/Applicants/ApplicantSlice";
import { getAssessments } from "../Ducks/Assessments/AssessmentsSlice";
import { getCandidateActivities } from "../Ducks/Dashboard/CandidateDashboardSlice";
import { getHrHiringData } from "../Ducks/Dashboard/HrDashboardSlice";
import { getJobsData, postJobsData } from "../Ducks/Jobs/JobsSlice";
import { getUserProfile, saveUserProfile } from "../Ducks/Profile/ProfileSlice";
import { getUserData } from "../Ducks/userSlice";
import { handleGetUser } from "../Sagas/Handlers/user";
import { handleGetApplicants } from "./Handlers/Applicants/ApplicantsHandler";
import { handleGetRecommendedAssessments } from "./Handlers/Assessments/AssessmentHandler";
import { handleGetCandidateActivities } from "./Handlers/Dashboards/CandidateDashboardHandler";
import { handleGetHrDashboard } from "./Handlers/Dashboards/HrDashboardHandler";
import { handleGetJobs, handlePostJobs } from "./Handlers/Jobs/JobsHandler";
import {
  handleGetUserProfile,
  handleSaveUserProfile,
} from "./Handlers/Profile/Profile";

export function* watcherSaga() {
  // GET
  yield takeLatest(getUserData.type, handleGetUser);
  yield takeLatest(getUserProfile.type, handleGetUserProfile);
  yield takeLatest(getApplicantsData.type, handleGetApplicants);
  yield takeLatest(getAssessments.type, handleGetRecommendedAssessments);
  yield takeLatest(getHrHiringData.type, handleGetHrDashboard);
  yield takeLatest(getJobsData.type, handleGetJobs);
  yield takeLatest(postJobsData.type, handlePostJobs);
  yield takeLatest(getCandidateActivities.type, handleGetCandidateActivities);

  //POST
  yield takeLatest(saveUserProfile.type, handleSaveUserProfile);
}
