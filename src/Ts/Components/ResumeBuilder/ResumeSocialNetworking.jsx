import { Grid, TextField, Typography } from "@mui/material";
import { cloneDeep } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentResume } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getCurrentEditingResume } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { CommonTexts, ProfileTexts } from "../../Utils/Text";

export const ResumeSocialNetworking = () => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector(getCurrentEditingResume);

  const { gitHub, linkedIn } = resumeDetails;

  const onChangeGitHubUrl = useCallback(
    ({ target: { value } }) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.gitHub = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeLinkedInUrl = useCallback(
    ({ target: { value } }) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.linkedIn = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
          {ProfileTexts.socialNetworks}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextField
          sx={{ width: "100%" }}
          value={linkedIn}
          onChange={onChangeLinkedInUrl}
          id="outlined-basic"
          label={CommonTexts.linkedInUrl}
          placeholder={CommonTexts.linkedInUrl}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextField
          sx={{ width: "100%" }}
          value={gitHub}
          onChange={onChangeGitHubUrl}
          id="outlined-basic"
          label={CommonTexts.githubUrl}
          placeholder={CommonTexts.githubUrl}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
