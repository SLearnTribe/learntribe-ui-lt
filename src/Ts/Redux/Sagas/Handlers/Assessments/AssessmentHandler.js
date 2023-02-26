import { call, put, select } from "redux-saga/effects";
import { hanldeAssessmentResponse } from "../../../../Utils/AssessmentUtils/AssessmentsUtils";
import { AssignSuccessSnackbar } from "../../../../Utils/CommonUtils";
import { handleAssessmentsChartData } from "../../../../Utils/Dashboard/CandidateDashboardUtils";
import { ModalTexts } from "../../../../Utils/Text";
import { updateSnackbar } from "../../../Ducks/App/AppSlice";
import { getApplicantsData } from "../../../Ducks/Applicants/ApplicantSlice";
import {
  getAssessments,
  setAssessmentForCandidate,
  setAssessmentsData,
  setCurrentEditingAssessment,
  setDefaultAssessmentsOptions,
  setIsAssessmentsLoading,
  setIsAssignAlertOpen,
  setPreviouslyGeneratedAssessments,
  updateAssessmentModal,
} from "../../../Ducks/Assessments/AssessmentsSlice";
import { setCurrentModal } from "../../../Ducks/Modal/ModalSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import {
  requestAssignAssessment,
  requestDefaultAssessmentOptions,
  requestGetAssessmentForCandidate,
  requestGetCandidateRecommendedAssessments,
  requestPostAssessments,
  requestPostSubmitAssessment,
} from "../../Requests/Assessments/AssessmentsRequest";

export function* handleGetRecommendedAssessments({
  payload: { page, limit, filters, keyword = "" },
}) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetCandidateRecommendedAssessments, {
      accessToken,
      page,
      limit,
      filters,
      keyword,
    });

    const previouslyGeneratedAssesseementOptions =
      hanldeAssessmentResponse(data);

    const chartData = handleAssessmentsChartData(data);

    yield put(setAssessmentsData({ data, chartData }));

    yield put(
      setPreviouslyGeneratedAssessments(previouslyGeneratedAssesseementOptions)
    );
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setUserDataLoading(false)); //will remove
  }
}

export function* handleGenerateAssessments({
  payload: { postData, currentModal },
}) {
  try {
    yield put(setCurrentModal(null));

    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestPostAssessments, {
      accessToken,
      assessmentToBeGenerated: postData,
    });

    yield put(
      getApplicantsData({ page: 1, limit: 25, skill: "", keyword: "" })
    );

    yield put(getAssessments({ page: 1, limit: 25 }));

    yield put(setCurrentEditingAssessment({}));

    if (currentModal === ModalTexts.assignAssessment) {
      yield put(updateSnackbar(AssignSuccessSnackbar));
    }
  } catch (error) {
    console.log(error);
    yield put(setIsAssessmentsLoading(false));
  } finally {
    yield put(setUserDataLoading(false));
  }
}

export function* handleGetDefaultPreviouslyGeneratedAssessments() {
  try {
    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestDefaultAssessmentOptions, accessToken);

    yield put(setDefaultAssessmentsOptions(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleAssignAssessment({
  payload: { assessmentId, assigneeEmail },
}) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestAssignAssessment, {
      accessToken,
      assessmentId,
      assigneeEmail,
    });

    yield put(setUserDataLoading(false));

    yield put(setIsAssignAlertOpen());
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAssessmentForCandidate({ payload }) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetAssessmentForCandidate, {
      accessToken,
      assessmentId: payload,
    });

    yield put(setAssessmentForCandidate(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setUserDataLoading(false)); //will remove
  }
}

export function* handlePostSubmitAssessment({
  payload: { assessmentId, submitAssessmentDetails },
}) {
  try {
    yield put(updateAssessmentModal({ showSubmitUI: true }));

    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestPostSubmitAssessment, {
      accessToken,
      assessmentId,
      submitAssessmentDetails,
    });
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setUserDataLoading(false));
  }
}
