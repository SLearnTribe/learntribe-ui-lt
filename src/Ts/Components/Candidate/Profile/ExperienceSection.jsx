import {
  Button,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { cloneDeep, isEmpty } from "lodash";
import moment from "moment";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardWithError } from "../../../CommonJsx/SharedJsxStyles";
import { JustifyContentSpaceBetweenSxStyles } from "../../../CommonStyles/CommonSxStyles";
import { NewExperienceObject } from "../../../Configs/Profile/ProfileConfig";
import { updateUserProfile } from "../../../Redux/Ducks/Profile/ProfileSlice";
import {
  getProfileValidations,
  getUpdatedUserProfileInfo,
} from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { ExperienceSectionSkeleton } from "../../../Skeletons/ExperienceSectionSkeleton";
import {
  ButtonTexts,
  CommonTexts,
  ProfileTexts,
  TextFieldLabelsAndTexts,
} from "../../../Utils/Text";

export const ExperienceSection = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUpdatedUserProfileInfo);

  const isLoading = useSelector(getIsUserDataLoading);

  const formErrors = useSelector(getProfileValidations);

  const { workExperiences = [] } = userInfo;

  const { workExperienceError = false } = formErrors;

  const onClickAddNewExperience = useCallback(() => {
    const copyUserInfo = cloneDeep(userInfo);

    copyUserInfo.workExperiences.push(NewExperienceObject);

    dispatch(updateUserProfile(copyUserInfo));
  }, [dispatch, userInfo]);

  const onClickDeleteEducation = useCallback(() => {
    const copyUserInfo = cloneDeep(userInfo);

    copyUserInfo.workExperiences.splice(-1);

    dispatch(updateUserProfile(copyUserInfo));
  }, [dispatch, userInfo]);

  const onChangeStartDate = useCallback(
    (value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      const formattedDate = moment(new Date(value?.$d)).format("YYYY-MM-DD");

      copyUserInfo.workExperiences[index].startDate = formattedDate;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeEndDate = useCallback(
    (value, index) => {
      const formattedDate = moment(new Date(value?.$d)).format("YYYY-MM-DD");

      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.workExperiences[index].endDate = formattedDate;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeCompanyName = useCallback(
    (value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.workExperiences[index].orgName = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeDesignation = useCallback(
    (value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.workExperiences[index].designation = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  return isLoading ? (
    <ExperienceSectionSkeleton />
  ) : (
    <CardWithError
      isError={workExperienceError}
      sx={{ pl: "1rem", pr: "1rem" }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            {ProfileTexts.experience}
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          {workExperiences?.map(
            ({ orgName, designation, startDate, endDate }, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    error={formErrors?.[orgName + index]}
                    sx={{ width: "100%" }}
                    value={orgName}
                    onChange={({ target: { value } }) =>
                      onChangeCompanyName(value, index)
                    }
                    id="outlined-basic"
                    label={CommonTexts.companyName}
                    placeholder={TextFieldLabelsAndTexts.enterOrgOrCompanyName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    required
                    error={formErrors?.[designation + index]}
                    sx={{ width: "100%" }}
                    value={designation}
                    onChange={({ target: { value } }) =>
                      onChangeDesignation(value, index)
                    }
                    id="outlined-basic"
                    label={CommonTexts.role}
                    placeholder={TextFieldLabelsAndTexts.enterYourRole}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      mask="____-__-__"
                      inputFormat="YYYY-MM-DD"
                      label="From Date"
                      value={startDate}
                      onChange={(newValue) => {
                        onChangeStartDate(newValue, index);
                      }}
                      renderInput={(params) => (
                        <TextField sx={{ width: "100%" }} {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      mask="____-__-__"
                      inputFormat="YYYY-MM-DD"
                      label="To Date"
                      value={endDate}
                      onChange={(newValue) => {
                        onChangeEndDate(newValue, index);
                      }}
                      renderInput={(params) => (
                        <TextField sx={{ width: "100%" }} {...params} />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </React.Fragment>
            )
          )}
          <Grid item xs={12} sx={JustifyContentSpaceBetweenSxStyles}>
            <Button
              disabled={isEmpty(workExperiences)}
              onClick={onClickDeleteEducation}
              color="secondary"
              variant="outlined">
              {ButtonTexts.deleteExperience}
            </Button>
            <Button
              onClick={onClickAddNewExperience}
              color="primary"
              variant="outlined">
              {ButtonTexts.addNewExperience}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </CardWithError>
  );
};
