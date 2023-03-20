export const getAssessmentsData = (state) =>
  state.assessmentsSlice.assessmentsData;

export const getGenerateAssessmentDropdownData = (state) =>
  state.assessmentsSlice.generateAssessmentDropdownData;

export const getAssessmentInnerFilter = (state) =>
  state.assessmentsSlice.assessmentInnerFilter;

export const getPreviouslyGeneratedAssessments = (state) =>
  state.assessmentsSlice.previouslyGeneratedAssessments;

export const getDefaultAssessmentsDropdownOptions = (state) =>
  state.assessmentsSlice.defaultAssessmentsOptions;

export const getIsAssignAlertOpen = (state) =>
  state.assessmentsSlice.isAssignAlertOpen;

export const getAssessmentOfCandidate = (state) =>
  state.assessmentsSlice.assessmentForCandidate;

export const getCurrentEditingAssessment = (state) =>
  state.assessmentsSlice.currentEditingAssessment;

export const getAssessmentsChartData = (state) =>
  state.assessmentsSlice.assessmentsChartData;

export const getAssessmentsModal = (state) =>
  state.assessmentsSlice.assessmentModal;

export const getAssessmentId = (state) => state.assessmentsSlice.assessmentId;

export const getShowAssessmentTimer = (state) =>
  state.assessmentsSlice.showAssessmentTimer;
