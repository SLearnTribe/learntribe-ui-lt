import { call, put, select } from "redux-saga/effects";
import { DefaultProctoringAlerts } from "../../../../Utils/CommonUtils";
import { updateSnackbar } from "../../../Ducks/App/AppSlice";
import { updateProcData } from "../../../Ducks/Proctoring/AssessmentProcSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestPostAssessmentProctoring } from "../../Requests/Proctoring/AssessmentProctoringRequest";

export function* handleAssessmentProctoring({ payload }) {
  try {
    const accessToken = yield select(selectors.getAccessToken);

    const procData = yield select(selectors.getAssessmentProcData);

    const { data } = yield call(requestPostAssessmentProctoring, {
      accessToken,
      payload,
      procData,
    });

    if (data?.message?.length > 0) {
      yield put(
        updateSnackbar({
          ...DefaultProctoringAlerts,
          text: data.message,
        })
      );
    }

    yield put(updateProcData(data));
  } catch (error) {}
}
