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

export const hanldeDisableGenerateBtn = (
  respjobsAssessedFor,
  previouslyGeneratedAssessments,
  skillsList,
  difficultyLevel
) => {
  let shouldDisableGenerateBtn = true;

  const isRespjobsAssessedForEmpty = isEmpty(respjobsAssessedFor);

  const isPreviouslyGeneratedAssessmentsEmpty = isEmpty(
    previouslyGeneratedAssessments
  );

  const isSkillsEmpty = isEmpty(skillsList);

  const isDifficultyEmpty = isEmpty(difficultyLevel);

  if (!isRespjobsAssessedForEmpty && !isPreviouslyGeneratedAssessmentsEmpty) {
    shouldDisableGenerateBtn = false;
  } else if (
    !isRespjobsAssessedForEmpty &&
    !isSkillsEmpty &&
    !isDifficultyEmpty
  ) {
    shouldDisableGenerateBtn = false;
  }

  return shouldDisableGenerateBtn;
};

export const handleGenerateAssessmentPostData = (
  jobsAssessedFor,
  previouslyGeneratedAssessments,
  skillsList,
  difficultyLevel
) => {
  const postData = {};

  const isSkillsEmpty = isEmpty(skillsList);

  const isDifficultyEmpty = isEmpty(difficultyLevel);

  const title = previouslyGeneratedAssessments
    ?.map(({ title }) => title)
    .join(", ");

  const relatedJobId = jobsAssessedFor?.map(({ id }) => id).join(",");

  postData.title = title || "";
  postData.relatedJobId = relatedJobId || "";
  postData.skill = isSkillsEmpty ? "" : skillsList.join(", ");
  postData.difficulty = isDifficultyEmpty ? "" : difficultyLevel.title;

  return postData;
};
