import { Grid } from "@mui/material";
import React from "react";
import { ResumeBuilderSteppers } from "../../ResumeBuilder/ResumeBuilderSteppers";
import { TemplateArea } from "../../ResumeBuilder/TemplateArea";

export const ResumeBuilder = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ResumeBuilderSteppers />
      </Grid>
      <Grid item xs={12}>
        <TemplateArea />
      </Grid>
    </Grid>
  );
};
