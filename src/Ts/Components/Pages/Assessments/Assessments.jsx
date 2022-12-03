import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAssessments } from "../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { AssessmentSearch } from "../../Candidate/Assessments/AssessmentSearch";
import { AssessmentTabs } from "../../Candidate/Assessments/AssessmentTabs";

export const Assessments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssessments({ page: 1, limit: 25 }));
  }, [dispatch]);
  return (
    <Grid container spacing={3}>
      <AssessmentSearch />
      <AssessmentTabs />
    </Grid>
  );
};
