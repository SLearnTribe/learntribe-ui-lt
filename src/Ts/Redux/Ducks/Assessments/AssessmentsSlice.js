import { createSlice } from "@reduxjs/toolkit";
import {
  AssessmentsMockData,
  GenerateAssessmentsDropdownMockData,
} from "../../../Utils/MockData/DashboardData";

const defaultState = {
  assessmentsData: AssessmentsMockData(),
  generateAssessmentDropdownData: GenerateAssessmentsDropdownMockData,
  assessmentInnerFilter: [],
  isLoading: true,
  previouslyGeneratedAssessments: [],
  defaultAssessmentsOptions: [],
  isAssignAlertOpen: false,
  assessmentForCandidate: {},
  currentEditingAssessment: {},
  assessmentsChartData: {
    series: [],
    categories: [],
  },
  assessmentTimer: null,
  assessmentModal: {
    open: false,
    answers: {},
    showSubmitUI: false,
  },
};

const assessmentsSlice = createSlice({
  name: "assessments",
  initialState: defaultState,
  reducers: {
    getAssessments() {},
    getAssessmentForCandidate() {},
    putAssignAssessment() {},
    getdefaultAssessmentsOptions() {},
    postAssessments() {},
    postSubmitAssessment() {},
    updateAssessmentModal(state, { payload }) {
      state.assessmentModal = { ...state.assessmentModal, ...payload };
    },
    updateAssessmentTimer(state, { payload }) {
      state.assessmentTimer = payload;
    },
    setAssessmentsData(state, { payload: { data, chartData } }) {
      state.assessmentsData = data;
      state.assessmentsChartData = chartData;
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
    setIsAssignAlertOpen(state) {
      state.isAssignAlertOpen = !state.isAssignAlertOpen;
    },
    setAssessmentForCandidate(state, { payload }) {
      state.assessmentForCandidate = payload;
    },
    setCurrentEditingAssessment(state, { payload }) {
      state.currentEditingAssessment = payload;
    },
  },
});

export const {
  updateAssessmentTimer,
  postSubmitAssessment,
  updateAssessmentModal,
  setAssessmentForCandidate,
  getAssessmentForCandidate,
  getAssessments,
  putAssignAssessment,
  postAssessments,
  setAssessmentsData,
  setGenerateAssessmentsDropdownData,
  setAssessmentInnerFilter,
  setIsAssessmentsLoading,
  setPreviouslyGeneratedAssessments,
  getdefaultAssessmentsOptions,
  setDefaultAssessmentsOptions,
  setIsAssignAlertOpen,
  setCurrentEditingAssessment,
} = assessmentsSlice.actions;

export default assessmentsSlice.reducer;
