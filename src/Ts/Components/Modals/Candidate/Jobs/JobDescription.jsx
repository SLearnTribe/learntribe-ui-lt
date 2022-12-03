import CloseIcon from "@mui/icons-material/Close";
import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleJobSkillIcons } from "../../../../CommonJsx/CommonJsxUtils";
import {
  Font20Weight500SxStyles,
  Font22Weight600SxStyles,
  Font24Weight600SxStyles,
  Font26Weight700SxStyles,
  JustifyContentSpaceBetweenAlignCenterSxStyles,
} from "../../../../CommonStyles/CommonSxStyles";
import { setCurrentModal } from "../../../../Redux/Ducks/Modal/ModalSlice";
import { getCurrentEditingJob } from "../../../../Redux/Selectors/Jobs/JobsSelectors";
import { getCurrentModal } from "../../../../Redux/Selectors/Modal/ModalSelectors";
import { CommonTexts, ModalTexts } from "../../../../Utils/Text";

export const JobDescription = () => {
  const dispatch = useDispatch();

  const currentModal = useSelector(getCurrentModal);

  const {
    role,
    companyName,
    city,
    employmentType,
    jobLevel,
    assessmentsRequired,
    responsibilities,
    qualifications,
  } = useSelector(getCurrentEditingJob);

  const onClose = useCallback(
    (_event, reason) => {
      if (reason && reason == "backdropClick") return;
      dispatch(setCurrentModal(null));
    },
    [dispatch]
  );
  return (
    <Dialog maxWidth="md" open={true} onClose={onClose}>
      <DialogTitle sx={JustifyContentSpaceBetweenAlignCenterSxStyles}>
        {currentModal}
        <CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography sx={Font26Weight700SxStyles}>{role}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                ...Font20Weight500SxStyles,
                whiteSpace: "pre-line",
              }}>{`${companyName}, ${city}\n${employmentType}, ${jobLevel}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={Font24Weight600SxStyles}>
              {ModalTexts.jobDescription}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={Font22Weight600SxStyles}>
              {CommonTexts.requiredSkills}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {assessmentsRequired.map(({ name, status }) => (
              <Chip
                sx={{ mr: 2 }}
                key={uniqueId()}
                label={name}
                onDelete={() => {}}
                variant="outlined"
                color="default"
                deleteIcon={handleJobSkillIcons(status)}
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
              {responsibilities}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={Font22Weight600SxStyles}>
              {CommonTexts.qualificationsOrExperienceRequired}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {qualifications.map((qualification) => (
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
            ))}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
