import { Button, Grid } from "@mui/material";
import React from "react";
import { ButtonTexts } from "../../../Utils/Text";
import { BasicInfoSection } from "./BasicInfoSection";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProfileSkills } from "./ProfileSkills";
import { ResumeUploadSection } from "./ResumeUploadSection";

export const ProfileContentSection = () => {
  return (
    <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BasicInfoSection />
        </Grid>
        <Grid item xs={12}>
          <ExperienceSection />
        </Grid>
        <Grid item xs={12}>
          <ProfileSkills />
        </Grid>
        <Grid item xs={12}>
          <EducationSection />
        </Grid>
        <Grid item xs={12}>
          <ResumeUploadSection />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ textTransform: "none" }}>
            {ButtonTexts.submit}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
