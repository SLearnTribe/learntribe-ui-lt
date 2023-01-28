import { isEmpty } from "lodash";
import { call, put, select } from "redux-saga/effects";
import {
  handleHiringDashboardData,
  handleHiringInProgressChartData,
} from "../../../../Utils/Dashboard/CandidateDashboardUtils";
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
      const hiringInLastMonthChartData = handleHiringInProgressChartData(data);
      yield put(
        setHrHiringInLastMonthData({
          data: normalizedData,
          hiringInLastMonthChartData,
        })
      );
    } else {
      const hiringInProgressChartData = handleHiringInProgressChartData(data);

      yield put(
        setHrHiringData({
          data: normalizedData,
          hiringInProgressChartData,
        })
      );
    }
  } catch (error) {
    console.log(error);
    yield put(
      setHrHiringInLastMonthData({
        data: [],
        hiringInLastMonthChartData: { series: [], categories: {} },
      })
    );

    yield put(
      setHrHiringData({
        data: [],
        hiringInProgressChartData: { series: [], categories: {} },
      })
    );
  } finally {
    yield put(setIsHrDashboardLoading(false));

    yield put(setUserDataLoading(false));
  }
}
