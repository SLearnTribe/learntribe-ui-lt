import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { cloneDeep, isUndefined, uniqueId } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import sampleImage from "../../../../Assests/Adil.jpeg";
import samplePngImage from "../../../../Assests/Adil.png";
import {
  setSelectedApplicantDetails,
  setSelectedApplicantsIds,
} from "../../../Redux/Ducks/Applicants/ApplicantSlice";
import {
  getHrApplicantData,
  getSelectedApplicantsIds,
} from "../../../Redux/Selectors/ApplicantSelectors/ApplicantSelectors";

export const ApplicantsCards = ({ isSelectMultipleActive = false }) => {
  const dispatch = useDispatch();

  const selectedApplicantsIds = useSelector(getSelectedApplicantsIds);

  const applicantData = useSelector(getHrApplicantData);

  const onToggleCheckbox = useCallback(
    (checkboxId, isChecked) => {
      const copySelectedApplicantsIds = cloneDeep(selectedApplicantsIds);

      copySelectedApplicantsIds[checkboxId] = isUndefined(isChecked)
        ? true
        : !copySelectedApplicantsIds[checkboxId];

      dispatch(setSelectedApplicantsIds(copySelectedApplicantsIds));
    },
    [selectedApplicantsIds, dispatch]
  );

  const onClickApplicantCard = useCallback(
    ({ currentTarget }) => {
      if (!isSelectMultipleActive) {
        const selectedApplicantDetails = JSON.parse(
          currentTarget.getAttribute("row-data")
        );

        dispatch(setSelectedApplicantDetails(selectedApplicantDetails));
      }
    },
    [dispatch, isSelectMultipleActive]
  );
  return (
    <>
      {applicantData.map((applicant, index) => (
        <Grid item xs={12} key={uniqueId()}>
          <Card
            sx={{ cursor: "pointer" }}
            row-data={JSON.stringify(applicant)}
            onClick={onClickApplicantCard}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ width: "5rem", height: "5rem" }}
                  alt="Remy Sharp"
                  src={index === 0 ? sampleImage : samplePngImage}
                />
              }
              action={
                isSelectMultipleActive && (
                  <Checkbox
                    sx={{ mt: "50%" }}
                    checked={selectedApplicantsIds[applicant.userProfileId]}
                    onChange={() =>
                      onToggleCheckbox(
                        applicant.userProfileId,
                        selectedApplicantsIds[applicant.userProfileId]
                      )
                    }
                    inputProps={{ "aria-label": "controlled" }}
                  />
                )
              }
              title={
                <>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 16, fontWeight: 500, pr: 2 }}>
                      {applicant.name}
                    </Typography>
                    <IconButton sx={{ p: "unset", mr: 2 }}>
                      <FiberManualRecordIcon
                        color="primary"
                        sx={{ width: "0.5em", height: "0.5em" }}
                      />
                    </IconButton>
                    <Typography sx={{ fontSize: 16, fontWeight: 500, pr: 2 }}>
                      {applicant.currentRole}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, pr: 2 }}>
                      {applicant.skills}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, pr: 2 }}>
                      {applicant.totalExperience}
                    </Typography>
                  </Box>
                </>
              }
            />
          </Card>
        </Grid>
      ))}
    </>
  );
};
