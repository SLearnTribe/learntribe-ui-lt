import { Button, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JustifyContentFlexEndSxStyles } from "../../CommonStyles/CommonSxStyles";
import { setResumeActiveStepper } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import {
  getResumeBuilderActiveStepper,
  getSelectedResumeTemplate,
} from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { ButtonTexts } from "../../Utils/Text";
import { ResumeTemplate1 } from "./ResumeTemplate1";

export const ResumeTemplates = () => {
  const dispatch = useDispatch();

  const activeStepper = useSelector(getResumeBuilderActiveStepper);

  const selectedTemplate = useSelector(getSelectedResumeTemplate);

  const onClickNext = useCallback(() => {
    dispatch(setResumeActiveStepper(activeStepper + 1));
  }, [dispatch, activeStepper]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <ResumeTemplate1 templateId={1} />
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>

      <Grid item xs={12} sx={JustifyContentFlexEndSxStyles}>
        <Button
          disabled={!selectedTemplate}
          variant="contained"
          onClick={onClickNext}>
          {ButtonTexts.next}
        </Button>
      </Grid>
    </Grid>
  );
};
