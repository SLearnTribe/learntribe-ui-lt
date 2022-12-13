import { Button, FormControlLabel, Grid, Switch } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { getSelectedApplicantsIds } from "../../../Redux/Selectors/ApplicantSelectors/ApplicantSelectors";
import { ButtonTexts, HrApplicantTexts, ModalTexts } from "../../../Utils/Text";
import { ApplicantsCards } from "./ApplicantsCards";
import { ApplicantsSideView } from "./ApplicantsSideView";

export const ApplicantsContainer = () => {
  const dispatch = useDispatch();

  const selectedApplicantsIds = useSelector(getSelectedApplicantsIds);

  const [isSelectMultipleActive, setIsSelectMultipleActive] = useState(false);

  const onToggleSelectMultiple = (e) => {
    e.stopPropagation();
    setIsSelectMultipleActive(!isSelectMultipleActive);
  };

  const shouldDisplayGenerateBtn = useMemo(() => {
    return (
      Object.values(selectedApplicantsIds).includes(true) &&
      isSelectMultipleActive
    );
  }, [selectedApplicantsIds, isSelectMultipleActive]);

  const onClickGenerateAssessment = useCallback(() => {
    // dispatch(getdefaultAssessmentsOptions()); we may need it later
    dispatch(setCurrentModal(ModalTexts.generateAssessment));
  }, [dispatch]);

  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              {shouldDisplayGenerateBtn && (
                <Button onClick={onClickGenerateAssessment} variant="contained">
                  {ButtonTexts.generateAssessment}
                </Button>
              )}
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}>
              <FormControlLabel
                sx={{ fontWeight: 500, fontSize: 16, color: "#737272" }}
                value="start"
                control={
                  <Switch onClick={onToggleSelectMultiple} color="primary" />
                }
                label={HrApplicantTexts.selectMultiple}
                labelPlacement="start"
              />
            </Grid>
            <ApplicantsCards isSelectMultipleActive={isSelectMultipleActive} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ display: "flex", justifyContent: "center" }}>
          <ApplicantsSideView isSelectMultipleActive={isSelectMultipleActive} />
        </Grid>
      </Grid>
    </Grid>
  );
};
