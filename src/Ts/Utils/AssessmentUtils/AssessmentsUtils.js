import { cloneDeep, isEmpty, isEqual, uniqBy } from "lodash";
import {
  AssessmentTabsConfig,
  CandidateTabs,
} from "../../Configs/Dashboards/DashboardsConfig";

export const handleFilteredAssessmentsData = (
  assessmentsData,
  assessmentInnerFilter,
  selectedTab
) => {
  const appliedDiffficultyFilters = assessmentInnerFilter.map(
    ({ title }) => title
  );

  if (
    isEqual(selectedTab, CandidateTabs[0].toLowerCase()) &&
    isEmpty(assessmentInnerFilter)
  ) {
    return assessmentsData;
  } else if (
    isEqual(selectedTab, CandidateTabs[0].toLowerCase()) &&
    !isEmpty(assessmentInnerFilter)
  ) {
    return assessmentsData.filter(({ difficulty }) =>
      appliedDiffficultyFilters.includes(difficulty)
    );
  } else if (
    isEqual(selectedTab, AssessmentTabsConfig.saved) &&
    isEmpty(appliedDiffficultyFilters)
  ) {
    return assessmentsData.filter(({ saved }) => saved);
  } else if (
    isEqual(selectedTab, AssessmentTabsConfig.saved) &&
    !isEmpty(appliedDiffficultyFilters)
  ) {
    return assessmentsData.filter(
      ({ difficulty, saved }) =>
        saved && appliedDiffficultyFilters.includes(difficulty)
    );
  } else if (!isEmpty(assessmentInnerFilter)) {
    return assessmentsData.filter(
      ({ status, difficulty }) =>
        isEqual(status.toLowerCase(), selectedTab) &&
        appliedDiffficultyFilters.includes(difficulty)
    );
  } else {
    return assessmentsData.filter(({ status }) =>
      isEqual(status.toLowerCase(), selectedTab)
    );
  }
};

export const handleToggleSaveAssessment = (assessmentsData, currentTarget) => {
  const copyAssessmentsData = cloneDeep(assessmentsData);

  const assessmentCard = JSON.parse(currentTarget.getAttribute("row-data"));

  assessmentCard.saved = !assessmentCard.saved;

  const index = copyAssessmentsData.findIndex(({ id }) =>
    isEqual(id, assessmentCard.id)
  );

  copyAssessmentsData[index] = assessmentCard;

  return copyAssessmentsData;
};

export const hanldeAssessmentResponse = (response) => {
  return uniqBy(
    response.map(({ title }) => {
      return { title };
    }),
    "title"
  );
};
