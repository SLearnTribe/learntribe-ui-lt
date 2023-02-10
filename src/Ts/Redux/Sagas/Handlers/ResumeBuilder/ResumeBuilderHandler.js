import { call, put, select } from "redux-saga/effects";
import { defaultResumeList } from "../../../../Configs/ResumeBuilder/ResumeBuilderConfig";
import { updateResumeList } from "../../../Ducks/ResumeBuilder/ResumeBuilderSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import {
  requestGetResumeDetails,
  requestPostResumeDetails,
} from "../../Requests/ResumeBuilder/ResumeBuilderRequest";

export function* handleGetResumeDetails() {
  try {
    yield put(setUserDataLoading(true)); // For now genral loader

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetResumeDetails, {
      accessToken,
    });

    const resumeData = data.length === 0 ? defaultResumeList : data;

    yield put(updateResumeList(resumeData));
  } catch (error) {
    console.log(error);
    yield put(setUserDataLoading(false)); //will remove
    yield put(updateResumeList(defaultResumeList));
  }
}

export function* handleSaveResumeDetails({ payload: updatedResumeDetails }) {
  try {
    yield put(setUserDataLoading(true)); // For now genral loader

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestPostResumeDetails, {
      accessToken,
      updatedResumeDetails,
    });
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setUserDataLoading(false));
  }
}
