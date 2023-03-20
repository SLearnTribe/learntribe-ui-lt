import { call, put, select } from "redux-saga/effects";
import { defaultResumeList } from "../../../../Configs/ResumeBuilder/ResumeBuilderConfig";
import {
  ResumeDownloadErrorAlert,
  ResumeDownloadSuccessAlert,
  ResumeSaveErrorAlert,
  ResumeUploadErrorAlert,
  ResumeUploadSuccessAlert,
} from "../../../../Utils/CommonUtils";
import { prepareFormDataResumeParsing } from "../../../../Utils/ResumeBuilder/ResumeBuilderUtils";
import { updateSnackbar } from "../../../Ducks/App/AppSlice";
import {
  getResumeDetailsList,
  updateDocument,
  updateResumeList,
} from "../../../Ducks/ResumeBuilder/ResumeBuilderSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import {
  requestGetResumeDetails,
  requestGetResumeDownload,
  requestPostResumeDetails,
  requestPostResumeUpload,
  requestPostSave,
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
  } finally {
    yield put(setUserDataLoading(false));
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

export function* handleUploadResume({ payload: { email, file } }) {
  try {
    yield put(setUserDataLoading(true)); // For now genral loader

    const accessToken = yield select(selectors.getAccessToken);

    const formData = prepareFormDataResumeParsing(file);

    yield call(requestPostResumeUpload, {
      accessToken,
      formData,
      email,
    });

    yield put(updateSnackbar(ResumeUploadSuccessAlert));
  } catch (error) {
    console.log(error);
    yield put(updateSnackbar(ResumeUploadErrorAlert));
  } finally {
    yield put(setUserDataLoading(false));
  }
}

export function* handleDownloadResume({ payload: email }) {
  try {
    yield put(setUserDataLoading(true)); // For now genral loader

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetResumeDownload, {
      accessToken,
      email,
    });

    yield put(updateDocument(data));
    yield put(updateSnackbar(ResumeDownloadSuccessAlert));
  } catch (error) {
    console.log(error);
    yield put(
      updateSnackbar({
        ...ResumeDownloadErrorAlert,
        text: error.response.data.message,
      })
    );
  } finally {
    yield put(setUserDataLoading(false));
  }
}

export function* handleSaveResume({ payload }) {
  try {
    yield put(setUserDataLoading(true)); // For now genral loader

    const accessToken = yield select(selectors.getAccessToken);

    yield call(requestPostSave, {
      accessToken,
      payload,
    });

    // yield put(updateSnackbar(ResumeSaveSuccessAlert));

    yield put(getResumeDetailsList());
  } catch (error) {
    console.log(error);
    yield put(updateSnackbar(ResumeSaveErrorAlert));
  } finally {
    yield put(setUserDataLoading(false));
  }
}
