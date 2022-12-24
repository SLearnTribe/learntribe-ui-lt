import AssignmentIcon from "@mui/icons-material/Assignment";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export const PostJobsNoData = ({
  width = "100%",
  text = "No Data Available",
  height = "10rem",
}) => {
  return (
    <Grid item xs={12} sm={12}>
      <Card
        sx={{
          width,
          height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export const ApplicantsNoDataCard = ({ text = "" }) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          avatar={<Avatar sx={{ width: "5rem", height: "5rem" }} />}
          title={
            <Typography sx={{ fontSize: 16, fontWeight: 500, pr: 2 }}>
              {text}
            </Typography>
          }
        />
      </Card>
    </Grid>
  );
};

export const AssessmentNoDataCard = ({ text = "" }) => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          avatar={<AssignmentIcon sx={{ fontSize: "5rem" }} />}
          title={
            <Typography sx={{ fontSize: 16, fontWeight: 500, pr: 2 }}>
              {text}
            </Typography>
          }
        />
      </Card>
    </Grid>
  );
};
