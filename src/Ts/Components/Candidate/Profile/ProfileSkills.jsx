import {
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { cloneDeep, isUndefined } from "lodash";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardWithError } from "../../../CommonJsx/SharedJsxStyles";
import { updateUserProfile } from "../../../Redux/Ducks/Profile/ProfileSlice";
import {
  getProfileValidations,
  getUpdatedUserProfileInfo,
} from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { CommonTexts, ProfileTexts } from "../../../Utils/Text";
import { AutoCompleteAddTags } from "../../CommonComponents/Controls/AutoComplete";

export const ProfileSkills = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUpdatedUserProfileInfo);

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
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.skills = value.length > 0 ? value.join(", ") : [];

      dispatch(updateUserProfile(copyUserInfo));
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

  return (
    <CardWithError isError={skillsError} sx={{ pl: "1rem", pr: "1rem" }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            {ProfileTexts.skills}
          </Typography>
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
