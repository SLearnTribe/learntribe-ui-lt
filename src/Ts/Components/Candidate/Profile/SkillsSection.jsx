import { CardContent, CardHeader, Grid, TextField } from "@mui/material";
import { cloneDeep, isUndefined } from "lodash";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTitleWithInfoIcon } from "../../../CommonJsx/CommonJsxUtils";
import { CardWithError } from "../../../CommonJsx/SharedJsxStyles";
import { updateUserProfile } from "../../../Redux/Ducks/Profile/ProfileSlice";
import {
  getProfileValidations,
  getUpdatedUserProfileInfo,
} from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { ProfileSkillsSkeleton } from "../../../Skeletons/ProfileSkillsSkeleton";
import { CommonTexts, ProfileTexts } from "../../../Utils/Text";
import { AutoCompleteAddTags } from "../../CommonComponents/Controls/AutoComplete";

export const ProfileSkills = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUpdatedUserProfileInfo);

  const isLoading = useSelector(getIsUserDataLoading);

  const { skillsError = false } = useSelector(getProfileValidations);

  const normalizedSkills = useMemo(() => {
    if (isUndefined(userInfo?.skills)) {
      return [];
    }
    const copySkills = cloneDeep(userInfo?.skills);

    return copySkills.length > 0 ? copySkills.split(", ") : [];
  }, [userInfo.skills]);

  const onInputChange = useCallback(
    (_e, value) => {
      let skill = value[value.length - 1];

      if (skill.trim().length > 0) {
        const copyUserInfo = cloneDeep(userInfo);

        copyUserInfo.skills = value.length > 0 ? value.join(", ") : [];

        dispatch(updateUserProfile(copyUserInfo));
      }
    },
    [dispatch, userInfo]
  );

  const onChangeJobDescription = useCallback(
    ({ target: { value } }) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.about = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  return isLoading ? (
    <ProfileSkillsSkeleton />
  ) : (
    <CardWithError
      isError={skillsError}
      sx={{ pl: "1rem", pr: "1rem", boxShadow: 3 }}>
      <CardHeader
        title={
          <CardTitleWithInfoIcon
            text={ProfileTexts.skills}
            tooltipText={CommonTexts.SKILLS_TOOLTIP}
          />
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AutoCompleteAddTags
              error={skillsError}
              required={true}
              sx={{ width: "100%" }}
              value={normalizedSkills}
              onInputChange={onInputChange}
              label={CommonTexts.addSkills}
              placeholder={CommonTexts.addSkills.slice(0, -1)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ width: "100%" }}
              id="filled-multiline-flexible"
              label="About"
              multiline
              rows={4}
              value={userInfo.about}
              onChange={onChangeJobDescription}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
    </CardWithError>
  );
};
