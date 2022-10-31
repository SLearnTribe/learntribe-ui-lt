import { takeLatest } from "redux-saga/effects";
import { getUserData } from "../Ducks/userSlice";
import { handleGetUser } from "../Sagas/Handlers/user";

export function* watcherSaga() {
  yield takeLatest(getUserData.type, handleGetUser);
}
