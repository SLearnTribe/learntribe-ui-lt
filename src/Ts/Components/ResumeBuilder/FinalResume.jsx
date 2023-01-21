import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import sampleImage from "../../../Assests/Adil.jpeg";
import {
  Font18Weight500SxStyles,
  JustifyContentSpaceBetweenAlignCenterSxStyles,
} from "../../CommonStyles/CommonSxStyles";
import { routes } from "../../Configs/RoutesConfig";
import { setResumeActiveStepper } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import {
  getResumeBuilderActiveStepper,
  getResumeDetails,
} from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { ButtonTexts, CommonTexts } from "../../Utils/Text";
import themes from "../../Utils/Themes/Themes";

export const FinalResume = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const resumeDetails = useSelector(getResumeDetails);

  const activeStepper = useSelector(getResumeBuilderActiveStepper);

  const {
    name = null,
    email = null,
    phone = null,
    city = null,
    linkedIn = null,
    currentRole = null,
    skills = null,
    about = null,
    workExperiences = [],
    educationExperiences = [],
    projects = [],
    useThisResumeAsDefault = false,
  } = resumeDetails;

  const goBack = useCallback(() => {
    dispatch(setResumeActiveStepper(activeStepper - 1));
  }, [dispatch, activeStepper]);

  const onClickGoToDashboard = useCallback(() => {
    navigate(routes.dashboard);
  }, [navigate]);

  const onClickDownload = useCallback(async () => {
    const pdf = new jsPDF({
      orientation: "portrait",
    });
    const data = await html2canvas(
      document.querySelector("#download-Resume-template")
    );
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    console.log({ pdfWidth, pdfHeight });
    pdf.addImage(img, "PNG", 0, 0, pdfWidth - 5, pdfHeight);
    pdf.save(`${name}.pdf`);
  }, [name]);

  const onChangeAddDeafultResume = useCallback(() => {}, []);
  return (
    <Grid container spacing={3} sx={{ pl: 30, pr: 30, mt: 3 }}>
      <Card
        raised
        sx={{ p: 3, border: `1px solid ${themes.light.palette.primary.main}` }}>
        <Grid item xs={12}>
          <Grid container spacing={3} id="download-Resume-template">
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <Typography variant="h4">{name}</Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: themes.light.palette.primary.main }}>
                    {currentRole}
                  </Typography>
                  <Typography>{about}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={sampleImage}
                    sx={{
                      width: 100,
                      height: 100,
                      border: "thick solid",
                      borderColor: themes.light.palette.primary.dark,
                    }}></Avatar>
                </Grid>
                <Grid item xs={5} sx={{ pr: 2 }}>
                  <FormGroup>
                    <FormControlLabel
                      labelPlacement="start"
                      control={<EmailIcon sx={{ m: 0.5 }} />}
                      label={email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControlLabel
                      labelPlacement="start"
                      control={<SmartphoneIcon sx={{ m: 0.5 }} />}
                      label={phone}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControlLabel
                      labelPlacement="start"
                      control={<LocationOnIcon sx={{ m: 0.5 }} />}
                      label={city}
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControlLabel
                      labelPlacement="start"
                      control={<LinkedInIcon sx={{ m: 0.5 }} />}
                      label={linkedIn}
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            {/* Body section of 2 columns  */}
            <Grid item xs={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {CommonTexts.WORK_EXPERIENCE}
                  </Typography>
                </Grid>
                {workExperiences?.map(
                  ({ orgName, endDate, startDate, designation }) => (
                    <>
                      <Grid item xs={12} key={crypto.randomUUID()}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {designation}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 700 }}>
                          {orgName}
                        </Typography>
                        <Typography>{`${startDate} - ${endDate}`}</Typography>
                      </Grid>
                    </>
                  )
                )}

                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {CommonTexts.EDUCATION}
                  </Typography>
                </Grid>

                {educationExperiences?.map(
                  ({ collegeName, fieldOfStudy, degree, dateOfCompletion }) => (
                    <>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {degree}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 700 }}>
                          {collegeName}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 700 }}>
                          {fieldOfStudy}
                        </Typography>
                        <Typography>{dateOfCompletion}</Typography>
                      </Grid>
                    </>
                  )
                )}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {CommonTexts.SKILLS}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {skills.split(", ").map((skill) => (
                    <Button
                      sx={{ ml: 2, mb: 2 }}
                      color="primary"
                      variant="contained">
                      {skill}
                    </Button>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {CommonTexts.PROJECTS}
                  </Typography>
                </Grid>
                {projects?.map(({ name, description, endDate, startDate }) => (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {`${name} (${startDate} - ${endDate})`}
                      </Typography>
                      <Typography>{description}</Typography>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Grid item xs={12} sx={JustifyContentSpaceBetweenAlignCenterSxStyles}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={useThisResumeAsDefault}
                onChange={onChangeAddDeafultResume}
              />
            }
            label={
              <Typography color="text.secondary" sx={Font18Weight500SxStyles}>
                {ButtonTexts.addThisResumeToMyProfile}
              </Typography>
            }
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12} sx={JustifyContentSpaceBetweenAlignCenterSxStyles}>
        <Button
          onClick={onClickGoToDashboard}
          sx={{ mr: 2 }}
          variant="outlined">
          {ButtonTexts.goToDashboard}
        </Button>

        <Box>
          <Button onClick={goBack} sx={{ mr: 2 }} variant="outlined">
            {ButtonTexts.back}
          </Button>
          <Button onClick={onClickDownload} color="primary" variant="contained">
            {ButtonTexts.download}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
