import { call, put } from "redux-saga/effects";
import { setUserData } from "../../Ducks/userSlice";
import { requestGetUser } from "../Requests/user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUserData({ ...data, role: "HR" })); //CANDIDATE HR
  } catch (error) {
    console.log(error);
  }
}
