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
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import sampleImage from "../../../Assests/Adil.jpeg";
import { setResumeTemplate } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import {
  getResumeDetails,
  getSelectedResumeTemplate,
} from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { CommonTexts } from "../../Utils/Text";
import themes from "../../Utils/Themes/Themes";

export const ResumeTemplate1 = ({ templateId }) => {
  const dispatch = useDispatch();

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
  } = useSelector(getResumeDetails);

  const selectedTemplate = useSelector(getSelectedResumeTemplate);

  const onSelectTemplate = useCallback(() => {
    dispatch(setResumeTemplate(templateId));
  }, [dispatch, templateId]);
  return (
    <Card
      sx={{
        p: 2,
        maxHeight: "25rem",
        border: selectedTemplate ? "1px solid #7779F5" : "inherit",
      }}
      onClick={onSelectTemplate}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Typography variant="h4">{name}</Typography>
              <Typography variant="h6">{currentRole}</Typography>
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
            <Grid item xs={5}>
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
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {CommonTexts.WORK_EXPERIENCE}
              </Typography>
            </Grid>
            {workExperiences?.map(
              ({ orgName, endDate, startDate, designation }) => (
                <>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {designation}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
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
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {collegeName}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
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
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {CommonTexts.SKILLS}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {skills.split(", ").map((skill) => (
                <Chip sx={{ ml: 2 }} label={skill} color="primary" />
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
    </Card>
  );
};
