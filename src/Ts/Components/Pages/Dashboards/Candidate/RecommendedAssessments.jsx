import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React, { useCallback } from "react";
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
import { ButtonTexts, CommonTexts } from "../../../../Utils/Text";

export const RecommendedAssessments = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const assessmentsData = useSelector(getAssessmentsData);

  const onStartAssessment = useCallback(
    ({ currentTarget }) => {
      const id = currentTarget.getAttribute("data-id");

      dispatch(getAssessmentForCandidate(id));

      navigate(assessmentsInstructionsRoute);
    },
    [dispatch, navigate]
  );

  return (
    <Grid key={uniqueId()} item xs={12}>
      <Box sx={scrollAssessmentSxStyles}>
        {assessmentsData.length === 0 && (
          <CardWithNoData text={CommonTexts.noAssessmentsAvailable} />
        )}
        {assessmentsData.map(({ id, title, description, time = "45 mins" }) => (
          <Card
            sx={HrAssessmentCardSxStyles}
            row
            key={uniqueId()}
            variant="outlined">
            <CardHeader
              action={
                <IconButton>
                  <BookmarkBorderIcon />
                </IconButton>
              }
              title={
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  {title}
                </Typography>
              }
            />
            <CardContent sx={{ pt: 0 }}>
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                  {description}
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="textSecondary"
                  sx={{ fontSize: 14, fontWeight: 500 }}>
                  {time}
                </Typography>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", mt: "auto" }}>
              <Link
                sx={{ fontSize: 16, fontWeight: 700 }}
                component="button"
                underline="none"
                variant="body2"
                data-id={id}
                onClick={onStartAssessment}>
                {ButtonTexts.startNow}
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Grid>
  );
};
