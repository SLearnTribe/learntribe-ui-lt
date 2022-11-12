import { call, put, select } from "redux-saga/effects";
import {
  setIsJobsDataLoading,
  setJobsData,
} from "../../../Ducks/Jobs/JobsSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetJobs } from "../../Requests/Jobs/JobsRequests";

export function* handleGetJobs(action) {
  try {
    const accessToken = yield select(selectors.getAccessToken);

    const { data: assessmentsData } = yield call(requestGetJobs, accessToken);

    yield put(setJobsData(assessmentsData));

    yield put(setIsJobsDataLoading(false));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setJobsData([]));
    yield put(setIsJobsDataLoading(false));
  }
}
