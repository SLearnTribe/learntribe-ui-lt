import { Grid } from "@mui/material";
import { isEmpty, uniqBy, uniqueId } from "lodash";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { assessmentsInstructionsRoute } from "../../../Configs/RoutesConfig";
import { AssessmentNoDataCard } from "../../../NoDataAvailable/PostJobs/NoJobsAvailable";
import {
  setAssessmentForCandidate,
  setAssessmentInnerFilter,
  updateAssessmentId,
} from "../../../Redux/Ducks/Assessments/AssessmentsSlice";
import {
  getAssessmentInnerFilter,
  getAssessmentsData,
} from "../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { handleFilteredAssessmentsData } from "../../../Utils/AssessmentUtils/AssessmentsUtils";
import { AssessmentCard } from "../../CommonComponents/Controls/AssessmentCard";
import { AutoCompleteMultiSelect } from "../../CommonComponents/Controls/AutoComplete";

export const AssessmentCards = ({ selectedTab }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const assessmentsData = useSelector(getAssessmentsData);

  const assessmentInnerFilter = useSelector(getAssessmentInnerFilter);

  // const onToggleSave = useCallback(({ currentTarget }) => {
  //   // const updatedAssessmentsData = handleToggleSaveAssessment(
  //   //   assessmentsData,
  //   //   currentTarget
  //   // );
  //   // dispatch(setAssessmentsData(updatedAssessmentsData));
  // }, []);

  const difficultyOptions = useMemo(() => {
    const normalizedOptions = assessmentsData.map(({ difficulty }) => {
      return {
        title: difficulty,
      };
    });

    return uniqBy(normalizedOptions, "title");
  }, [assessmentsData]);

  const onFilterByDifficulty = useCallback(
    (_e, value) => {
      dispatch(setAssessmentInnerFilter(value));
    },
    [dispatch]
  );

  const onStartAssessment = useCallback(
    (row) => {
      dispatch(updateAssessmentId(row.id));

      dispatch(setAssessmentForCandidate(row));

      navigate(assessmentsInstructionsRoute);
    },
    [dispatch, navigate]
  );

  const filteredAssessmentsData = useMemo(() => {
    return handleFilteredAssessmentsData(
      assessmentsData,
      assessmentInnerFilter,
      selectedTab
    );
  }, [assessmentsData, selectedTab, assessmentInnerFilter]);

  // const onClickAskWhy = () => {};
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AutoCompleteMultiSelect
          options={difficultyOptions}
          value={assessmentInnerFilter}
          onChange={onFilterByDifficulty}
          label={"Filter by assessment difficulty level"}
          placeholder={"Select assessment by difficulty level"}
        />
      </Grid>
      {isEmpty(filteredAssessmentsData) && (
        <AssessmentNoDataCard text="No Assessment Available" />
      )}
      {filteredAssessmentsData.map((row) => {
        const {
          title,
          difficulty,
          // description,
          status,
          id,
          askWhy = "TCS, CTS, IBM are suggesting this assessment.",
          businessName,
        } = row;
        return (
          <Grid item xs={4} key={uniqueId()}>
            <AssessmentCard
              businessName={businessName}
              title={title}
              id={id}
              difficulty={difficulty}
              status={status}
              askWhy={askWhy}
              onStartAssessment={() => onStartAssessment(row)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
