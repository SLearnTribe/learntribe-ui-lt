import { Box, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DisplayFlexCenter } from "../../../../CommonStyles/CommonSxStyles";
import { assessmentsRoute } from "../../../../Configs/RoutesConfig";
import { updateAssessmentModal } from "../../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { getIsUserDataLoading } from "../../../../Redux/Selectors/UserSelectors/UserSelectors";
import { ButtonTexts, CommonTexts } from "../../../../Utils/Text";
import { CircularSaveButton } from "../../../CommonComponents/Controls/SaveLoaderButton";

export const SubmittingAssessments = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLoading = useSelector(getIsUserDataLoading);

  const goBackToAssessments = () => {
    navigate(assessmentsRoute);
    dispatch(updateAssessmentModal({ showSubmitUI: false, answers: {} }));
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ display: "grid", justifyContent: "center" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 32,
              ml: 2,
              flex: 1,
            }}>
            {CommonTexts.submittingResults}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={DisplayFlexCenter}>
          <CircularSaveButton isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sx={DisplayFlexCenter}>
          <Button
            disabled={isLoading}
            variant="contained"
            onClick={goBackToAssessments}>
            {ButtonTexts.goToAssessments}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
