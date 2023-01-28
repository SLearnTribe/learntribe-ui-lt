import { createSlice } from "@reduxjs/toolkit";

const resumeBuilderSlice = createSlice({
  name: "resumeBuilderSlice",
  initialState: {
    activeStep: 0,
    resumeDetails: {},
    currentScreen: 0,
    selectedTemplate: 0,
  },
  reducers: {
    setResumeActiveStepper(state, { payload }) {
      state.activeStep = payload;
    },
    setResumeCurrentScreen(state, { payload }) {
      state.currentScreen = payload;
    },
    setResumeTemplate(state, { payload }) {
      state.selectedTemplate = payload;
    },
    updateResumeDetails(state, { payload }) {
      state.resumeDetails = payload;
    },
  },
});

export const {
  setResumeActiveStepper,
  setResumeCurrentScreen,
  setResumeTemplate,
  updateResumeDetails,
} = resumeBuilderSlice.actions;

export default resumeBuilderSlice.reducer;
