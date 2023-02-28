import { Grid, TextField, Typography } from "@mui/material";
import { cloneDeep } from "lodash";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentResume } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getProfileValidations } from "../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { getCurrentEditingResume } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import {
  CommonTexts,
  ProfileTexts,
  TextFieldLabelsAndTexts,
} from "../../Utils/Text";

export const ResumeEditInfo = () => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector(getCurrentEditingResume);

  const {
    nameError = false,
    emailError = false,
    phoneError = false,
    cityError = false,
    // addressError = false,
  } = useSelector(getProfileValidations);

  const {
    name = "",
    email = "",
    phone = null,
    // address = "",
    city = "",
    currentDesignation = "",
  } = resumeDetails;

  const onChangeName = useCallback(
    ({ target: { value } }) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.name = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeEmail = useCallback(
    ({ target: { value } }) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.email = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangePhone = useCallback(
    ({ target: { value } }) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.phone = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  const onChangeCurrentDesignation = useCallback(
    ({ target: { value } }) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.currentDesignation = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  // const onChangeAddress = useCallback(
  //   ({ target: { value } }) => {
  //     const copyResumeDetails = cloneDeep(resumeDetails);

  //     copyResumeDetails.address = value;

  //     dispatch(updateCurrentResume(copyResumeDetails));
  //   },
  //   [dispatch, resumeDetails]
  // );

  const onChangeCity = useCallback(
    ({ target: { value } }) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.city = value;

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
          {ProfileTexts.editInfo}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextField
          required
          error={nameError}
          sx={{ width: "100%" }}
          value={name}
          onChange={onChangeName}
          id="outlined-basic"
          label={TextFieldLabelsAndTexts.name}
          placeholder={TextFieldLabelsAndTexts.enterFullName}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextField
          required
          error={phoneError}
          sx={{ width: "100%" }}
          value={phone}
          type="number"
          onChange={onChangePhone}
          id="outlined-basic"
          label={CommonTexts.mobileNo}
          placeholder={TextFieldLabelsAndTexts.enterPhoneOrMobileNumber}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextField
          required
          error={emailError}
          sx={{ width: "100%" }}
          value={email}
          onChange={onChangeEmail}
          id="outlined-basic"
          label={CommonTexts.email}
          placeholder={TextFieldLabelsAndTexts.enterEmail}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextField
          sx={{ width: "100%" }}
          value={currentDesignation}
          onChange={onChangeCurrentDesignation}
          id="outlined-basic"
          label={CommonTexts.currentDesignation}
          placeholder={CommonTexts.currentDesignation}
          variant="outlined"
        />
      </Grid>
      {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextField
          sx={{ width: "100%" }}
          value={address}
          onChange={onChangeAddress}
          id="outlined-basic"
          label={TextFieldLabelsAndTexts.address}
          placeholder={TextFieldLabelsAndTexts.address}
          variant="outlined"
        />
      </Grid> */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextField
          required
          error={cityError}
          sx={{ width: "100%" }}
          value={city}
          onChange={onChangeCity}
          id="outlined-basic"
          label={TextFieldLabelsAndTexts.city}
          placeholder={TextFieldLabelsAndTexts.city}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
