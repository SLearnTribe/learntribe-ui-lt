import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../RootReducer";
import { watcherSaga } from "../Sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = rootReducer;

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       thunk: false,
  //       serializableCheck: false,
  //     }),
  //   sagaMiddleware,
  devTools: process.env.NODE_ENV !== "production", //To hide redux state in production
});
sagaMiddleware.run(watcherSaga);

export default store;
