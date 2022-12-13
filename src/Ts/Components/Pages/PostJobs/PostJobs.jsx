import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobsData } from "../../../Redux/Ducks/Jobs/JobsSlice";
import { PostJobsTexts } from "../../../Utils/Text";
import { HeaderLink } from "../../CommonComponents/HeaderAndLink";
import { PostJobsSearchAndButton } from "../../HR/PostJobs/PostJobsSearchAndButton";
import { PreviouslyPostedJobs } from "../../HR/PostJobs/PreviouslyPostedJobs";

export const PostJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsData({ page: 1, limit: 25 }));
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      <PostJobsSearchAndButton />
      <HeaderLink
        mainText={PostJobsTexts.previouslyPostedJobs}
        hideLink={true}
      />
      <PreviouslyPostedJobs />
    </Grid>
  );
};
