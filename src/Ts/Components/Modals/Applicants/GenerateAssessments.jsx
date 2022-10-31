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
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { getGenerateAssessmentDropdownData } from "../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { ButtonTexts, ModalTexts } from "../../../Utils/Text";
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
                options={generateAssessmentDropdownData[0].options}
                value={jobsAssessedFor}
                onChange={onChangeJobsAssessedFor}
                label={generateAssessmentDropdownData[0].label}
                placeholder={"Select multiple jobs"}
              />
            </Grid>

            <Grid item xs={12}>
              <AutoCompleteSelect
                options={generateAssessmentDropdownData[1].options}
                value={previouslyGeneratedAssessments}
                onChange={onChangePreviouslyGeneratedAssessments}
                label={generateAssessmentDropdownData[1].label}
                placeholder={"Select existing assessment"}
              />
            </Grid>

            <Grid item xs={12}>
              <AutoCompleteMultiSelect
                options={generateAssessmentDropdownData[2].options}
                value={skillsList}
                onChange={onChangeSkillsList}
                label={generateAssessmentDropdownData[2].label}
                placeholder={"Select multiple skills"}
              />
            </Grid>

            <Grid item xs={12}>
              <AutoCompleteSelect
                options={generateAssessmentDropdownData[3].options}
                value={difficultyLevel}
                onChange={onChangeDifficultyLevel}
                label={generateAssessmentDropdownData[3].label}
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
