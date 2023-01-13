import { Button, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileRoute } from "../../../Configs/RoutesConfig";
import { getUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { ButtonTexts } from "../../../Utils/Text";
import { HrProfileAvatarSection } from "./Hr/HrProfileAvaterSection";
import { HrProfileContentSection } from "./Hr/HrProfileContentSection";

export const CandidateViewProfile = () => {
  const navigate = useNavigate();

  const selectedApplicantData = useSelector(getUserProfileInfo);

  const onClickEditProfile = useCallback(() => {
    navigate(profileRoute);
  }, [navigate]);

  return (
    <Grid container spacing={3}>
      <HrProfileAvatarSection />
      <HrProfileContentSection selectedApplicantData={selectedApplicantData} />
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}></Grid>
      <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
        <Button variant="contained" onClick={onClickEditProfile}>
          {ButtonTexts.editProfile}
        </Button>
      </Grid>
    </Grid>
  );
};
