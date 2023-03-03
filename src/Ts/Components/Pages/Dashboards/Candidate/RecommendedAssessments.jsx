import { Box, Grid } from "@mui/material";
import { uniqueId } from "lodash";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardWithNoData } from "../../../../CommonJsx/CommonJsxUtils";
import {
  HrAssessmentCardSxStyles,
  scrollAssessmentSxStyles,
} from "../../../../CommonStyles/CommonSxStyles";
import { assessmentsInstructionsRoute } from "../../../../Configs/RoutesConfig";
import { getAssessmentForCandidate } from "../../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { getAssessmentsData } from "../../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { getIsUserDataLoading } from "../../../../Redux/Selectors/UserSelectors/UserSelectors";
import { RecommendedAssessmentSkeleton } from "../../../../Skeletons/RecomendedAssessmentSkeleton";
import { CommonTexts } from "../../../../Utils/Text";
import { AssessmentCard } from "../../../CommonComponents/Controls/AssessmentCard";

export const RecommendedAssessments = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const assessmentsData = useSelector(getAssessmentsData);

  const isLoading = useSelector(getIsUserDataLoading);

  const onStartAssessment = useCallback(
    ({ currentTarget }) => {
      const id = currentTarget.getAttribute("data-id");

      dispatch(getAssessmentForCandidate(id));

      navigate(assessmentsInstructionsRoute);
    },
    [dispatch, navigate]
  );

  return isLoading ? (
    <RecommendedAssessmentSkeleton />
  ) : (
    <Grid key={uniqueId()} item xs={12}>
      <Box sx={scrollAssessmentSxStyles}>
        {assessmentsData.length === 0 && (
          <CardWithNoData text={CommonTexts.noAssessmentsAvailable} />
        )}
        {assessmentsData.map(
          ({
            id,
            businessName,
            status,
            title,
            askWhy = "N/A",
            description,
            time = "45 mins",
            difficulty,
          }) => (
            <AssessmentCard
              businessName={businessName}
              title={title}
              id={id}
              difficulty={difficulty}
              status={status}
              askWhy={askWhy}
              onStartAssessment={onStartAssessment}
              sx={HrAssessmentCardSxStyles}
              row={true}
            />
          )
        )}
      </Box>
    </Grid>
  );
};
