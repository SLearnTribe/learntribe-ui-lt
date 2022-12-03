import { createSlice } from "@reduxjs/toolkit";

const applicantSlice = createSlice({
  name: "applicant",
  initialState: {
    applicantsData: [],
    selectedApplicantDetails: {},
    selectedApplicantsIds: {},
    isLoading: true,
  },
  reducers: {
    getApplicantsData() {},
    setApplicantsData(state, { payload }) {
      state.applicantsData = payload;
    },
    setSelectedApplicantDetails(state, { payload }) {
      state.selectedApplicantDetails = payload;
    },
    setSelectedApplicantsIds(state, { payload }) {
      state.selectedApplicantsIds = payload;
    },
    setIsApplicantsLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  getApplicantsData,
  setApplicantsData,
  setSelectedApplicantDetails,
  setSelectedApplicantsIds,
  setIsApplicantsLoading,
} = applicantSlice.actions;

export default applicantSlice.reducer;
