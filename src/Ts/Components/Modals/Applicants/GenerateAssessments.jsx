import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { isEmpty } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { difficultyOptions } from "../../../Configs/AppConfig";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import {
  getGenerateAssessmentDropdownData,
  getPreviouslyGeneratedAssessments,
} from "../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import {
  getJobsAssessedForOptions,
  getSkillsOptions,
} from "../../../Redux/Selectors/Jobs/JobsSelectors";
import {
  ButtonTexts,
  ModalTexts,
  TextFieldLabelsAndTexts,
} from "../../../Utils/Text";
import {
  AutoCompleteMultiSelect,
  AutoCompleteSelect,
} from "../../CommonComponents/Controls/AutoComplete";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const GenerateAssessments = () => {
  const dispatch = useDispatch();

  const generateAssessmentDropdownData = useSelector(
    getGenerateAssessmentDropdownData
  );

  const jobsAssessedForOptions = useSelector(getJobsAssessedForOptions);

  const skillsOptions = useSelector(getSkillsOptions);

  const previouslyGeneratedAssessmentsOptions = useSelector(
    getPreviouslyGeneratedAssessments
  );

  const [jobsAssessedFor, setJobsAssessedFor] = useState([]);

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

  const onClickGenerate = useCallback(() => {
    dispatch(setCurrentModal(null));
  }, [dispatch]);

  const onClickCancel = useCallback(() => {
    dispatch(setCurrentModal(null));
  }, [dispatch]);

  const shouldDisableGenerateButton = useMemo(() => {
    return (
      isEmpty(jobsAssessedFor) ||
      isEmpty(previouslyGeneratedAssessments) ||
      isEmpty(skillsList) ||
      isEmpty(difficultyLevel)
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
              <AutoCompleteMultiSelect
                options={jobsAssessedForOptions}
                value={jobsAssessedFor}
                onChange={onChangeJobsAssessedFor}
                label={TextFieldLabelsAndTexts.jobsAssessedFor}
                placeholder={"Select multiple jobs"}
              />
            </Grid>

            <Grid item xs={12}>
              <AutoCompleteSelect
                options={previouslyGeneratedAssessmentsOptions}
                value={previouslyGeneratedAssessments}
                onChange={onChangePreviouslyGeneratedAssessments}
                label={
                  TextFieldLabelsAndTexts.defaultOrPreviouslyGeneratedAssessments
                }
                placeholder={"Select existing assessment"}
              />
            </Grid>

            <Grid item xs={12}>
              <AutoCompleteMultiSelect
                options={skillsOptions}
                value={skillsList}
                onChange={onChangeSkillsList}
                label={TextFieldLabelsAndTexts.skillsList}
                placeholder={"Select multiple skills"}
              />
            </Grid>

            <Grid item xs={12}>
              <AutoCompleteSelect
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
