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
import { isEmpty } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEditPostJobConfig } from "../../../Configs/Jobs/JobsConfig";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { setCurrentEditingPostJobData } from "../../../Redux/Ducks/PostJobs/PostJobsSlice";
import { getCurrentModal } from "../../../Redux/Selectors/Modal/ModalSelectors";
import { getCurrentEditingJob } from "../../../Redux/Selectors/PostJobsSelectors/PostJobsSelectors";
import { ButtonTexts, PostJobsTexts } from "../../../Utils/Text";

export const PostJobsModal = () => {
  const dispatch = useDispatch();

  const {
    jobTitle: title = "",
    description = "",
    experience = "",
    qualification = "",
    skills = [],
  } = useSelector(getCurrentEditingJob);

  const currentModal = useSelector(getCurrentModal);

  const [jobTitle, setJobTitle] = useState(title);

  const [jobDescription, setJobDescription] = useState(description);

  const [experienceRequired, setExperienceRequired] = useState(experience);

  const [qualificationRequired, setQualificationRequired] =
    useState(qualification);

  const [addedSkills, setAddedSkills] = useState(skills);

  const onInputChange = (_e, value) => {
    setAddedSkills(value);
  };

  const onClickPost = useCallback(() => {
    dispatch(setCurrentModal(null));
  }, [dispatch]);

  const onClickCancel = useCallback(() => {
    dispatch(setCurrentEditingPostJobData({}));

    dispatch(setCurrentModal(null));
  }, [dispatch]);

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
    setExperienceRequired(value);
  };

  const shouldDisablePostSaveJobBtn = useMemo(() => {
    return (
      isEmpty(jobTitle) ||
      isEmpty(jobDescription) ||
      isEmpty(experienceRequired) ||
      isEmpty(qualificationRequired) ||
      isEmpty(addedSkills)
    );
  }, [
    addedSkills,
    jobTitle,
    experienceRequired,
    jobDescription,
    qualificationRequired,
  ]);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={true}
      onClose={onClickCancel}
      scroll={"paper"}>
      <DialogTitle id="scroll-dialog-title">{currentModal}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "29rem" }}
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
                defaultValue={skills.slice(0, 3)}
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
                sx={{ width: "29rem" }}
                value={qualificationRequired}
                onChange={onChangeQualification}
                id="outlined-basic"
                label={PostJobsTexts.qualificationRequired}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "29rem" }}
                value={experienceRequired}
                onChange={onChangeExperience}
                id="outlined-basic"
                label={PostJobsTexts.experienceRequired}
                variant="outlined"
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
