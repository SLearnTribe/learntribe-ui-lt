import { call, put, select } from "redux-saga/effects";
import {
  getUserProfile,
  setIsProfileLoading,
  updateUserProfile,
} from "../../../Ducks/Profile/ProfileSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import {
  requestGetUserProfile,
  requestPostUserProfile,
} from "../../Requests/Profile/ProfileRequests";

export function* handleGetUserProfile(action) {
  try {
    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetUserProfile, accessToken);

    yield put(updateUserProfile(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsProfileLoading(false));
    yield put(setUserDataLoading(false)); //will remove
  }
}

export function* handleSaveUserProfile({ payload: updatedUserInfo }) {
  try {
    yield put(setIsProfileLoading(true));
    yield put(setUserDataLoading(true)); // For now genral loader

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestPostUserProfile, {
      accessToken,
      updatedUserInfo,
    });

    yield put(getUserProfile());
  } catch (error) {
    console.log(error);
    yield put(setIsProfileLoading(false));
    yield put(setUserDataLoading(false)); //will remove
  }
}
