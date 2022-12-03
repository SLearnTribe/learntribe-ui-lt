import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HrAssessmentCardSxStyles,
  scrollAssessmentSxStyles,
  SuccessAlertSxStyles,
} from "../../../../CommonStyles/CommonSxStyles";
import {
  putAssignAssessment,
  setIsAssignAlertOpen,
} from "../../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { getSelectedApplicantDetails } from "../../../../Redux/Selectors/ApplicantSelectors/ApplicantSelectors";
import {
  getAssessmentsData,
  getIsAssignAlertOpen,
} from "../../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { RecommendedJobsMockData } from "../../../../Utils/MockData/DashboardData";
import { CommonTexts } from "../../../../Utils/Text";

export const PreviouslyGeneratedAssessments = () => {
  const dispatch = useDispatch();

  const assessmentsData = useSelector(getAssessmentsData);

  const isAssignAlertOpen = useSelector(getIsAssignAlertOpen);

  const { email } = useSelector(getSelectedApplicantDetails);

  const onToggleAssignAlert = useCallback(() => {
    dispatch(setIsAssignAlertOpen());
  }, [dispatch]);

  const onClickAssign = useCallback(
    (assessmentId) => {
      dispatch(putAssignAssessment({ assessmentId, assigneeEmail: email }));
    },
    [dispatch, email]
  );

  const onClickEditAssessment = ({ currentTarget }) => {
    // const currentJob = JSON.parse(currentTarget.getAttribute("row-data"));
  };
  return (
    <Grid item xs={12}>
      <Box sx={scrollAssessmentSxStyles}>
        {assessmentsData.map(
          ({ title, subTitle, time = "45 mins", id }, index) => (
            <Card
              sx={HrAssessmentCardSxStyles}
              row
              key={uniqueId()}
              variant="outlined">
              <CardHeader
                action={
                  <EditOutlinedIcon
                    sx={{ cursor: "pointer" }}
                    row-data={JSON.stringify(RecommendedJobsMockData[index])}
                    onClick={onClickEditAssessment}
                  />
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
                    {subTitle}
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
                <Button onClick={() => onClickAssign(id)} variant="contained">
                  {CommonTexts.assign}
                </Button>
                <Snackbar
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  open={isAssignAlertOpen}
                  autoHideDuration={5000}
                  onClose={onToggleAssignAlert}>
                  <Alert
                    onClose={onToggleAssignAlert}
                    sx={SuccessAlertSxStyles}
                    variant="filled"
                    severity="success">
                    This is a success alert — check it out!
                  </Alert>
                </Snackbar>
              </CardActions>
            </Card>
          )
        )}
      </Box>
    </Grid>
  );
};
