import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { cloneDeep, isEmpty, isNull } from "lodash";
import moment from "moment";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JustifyContentSpaceBetweenSxStyles } from "../../../CommonStyles/CommonSxStyles";
import { NewEducationObject } from "../../../Configs/Profile/ProfileConfig";
import { updateUserProfile } from "../../../Redux/Ducks/Profile/ProfileSlice";
import { getUpdatedUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { AvailableDegreeOptions } from "../../../Utils/MockData/DashboardData";
import {
  ButtonTexts,
  ProfileTexts,
  TextFieldLabelsAndTexts,
} from "../../../Utils/Text";
import { AutoCompleteSelect } from "../../CommonComponents/Controls/AutoComplete";

export const EducationSection = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUpdatedUserProfileInfo);

  const { educationExperiences = [] } = userInfo;

  const onClickAddNewEducation = useCallback(() => {
    const copyUserInfo = cloneDeep(userInfo);
    console.log(copyUserInfo);
    copyUserInfo.educationExperiences.push(NewEducationObject);

    dispatch(updateUserProfile(copyUserInfo));
  }, [dispatch, userInfo]);

  const onClickDeleteEducation = useCallback(() => {
    const copyUserInfo = cloneDeep(userInfo);

    copyUserInfo.educationExperiences.splice(-1);

    dispatch(updateUserProfile(copyUserInfo));
  }, [dispatch, userInfo]);

  const onChangeStartDate = useCallback(
    (value, index) => {
      const formattedDate = moment(new Date(value.$d)).format("YYYY-MM-DD");

      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.educationExperiences[index].dateOfCompletion = formattedDate;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeFieldOfStudy = useCallback(
    ({ target: { value } }, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.educationExperiences[index].fieldOfStudy = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeCollegeName = useCallback(
    (value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.educationExperiences[index].collegeName = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeDegree = useCallback(
    (_e, { title }, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.educationExperiences[index].degree = title;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  return (
    <Card sx={{ pl: "1rem", pr: "1rem" }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            {ProfileTexts.education}
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          {educationExperiences?.map(
            (
              { fieldOfStudy, dateOfCompletion, endDate, collegeName, degree },
              index
            ) => (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    sx={{ width: "100%" }}
                    value={collegeName}
                    onChange={({ target: { value } }) =>
                      onChangeCollegeName(value, index)
                    }
                    id="outlined-basic"
                    label={TextFieldLabelsAndTexts.universityOrCollegeName}
                    placeholder={
                      TextFieldLabelsAndTexts.enterUniversityOrCollegeName
                    }
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <AutoCompleteSelect
                    index={index}
                    options={AvailableDegreeOptions}
                    value={
                      isNull(degree)
                        ? null
                        : {
                          title: degree,
                        }
                    }
                    onChange={onChangeDegree}
                    label={TextFieldLabelsAndTexts.degree}
                    placeholder={TextFieldLabelsAndTexts.selectDegree}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      mask="____-__-__"
                      inputFormat="YYYY-MM-DD"
                      label="Date of completion"
                      value={dateOfCompletion}
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
                  <TextField
                    sx={{ width: "100%" }}
                    value={fieldOfStudy}
                    onChange={(e) => onChangeFieldOfStudy(e, index)}
                    id="outlined-basic"
                    label={TextFieldLabelsAndTexts.fieldOfStudy}
                    placeholder={TextFieldLabelsAndTexts.fieldOfStudy}
                    variant="outlined"
                  />
                </Grid>
              </React.Fragment>
            )
          )}
          <Grid item xs={12} sx={JustifyContentSpaceBetweenSxStyles}>
            <Button
              disabled={isEmpty(educationExperiences)}
              onClick={onClickDeleteEducation}
              color="secondary"
              variant="outlined">
              {ButtonTexts.deleteEducation}
            </Button>
            <Button
              onClick={onClickAddNewEducation}
              color="primary"
              variant="outlined">
              {ButtonTexts.addNewEducation}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
