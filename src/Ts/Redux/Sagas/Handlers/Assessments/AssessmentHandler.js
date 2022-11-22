import { call, put, select } from "redux-saga/effects";
import { getApplicantsData } from "../../../Ducks/Applicants/ApplicantSlice";
import {
  setAssessmentsData,
  setIsAssessmentsLoading,
} from "../../../Ducks/Assessments/AssessmentsSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import {
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

    yield put(setAssessmentsData(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsAssessmentsLoading(false));
    yield put(setUserDataLoading(false)); //will remove
  }
}

export function* handleGenerateAssessments({ payload }) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestPostAssessments, {
      accessToken,
      assessmentToBeGenerated: payload,
    });

    yield put(
      getApplicantsData({ page: 1, limit: 25, skill: "", keyword: "" })
    );
  } catch (error) {
    console.log(error);
    yield put(setIsAssessmentsLoading(false));
  }
}
