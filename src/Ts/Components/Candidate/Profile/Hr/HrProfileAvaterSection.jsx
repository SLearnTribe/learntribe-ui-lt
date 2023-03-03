import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { isEmpty, isEqual, uniqueId } from "lodash";
import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContactInfoLinkSxStyles,
  HrProfileAssessementsSxStyles,
  HrResumeAssessmentHeaderSxStyles,
} from "../../../../CommonStyles/CommonSxStyles";
import { setCurrentModal } from "../../../../Redux/Ducks/Modal/ModalSlice";
import {
  getDownloadResume,
  postUploadResume,
} from "../../../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getSelectedApplicantDetails } from "../../../../Redux/Selectors/ApplicantSelectors/ApplicantSelectors";
import { getUserProfileInfo } from "../../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import {
  getIsUserDataLoading,
  getUserDetails,
} from "../../../../Redux/Selectors/UserSelectors/UserSelectors";
import {
  ButtonTexts,
  CandidateDashboardTexts,
  ModalTexts,
} from "../../../../Utils/Text";

export const HrProfileAvatarSection = () => {
  const dispatch = useDispatch();

  const { role } = useSelector(getUserDetails);

  //resume = "sample.pdf"
  const { email } = useSelector(getSelectedApplicantDetails);

  const { email: candidateEmail, name: resumeName } =
    useSelector(getUserProfileInfo);

  const { completedAssessments = [] } = useSelector(
    getSelectedApplicantDetails
  );

  const isLoading = useSelector(getIsUserDataLoading);

  const [fileName, setFileName] = useState("");

  const onUploadResume = ({ target: { files } }) => {
    // setFileName(files[0].name);
    const fileExtension = files[0].name.slice(files[0].name.lastIndexOf("."));

    setFileName(`${resumeName}${fileExtension}`);

    if (files[0] !== null) {
      dispatch(
        postUploadResume({ file: files[0], email: email ?? candidateEmail })
      );
    }
  };

  const onClickDownloadResume = () => {
    dispatch(getDownloadResume(email ?? candidateEmail));
  };

  const assessments = useMemo(() => {
    const assessments = [];

    completedAssessments.forEach(({ status, skill }) => {
      if (isEqual(status, "COMPLETED")) {
        assessments.push(skill);
      }
    });

    return assessments;
  }, [completedAssessments]);

  const onClickContactInfo = useCallback(() => {
    dispatch(setCurrentModal(ModalTexts.contactInfo));
  }, [dispatch]);
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}>
                <Avatar
                  alt="Remy Sharp"
                  // src={sampleImage}
                  sx={{
                    width: 100,
                    height: 100,
                    border: "thick solid",
                    borderColor: (theme) => theme.palette.primary.dark,
                  }}></Avatar>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Link sx={ContactInfoLinkSxStyles} onClick={onClickContactInfo}>
                {ButtonTexts.contactInfo}
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                pt: "0 !important",
                display: "flex",
                justifyContent: "center",
              }}>
              {role === "HR" ? (
                <LoadingButton
                  onClick={onClickDownloadResume}
                  loading={isLoading}
                  loadingPosition="start"
                  startIcon={<FileDownloadOutlinedIcon />}
                  variant="outlined">
                  {ButtonTexts.downloadResume}
                </LoadingButton>
              ) : (
                <Stack direction="column" alignItems="center" spacing={1}>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 16, fontWeight: 600 }}>
                    {fileName}
                  </Typography>
                  {isLoading ? (
                    <LoadingButton
                      loading
                      loadingPosition="start"
                      startIcon={<FileUploadOutlinedIcon />}
                      variant="outlined">
                      {ButtonTexts.uploadResume}
                    </LoadingButton>
                  ) : (
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<FileUploadOutlinedIcon />}>
                      {ButtonTexts.uploadResume}
                      <input
                        hidden
                        onChange={onUploadResume}
                        accept=".doc,.docx,.pdf"
                        type="file"
                      />
                    </Button>
                  )}
                </Stack>
              )}
            </Grid>
            {!isEmpty(assessments) && role === "HR" && (
              <Grid item xs={12}>
                <Typography
                  sx={HrResumeAssessmentHeaderSxStyles}
                  variant="body2"
                  color="text.secondary">
                  {CandidateDashboardTexts.assessmentsCompleted}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              {assessments.map((assessment) => (
                <Box sx={HrProfileAssessementsSxStyles} key={uniqueId()}>
                  <CheckCircleOutlineIcon
                    sx={{
                      mr: "1rem",
                      color: (theme) => theme.palette.success.dark,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 18, fontWeight: 500 }}>
                    {assessment}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
