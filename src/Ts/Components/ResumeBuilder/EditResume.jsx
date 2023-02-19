import { Avatar, Button, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JustifyContentFlexEndSxStyles } from "../../CommonStyles/CommonSxStyles";
import {
  // saveResumeDetails,
  setResumeActiveStepper,
} from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getResumeBuilderActiveStepper } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { ButtonTexts } from "../../Utils/Text";
import { ResumeDescriptionAboutYou } from "./ResumeDescriptionAboutYou";
import { ResumeEditInfo } from "./ResumeEditInfo";
import { ResumeEducation } from "./ResumeEducation";
import { ResumeExperience } from "./ResumeExperience";
import { ResumeProjects } from "./ResumeProjects";
import { ResumeSkills } from "./ResumeSkills";
import { ResumeSocialNetworking } from "./ResumeSocialNetworking";
import { ResumeTemplate1 } from "./ResumeTemplate1";

export const EditResume = () => {
  const dispatch = useDispatch();

  const activeStepper = useSelector(getResumeBuilderActiveStepper);

  const goBack = useCallback(() => {
    dispatch(setResumeActiveStepper(activeStepper - 1));
  }, [dispatch, activeStepper]);

  const onSaveAndNext = useCallback(() => {
    dispatch(setResumeActiveStepper(activeStepper + 1));
    // dispatch(saveResumeDetails(resumeDetails));
  }, [dispatch, activeStepper]);
  return (
    <Grid container spacing={3}>
      {/* 1st Column */}
      <Grid item xs={12} xl={2} lg={2} md={2} sm={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Avatar
              alt="Remy Sharp"
              // src={file}
              sx={{
                width: 100,
                height: 100,
                ml: 1,
                border: "thick solid",
                borderColor: (theme) => theme.palette.primary.dark,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button sx={{ mt: 2 }} variant="outlined">
              {ButtonTexts.uploadPhoto}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* 2nd Column */}
      <Grid item xs={12} xl={10} lg={10} md={10} sm={12}>
        <Grid container spacing={2}>
          {/* Edit info name, email, city */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ResumeEditInfo />
          </Grid>
          {/* Small Resume template */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ResumeTemplate1 templateId={1} maxHeight={"24.8rem"} />
          </Grid>
          {/* Experience section */}
          <Grid item xs={12}>
            <ResumeExperience />
          </Grid>
          {/* Skills section */}
          <Grid item xs={12}>
            <ResumeSkills />
          </Grid>
          {/* Description about you section */}
          <Grid item xs={12}>
            <ResumeDescriptionAboutYou />
          </Grid>
          {/* Description about you section */}
          <Grid item xs={12}>
            <ResumeProjects />
          </Grid>
          {/* Description about you section */}
          <Grid item xs={12}>
            <ResumeSocialNetworking />
          </Grid>
          {/* Education section */}
          <Grid item xs={12}>
            <ResumeEducation />
          </Grid>
          {/* Back and Next section */}
          <Grid item xs={12} sx={JustifyContentFlexEndSxStyles}>
            <Button variant="outlined" onClick={goBack} sx={{ mr: 2 }}>
              {ButtonTexts.back}
            </Button>
            <Button variant="contained" onClick={onSaveAndNext}>
              {ButtonTexts.saveAndNext}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
