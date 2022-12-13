import { isEmpty } from "lodash";
import { call, put, select } from "redux-saga/effects";
import { handleHiringDashboardData } from "../../../../Utils/Dashboard/CandidateDashboardUtils";
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

    const normalizedData = handleHiringDashboardData(data);

    if (isEmpty(category)) {
      yield put(setHrHiringInLastMonthData(normalizedData));
    } else {
      yield put(setHrHiringData(normalizedData));
    }
  } catch (error) {
    console.log(error);
    yield put(setHrHiringInLastMonthData([]));

    yield put(setHrHiringData([]));
  } finally {
    yield put(setIsHrDashboardLoading(false));

    yield put(setUserDataLoading(false));
  }
}
