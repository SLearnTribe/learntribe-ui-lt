import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { assessmentsRoute } from "../../../../Configs/RoutesConfig";
import { getSelectedApplicantDetails } from "../../../../Redux/Selectors/ApplicantSelectors/ApplicantSelectors";
import { CommonTexts } from "../../../../Utils/Text";
import { HrProfileAvatarSection } from "../../../Candidate/Profile/Hr/HrProfileAvaterSection";
import { HrProfileContentSection } from "../../../Candidate/Profile/Hr/HrProfileContentSection";
import { PreviouslyGeneratedAssessments } from "../../../Candidate/Profile/Hr/PreviouslyGeneratedAssessments";
import { ProfilePageFooter } from "../../../Candidate/Profile/Hr/ProfilePageFooter";
import { HeaderLink } from "../../../CommonComponents/HeaderAndLink";

export const ApplicantProfile = () => {
  const selectedApplicantData = useSelector(getSelectedApplicantDetails);
  return (
    <Grid container spacing={3}>
      <HrProfileAvatarSection />
      <HrProfileContentSection selectedApplicantData={selectedApplicantData} />
      <HeaderLink
        mainText={CommonTexts.previouslyGeneratedAssessments}
        linkText={CommonTexts.viewAll}
        route={assessmentsRoute}
        hideLink={true}
      />
      <PreviouslyGeneratedAssessments />
      <ProfilePageFooter />
    </Grid>
  );
};
