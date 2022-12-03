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
