import emailjs from "@emailjs/browser";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { applicantsRoute } from "../../../Configs/RoutesConfig";
import { updateSnackbar } from "../../../Redux/Ducks/App/AppSlice";
import { setCurrentEditingAssessment } from "../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { setCurrentEditingJob } from "../../../Redux/Ducks/Jobs/JobsSlice";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { getSelectedApplicantDetails } from "../../../Redux/Selectors/ApplicantSelectors/ApplicantSelectors";
import {
  getCurrentEditingJob,
  getJobs,
  getJobsAssessedForOptions,
} from "../../../Redux/Selectors/Jobs/JobsSelectors";
import { getCurrentModal } from "../../../Redux/Selectors/Modal/ModalSelectors";
import { ScheduleCallSuccessSnackbar } from "../../../Utils/CommonUtils";
import { ButtonTexts, TextFieldLabelsAndTexts } from "../../../Utils/Text";
import { AutoCompleteSelect } from "../../CommonComponents/Controls/AutoComplete";

export const ScheduleCall = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const currentModal = useSelector(getCurrentModal);

  const currentEditingJob = useSelector(getCurrentEditingJob);

  const jobs = useSelector(getJobs);

  const selectedApplicantDetails = useSelector(getSelectedApplicantDetails);

  const jobsAssessedForOptions = useSelector(getJobsAssessedForOptions);

  const [jobsAssessedFor, setJobsAssessedFor] = useState(null);

  const [meetingLink, setMeetingLink] = useState("");

  const [meetingTime, setMeetingTime] = useState(null);

  const onChangeJobsAssessedFor = (_e, value) => {
    setJobsAssessedFor(value);

    const currentJob = jobs.find(({ id }) => id === value.id);
    dispatch(setCurrentEditingJob(currentJob));
  };

  const onClickCancel = useCallback(
    (_event, reason) => {
      if (reason && reason === "backdropClick") return;

      dispatch(setCurrentEditingAssessment({}));

      dispatch(setCurrentModal(null));
    },
    [dispatch]
  );

  const onClickSend = useCallback(() => {
    const formattedDate = moment(new Date(meetingTime.$d)).format(
      "YYYY-MM-DD HH:MM"
    );
    dispatch(setCurrentModal(null));

    navigate(applicantsRoute);

    emailjs
      .send(
        "service_jkqlldc",
        "template_m73ykkr",
        {
          company: currentEditingJob?.businessName,
          candidate: selectedApplicantDetails?.name,
          time: formattedDate,
          link: meetingLink,
          email: selectedApplicantDetails?.email,
          jobTitle: currentEditingJob?.title,
          experienceRequired: currentEditingJob?.experienceRequired,
          requiredSkills: currentEditingJob?.requiredSkills,
        },
        "WhgdthXpw4AD0LhRi"
      )
      .then(
        () => {
          dispatch(updateSnackbar(ScheduleCallSuccessSnackbar));
        },
        (error) => {
          console.log(error.text);
        }
      );
  }, [
    dispatch,
    meetingLink,
    meetingTime,
    currentEditingJob,
    selectedApplicantDetails,
    navigate,
  ]);

  const onChangeMeetingLink = useCallback(({ target: { value } }) => {
    setMeetingLink(value);
  }, []);

  const onChangeMeetingTime = useCallback((value) => {
    setMeetingTime(value);
  }, []);

  const disableSendBtn = useMemo(() => {
    return meetingTime === null || jobsAssessedFor == null;
  }, [meetingTime, jobsAssessedFor]);

  return (
    <Dialog
      PaperProps={{ sx: { minHeight: "75%" } }}
      fullWidth
      maxWidth="md"
      open={true}
      scroll={"paper"}>
      <DialogTitle variant="h2" id="scroll-dialog-title">
        {currentModal}
      </DialogTitle>{" "}
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AutoCompleteSelect
                options={jobsAssessedForOptions}
                value={jobsAssessedFor}
                onChange={onChangeJobsAssessedFor}
                label={TextFieldLabelsAndTexts.jobsAssessedFor}
                placeholder={"Select job"}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                value={meetingLink}
                onChange={onChangeMeetingLink}
                id="outlined-basic"
                label="Meeting Link"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  mask="____-__-__ __:__"
                  inputFormat="YYYY-MM-DD HH:MM"
                  renderInput={(props) => (
                    <TextField sx={{ width: "100%" }} {...props} />
                  )}
                  label="Select date and time"
                  value={meetingTime}
                  onChange={(newValue) => {
                    onChangeMeetingTime(newValue);
                  }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClickCancel}>
          {ButtonTexts.cancel}
        </Button>
        <Button
          disabled={disableSendBtn}
          variant="contained"
          onClick={onClickSend}>
          {ButtonTexts.send}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
