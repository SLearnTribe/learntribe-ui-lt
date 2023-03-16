import { call, put, select } from "redux-saga/effects";
import { parseJwt } from "../../../Utils/AppUtils";
import { setCityList } from "../../Ducks/App/AppSlice";
import { getAssessments } from "../../Ducks/Assessments/AssessmentsSlice";
import { getJobsData } from "../../Ducks/Jobs/JobsSlice";
import { getUserProfile } from "../../Ducks/Profile/ProfileSlice";
import { setUserData, setUserDataLoading } from "../../Ducks/userSlice";
import * as selectors from "../../Selectors/UserSelectors/UserSelectors";
import {
  requestGetAllCities,
  requestGetUser,
  requestPostLogout,
} from "../Requests/user";

export function* handleGetUser({ payload }) {
  try {
    const {
      data: { access_token },
    } = yield call(requestGetUser, payload);

    const userDetails = parseJwt(access_token);

    // userDetails.role = "CANDIDATE";

    yield put(setUserData({ userDetails, access_token })); //CANDIDATE HR

    yield put(getUserProfile(access_token));

    yield put(getJobsData({ page: 1, limit: 25 }));

    yield put(getAssessments({ page: 1, limit: 25 }));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setUserDataLoading(false));
  }
}

export function* handlePostLogout() {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestPostLogout, accessToken);
  } catch (error) {
    console.log(error);
    yield put(setUserDataLoading(false));
  } finally {
    window.location.href = "https://www.smilebat.xyz";
  }
}

export function* handleGetAllCities() {
  try {
    const {
      data: { data },
    } = yield call(requestGetAllCities);

    yield put(setCityList(data));
  } catch (error) {
    console.log(error);
  }
}
