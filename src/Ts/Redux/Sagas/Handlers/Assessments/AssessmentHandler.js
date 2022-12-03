import { call, put, select } from "redux-saga/effects";
import { hanldeAssessmentResponse } from "../../../../Utils/AssessmentUtils/AssessmentsUtils";
import { getApplicantsData } from "../../../Ducks/Applicants/ApplicantSlice";
import {
  getAssessments,
  setAssessmentsData,
  setDefaultAssessmentsOptions,
  setIsAssessmentsLoading,
  setPreviouslyGeneratedAssessments,
} from "../../../Ducks/Assessments/AssessmentsSlice";
import { setCurrentModal } from "../../../Ducks/Modal/ModalSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import {
  requestDefaultAssessmentOptions,
  requestGetCandidateRecommendedAssessments,
  requestPostAssessments,
} from "../../Requests/Assessments/AssessmentsRequest";

export function* handleGetRecommendedAssessments({
  payload: { page, limit, filters },
}) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetCandidateRecommendedAssessments, {
      accessToken,
      page,
      limit,
      filters,
    });

    const previouslyGeneratedAssesseementOptions =
      hanldeAssessmentResponse(data);

    yield put(setAssessmentsData(data));

    yield put(
      setPreviouslyGeneratedAssessments(previouslyGeneratedAssesseementOptions)
    );
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setUserDataLoading(false)); //will remove
  }
}

export function* handleGenerateAssessments({ payload }) {
  try {
    yield put(setCurrentModal(null));

    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestPostAssessments, {
      accessToken,
      assessmentToBeGenerated: payload,
    });

    yield put(
      getApplicantsData({ page: 1, limit: 25, skill: "", keyword: "" })
    );

    yield put(getAssessments({ page: 1, limit: 25 }));
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
