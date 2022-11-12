import { call, put, select } from "redux-saga/effects";
import { userProfileMockData } from "../../../../Utils/MockData/DashboardData";
import {
  setApplicantsData,
  setIsApplicantsLoading,
} from "../../../Ducks/Applicants/ApplicantSlice";
import * as selectors from "../../../Selectors/UserSelectors/UserSelectors";
import { requestGetApplicants } from "../../Requests/Applicants/ApplicantsRequest";

export function* handleGetApplicants(action) {
  try {
    const accessToken = yield select(selectors.getAccessToken);

    const { data: applicantsData } = yield call(
      requestGetApplicants,
      accessToken
    );

    yield put(setApplicantsData(applicantsData));

    yield put(setIsApplicantsLoading(false));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setApplicantsData(userProfileMockData));
    yield put(setIsApplicantsLoading(false));
  }
}
