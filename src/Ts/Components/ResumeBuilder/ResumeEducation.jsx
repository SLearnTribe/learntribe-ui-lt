import { Button, Grid, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { cloneDeep, isNull } from "lodash";
import moment from "moment";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FlexAlignCenterStyles,
  JustifyContentFlexEndSxStyles,
} from "../../CommonStyles/CommonSxStyles";
import { NewEducationObject } from "../../Configs/Profile/ProfileConfig";
import { updateCurrentResume } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getCurrentEditingResume } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { AvailableDegreeOptions } from "../../Utils/MockData/DashboardData";
import {
  ButtonTexts,
  CommonTexts,
  ProfileTexts,
  TextFieldLabelsAndTexts,
} from "../../Utils/Text";
import { AutoCompleteSelect } from "../CommonComponents/Controls/AutoComplete";
import { DeleteIconWithLabel } from "../CommonComponents/Controls/ButtonControls";

export const ResumeEducation = () => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector(getCurrentEditingResume);

  const { educationExperiences = [] } = resumeDetails;

  const onClickAddNewEducation = useCallback(() => {
    const copyResumeDetails = cloneDeep(resumeDetails);

    copyResumeDetails.educationExperiences.push(NewEducationObject);

    dispatch(updateCurrentResume(copyResumeDetails));
  }, [dispatch, resumeDetails]);

  const onChangeStartDate = useCallback(
    (value, index) => {
      const formattedDate = moment(new Date(value.$d)).format("YYYY-MM-DD");

      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.educationExperiences[index].dateOfCompletion =
        formattedDate;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeFieldOfStudy = useCallback(
    ({ target: { value } }, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.educationExperiences[index].fieldOfStudy = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeCollegeName = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.educationExperiences[index].collegeName = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeDegree = useCallback(
    (_e, { title }, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.educationExperiences[index].degree = title;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onClickDeleteEducation = useCallback(
    (index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.educationExperiences.splice(index, 1);

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeLocation = useCallback(
    (value, index) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.educationExperiences[index].location = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
          {ProfileTexts.education}
        </Typography>
      </Grid>
      {educationExperiences?.map(
        (
          { fieldOfStudy, dateOfCompletion, collegeName, degree, location },
          index
        ) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                required
                error={false}
                sx={{ width: "100%" }}
                value={collegeName}
                onChange={({ target: { value } }) =>
                  onChangeCollegeName(value, index)
                }
                id="outlined-basic"
                label={TextFieldLabelsAndTexts.universityOrCollegeName}
                placeholder={
                  TextFieldLabelsAndTexts.enterUniversityOrCollegeName
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <AutoCompleteSelect
                error={false}
                required={true}
                index={index}
                options={AvailableDegreeOptions}
                value={
                  isNull(degree)
                    ? null
                    : {
                        title: degree,
                      }
                }
                onChange={onChangeDegree}
                label={TextFieldLabelsAndTexts.degree}
                placeholder={TextFieldLabelsAndTexts.selectDegree}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  mask="____-__-__"
                  inputFormat="YYYY-MM-DD"
                  label="Date of completion"
                  value={dateOfCompletion || null}
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
              <TextField
                required
                error={false}
                sx={{ width: "100%" }}
                value={fieldOfStudy}
                onChange={(e) => onChangeFieldOfStudy(e, index)}
                id="outlined-basic"
                label={TextFieldLabelsAndTexts.fieldOfStudy}
                placeholder={TextFieldLabelsAndTexts.fieldOfStudy}
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
              md={6}
              lg={6}
              xl={6}
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
          onClick={onClickAddNewEducation}
          color="primary"
          variant="outlined">
          {ButtonTexts.addNewEducation}
        </Button>
      </Grid>
    </Grid>
  );
};
