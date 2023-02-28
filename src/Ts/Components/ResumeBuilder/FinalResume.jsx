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
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import sampleImage from "../../../Assests/Adil.jpeg";
import {
  Font18Weight500SxStyles,
  JustifyContentSpaceBetweenAlignCenterSxStyles,
  JustifyContentSpaceBetweenSxStyles,
} from "../../CommonStyles/CommonSxStyles";
import { routes } from "../../Configs/RoutesConfig";
import { setResumeActiveStepper } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import {
  getCurrentEditingResume,
  getResumeBuilderActiveStepper,
} from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { formatMMMYYYDate } from "../../Utils/CommonUtils";
import { ButtonTexts, CommonTexts } from "../../Utils/Text";

export const FinalResume = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const activeStepper = useSelector(getResumeBuilderActiveStepper);

  const resumeDetails = useSelector(getCurrentEditingResume);

  const {
    name = null,
    email = null,
    phone = null,
    city = null,
    linkedIn = null,
    currentDesignation = null,
    skills = null,
    about = null,
    workExperiences = [],
    educationExperiences = [],
    sideProjects = [],
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
        sx={{
          p: 3,
          border: `1px solid ${(theme) => theme.palette.primary.main}`,
        }}>
        <Grid item xs={12}>
          <Grid container spacing={3} id="download-Resume-template">
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h1">{name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h3"
                        sx={{ color: (theme) => theme.palette.primary.main }}>
                        {currentDesignation}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>{about}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={sampleImage}
                    sx={{
                      width: 100,
                      height: 100,
                      border: "thick solid",
                      borderColor: (theme) => theme.palette.primary.dark,
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
                      label={linkedIn.slice(28)}
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
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ fontWeight: 700 }}>
                    {CommonTexts.WORK_EXPERIENCE}
                  </Typography>
                </Grid>
                {workExperiences?.map(
                  (
                    {
                      orgName,
                      endDate,
                      startDate,
                      designation,
                      description,
                      location,
                      currentlyWorking = false,
                    },
                    index
                  ) => (
                    <>
                      <Grid item xs={12} key={crypto.randomUUID()}>
                        <Grid
                          container
                          spacing={1}
                          sx={{ mt: index > 0 ? 1 : 0 }}>
                          <Grid item xs={12}>
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                              {designation}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography sx={{ fontWeight: 600 }}>
                              {orgName}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={JustifyContentSpaceBetweenSxStyles}>
                            <Typography color={"primary"}>{`${formatMMMYYYDate(
                              startDate
                            )} - ${
                              currentlyWorking
                                ? CommonTexts.present
                                : formatMMMYYYDate(endDate)
                            }`}</Typography>
                            <Typography color={"primary"}>
                              {location}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography color={"primary"}>
                              {CommonTexts.achivementTasks}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography>{description}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  )
                )}

                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ fontWeight: 700, mt: 2 }}>
                    {CommonTexts.EDUCATION}
                  </Typography>
                </Grid>

                {educationExperiences?.map(
                  (
                    { collegeName, fieldOfStudy, degree, dateOfCompletion },
                    index
                  ) => (
                    <>
                      <Grid item xs={12}>
                        <Grid
                          container
                          spacing={1}
                          sx={{ mt: index > 0 ? 1 : 0 }}>
                          <Grid item xs={12}>
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                              {degree}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 700 }}>
                              {collegeName}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="subtitle1"
                              sx={{ fontWeight: 700 }}>
                              {fieldOfStudy}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography color={"primary"}>
                              {formatMMMYYYDate(dateOfCompletion)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  )
                )}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ fontWeight: 700 }}>
                    {CommonTexts.SKILLS}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {skills?.split(", ").map((skill) => (
                    <Button
                      sx={{ ml: 2, mb: 2 }}
                      color="primary"
                      variant="contained">
                      {skill}
                    </Button>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ fontWeight: 700 }}>
                    {CommonTexts.PROJECTS}
                  </Typography>
                </Grid>
                {sideProjects?.map(
                  ({ name, description, endDate, startDate }) => (
                    <>
                      <Grid item xs={12}>
                        <Typography sx={{ fontWeight: 700 }}>
                          {`${name} (${formatMMMYYYDate(
                            startDate
                          )} - ${formatMMMYYYDate(endDate)})`}
                        </Typography>
                        <Typography>{description}</Typography>
                      </Grid>
                    </>
                  )
                )}
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
