import { Box, DialogContent } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AlignCenterStyles,
  DisplayFlexCenter,
} from "../../../CommonStyles/CommonSxStyles";
import {
  postSubmitAssessment,
  updateAssessmentModal,
} from "../../../Redux/Ducks/Assessments/AssessmentsSlice";
import {
  getAssessmentOfCandidate,
  getAssessmentsModal,
  getShowAssessmentTimer,
} from "../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { getAssessmentProcData } from "../../../Redux/Selectors/Proctoring/AssessmentProcSelectors";
import { isObjectEmpty } from "../../../Utils/CommonUtils";
import { CommonTexts } from "../../../Utils/Text";
import { CountDownTimer } from "../../CommonComponents/Controls/CountDownTimer";
import { CandidateAssessment } from "../../Pages/Dashboards/Candidate/CandidateAssessment";
import { LoadingAssessment } from "../../Pages/Dashboards/Candidate/LoadingAssessment";
import { SubmittingAssessments } from "../../Pages/Dashboards/Candidate/SubmittingAssessments";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const FullScreenAssessmentModal = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const assessment = useSelector(getAssessmentOfCandidate);

  const procResponse = useSelector(getAssessmentProcData);

  const showAssessmentTimer = useSelector(getShowAssessmentTimer);

  const {
    open,
    answers: assessmentAnswers,
    showSubmitUI,
  } = useSelector(getAssessmentsModal);

  const { reqTimeInMillis = 120000, title = "" } = assessment;

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message =
      "Are you sure you want to leave? All provided data will be lost. And you can't re-take assessment";
    e.returnValue = message;

    return message;
  };

  const onCompleteTimer = React.useCallback(() => {
    dispatch(
      postSubmitAssessment({
        assessmentId: assessment.id,
        submitAssessmentDetails: {
          challengeResponses: Object.values(assessmentAnswers),
          procResponse,
        },
      })
    );
  }, [dispatch, procResponse, assessment?.id, assessmentAnswers]);

  React.useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  React.useEffect(() => {
    if (isObjectEmpty(assessment)) {
      navigate(-1);
    }
  }, [navigate, assessment]);

  const handleClose = () => {
    dispatch(updateAssessmentModal({ open: false }));
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar
          enableColorOnDark
          position="relative"
          color="inherit"
          elevation={4}>
          <Toolbar>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 32,
                ml: 2,
                flex: 1,
                color: (theme) => theme.palette.primary.main,
              }}>
              {`${title} ${CommonTexts.assessment}`}
            </Typography>
            {!showSubmitUI && showAssessmentTimer ? (
              <Box sx={AlignCenterStyles}>
                {CommonTexts.timeRemaining}
                <CountDownTimer
                  onComplete={onCompleteTimer}
                  duration={reqTimeInMillis / 1000}
                />
              </Box>
            ) : null}
          </Toolbar>
        </AppBar>
        <DialogContent
          sx={
            showSubmitUI || isObjectEmpty(assessment) ? DisplayFlexCenter : {}
          }>
          {showSubmitUI ? (
            <SubmittingAssessments />
          ) : isObjectEmpty(assessment) ? (
            <LoadingAssessment />
          ) : (
            <CandidateAssessment />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
