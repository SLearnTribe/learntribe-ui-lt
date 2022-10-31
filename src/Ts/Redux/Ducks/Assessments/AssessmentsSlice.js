import { createSlice } from "@reduxjs/toolkit";
import {
  AssessmentsMockData,
  GenerateAssessmentsDropdownMockData,
} from "../../../Utils/MockData/DashboardData";

const assessmentsSlice = createSlice({
  name: "assessments",
  initialState: {
    assessmentsData: AssessmentsMockData(),
    generateAssessmentDropdownData: GenerateAssessmentsDropdownMockData,
    assessmentInnerFilter: [],
  },
  reducers: {
    getAssessments() {},
    setAssessmentsData(state, { payload }) {
      state.assessmentsData = payload;
    },
    setGenerateAssessmentsDropdownData(state, { payload }) {
      state.generateAssessmentDropdownData = payload;
    },
    setAssessmentInnerFilter(state, { payload }) {
      state.assessmentInnerFilter = payload;
    },
  },
});

export const {
  getAssessments,
  setAssessmentsData,
  setGenerateAssessmentsDropdownData,
  setAssessmentInnerFilter,
} = assessmentsSlice.actions;

export default assessmentsSlice.reducer;
