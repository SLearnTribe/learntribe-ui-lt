import { Box, DialogContent } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import {
  DisplayFlexCenter,
  JustifyContentFlexEndSxStyles,
} from "../../../CommonStyles/CommonSxStyles";
import {
  postSubmitAssessment,
  updateAssessmentModal,
  updateAssessmentTimer,
} from "../../../Redux/Ducks/Assessments/AssessmentsSlice";
import {
  getAssessmentOfCandidate,
  getAssessmentTimer,
  getAssessmentsModal,
} from "../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { CommonTexts } from "../../../Utils/Text";
import { CandidateAssessment } from "../../Pages/Dashboards/Candidate/CandidateAssessment";
import { SubmittingAssessments } from "../../Pages/Dashboards/Candidate/SubmittingAssessments";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const FullScreenAssessmentModal = () => {
  const dispatch = useDispatch();

  const assessment = useSelector(getAssessmentOfCandidate);

  const {
    open,
    answers: assessmentAnswers,
    showSubmitUI,
  } = useSelector(getAssessmentsModal);

  const timer = useSelector(getAssessmentTimer);

  React.useEffect(() => {
    dispatch(updateAssessmentTimer(Date.now() + 5000000000));
    // eslint-disable-next-line
  }, []);

  const handleClose = () => {
    dispatch(updateAssessmentModal({ open: false }));
  };

  const onCompleteTimer = React.useCallback(() => {
    dispatch(
      postSubmitAssessment({
        assessmentId: assessment.id,
        submitAssessmentDetails: {
          challengeResponses: Object.values(assessmentAnswers),
        },
      })
    );
  }, [dispatch, assessment?.id, assessmentAnswers]);

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
              {`${assessment?.title} ${CommonTexts.assessment}`}
            </Typography>
            {!showSubmitUI ? (
              <Box sx={JustifyContentFlexEndSxStyles}>
                {CommonTexts.timeRemaining}
                <Countdown
                  onComplete={onCompleteTimer}
                  renderer={({ formatted: { minutes, seconds } }) => (
                    <b>{`${minutes}:${seconds}`}</b>
                  )}
                  date={timer}
                />
              </Box>
            ) : null}
          </Toolbar>
        </AppBar>
        <DialogContent sx={showSubmitUI ? DisplayFlexCenter : {}}>
          {showSubmitUI ? <SubmittingAssessments /> : <CandidateAssessment />}
        </DialogContent>
      </Dialog>
    </div>
  );
};
