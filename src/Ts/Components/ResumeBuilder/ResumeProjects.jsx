import { Button, Grid, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { cloneDeep } from "lodash";
import moment from "moment";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FlexAlignCenterStyles,
  JustifyContentFlexEndSxStyles,
} from "../../CommonStyles/CommonSxStyles";
import { NewProjectsObject } from "../../Configs/Profile/ProfileConfig";
import { updateCurrentResume } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getCurrentEditingResume } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { ButtonTexts, CommonTexts, ProfileTexts } from "../../Utils/Text";
import { DeleteIconWithLabel } from "../CommonComponents/Controls/ButtonControls";

export const ResumeProjects = () => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector(getCurrentEditingResume);

  const { sideProjects = [] } = resumeDetails;

  const onClickAddNewProject = useCallback(() => {
    const copyResumeDetails = cloneDeep(resumeDetails);

    copyResumeDetails.sideProjects.push(NewProjectsObject);

    dispatch(updateCurrentResume(copyResumeDetails));
  }, [dispatch, resumeDetails]);

  const onChangeStartDate = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      const formattedDate = moment(new Date(value?.$d)).format("YYYY-MM-DD");

      copyResumeDetails.sideProjects[index].startDate = formattedDate;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeEndDate = useCallback(
    (value, index) => {
      const formattedDate = moment(new Date(value?.$d)).format("YYYY-MM-DD");

      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.sideProjects[index].endDate = formattedDate;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeProjectName = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.sideProjects[index].name = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeDescription = useCallback(
    ({ target: { value } }, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.sideProjects[index].description = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onClickDeleteEducation = useCallback(
    (index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.sideProjects.splice(index, 1);

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
          {ProfileTexts.projects}
        </Typography>
      </Grid>
      {sideProjects?.map(
        ({ description, name, url, skills, startDate, endDate }, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 600 }}>
                {`${CommonTexts.PROJECT} ${index + 1}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                value={name}
                onChange={({ target: { value } }) =>
                  onChangeProjectName(value, index)
                }
                id="outlined-basic"
                label={CommonTexts.projectName}
                placeholder={CommonTexts.projectName}
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
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
              <TextField
                sx={{ width: "100%" }}
                id="filled-multiline-flexible"
                label="Project description in few lines"
                multiline
                rows={3}
                value={description}
                onChange={(e) => onChangeDescription(e, index)}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              xl={2}
              sx={FlexAlignCenterStyles}>
              <DeleteIconWithLabel
                onClick={() => onClickDeleteEducation(index)}
                label={CommonTexts.delete}
                sx={{ fontWeight: 600, pl: "0.5rem" }}
                iconSx={{ fontSize: "1.75rem" }}
              />
            </Grid>
          </React.Fragment>
        )
      )}
      <Grid item xs={12} sx={JustifyContentFlexEndSxStyles}>
        <Button
          onClick={onClickAddNewProject}
          color="primary"
          variant="outlined">
          {ButtonTexts.addNewProject}
        </Button>
      </Grid>
    </Grid>
  );
};
