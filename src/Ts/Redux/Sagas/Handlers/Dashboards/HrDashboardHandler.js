import { call, put, select } from "redux-saga/effects";
import {
  setHrDashboardData,
  setIsHrDashboardLoading,
} from "../../../Ducks/Dashboard/HrDashboardSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetHrDashboard } from "../../Requests/Dashboards/HrDashboardRequests";

export function* handleGetHrDashboard(action) {
  try {
    const accessToken = yield select(selectors.getAccessToken);

    const { data: assessmentsData } = yield call(
      requestGetHrDashboard,
      accessToken
    );

    yield put(setHrDashboardData(assessmentsData));

    yield put(setIsHrDashboardLoading(false));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setHrDashboardData([]));
    yield put(setIsHrDashboardLoading(false));
  }
}
