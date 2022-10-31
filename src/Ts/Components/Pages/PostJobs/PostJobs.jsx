import { Grid } from "@mui/material";
import React from "react";
import { PostJobsTexts } from "../../../Utils/Text";
import { HeaderLink } from "../../CommonComponents/HeaderAndLink";
import { PostJobsSearchAndButton } from "../../HR/PostJobs/PostJobsSearchAndButton";
import { PreviouslyPostedJobs } from "../../HR/PostJobs/PreviouslyPostedJobs";

export const PostJobs = () => {
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
