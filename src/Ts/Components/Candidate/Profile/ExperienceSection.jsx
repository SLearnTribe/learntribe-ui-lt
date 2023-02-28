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
import { cloneDeep } from "lodash";
import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardWithError } from "../../../CommonJsx/SharedJsxStyles";
import {
  FlexAlignCenterStyles,
  JustifyContentFlexEndSxStyles,
} from "../../../CommonStyles/CommonSxStyles";
import { NewExperienceObject } from "../../../Configs/Profile/ProfileConfig";
import { updateUserProfile } from "../../../Redux/Ducks/Profile/ProfileSlice";
import {
  getProfileValidations,
  getUpdatedUserProfileInfo,
} from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { ExperienceSectionSkeleton } from "../../../Skeletons/ExperienceSectionSkeleton";
import { handleWorkPresenrMap } from "../../../Utils/CommonUtils";
import {
  ButtonTexts,
  CommonTexts,
  ProfileTexts,
  TextFieldLabelsAndTexts,
} from "../../../Utils/Text";
import {
  CheckboxWithLabel,
  DeleteIconWithLabel,
} from "../../CommonComponents/Controls/ButtonControls";

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

  const onClickDeleteWork = useCallback(
    (index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.workExperiences.splice(index, 1);

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

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

  const onChangeCurrentlyWorking = useCallback(
    (value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.workExperiences[index].currentlyWorking = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeLocation = useCallback(
    (value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.workExperiences[index].location = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const workMap = useMemo(() => {
    return handleWorkPresenrMap(workExperiences);
  }, [workExperiences]);

  return isLoading ? (
    <ExperienceSectionSkeleton />
  ) : (
    <CardWithError
      isError={workExperienceError}
      sx={{ pl: "1rem", pr: "1rem", boxShadow: 3 }}>
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
            (
              {
                orgName,
                designation,
                startDate,
                endDate,
                currentlyWorking = false,
                location = "",
              },
              index
            ) => (
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
                      disabled={currentlyWorking}
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
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    sx={{ width: "100%" }}
                    value={location}
                    onChange={({ target: { value } }) =>
                      onChangeLocation(value, index)
                    }
                    id="outlined-basic"
                    label={CommonTexts.location}
                    placeholder={TextFieldLabelsAndTexts.enterLocation}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  sx={FlexAlignCenterStyles}>
                  <CheckboxWithLabel
                    disabled={workMap[index]}
                    sx={{ fontWeight: 600 }}
                    checked={currentlyWorking}
                    onChange={({ target: { checked } }) =>
                      onChangeCurrentlyWorking(checked, index)
                    }
                    label={CommonTexts.present}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  sx={FlexAlignCenterStyles}>
                  <DeleteIconWithLabel
                    onClick={() => onClickDeleteWork(index)}
                    label={CommonTexts.delete}
                    sx={{ fontWeight: 600, pl: "0.5rem" }}
                    iconSx={{ fontSize: "1.75rem" }}
                  />
                </Grid>
              </React.Fragment>
            )
          )}
          <Grid item xs={12} sx={JustifyContentFlexEndSxStyles}>
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
