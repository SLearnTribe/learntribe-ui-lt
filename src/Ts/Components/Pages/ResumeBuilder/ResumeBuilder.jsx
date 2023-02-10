import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getResumeDetailsList,
  setResumeActiveStepper,
  setResumeTemplate,
} from "../../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { ResumeBuilderSteppers } from "../../ResumeBuilder/ResumeBuilderSteppers";
import { TemplateArea } from "../../ResumeBuilder/TemplateArea";

export const ResumeBuilder = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResumeDetailsList());

    return () => {
      dispatch(setResumeActiveStepper(0));
      dispatch(setResumeTemplate(0));
    };
  }, [dispatch]);
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
