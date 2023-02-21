import { Button, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getdefaultAssessmentsOptions } from "../../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { setCurrentModal } from "../../../../Redux/Ducks/Modal/ModalSlice";
import { CommonTexts, ModalTexts } from "../../../../Utils/Text";

export const ProfilePageFooter = () => {
  const dispatch = useDispatch();

  const onClickScheduleACall = useCallback(() => {
    dispatch(getdefaultAssessmentsOptions());
    dispatch(setCurrentModal(ModalTexts.scheduleCall));
  }, [dispatch]);

  const onClickGenerateAssessment = useCallback(() => {
    dispatch(getdefaultAssessmentsOptions());
    dispatch(setCurrentModal(ModalTexts.generateAssessment));
  }, [dispatch]);
  return (
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Button onClick={onClickGenerateAssessment} variant="contained">
        {CommonTexts.generateAssessment}
      </Button>
      <Button onClick={onClickScheduleACall} variant="contained">
        {CommonTexts.scheduleACall}
      </Button>
    </Grid>
  );
};
