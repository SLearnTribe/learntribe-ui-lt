import {
  Autocomplete,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { cloneDeep } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../../Redux/Ducks/Profile/ProfileSlice";
import { getAllCityList } from "../../../Redux/Selectors/AppSelectors";
import {
  getProfileValidations,
  getUpdatedUserProfileInfo,
} from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import {
  CommonTexts,
  ProfileTexts,
  TextFieldLabelsAndTexts,
} from "../../../Utils/Text";

export const BasicInfoSection = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUpdatedUserProfileInfo);

  const {
    nameError = false,
    emailError = false,
    phoneError = false,
    cityError = false,
    genderError = false,
  } = useSelector(getProfileValidations);

  const cities = useSelector(getAllCityList);

  const { name, email, gender, phone, country } = userInfo;

  const onChangeName = useCallback(
    ({ target: { value } }) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.name = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeEmail = useCallback(
    ({ target: { value } }) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.email = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeGender = useCallback(
    ({ target: { value } }) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.gender = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangePhone = useCallback(
    ({ target: { value } }) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.phone = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeCountry = useCallback(
    (_e, value) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.country = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  return (
    <Card sx={{ pl: "1rem", pr: "1rem" }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            {ProfileTexts.basicInfo}
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
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
            <Autocomplete
              sx={{ width: "100%" }}
              id="free-solo-demo"
              freeSolo
              options={cities}
              value={country}
              onChange={onChangeCountry}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={cityError}
                  required
                  label={CommonTexts.city}
                  placeholder={TextFieldLabelsAndTexts.enterCityOrCountry}
                />
              )}
            />
            {/* <TextField
              value={country}
              onChange={onChangeCountry}
              id="outlined-basic"
              label={CommonTexts.city}
              placeholder={TextFieldLabelsAndTexts.enterCityOrCountry}
              variant="outlined"
            /> */}
          </Grid>
          <Grid item xs={12}>
            <FormControl required error={genderError}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                value={gender}
                onChange={onChangeGender}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel
                  sx={{ pr: "3rem" }}
                  value="FEMALE"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  sx={{ pr: "3rem" }}
                  value="MALE"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  sx={{ pr: "3rem" }}
                  value="OTHERS"
                  control={<Radio />}
                  label="Others"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
