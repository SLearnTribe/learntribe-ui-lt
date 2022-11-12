import { call, put, select } from "redux-saga/effects";
import { userProfileMockData } from "../../../../Utils/MockData/DashboardData";
import {
  setIsProfileLoading,
  updateUserProfile,
} from "../../../Ducks/Profile/ProfileSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetUserProfile } from "../../Requests/Profile/ProfileRequests";

export function* handleGetUserProfile(action) {
  try {
    const accessToken = yield select(selectors.getAccessToken);

    const { data: userProfileDetails } = yield call(
      requestGetUserProfile,
      accessToken
    );

    yield put(updateUserProfile(userProfileDetails));

    yield put(setIsProfileLoading(false));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(updateUserProfile(userProfileMockData));
    yield put(setIsProfileLoading(false));
  }
}
