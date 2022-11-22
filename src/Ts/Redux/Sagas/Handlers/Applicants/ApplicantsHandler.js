import { call, put, select } from "redux-saga/effects";
import { ApplicantsListMockData } from "../../../../Utils/MockData/DashboardData";
import { setApplicantsData } from "../../../Ducks/Applicants/ApplicantSlice";
import { setUserDataLoading } from "../../../Ducks/userSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetApplicants } from "../../Requests/Applicants/ApplicantsRequest";

export function* handleGetApplicants({
  payload: { page = 1, limit = 25, skill = "", keyword = "" },
}) {
  try {
    yield put(setUserDataLoading(true));

    const accessToken = yield select(selectors.getAccessToken);

    const { data } = yield call(requestGetApplicants, {
      accessToken,
      page,
      limit,
      skill,
      keyword,
    });

    yield put(setApplicantsData(ApplicantsListMockData(5)));
  } catch (error) {
    console.log(error);
    yield put(setApplicantsData([]));
  } finally {
    yield put(setUserDataLoading(false));
  }
}
