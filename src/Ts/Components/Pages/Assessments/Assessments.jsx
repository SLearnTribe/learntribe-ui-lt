import { Grid } from "@mui/material";
import React from "react";
import { AssessmentSearch } from "../../Candidate/Assessments/AssessmentSearch";
import { AssessmentTabs } from "../../Candidate/Assessments/AssessmentTabs";

export const Assessments = () => {
  return (
    <Grid container spacing={3}>
      <AssessmentSearch />
      <AssessmentTabs />
    </Grid>
  );
};
