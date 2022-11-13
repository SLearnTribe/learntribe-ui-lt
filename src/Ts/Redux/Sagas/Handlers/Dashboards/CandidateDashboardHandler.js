import { call, put, select } from "redux-saga/effects";
import { handleCandidateActivitiesResponse } from "../../../../Utils/Dashboard/CandidateDashboardUtils";
import {
  setCandidateActivities,
  setIsCandidateActivitiesLoading,
} from "../../../Ducks/Dashboard/CandidateDashboardSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetCandidateActivities } from "../../Requests/Dashboards/CandidateDashboardRequests";

export function* handleGetCandidateActivities(action) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetCandidateActivities, accessToken);

    const normalizedActivities = handleCandidateActivitiesResponse(data);

    yield put(setCandidateActivities(normalizedActivities));

    yield put(setIsCandidateActivitiesLoading(false));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setIsCandidateActivitiesLoading([]));
    yield put(setUserDataLoading(false)); //will remove
  }
}
