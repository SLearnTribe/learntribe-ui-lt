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
import React, { useState } from "react";
import {
  HrAssessmentCardSxStyles,
  scrollAssessmentSxStyles,
  SuccessAlertSxStyles,
} from "../../../../CommonStyles/CommonSxStyles";
import { RecommendedJobsMockData } from "../../../../Utils/MockData/DashboardData";
import { CommonTexts } from "../../../../Utils/Text";

export const PreviouslyGeneratedAssessments = () => {
  const [isAssignAlertOpen, setIsAssignAlertOpen] = useState(false);

  const onToggleAssignAlert = () => {
    setIsAssignAlertOpen(!isAssignAlertOpen);
  };

  const onClickAssign = () => {
    onToggleAssignAlert();
  };

  const onClickEditAssessment = ({ currentTarget }) => {
    const currentJob = JSON.parse(currentTarget.getAttribute("row-data"));
  };
  return (
    <Grid item xs={12}>
      <Box sx={scrollAssessmentSxStyles}>
        {RecommendedJobsMockData.map(
          ({ assessmentMainTitle, assessmentDescription, time }, index) => (
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
                    {assessmentMainTitle}
                  </Typography>
                }
              />
              <CardContent sx={{ pt: 0 }}>
                <Box>
                  <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                    {assessmentDescription}
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
                <Button onClick={onClickAssign} variant="contained">
                  {CommonTexts.assign}
                </Button>
                <Snackbar
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  open={isAssignAlertOpen}
                  autoHideDuration={50000}
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
