import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import {
  Avatar,
  Button,
  Card,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setResumeTemplate,
  updateCurrentResume,
} from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import {
  getCurrentEditingResume,
  getResumeList,
  getSelectedResumeTemplate,
} from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { handleCurrentResume } from "../../Utils/ResumeBuilder/ResumeBuilderUtils";
import { CommonTexts } from "../../Utils/Text";

export const ResumeTemplate1 = ({ templateId, maxHeight = "50rem", data }) => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const resumeDetails = useSelector(getCurrentEditingResume);

  const resumeData = data ?? resumeDetails;

  const {
    name = "",
    email = "",
    phone = null,
    city = "",
    linkedIn = "",
    currentRole = "",
    skills = "",
    about = "",
    workExperiences = [],
    educationExperiences = [],
    projects = [],
  } = resumeData;

  const selectedTemplate = useSelector(getSelectedResumeTemplate);

  const resumeList = useSelector(getResumeList);

  const onSelectTemplate = useCallback(() => {
    dispatch(setResumeTemplate(templateId));
    const currentResume = handleCurrentResume(resumeList[0]);
    dispatch(updateCurrentResume(currentResume));
  }, [dispatch, templateId, resumeList]);
  return (
    <Card
      raised
      sx={{
        p: 2,
        maxHeight,
        overflow: "auto",
        border:
          selectedTemplate === 1
            ? `1px solid ${theme.palette.primary.dark}`
            : "inherit",
      }}
      onClick={onSelectTemplate}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Typography variant="h6">{name}</Typography>
              <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
                {currentRole}
              </Typography>
              <small>{`${about?.slice(0, 50)}...`}</small>
            </Grid>
            <Grid item xs={2}>
              <Avatar
                alt="Remy Sharp"
                // src={sampleImage}
                sx={{
                  width: 70,
                  height: 70,
                  border: "thick solid",
                  borderColor: (theme) => theme.palette.primary.dark,
                }}></Avatar>
            </Grid>
            <Grid item xs={5}>
              <FormGroup>
                <FormControlLabel
                  labelPlacement="start"
                  control={<EmailIcon sx={{ m: 0.5 }} />}
                  label={<small>{email}</small>}
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  labelPlacement="start"
                  control={<SmartphoneIcon sx={{ m: 0.5 }} />}
                  label={<small>{phone}</small>}
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  labelPlacement="start"
                  control={<LocationOnIcon sx={{ m: 0.5 }} />}
                  label={<small>{city}</small>}
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  labelPlacement="start"
                  control={<LinkedInIcon sx={{ m: 0.5 }} />}
                  label={<small>{linkedIn?.slice(0, 10)}</small>}
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
              <Typography variant="h6">
                {CommonTexts.WORK_EXPERIENCE}
              </Typography>
            </Grid>
            {workExperiences?.map(
              ({ orgName, endDate, startDate, designation }) => (
                <>
                  <Grid item xs={12}>
                    <Typography>{designation}</Typography>
                    <Typography>{orgName}</Typography>
                    <small>{`${startDate} - ${endDate}`}</small>
                  </Grid>
                </>
              )
            )}

            <Grid item xs={12}>
              <Typography variant="h6">{CommonTexts.EDUCATION}</Typography>
            </Grid>

            {educationExperiences?.map(
              ({ collegeName, fieldOfStudy, degree, dateOfCompletion }) => (
                <>
                  <Grid item xs={12}>
                    <Typography>{degree}</Typography>
                    <Typography>{collegeName}</Typography>
                    <Typography>{fieldOfStudy}</Typography>
                    <small>{dateOfCompletion}</small>
                  </Grid>
                </>
              )
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h6">{CommonTexts.SKILLS}</Typography>
            </Grid>
            <Grid item xs={12}>
              {skills?.split(", ").map((skill) => (
                <Button
                  size="small"
                  sx={{ ml: 1, mb: 1 }}
                  color="primary"
                  variant="contained">
                  {skill}
                </Button>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">{CommonTexts.PROJECTS}</Typography>
            </Grid>
            {projects?.map(({ name, description, endDate, startDate }) => (
              <>
                <Grid item xs={12}>
                  <Typography>{`${name} (${startDate} - ${endDate})`}</Typography>
                  <small>{`${description.slice(0, 60)}...`}</small>
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
