import { ExportReducer } from "../../Utils/ExportReducers";

const defaultState = {
  isDarkTheme: false,
};

const setTheme = (state) => {
  return {
    ...state,
    isDarkTheme: !state.isDarkTheme,
  };
};

const ActionMap = {
  SET_THEME: setTheme,
};

export default ExportReducer(ActionMap, defaultState);
