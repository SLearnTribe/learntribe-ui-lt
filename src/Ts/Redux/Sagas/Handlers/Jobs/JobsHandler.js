import { call, put, select } from "redux-saga/effects";
import { getJobsData, setJobsData } from "../../../Ducks/Jobs/JobsSlice";
import { setCurrentModal } from "../../../Ducks/Modal/ModalSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import {
  requestGetJobs,
  requestPostJobs,
} from "../../Requests/Jobs/JobsRequests";

export function* handleGetJobs({ payload: { page = 1, limit = 25 } }) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetJobs, { accessToken, page, limit });

    yield put(setJobsData(data));
  } catch (error) {
    console.log(error);
    yield put(setJobsData([]));
  } finally {
    yield put(setUserDataLoading(false));
  }
}

export function* handlePostJobs({ payload }) {
  try {
    yield put(setCurrentModal(null));

    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestPostJobs, {
      accessToken,
      postingJobsDetails: payload,
    });

    yield put(getJobsData({ page: 1, limit: 25 }));
  } catch (error) {
    console.log(error);
    yield put(setJobsData([]));
    yield put(setUserDataLoading(false));
  }
}
