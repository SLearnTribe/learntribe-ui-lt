import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { cloneDeep, isEmpty } from "lodash";
import moment from "moment";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Font18Weight500SxStyles,
  JustifyContentSpaceBetweenAlignCenterSxStyles,
} from "../../CommonStyles/CommonSxStyles";
import { NewExperienceObject } from "../../Configs/Profile/ProfileConfig";
import { updateCurrentResume } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getCurrentEditingResume } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import {
  ButtonTexts,
  CommonTexts,
  ProfileTexts,
  TextFieldLabelsAndTexts,
} from "../../Utils/Text";

export const ResumeExperience = () => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector(getCurrentEditingResume);

  const { workExperiences = [] } = resumeDetails;

  const onClickAddNewExperience = useCallback(() => {
    const copyResumeDetails = cloneDeep(resumeDetails);

    copyResumeDetails.workExperiences.push(NewExperienceObject);

    dispatch(updateCurrentResume(copyResumeDetails));
  }, [dispatch, resumeDetails]);

  const onClickDeleteEducation = useCallback(() => {
    const copyResumeDetails = cloneDeep(resumeDetails);

    copyResumeDetails.workExperiences.splice(-1);

    dispatch(updateCurrentResume(copyResumeDetails));
  }, [dispatch, resumeDetails]);

  const onChangeStartDate = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      const formattedDate = moment(new Date(value?.$d)).format("YYYY-MM-DD");

      copyResumeDetails.workExperiences[index].startDate = formattedDate;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeEndDate = useCallback(
    (value, index) => {
      const formattedDate = moment(new Date(value?.$d)).format("YYYY-MM-DD");

      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.workExperiences[index].endDate = formattedDate;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeCompanyName = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.workExperiences[index].orgName = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeDesignation = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.workExperiences[index].designation = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeCurrentWorking = useCallback(
    ({ target: { checked } }) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.currentlyWorkingHere = checked;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeDescription = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.workExperiences[index].description = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
          {ProfileTexts.experience}
        </Typography>
      </Grid>
      {workExperiences?.map(
        ({ orgName, designation, startDate, endDate, description }, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                required
                error={false}
                sx={{ width: "100%" }}
                value={orgName}
                onChange={({ target: { value } }) =>
                  onChangeCompanyName(value, index)
                }
                id="outlined-basic"
                label={CommonTexts.companyName}
                placeholder={TextFieldLabelsAndTexts.enterOrgOrCompanyName}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                required
                error={false}
                sx={{ width: "100%" }}
                value={designation}
                onChange={({ target: { value } }) =>
                  onChangeDesignation(value, index)
                }
                id="outlined-basic"
                label={CommonTexts.role}
                placeholder={TextFieldLabelsAndTexts.enterYourRole}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  mask="____-__-__"
                  inputFormat="YYYY-MM-DD"
                  label="From Date"
                  value={startDate || null}
                  onChange={(newValue) => {
                    onChangeStartDate(newValue, index);
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ width: "100%" }} {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  mask="____-__-__"
                  inputFormat="YYYY-MM-DD"
                  label="To Date"
                  value={endDate || null}
                  onChange={(newValue) => {
                    onChangeEndDate(newValue, index);
                  }}
                  renderInput={(params) => (
                    <TextField sx={{ width: "100%" }} {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                id="filled-multiline-flexible"
                label={CommonTexts.achivementTasks}
                multiline
                rows={4}
                value={description}
                onChange={({ target: { value } }) =>
                  onChangeDescription(value, index)
                }
                variant="outlined"
              />
            </Grid>
          </React.Fragment>
        )
      )}
      <Grid item xs={12} sx={JustifyContentSpaceBetweenAlignCenterSxStyles}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={resumeDetails?.currentlyWorkingHere}
                onChange={onChangeCurrentWorking}
              />
            }
            label={
              <Typography color="text.secondary" sx={Font18Weight500SxStyles}>
                {ButtonTexts.currentlyWorkingHere}
              </Typography>
            }
          />
        </FormGroup>

        <Box>
          <Button
            disabled={isEmpty(workExperiences)}
            onClick={onClickDeleteEducation}
            color="secondary"
            sx={{ mr: 2 }}
            variant="outlined">
            {ButtonTexts.deleteExperience}
          </Button>
          <Button
            onClick={onClickAddNewExperience}
            color="primary"
            variant="outlined">
            {ButtonTexts.addNewExperience}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
