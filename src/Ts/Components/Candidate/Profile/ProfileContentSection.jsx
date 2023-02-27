import { Button, Grid, Skeleton } from "@mui/material";
import { isEmpty, isEqual } from "lodash";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  saveUserProfile,
  setValidationsOnProfile,
} from "../../../Redux/Ducks/Profile/ProfileSlice";
import {
  getUpdatedUserProfileInfo,
  getUserProfileInfo,
} from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { handleValidateUserInfo } from "../../../Utils/Profile/CandidateProfileUtils";
import { ButtonTexts } from "../../../Utils/Text";
import { BasicInfoSection } from "./BasicInfoSection";
import { PaySection } from "./Compensation";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProfileSkills } from "./ProfileSkills";
import { ResumeUploadSection } from "./ResumeUploadSection";
import { SideProjectsSection } from "./SideProjectsSection";

export const ProfileContentSection = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLoading = useSelector(getIsUserDataLoading);

  const userProfileDetails = useSelector(getUpdatedUserProfileInfo);

  const userDetails = useSelector(getUserProfileInfo);

  const onGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

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
          <PaySection />
        </Grid>
        <Grid item xs={12}>
          <SideProjectsSection />
        </Grid>
        <Grid item xs={12}>
          <EducationSection />
        </Grid>
        <Grid item xs={12}>
          <ResumeUploadSection />
        </Grid>
        <Grid item xs={12}>
          {isLoading ? (
            <Skeleton width={"100%"} height={50} />
          ) : (
            <>
              <Button sx={{ mr: 3 }} onClick={onGoBack} variant="contained">
                {ButtonTexts.back}
              </Button>
              <Button
                disabled={isEqual(userDetails, userProfileDetails)}
                onClick={onSaveUserDetails}
                variant="contained">
                {ButtonTexts.submit}
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
