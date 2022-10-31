import { createSlice } from "@reduxjs/toolkit";
import { ApplicantsListMockData } from "../../../Utils/MockData/DashboardData";

const applicantSlice = createSlice({
  name: "applicant",
  initialState: {
    applicantsData: ApplicantsListMockData(5),
    selectedApplicantDetails: ApplicantsListMockData(1)[0],
    selectedApplicantsIds: {},
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
  },
});

export const {
  getApplicantsData,
  setApplicantsData,
  setSelectedApplicantDetails,
  setSelectedApplicantsIds,
} = applicantSlice.actions;

export default applicantSlice.reducer;
