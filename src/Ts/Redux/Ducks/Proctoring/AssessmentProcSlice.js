import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  procData: {
    message: "",
    good: 0,
    many: 0,
    bad: 0,
  },
};

const assessmentProcSlice = createSlice({
  name: "assessmentProcSlice",
  initialState: defaultState,
  reducers: {
    postAssessmentsProctoring() {},
    updateProcData(state, { payload }) {
      state.procData = payload;
    },
    resetProcData: () => defaultState,
  },
});

export const { postAssessmentsProctoring, updateProcData, resetProcData } =
  assessmentProcSlice.actions;

export default assessmentProcSlice.reducer;
