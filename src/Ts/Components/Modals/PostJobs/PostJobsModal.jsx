import {
  Autocomplete,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { isEmpty, isEqual } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  employmentTypeBeToUiMap,
  employmentTypeOptions,
} from "../../../Configs/AppConfig";
import { createEditPostJobConfig } from "../../../Configs/Jobs/JobsConfig";
import { postJobsData } from "../../../Redux/Ducks/Jobs/JobsSlice";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { setCurrentEditingPostJobData } from "../../../Redux/Ducks/PostJobs/PostJobsSlice";
import { getAllCityList } from "../../../Redux/Selectors/AppSelectors";
import { getCurrentModal } from "../../../Redux/Selectors/Modal/ModalSelectors";
import { getCurrentEditingJob } from "../../../Redux/Selectors/PostJobsSelectors/PostJobsSelectors";
import {
  ButtonTexts,
  ModalTexts,
  PostJobsTexts,
  TextFieldLabelsAndTexts,
} from "../../../Utils/Text";
import { AutoCompleteSelect } from "../../CommonComponents/Controls/AutoComplete";

export const PostJobsModal = () => {
  const dispatch = useDispatch();

  const {
    id,
    title = "",
    description = "",
    experienceRequired: experience = "",
    rolesAndResponsibilities = "",
    requiredSkills = [],
    employmentType = null,
    businessName = "",
    qualificationRequired: qualification,
    location = "",
  } = useSelector(getCurrentEditingJob);

  const cities = useSelector(getAllCityList);

  const skills = useMemo(() => {
    return isEmpty(requiredSkills) ? [] : requiredSkills?.split(", ");
  }, [requiredSkills]);

  const currentModal = useSelector(getCurrentModal);

  const [jobTitle, setJobTitle] = useState(title);

  const [jobDescription, setJobDescription] = useState(description);

  const [experienceRequired, setExperienceRequired] = useState(experience);

  const [typeOfEmployment, setTypeOfEmployment] = useState(
    employmentType
      ? {
          title: employmentType,
          label: employmentTypeBeToUiMap[employmentType],
        }
      : null
  );

  const [jobLocation, setJobLocation] = useState(location);

  const [companyName, setCompanyName] = useState(businessName);

  const [qualificationRequired, setQualificationRequired] =
    useState(qualification);

  const [addedSkills, setAddedSkills] = useState(skills);

  const onInputChange = (_e, value) => {
    setAddedSkills(value);
  };

  const onClickPost = useCallback(() => {
    dispatch(
      postJobsData({
        postJobData: {
          businessName: companyName,
          description: jobDescription,
          employmentType: typeOfEmployment?.title,
          experienceRequired,
          requiredSkills: addedSkills.join(", "),
          qualificationRequired: qualificationRequired,
          id,
          title: jobTitle,
          location: jobLocation,
        },
        method: isEqual(currentModal, ModalTexts.editJob) ? "PUT" : "POST",
      })
    );
  }, [
    dispatch,
    jobDescription,
    jobTitle,
    jobLocation,
    qualificationRequired,
    addedSkills,
    experienceRequired,
    id,
    typeOfEmployment,
    companyName,
    currentModal,
  ]);

  const onClickCancel = useCallback(
    (_event, reason) => {
      if (reason && reason === "backdropClick") return;
      dispatch(setCurrentEditingPostJobData({}));

      dispatch(setCurrentModal(null));
    },
    [dispatch]
  );

  const onChangeJobTitle = ({ target: { value } }) => {
    setJobTitle(value);
  };

  const onChangeJobDescription = ({ target: { value } }) => {
    setJobDescription(value);
  };

  const onChangeQualification = ({ target: { value } }) => {
    setQualificationRequired(value);
  };

  const onChangeExperience = ({ target: { value } }) => {
    setExperienceRequired(+value);
  };

  const onChangeCompanyName = ({ target: { value } }) => {
    setCompanyName(value);
  };

  const onChangeEmploymentType = (_e, value) => {
    setTypeOfEmployment(value);
  };

  const onChangeJobLocation = (_e, value) => {
    setJobLocation(value);
  };

  const shouldDisablePostSaveJobBtn = useMemo(() => {
    return (
      isEmpty(jobTitle) ||
      isEmpty(jobDescription) ||
      isEmpty(experienceRequired.toString()) ||
      isEmpty(qualificationRequired) ||
      isEmpty(companyName) ||
      isEmpty(typeOfEmployment) ||
      isEmpty(addedSkills) ||
      isEmpty(jobLocation)
    );
  }, [
    addedSkills,
    jobTitle,
    experienceRequired,
    jobDescription,
    qualificationRequired,
    companyName,
    typeOfEmployment,
    jobLocation,
  ]);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={true}
      onClose={onClickCancel}
      scroll={"paper"}>
      <DialogTitle variant="h2" id="scroll-dialog-title">
        {currentModal}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                value={jobTitle}
                onChange={onChangeJobTitle}
                id="outlined-basic"
                label={PostJobsTexts.jobTitle}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                id="filled-multiline-flexible"
                label="Job Description"
                multiline
                rows={8}
                value={jobDescription}
                onChange={onChangeJobDescription}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="tags-filled"
                options={skills}
                // defaultValue={skills.slice(0, 3)}
                value={addedSkills}
                freeSolo
                onChange={onInputChange}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      color="primary"
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label={PostJobsTexts.addSkillsRequired}
                    placeholder="Add skill"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                multiline
                rows={8}
                value={qualificationRequired}
                onChange={onChangeQualification}
                id="outlined-basic"
                label={PostJobsTexts.qualificationRequired}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                sx={{ width: "100%" }}
                value={experienceRequired}
                onChange={onChangeExperience}
                id="outlined-basic"
                label={PostJobsTexts.experienceRequired}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "100%" }}
                value={companyName}
                onChange={onChangeCompanyName}
                id="outlined-basic"
                label={PostJobsTexts.companyName}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={cities}
                value={location}
                onChange={onChangeJobLocation}
                renderInput={(params) => (
                  <TextField {...params} label="Job Location" />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <AutoCompleteSelect
                getOptionLabelDataField="label"
                options={employmentTypeOptions}
                value={typeOfEmployment}
                onChange={onChangeEmploymentType}
                label={TextFieldLabelsAndTexts.employmentType}
                placeholder={TextFieldLabelsAndTexts.selectEmployementType}
              />
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClickCancel}>
          {ButtonTexts.cancel}
        </Button>
        <Button
          disabled={shouldDisablePostSaveJobBtn}
          variant="contained"
          onClick={onClickPost}>
          {createEditPostJobConfig[currentModal]}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
