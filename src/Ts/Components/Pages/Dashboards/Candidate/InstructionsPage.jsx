import { Button, Grid, Typography } from "@mui/material";
import { uniqueId } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { JustifyContentFlexEndSxStyles } from "../../../../CommonStyles/CommonSxStyles";
import {
  GroupInstructions,
  RelatedInformation,
} from "../../../../Configs/Dashboards/DashboardsConfig";
import { assessmentsInstructionsRoute } from "../../../../Configs/RoutesConfig";
import { setAssessmentForCandidate } from "../../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { getAssessmentOfCandidate } from "../../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { ButtonTexts, CommonTexts } from "../../../../Utils/Text";

export const InstructionsPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const assessment = useSelector(getAssessmentOfCandidate);

  const onClickContinue = useCallback(() => {
    navigate(`${assessmentsInstructionsRoute}/${assessment?.id}`);
    dispatch(
      setAssessmentForCandidate({ ...assessment, timer: Date.now() + 50000 })
    );
  }, [dispatch, navigate, assessment]);

  const onClickCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 32,
            color: (theme) => theme.palette.primary.main,
          }}>
          {CommonTexts.startAssessment}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 28,
          }}>
          {CommonTexts.instructions}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
          {CommonTexts.aGeneralInformation}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {GroupInstructions.map((instruction) => (
          <Typography key={uniqueId()} sx={{ fontWeight: 500, fontSize: 18 }}>
            {instruction}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 500, fontSize: 18 }}>
          {CommonTexts.instructionNote}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
          {CommonTexts.bRelatedInformation}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {RelatedInformation.map((instruction) => (
          <Typography key={uniqueId()} sx={{ fontWeight: 500, fontSize: 18 }}>
            {instruction}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12} sx={JustifyContentFlexEndSxStyles}>
        <Button onClick={onClickCancel} sx={{ mr: 2 }} variant="outlined">
          {ButtonTexts.cancel}
        </Button>
        <Button onClick={onClickContinue} variant="contained">
          {ButtonTexts.continue}
        </Button>
      </Grid>
    </Grid>
  );
};
