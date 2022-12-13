import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobsData } from "../../../Redux/Ducks/Jobs/JobsSlice";
import { JobsCards } from "../../Candidate/Jobs/JobsCards";
import { JobsSearchSearch } from "../../Candidate/Jobs/JobsSearch";

export const Jobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsData({ page: 1, limit: 25 }));
  }, [dispatch]);
  return (
    <Grid container spacing={3}>
      <JobsSearchSearch />
      <JobsCards />
    </Grid>
  );
};
