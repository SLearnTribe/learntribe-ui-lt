import { call, put } from "redux-saga/effects";
import { parseJwt } from "../../../Utils/AppUtils";
import { loggedInUserDetailsMockData } from "../../../Utils/MockData/DashboardData";
import { setUserData, setUserDataLoading } from "../../Ducks/userSlice";
import { requestGetUser } from "../Requests/user";

export function* handleGetUser({ payload }) {
  try {
    const {
      data: { access_token },
    } = yield call(requestGetUser, payload);

    const userDetails = parseJwt(access_token);

    yield put(setUserData({ userDetails, access_token })); //CANDIDATE HR
  } catch (error) {
    console.log(error);
  } finally {
    yield put(
      setUserData({
        userDetails: loggedInUserDetailsMockData,
        access_token: "",
      })
    );
    yield put(setUserDataLoading(false));
  }
}
