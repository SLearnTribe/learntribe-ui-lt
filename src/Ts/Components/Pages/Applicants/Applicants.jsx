import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApplicantsData } from "../../../Redux/Ducks/Applicants/ApplicantSlice";
import { ApplicantsContainer } from "../../HR/Applicants/ApplicantsContainer";
import { ApplicantsSearch } from "../../HR/Applicants/ApplicantsSearch";

export const Applicants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplicantsData({ page: 1, limit: 25, skill: "", keyword: "" }));
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      <ApplicantsSearch />
      <ApplicantsContainer />
    </Grid>
  );
};
