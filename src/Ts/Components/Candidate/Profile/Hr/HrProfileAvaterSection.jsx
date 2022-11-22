import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { isEmpty, isEqual, uniqueId } from "lodash";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import sampleImage from "../../../../../Assests/Adil.jpeg";
import {
  ContactInfoLinkSxStyles,
  HrProfileAssessementsSxStyles,
  HrResumeAssessmentHeaderSxStyles,
  ResumeDownloadBtnSxStyles,
} from "../../../../CommonStyles/CommonSxStyles";
import { setCurrentModal } from "../../../../Redux/Ducks/Modal/ModalSlice";
import { getSelectedApplicantDetails } from "../../../../Redux/Selectors/ApplicantSelectors/ApplicantSelectors";
import { getAssessmentsData } from "../../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import {
  ButtonTexts,
  CandidateDashboardTexts,
  ModalTexts,
  ProfileTexts,
} from "../../../../Utils/Text";
import themes from "../../../../Utils/Themes/Themes";

export const HrProfileAvatarSection = () => {
  const dispatch = useDispatch();

  const { resume = "sample.pdf" } = useSelector(getSelectedApplicantDetails);

  const assessmentsData = useSelector(getAssessmentsData);

  const assessments = useMemo(() => {
    const completedAssessments = [];

    assessmentsData.forEach(({ status, title }) => {
      if (isEqual(status, "COMPLETED")) {
        completedAssessments.push(title);
      }
    });

    return completedAssessments;
  }, [assessmentsData]);

  const onClickContactInfo = useCallback(() => {
    dispatch(setCurrentModal(ModalTexts.contactInfo));
  }, [dispatch]);
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
      <Card>
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
                  src={sampleImage}
                  sx={{
                    width: 100,
                    height: 100,
                    border: "thick solid",
                    borderColor: themes.light.palette.primary.dark,
                  }}></Avatar>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Link sx={ContactInfoLinkSxStyles} onClick={onClickContactInfo}>
                {ButtonTexts.contactInfo}
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="text.secondary"
                sx={HrResumeAssessmentHeaderSxStyles}>
                {ProfileTexts.resume}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ pt: "0 !important", display: "flex" }}>
              <Button
                sx={ResumeDownloadBtnSxStyles}
                variant="text"
                color="primary"
                endIcon={<FileDownloadOutlinedIcon />}>
                {resume}
              </Button>
            </Grid>
            {!isEmpty(assessments) && (
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
                      color: themes.light.palette.success.dark,
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
