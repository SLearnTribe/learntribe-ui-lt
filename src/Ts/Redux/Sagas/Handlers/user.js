import { call, put } from "redux-saga/effects";
import { parseJwt } from "../../../Utils/AppUtils";
import { getAssessments } from "../../Ducks/Assessments/AssessmentsSlice";
import { getJobsData } from "../../Ducks/Jobs/JobsSlice";
import { getUserProfile } from "../../Ducks/Profile/ProfileSlice";
import { setUserData, setUserDataLoading } from "../../Ducks/userSlice";
import { requestGetUser } from "../Requests/user";

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
