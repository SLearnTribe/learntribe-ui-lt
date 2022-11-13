import { call, put, select } from "redux-saga/effects";
import {
  setAssessmentsData,
  setIsAssessmentsLoading,
} from "../../../Ducks/Assessments/AssessmentsSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetCandidateRecommendedAssessments } from "../../Requests/Assessments/AssessmentsRequest";

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
