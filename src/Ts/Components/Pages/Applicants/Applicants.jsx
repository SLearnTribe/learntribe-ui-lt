import { Grid } from "@mui/material";
import React from "react";
import { ApplicantsContainer } from "../../HR/Applicants/ApplicantsContainer";
import { ApplicantsSearch } from "../../HR/Applicants/ApplicantsSearch";

export const Applicants = () => {
  return (
    <Grid container spacing={3}>
      <ApplicantsSearch />
      <ApplicantsContainer />
    </Grid>
  );
};
