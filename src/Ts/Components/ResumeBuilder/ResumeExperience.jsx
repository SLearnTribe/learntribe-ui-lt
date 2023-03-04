import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { cloneDeep } from "lodash";
import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FlexAlignCenterStyles,
  JustifyContentFlexEndSxStyles,
} from "../../CommonStyles/CommonSxStyles";
import { NewExperienceObject } from "../../Configs/Profile/ProfileConfig";
import { updateCurrentResume } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getCurrentEditingResume } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { handleWorkPresenrMap } from "../../Utils/CommonUtils";
import {
  ButtonTexts,
  CommonTexts,
  ProfileTexts,
  TextFieldLabelsAndTexts,
} from "../../Utils/Text";
import {
  CheckboxWithLabel,
  DeleteIconWithLabel,
} from "../CommonComponents/Controls/ButtonControls";

export const ResumeExperience = () => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector(getCurrentEditingResume);

  const { workExperiences = [] } = resumeDetails;

  const onClickAddNewExperience = useCallback(() => {
    const copyResumeDetails = cloneDeep(resumeDetails);

    copyResumeDetails.workExperiences.push(NewExperienceObject);

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

  const onChangeDescription = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.workExperiences[index].description = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeCurrentlyWorking = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.workExperiences[index].currentlyWorking = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeLocation = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.workExperiences[index].location = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onClickDeleteWork = useCallback(
    (index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.workExperiences.splice(index, 1);

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const workMap = useMemo(() => {
    return handleWorkPresenrMap(workExperiences);
  }, [workExperiences]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
          {ProfileTexts.experience}
        </Typography>
      </Grid>
      {workExperiences?.map(
        (
          {
            orgName,
            designation,
            startDate,
            endDate,
            description,
            location,
            currentlyWorking = false,
          },
          index
        ) => (
          <React.Fragment key={index}>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 600 }}>
                {`${CommonTexts.workExperience} ${index + 1}`}
              </Typography>
            </Grid>
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
                  maxDate={new Date()}
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
                  disabled={currentlyWorking}
                  minDate={moment(startDate).add(1, "d")}
                  maxDate={new Date()}
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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                sx={{ width: "100%" }}
                value={location}
                onChange={({ target: { value } }) =>
                  onChangeLocation(value, index)
                }
                id="outlined-basic"
                label={CommonTexts.location}
                placeholder={TextFieldLabelsAndTexts.enterLocation}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              sx={FlexAlignCenterStyles}>
              <CheckboxWithLabel
                disabled={workMap[index]}
                sx={{ fontWeight: 600 }}
                checked={currentlyWorking}
                onChange={({ target: { checked } }) =>
                  onChangeCurrentlyWorking(checked, index)
                }
                label={CommonTexts.present}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              sx={FlexAlignCenterStyles}>
              <DeleteIconWithLabel
                onClick={() => onClickDeleteWork(index)}
                label={CommonTexts.delete}
                sx={{ fontWeight: 600, pl: "0.5rem" }}
                iconSx={{ fontSize: "1.75rem" }}
              />
            </Grid>
          </React.Fragment>
        )
      )}
      <Grid item xs={12} sx={JustifyContentFlexEndSxStyles}>
        <Box>
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
