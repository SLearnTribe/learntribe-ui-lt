import { Grid, TextField, Typography } from "@mui/material";
import { cloneDeep } from "lodash";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentResume } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getCurrentEditingResume } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { ProfileTexts } from "../../Utils/Text";

export const ResumeDescriptionAboutYou = () => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector(getCurrentEditingResume);

  const { about = "" } = resumeDetails;

  const onChangeAbout = useCallback(
    ({ target: { value } }) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.about = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
          {ProfileTexts.descriptionAboutYou}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ width: "100%" }}
          id="filled-multiline-flexible"
          label="Job Description"
          multiline
          rows={4}
          value={about}
          onChange={onChangeAbout}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
