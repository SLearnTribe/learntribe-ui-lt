import { Grid } from "@mui/material";
import React from "react";
import { JobsCards } from "../../Candidate/Jobs/JobsCards";
import { JobsSearchSearch } from "../../Candidate/Jobs/JobsSearch";

export const Jobs = () => {
  return (
    <Grid container spacing={3}>
      <JobsSearchSearch />
      <JobsCards />
    </Grid>
  );
};
