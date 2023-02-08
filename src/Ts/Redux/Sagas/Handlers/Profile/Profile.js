import { call, put, select } from "redux-saga/effects";
import {
  getUserProfile,
  setIsProfileLoading,
  setUserProfile,
  updateUserProfile,
} from "../../../Ducks/Profile/ProfileSlice";
import { updateResumeDetails } from "../../../Ducks/ResumeBuilder/ResumeBuilderSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import {
  requestGetUserProfile,
  requestPostUserProfile,
} from "../../Requests/Profile/ProfileRequests";

export function* handleGetUserProfile(action) {
  try {
    const accessToken = yield select(selectors.getAccessToken);

    const initialUserInfo = yield select(selectors.getUserDetails);

    const { data } = yield call(requestGetUserProfile, accessToken);

    const name = data?.name ? data.name : initialUserInfo?.name;

    const email = data?.email ? data.email : initialUserInfo?.email;

    const phone = data?.phone ? data.phone : initialUserInfo?.phone;

    yield put(setUserProfile({ ...data, name, email, phone }));

    yield put(updateResumeDetails({ ...data, name, email, phone }));

    yield put(updateUserProfile({ ...data, name, email, phone }));
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
