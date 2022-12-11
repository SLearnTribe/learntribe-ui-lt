import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../../../Redux/Ducks/Profile/ProfileSlice";
import { getUserProfileInfo } from "../../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { ProfileAvatarSection } from "../../../Candidate/Profile/ProfileAvtarSection";
import { ProfileContentSection } from "../../../Candidate/Profile/ProfileContentSection";

export const CandidateProfile = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUserProfileInfo);

  useEffect(() => {
    return () => {
      dispatch(updateUserProfile(userInfo));
    };
  }, [dispatch, userInfo]);
  return (
    <Grid container spacing={3}>
      <ProfileAvatarSection />
      <ProfileContentSection />
    </Grid>
  );
};
