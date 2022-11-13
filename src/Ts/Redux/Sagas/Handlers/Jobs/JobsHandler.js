import { call, put, select } from "redux-saga/effects";
import { JobsMockData } from "../../../../Utils/MockData/DashboardData";
import {
  setCandidatesJobsData,
  setIsJobsDataLoading,
} from "../../../Ducks/Jobs/JobsSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetCandidateJobs } from "../../Requests/Jobs/JobsRequests";

export function* handleGetCandidatesJobs(action) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetCandidateJobs, accessToken);

    yield put(setCandidatesJobsData(data));

    yield put(setIsJobsDataLoading(false));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setCandidatesJobsData(JobsMockData()));
    yield put(setIsJobsDataLoading(false));
    yield put(setUserDataLoading(false));
  }
}
