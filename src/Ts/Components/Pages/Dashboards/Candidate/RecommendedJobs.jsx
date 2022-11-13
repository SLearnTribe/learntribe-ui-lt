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
import React from "react";
import { useSelector } from "react-redux";
import {
  HrAssessmentCardSxStyles,
  scrollAssessmentSxStyles,
} from "../../../../CommonStyles/CommonSxStyles";
import { getAssessmentsData } from "../../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { ButtonTexts } from "../../../../Utils/Text";

export const RecommendedJobs = () => {
  const assessmentsData = useSelector(getAssessmentsData);

  return (
    <Grid key={uniqueId()} item xs={12}>
      <Box sx={scrollAssessmentSxStyles}>
        {assessmentsData.map(({ title, description, time = "45 mins" }) => (
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
                onClick={() => {
                  console.info("I'm a button.");
                }}>
                {ButtonTexts.startNow}
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Grid>
  );
};
