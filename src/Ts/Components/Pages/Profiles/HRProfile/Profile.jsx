import { Grid } from "@mui/material";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assessmentsRoute } from "../../../../Configs/RoutesConfig";
import { getUserProfile } from "../../../../Redux/Ducks/Profile/ProfileSlice";
import { getAccessToken } from "../../../../Redux/Selectors/UserSelectors/UserSelectors";
import { CommonTexts } from "../../../../Utils/Text";
import { HrProfileAvatarSection } from "../../../Candidate/Profile/Hr/HrProfileAvaterSection";
import { HrProfileContentSection } from "../../../Candidate/Profile/Hr/HrProfileContentSection";
import { PreviouslyGeneratedAssessments } from "../../../Candidate/Profile/Hr/PreviouslyGeneratedAssessments";
import { ProfilePageFooter } from "../../../Candidate/Profile/Hr/ProfilePageFooter";
import { HeaderLink } from "../../../CommonComponents/HeaderAndLink";

export const HrProfile = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(getAccessToken);

  useEffect(() => {
    if (!isEmpty(accessToken)) {
      dispatch(getUserProfile());
    }
  }, [dispatch, accessToken]);

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
      <ProfilePageFooter />
    </Grid>
  );
};
