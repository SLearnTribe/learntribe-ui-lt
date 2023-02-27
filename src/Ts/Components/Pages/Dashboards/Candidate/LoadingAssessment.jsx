import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { DisplayFlexCenter } from "../../../../CommonStyles/CommonSxStyles";
import { getIsUserDataLoading } from "../../../../Redux/Selectors/UserSelectors/UserSelectors";
import { CommonTexts } from "../../../../Utils/Text";
import { CircularSaveButton } from "../../../CommonComponents/Controls/SaveLoaderButton";

export const LoadingAssessment = () => {
  const isLoading = useSelector(getIsUserDataLoading);

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
            {CommonTexts.loadingAssessment}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={DisplayFlexCenter}>
          <CircularSaveButton isLoading={isLoading} />
        </Grid>
      </Grid>
    </Box>
  );
};
