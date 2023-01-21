import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import {
  Avatar,
  Card,
  Chip,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import sampleImage from "../../../Assests/Adil.jpeg";
import { setResumeTemplate } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getSelectedResumeTemplate } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { resumeBuilderMockData } from "../../Utils/MockData/ResumeBuilderData";
import { CommonTexts } from "../../Utils/Text";
import themes from "../../Utils/Themes/Themes";

export const ResumeTemplate3 = ({ templateId }) => {
  const dispatch = useDispatch();

  const {
    name,
    email,
    phone,
    city,
    linkedIn,
    currentRole,
    skills,
    about,
    workExperiences,
    educationExperiences,
    projects,
  } = resumeBuilderMockData;

  const selectedTemplate = useSelector(getSelectedResumeTemplate);
  console.log({ selectedTemplate, templateId });

  const onSelectTemplate = useCallback(() => {
    dispatch(setResumeTemplate(templateId));
  }, [dispatch, templateId]);
  return (
    <Card
      raised
      sx={{
        p: 2,
        maxHeight: "50rem",
        border:
          selectedTemplate === 3
            ? `1px solid ${themes.light.palette.primary.main}`
            : "inherit",
      }}
      onClick={onSelectTemplate}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Typography variant="h6">{name}</Typography>
              <Typography sx={{ color: green.A700 }}>{currentRole}</Typography>
              <small>{`${about.slice(0, 50)}...`}</small>
            </Grid>
            <Grid item xs={2}>
              <Avatar
                alt="Remy Sharp"
                src={sampleImage}
                sx={{
                  width: 70,
                  height: 70,
                  border: "thick solid",
                  borderColor: themes.light.palette.primary.dark,
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
                  label={<small>{linkedIn.slice(0, 10)}</small>}
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
              {skills.split(", ").map((skill) => (
                <Chip
                  sx={{ ml: 1, mb: 1 }}
                  label={skill}
                  variant="outlined"
                  color="success"
                />
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
