import { Grid } from "@mui/material";
import React from "react";
import { ProfileAvatarSection } from "../../../Candidate/Profile/ProfileAvtarSection";
import { ProfileContentSection } from "../../../Candidate/Profile/ProfileContentSection";

export const CandidateProfile = () => {
  return (
    <Grid container spacing={3}>
      <ProfileAvatarSection />
      <ProfileContentSection />
    </Grid>
  );
};
