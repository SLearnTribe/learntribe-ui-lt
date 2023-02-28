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
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardWithError } from "../../../CommonJsx/SharedJsxStyles";
import {
  FlexAlignCenterStyles,
  JustifyContentFlexEndSxStyles,
} from "../../../CommonStyles/CommonSxStyles";
import { NewProjectsObject } from "../../../Configs/Profile/ProfileConfig";
import { updateUserProfile } from "../../../Redux/Ducks/Profile/ProfileSlice";
import { getUpdatedUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { ExperienceSectionSkeleton } from "../../../Skeletons/ExperienceSectionSkeleton";
import { ButtonTexts, CommonTexts, ProfileTexts } from "../../../Utils/Text";
import { AutoCompleteAddTags } from "../../CommonComponents/Controls/AutoComplete";
import { DeleteIconWithLabel } from "../../CommonComponents/Controls/ButtonControls";

export const SideProjectsSection = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUpdatedUserProfileInfo);

  const isLoading = useSelector(getIsUserDataLoading);

  const { sideProjects = [] } = userInfo;

  const onClickAddNewProject = useCallback(() => {
    const copyUserInfo = cloneDeep(userInfo);

    copyUserInfo.sideProjects.push(NewProjectsObject);

    dispatch(updateUserProfile(copyUserInfo));
  }, [dispatch, userInfo]);

  const onChangeStartDate = useCallback(
    (value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      const formattedDate = moment(new Date(value?.$d)).format("YYYY-MM-DD");

      copyUserInfo.sideProjects[index].startDate = formattedDate;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeEndDate = useCallback(
    (value, index) => {
      const formattedDate = moment(new Date(value?.$d)).format("YYYY-MM-DD");

      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.sideProjects[index].endDate = formattedDate;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeProjectName = useCallback(
    (value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.sideProjects[index].name = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeProjectUrl = useCallback(
    (value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.sideProjects[index].url = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeSkills = useCallback(
    (_e, value, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.sideProjects[index].skills =
        value.length > 0 ? value.join(", ") : [];

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeDescription = useCallback(
    ({ target: { value } }, index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.sideProjects[index].description = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onClickDeleteEducation = useCallback(
    (index) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.sideProjects.splice(index, 1);

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  return isLoading ? (
    <ExperienceSectionSkeleton />
  ) : (
    <CardWithError sx={{ pl: "1rem", pr: "1rem", boxShadow: 3 }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            {ProfileTexts.projects}
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          {sideProjects?.map(
            ({ description, name, url, skills, startDate, endDate }, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    sx={{ width: "100%" }}
                    value={name}
                    onChange={({ target: { value } }) =>
                      onChangeProjectName(value, index)
                    }
                    id="outlined-basic"
                    label={CommonTexts.projectName}
                    placeholder={CommonTexts.projectName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    sx={{ width: "100%" }}
                    value={url}
                    onChange={({ target: { value } }) =>
                      onChangeProjectUrl(value, index)
                    }
                    id="outlined-basic"
                    label={CommonTexts.projectUrl}
                    placeholder={CommonTexts.projectUrl}
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
                <Grid item xs={12}>
                  <AutoCompleteAddTags
                    sx={{ width: "100%" }}
                    value={skills.length > 0 ? skills.split(", ") : []}
                    onInputChange={(e, value) =>
                      onChangeSkills(e, value, index)
                    }
                    label={CommonTexts.addSkills}
                    placeholder={CommonTexts.addSkills.slice(0, -1)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                  <TextField
                    sx={{ width: "100%" }}
                    id="filled-multiline-flexible"
                    label="Description"
                    multiline
                    rows={3}
                    value={description}
                    onChange={(e) => onChangeDescription(e, index)}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={2}
                  lg={2}
                  xl={2}
                  sx={FlexAlignCenterStyles}>
                  <DeleteIconWithLabel
                    onClick={() => onClickDeleteEducation(index)}
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
              onClick={onClickAddNewProject}
              color="primary"
              variant="outlined">
              {ButtonTexts.addNewProject}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </CardWithError>
  );
};
