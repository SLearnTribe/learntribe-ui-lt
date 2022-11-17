import { isEmpty } from "lodash";
import { call, put, select } from "redux-saga/effects";
import {
  setHrHiringData,
  setHrHiringInLastMonthData,
  setIsHrDashboardLoading,
} from "../../../Ducks/Dashboard/HrDashboardSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetHrActivities } from "../../Requests/Dashboards/HrDashboardRequests";

export function* handleGetHrDashboard({
  payload: { page = 1, limit = 25, category = "" },
}) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetHrActivities, {
      accessToken,
      page,
      limit,
      category,
    });

    if (isEmpty(category)) {
      yield put(setHrHiringInLastMonthData(data));
    } else {
      yield put(setHrHiringData(data));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setHrHiringInLastMonthData([]));

    yield put(setHrHiringData([]));

    yield put(setIsHrDashboardLoading(false));

    yield put(setUserDataLoading(false));
  }
}
