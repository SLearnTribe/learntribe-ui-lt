import { call, put, select } from "redux-saga/effects";
import {
  setAssessmentsData,
  setIsAssessmentsLoading,
} from "../../../Ducks/Assessments/AssessmentsSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetAssessments } from "../../Requests/Assessments/AssessmentsRequest";

export function* handleGetAssessments(action) {
  try {
    const accessToken = yield select(selectors.getAccessToken);

    const { data: assessmentsData } = yield call(
      requestGetAssessments,
      accessToken
    );

    yield put(setAssessmentsData(assessmentsData));

    yield put(setIsAssessmentsLoading(false));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setAssessmentsData([]));
    yield put(setIsAssessmentsLoading(false));
  }
}
