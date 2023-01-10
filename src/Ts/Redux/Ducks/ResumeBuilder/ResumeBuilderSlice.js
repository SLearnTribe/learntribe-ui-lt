import { createSlice } from "@reduxjs/toolkit";
import { resumeBuilderMockData } from "../../../Utils/MockData/ResumeBuilderData";

const resumeBuilderSlice = createSlice({
  name: "resumeBuilderSlice",
  initialState: {
    activeStep: 0,
    resumeDetails: resumeBuilderMockData,
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
