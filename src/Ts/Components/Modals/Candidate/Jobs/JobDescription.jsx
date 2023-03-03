import CloseIcon from "@mui/icons-material/Close";
import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { capitalize, uniqueId } from "lodash";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleJobSkillIcons } from "../../../../CommonJsx/CommonJsxUtils";
import {
  Font20Weight500SxStyles,
  Font22Weight600SxStyles,
  Font24Weight600SxStyles,
  Font26Weight700SxStyles,
  JustifyContentSpaceBetweenAlignCenterSxStyles,
} from "../../../../CommonStyles/CommonSxStyles";
import { employmentTypeBeToUiMap } from "../../../../Configs/AppConfig";
import { JobsStatusMap } from "../../../../Configs/Dashboards/DashboardsConfig";
import { setCurrentModal } from "../../../../Redux/Ducks/Modal/ModalSlice";
import { getCurrentEditingJob } from "../../../../Redux/Selectors/Jobs/JobsSelectors";
import { getCurrentModal } from "../../../../Redux/Selectors/Modal/ModalSelectors";
import { CommonTexts, ModalTexts, PostJobsTexts } from "../../../../Utils/Text";

export const JobDescription = () => {
  const dispatch = useDispatch();

  const currentModal = useSelector(getCurrentModal);

  const {
    title,
    businessName,
    location = "N/A",
    employmentType,
    // jobLevel = "N/A",
    requiredAssessments,
    // rolesAndResponsibilities,
    description,
    qualificationRequired,
    experienceRequired,
    salaryBudget = "N/A",
    //     qualificationRequired = [
    //       `A Bachelors of Computer Science or a related field is required
    // 5+ years of IT experience in the development of scalable consumer facing digital solutions
    // (consumer websites, web applications, mobile sites etc) in HTML, CSS3 and JavaScript framework is required
    // Experience in client-side scripting and JavaScript frameworks, like SCSS, HTML5, AngularJS, ReactJS, REST/JSON API is a must.
    // Experience with HTML5, Bootstrap, Foundation for mobile/responsive design is desired
    // Exposure to cross-browser, multiple device testing and debugging is a required.
    // Experience working on an agile team adopting DevOps and CI/CD
    // Experience with Cloud ecosystems including Azure, Sitecore Cloud or AWS is a plus`,
    //     ],
  } = useSelector(getCurrentEditingJob);

  const onClose = useCallback(
    (_event, reason) => {
      if (reason && reason === "backdropClick") return;
      dispatch(setCurrentModal(null));
    },
    [dispatch]
  );
  return (
    <Dialog maxWidth="md" open={true} onClose={onClose}>
      <DialogTitle
        variant="h2"
        sx={JustifyContentSpaceBetweenAlignCenterSxStyles}>
        {currentModal}
        <CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography sx={Font26Weight700SxStyles}>{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                ...Font20Weight500SxStyles,
                whiteSpace: "pre-line",
              }}>{`${businessName}, ${location}\n${employmentTypeBeToUiMap[employmentType]}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={Font24Weight600SxStyles}>
              {ModalTexts.jobDescription}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {description}
          </Grid>
          <Grid item xs={12}>
            <Typography sx={Font22Weight600SxStyles}>
              {CommonTexts.requiredSkills}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {requiredAssessments.map(({ skill, status }) => (
              <Chip
                sx={{
                  mr: 2,
                  color: "#000",
                  "& .MuiChip-deleteIcon": {
                    color: JobsStatusMap[status.toLowerCase()],
                  },
                }}
                key={uniqueId()}
                label={skill}
                onDelete={() => {}}
                variant="outlined"
                color="primary"
                deleteIcon={handleJobSkillIcons(capitalize(status))}
              />
            ))}
          </Grid>
          <Grid item xs={12}>
            <Typography sx={Font22Weight600SxStyles}>
              {CommonTexts.responsibilities}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                ...Font20Weight500SxStyles,
                whiteSpace: "pre-line",
              }}>
              {qualificationRequired}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={Font22Weight600SxStyles}>
              {CommonTexts.qualificationsOrExperienceRequired}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                ...Font20Weight500SxStyles,
                whiteSpace: "pre-line",
              }}>
              {experienceRequired}+ years
            </Typography>
            {/* {qualificationRequired.map((qualification) => (
              <Typography
                key={uniqueId()}
                sx={{
                  ...Font20Weight500SxStyles,
                  whiteSpace: "pre-line",
                  display: "list-item",
                  ml: 2,
                }}>
                {qualification}
              </Typography>
            ))} */}
            <Grid item xs={12}>
              <Typography sx={Font22Weight600SxStyles}>
                {PostJobsTexts.salaryBudget}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  ...Font20Weight500SxStyles,
                  whiteSpace: "pre-line",
                }}>
                {salaryBudget}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
