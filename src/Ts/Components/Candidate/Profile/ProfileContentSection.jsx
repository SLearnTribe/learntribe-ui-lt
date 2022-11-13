import { Button, Grid } from "@mui/material";
import { isEmpty } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveUserProfile,
  setValidationsOnProfile,
} from "../../../Redux/Ducks/Profile/ProfileSlice";
import { getUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { handleValidateUserInfo } from "../../../Utils/Profile/CandidateProfileUtils";
import { ButtonTexts } from "../../../Utils/Text";
import { BasicInfoSection } from "./BasicInfoSection";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProfileSkills } from "./ProfileSkills";
import { ResumeUploadSection } from "./ResumeUploadSection";

export const ProfileContentSection = () => {
  const dispatch = useDispatch();

  const userProfileDetails = useSelector(getUserProfileInfo);

  const onSaveUserDetails = useCallback(() => {
    const errorObj = handleValidateUserInfo(userProfileDetails);
    if (!isEmpty(errorObj)) {
      dispatch(setValidationsOnProfile(errorObj));
    } else {
      dispatch(saveUserProfile(userProfileDetails));
    }
  }, [dispatch, userProfileDetails]);
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
          <Button onClick={onSaveUserDetails} variant="contained">
            {ButtonTexts.submit}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
