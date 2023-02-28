import { takeLatest } from "redux-saga/effects";
import { getAllCities } from "../Ducks/App/AppSlice";
import { getApplicantsData } from "../Ducks/Applicants/ApplicantSlice";
import {
  getAssessmentForCandidate,
  getAssessments,
  getdefaultAssessmentsOptions,
  postAssessments,
  postSubmitAssessment,
  putAssignAssessment,
} from "../Ducks/Assessments/AssessmentsSlice";
import { getCandidateActivities } from "../Ducks/Dashboard/CandidateDashboardSlice";
import { getHrHiringData } from "../Ducks/Dashboard/HrDashboardSlice";
import { getJobsData, postJobsData } from "../Ducks/Jobs/JobsSlice";
import { getUserProfile, saveUserProfile } from "../Ducks/Profile/ProfileSlice";
import {
  getDownloadResume,
  getResumeDetailsList,
  postSaveResume,
  postUploadResume,
  saveResumeDetails,
} from "../Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getUserData, postLogout } from "../Ducks/userSlice";
import {
  handleGetAllCities,
  handleGetUser,
  handlePostLogout,
} from "../Sagas/Handlers/user";
import { handleGetApplicants } from "./Handlers/Applicants/ApplicantsHandler";
import {
  handleAssignAssessment,
  handleGenerateAssessments,
  handleGetAssessmentForCandidate,
  handleGetDefaultPreviouslyGeneratedAssessments,
  handleGetRecommendedAssessments,
  handlePostSubmitAssessment,
} from "./Handlers/Assessments/AssessmentHandler";
import { handleGetCandidateActivities } from "./Handlers/Dashboards/CandidateDashboardHandler";
import { handleGetHrDashboard } from "./Handlers/Dashboards/HrDashboardHandler";
import { handleGetJobs, handlePostJobs } from "./Handlers/Jobs/JobsHandler";
import {
  handleGetUserProfile,
  handleSaveUserProfile,
} from "./Handlers/Profile/Profile";
import {
  handleDownloadResume,
  handleGetResumeDetails,
  handleSaveResume,
  handleSaveResumeDetails,
  handleUploadResume,
} from "./Handlers/ResumeBuilder/ResumeBuilderHandler";

export function* watcherSaga() {
  // GET
  yield takeLatest(getUserData.type, handleGetUser);
  yield takeLatest(getUserProfile.type, handleGetUserProfile);
  yield takeLatest(getApplicantsData.type, handleGetApplicants);
  yield takeLatest(getAssessments.type, handleGetRecommendedAssessments);
  yield takeLatest(getHrHiringData.type, handleGetHrDashboard);
  yield takeLatest(getJobsData.type, handleGetJobs);
  yield takeLatest(getCandidateActivities.type, handleGetCandidateActivities);
  yield takeLatest(
    getdefaultAssessmentsOptions.type,
    handleGetDefaultPreviouslyGeneratedAssessments
  );
  yield takeLatest(
    getAssessmentForCandidate.type,
    handleGetAssessmentForCandidate
  );
  yield takeLatest(getAllCities.type, handleGetAllCities);
  yield takeLatest(getResumeDetailsList.type, handleGetResumeDetails);
  yield takeLatest(getDownloadResume.type, handleDownloadResume);

  //POST
  yield takeLatest(saveUserProfile.type, handleSaveUserProfile);
  yield takeLatest(postJobsData.type, handlePostJobs);
  yield takeLatest(postAssessments.type, handleGenerateAssessments);
  yield takeLatest(postLogout.type, handlePostLogout);
  yield takeLatest(saveResumeDetails.type, handleSaveResumeDetails);
  yield takeLatest(postUploadResume.type, handleUploadResume);
  yield takeLatest(postSubmitAssessment.type, handlePostSubmitAssessment);
  yield takeLatest(postSaveResume.type, handleSaveResume);

  //PUT
  yield takeLatest(putAssignAssessment.type, handleAssignAssessment);
}
