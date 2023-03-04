export const getResumeBuilderActiveStepper = (state) =>
  state.resumeBuilderSlice.activeStep;

export const getResumeCurrentScreen = (state) =>
  state.resumeBuilderSlice.currentScreen;

export const getResumeDetails = (state) =>
  state.resumeBuilderSlice.resumeDetails;

export const getSelectedResumeTemplate = (state) =>
  state.resumeBuilderSlice.selectedTemplate;

export const getCurrentEditingResume = (state) =>
  state.resumeBuilderSlice.currentResume;

export const getResumeList = (state) => state.resumeBuilderSlice.resumesList;

export const getDocument = (state) => state.resumeBuilderSlice.document;
