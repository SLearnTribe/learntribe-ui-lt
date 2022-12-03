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
    isLoading: true,
    previouslyGeneratedAssessments: [],
    defaultAssessmentsOptions: [],
  },
  reducers: {
    getAssessments() {},
    getdefaultAssessmentsOptions() {},
    postAssessments() {},
    setAssessmentsData(state, { payload }) {
      state.assessmentsData = payload;
    },
    setGenerateAssessmentsDropdownData(state, { payload }) {
      state.generateAssessmentDropdownData = payload;
    },
    setAssessmentInnerFilter(state, { payload }) {
      state.assessmentInnerFilter = payload;
    },
    setIsAssessmentsLoading(state, { payload }) {
      state.isLoading = payload;
    },
    setPreviouslyGeneratedAssessments(state, { payload }) {
      state.previouslyGeneratedAssessments = payload;
    },
    setDefaultAssessmentsOptions(state, { payload }) {
      state.defaultAssessmentsOptions = payload;
    },
  },
});

export const {
  getAssessments,
  postAssessments,
  setAssessmentsData,
  setGenerateAssessmentsDropdownData,
  setAssessmentInnerFilter,
  setIsAssessmentsLoading,
  setPreviouslyGeneratedAssessments,
  getdefaultAssessmentsOptions,
  setDefaultAssessmentsOptions,
} = assessmentsSlice.actions;

export default assessmentsSlice.reducer;
