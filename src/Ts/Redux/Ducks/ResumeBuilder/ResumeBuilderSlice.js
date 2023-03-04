import { createSlice } from "@reduxjs/toolkit";

const resumeBuilderSlice = createSlice({
  name: "resumeBuilderSlice",
  initialState: {
    activeStep: 0,
    resumeDetails: {},
    currentScreen: 0,
    selectedTemplate: 0,
    resumesList: [],
    currentResume: {},
    document: ''
  },
  reducers: {
    getResumeDetailsList() {},
    saveResumeDetails() {},
    getDownloadResume() {},
    postUploadResume() {},
    postSaveResume() {},
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
    updateResumeList(state, { payload }) {
      state.resumesList = payload;
    },
    updateCurrentResume(state, { payload }) {
      state.currentResume = payload;
    },
    updateDocument(state, { payload }) {
      state.document = payload;
    }
  },
});

export const {
  postSaveResume,
  setResumeActiveStepper,
  getDownloadResume,
  postUploadResume,
  setResumeCurrentScreen,
  setResumeTemplate,
  updateResumeDetails,
  getResumeDetails,
  updateResumeList,
  getResumeDetailsList,
  updateCurrentResume,
  saveResumeDetails,
  updateDocument
} = resumeBuilderSlice.actions;

export default resumeBuilderSlice.reducer;
