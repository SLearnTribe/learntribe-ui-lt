import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardWithNoData } from "../../CommonJsx/CommonJsxUtils";
import {
  HrAssessmentCardSxStyles,
  scrollAssessmentSxStyles,
} from "../../CommonStyles/CommonSxStyles";
import { employmentTypeBeToUiMap } from "../../Configs/AppConfig";
import { setCurrentEditingJob } from "../../Redux/Ducks/Jobs/JobsSlice";
import { setCurrentModal } from "../../Redux/Ducks/Modal/ModalSlice";
import { getJobs } from "../../Redux/Selectors/Jobs/JobsSelectors";
import { getIsUserDataLoading } from "../../Redux/Selectors/UserSelectors/UserSelectors";
import { CandidateJobsCardSkeleton } from "../../Skeletons/CandidateJobsCardSkeleton";
import { ButtonTexts, CommonTexts, ModalTexts } from "../../Utils/Text";

// const CardWrapper = styled(Card)(({ theme, darkColor }) => ({
//   // backgroundColor: theme.palette.secondary.dark,
//   // color: "#fff",
//   // overflow: "hidden",
//   position: "relative",
//   "&:after": {
//     content: '""',
//     position: "absolute",
//     width: 210,
//     height: 210,
//     background: darkColor,
//     borderRadius: "50%",
//     top: -85,
//     right: -95,
//     [theme.breakpoints.down("sm")]: {
//       top: -105,
//       right: -140,
//     },
//   },
//   "&:before": {
//     content: '""',
//     position: "absolute",

//     background: darkColor,
//     borderLeft: "50px solid #555",
//     borderBottom: "25px solid transparent",
//     [theme.breakpoints.down("sm")]: {
//       top: -155,
//       right: -70,
//     },
//   },
// }));

export const JobsCard = () => {
  // const theme = useTheme();

  const dispatch = useDispatch();

  const isLoading = useSelector(getIsUserDataLoading);

  const candidateJobs = useSelector(getJobs);

  const onClickViewDetails = useCallback(
    (currentJob) => {
      dispatch(setCurrentEditingJob(currentJob));

      dispatch(setCurrentModal(ModalTexts.jobDescription));
    },
    [dispatch]
  );
  return isLoading ? (
    <CandidateJobsCardSkeleton />
  ) : (
    <>
      <Grid item xs={12}>
        {candidateJobs.length === 0 && (
          <CardWithNoData text={CommonTexts.noJobsAvailable} />
        )}
        <Box sx={scrollAssessmentSxStyles}>
          {candidateJobs.map((row) => {
            const {
              location = "N/A",
              businessName = "",
              companyShortName = "N/A",
              employmentType = "",
              title = "",
            } = row;
            return (
              <Card
                sx={{
                  ...HrAssessmentCardSxStyles,
                  width: "25rem",
                }}
                row
                key={uniqueId()}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{
                        fontSize: 36,
                        fontWeight: 600,
                        width: 80,
                        height: 80,
                        bgcolor: "#fff",
                        color: "#0F0F0F",
                        border: "1px solid #0F0F0F",
                      }}>
                      {companyShortName}
                    </Avatar>
                  }
                  action={null} //For adding button at top corner of card
                  title={
                    <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                      {businessName}
                    </Typography>
                  }
                  subheader={
                    <Box sx={{ display: "flex" }}>
                      <LocationOnIcon />
                      <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                        {location}
                      </Typography>
                    </Box>
                  }
                />
                <CardContent>
                  <Box sx={{ display: "flex" }}>
                    <WorkIcon sx={{ mr: 1 }} />
                    <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
                      {title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <BusinessCenterIcon sx={{ mr: 1 }} />
                    <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
                      {employmentTypeBeToUiMap[employmentType]}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: "auto",
                  }}>
                  <Button
                    variant="contained"
                    onClick={() => onClickViewDetails(row)}>
                    {ButtonTexts.viewDetails}
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Grid>
      <Grid
        sx={{ display: { lg: "none", xs: "none", md: "inherit" } }}
        item
        md={6}></Grid>
    </>
  );
};
