import { Button, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JustifyContentFlexEndSxStyles } from "../../CommonStyles/CommonSxStyles";
import { setResumeActiveStepper } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import {
  getResumeBuilderActiveStepper,
  getSelectedResumeTemplate,
} from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { getIsUserDataLoading } from "../../Redux/Selectors/UserSelectors/UserSelectors";
import { ResumeTemplatesSkeletons } from "../../Skeletons/ResumeTemplatesSkeletons";
import { resumeBuilderMockData } from "../../Utils/MockData/ResumeBuilderData";
import { ButtonTexts } from "../../Utils/Text";
import { ResumeTemplate1 } from "./ResumeTemplate1";
import { ResumeTemplate2 } from "./ResumeTemplate2";
import { ResumeTemplate3 } from "./ResumeTemplate3";

export const ResumeTemplates = () => {
  const dispatch = useDispatch();

  const activeStepper = useSelector(getResumeBuilderActiveStepper);

  const selectedTemplate = useSelector(getSelectedResumeTemplate);

  const isLoading = useSelector(getIsUserDataLoading);

  const onClickNext = useCallback(() => {
    dispatch(setResumeActiveStepper(activeStepper + 1));
    // dispatch(updateCurrentResume());
  }, [dispatch, activeStepper]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        {isLoading ? (
          <ResumeTemplatesSkeletons />
        ) : (
          <ResumeTemplate1 templateId={1} data={resumeBuilderMockData} />
        )}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        {isLoading ? (
          <ResumeTemplatesSkeletons />
        ) : (
          <ResumeTemplate2 templateId={2} />
        )}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        {isLoading ? (
          <ResumeTemplatesSkeletons />
        ) : (
          <ResumeTemplate3 templateId={3} />
        )}
      </Grid>

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
