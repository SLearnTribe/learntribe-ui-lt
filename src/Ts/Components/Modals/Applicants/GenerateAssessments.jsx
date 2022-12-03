import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  Autocomplete,
  Button,
  Checkbox,
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
import { difficultyOptions } from "../../../Configs/AppConfig";
import { postAssessments } from "../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import {
  getSelectedApplicantDetails,
  getSelectedApplicantsIds,
} from "../../../Redux/Selectors/ApplicantSelectors/ApplicantSelectors";
import { getDefaultAssessmentsDropdownOptions } from "../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import {
  getJobsAssessedForOptions,
  getSkillsOptions,
} from "../../../Redux/Selectors/Jobs/JobsSelectors";
import {
  handleGenerateAssessmentPostData,
  hanldeDisableGenerateBtn,
} from "../../../Utils/AssessmentUtils/AssessmentsUtils";
import {
  ButtonTexts,
  ModalTexts,
  TextFieldLabelsAndTexts,
} from "../../../Utils/Text";
import { AutoCompleteSelect } from "../../CommonComponents/Controls/AutoComplete";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const GenerateAssessments = () => {
  const dispatch = useDispatch();

  const defaultPreviouslyGeneratedAssessmentOptions = useSelector(
    getDefaultAssessmentsDropdownOptions
  );

  const selectedApplicantsIds = useSelector(getSelectedApplicantsIds);

  const selectedApplicantDetails = useSelector(getSelectedApplicantDetails);

  const jobsAssessedForOptions = useSelector(getJobsAssessedForOptions);

  const skillsOptions = useSelector(getSkillsOptions);

  const [jobsAssessedFor, setJobsAssessedFor] = useState(null);

  const [previouslyGeneratedAssessments, setPreviouslyGeneratedAssessments] =
    useState(null);

  const [skillsList, setSkillsList] = useState([]);

  const [difficultyLevel, setDifficultyLevel] = useState(null);

  const onChangeJobsAssessedFor = (_e, value) => {
    setJobsAssessedFor(value);
  };

  const onChangePreviouslyGeneratedAssessments = (_e, value) => {
    setPreviouslyGeneratedAssessments(value);
  };

  const onChangeSkillsList = (_e, value) => {
    setSkillsList(value);
  };

  const onChangeDifficultyLevel = (_e, value) => {
    setDifficultyLevel(value);
  };
  console.log({
    jobsAssessedFor,
    previouslyGeneratedAssessments,
    skillsList,
    difficultyLevel,
  });

  console.log({
    jobsAssessedFor,
    previouslyGeneratedAssessments,
    skillsList,
    difficultyLevel,
  });

  const onClickGenerate = useCallback(() => {
    const postData = handleGenerateAssessmentPostData(
      jobsAssessedFor,
      previouslyGeneratedAssessments,
      skillsList,
      difficultyLevel,
      selectedApplicantsIds,
      selectedApplicantDetails
    );
    dispatch(postAssessments(postData));
  }, [
    dispatch,
    jobsAssessedFor,
    previouslyGeneratedAssessments,
    skillsList,
    difficultyLevel,
    selectedApplicantsIds,
    selectedApplicantDetails,
  ]);

  const onClickCancel = useCallback(() => {
    dispatch(setCurrentModal(null));
  }, [dispatch]);

  const shouldDisableGenerateButton = useMemo(() => {
    return hanldeDisableGenerateBtn(
      jobsAssessedFor,
      previouslyGeneratedAssessments,
      skillsList,
      difficultyLevel
    );
  }, [
    jobsAssessedFor,
    previouslyGeneratedAssessments,
    skillsList,
    difficultyLevel,
  ]);

  return (
    <Dialog
      PaperProps={{ sx: { minHeight: "75%" } }}
      fullWidth
      maxWidth="md"
      open={true}
      onClose={onClickCancel}
      scroll={"paper"}>
      <DialogTitle id="scroll-dialog-title">
        {ModalTexts.generateAssessment}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AutoCompleteSelect
                disabled={!isEmpty(previouslyGeneratedAssessments)}
                options={jobsAssessedForOptions}
                value={jobsAssessedFor}
                onChange={onChangeJobsAssessedFor}
                label={TextFieldLabelsAndTexts.jobsAssessedFor}
                placeholder={"Select job"}
              />
            </Grid>

            <Grid item xs={12}>
              <AutoCompleteSelect
                options={defaultPreviouslyGeneratedAssessmentOptions}
                value={previouslyGeneratedAssessments}
                onChange={onChangePreviouslyGeneratedAssessments}
                label={
                  TextFieldLabelsAndTexts.defaultOrPreviouslyGeneratedAssessments
                }
                placeholder={"Select existing assessment"}
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                disabled={!isEmpty(previouslyGeneratedAssessments)}
                multiple
                id="tags-filled"
                options={skillsOptions}
                value={skillsList}
                freeSolo
                disableCloseOnSelect
                onChange={onChangeSkillsList}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option}
                  </li>
                )}
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
                    label={TextFieldLabelsAndTexts.skillsList}
                    placeholder="Select/Add multiple skills"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <AutoCompleteSelect
                disabled={!isEmpty(previouslyGeneratedAssessments)}
                options={difficultyOptions}
                value={difficultyLevel}
                onChange={onChangeDifficultyLevel}
                label={TextFieldLabelsAndTexts.difficultyLevel}
                placeholder="Select multiple jobs"
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
          disabled={shouldDisableGenerateButton}
          variant="contained"
          onClick={onClickGenerate}>
          {ButtonTexts.generate}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
