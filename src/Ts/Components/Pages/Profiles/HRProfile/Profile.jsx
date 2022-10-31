import { Grid } from "@mui/material";
import React from "react";
import { assessmentsRoute } from "../../../../Configs/RoutesConfig";
import { CommonTexts } from "../../../../Utils/Text";
import { HrProfileAvatarSection } from "../../../Candidate/Profile/Hr/HrProfileAvaterSection";
import { HrProfileContentSection } from "../../../Candidate/Profile/Hr/HrProfileContentSection";
import { PreviouslyGeneratedAssessments } from "../../../Candidate/Profile/Hr/PreviouslyGeneratedAssessments";
import { HeaderLink } from "../../../CommonComponents/HeaderAndLink";

export const HrProfile = () => {
  return (
    <Grid container spacing={3}>
      <HrProfileAvatarSection />
      <HrProfileContentSection />
      <HeaderLink
        mainText={CommonTexts.previouslyGeneratedAssessments}
        linkText={CommonTexts.viewAll}
        route={assessmentsRoute}
      />
      <PreviouslyGeneratedAssessments />
    </Grid>
  );
};
