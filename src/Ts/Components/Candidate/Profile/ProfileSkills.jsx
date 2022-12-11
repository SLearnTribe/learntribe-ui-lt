import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { cloneDeep } from "lodash";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../../Redux/Ducks/Profile/ProfileSlice";
import { getUpdatedUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { CommonTexts, ProfileTexts } from "../../../Utils/Text";
import { AutoCompleteAddTags } from "../../CommonComponents/Controls/AutoComplete";

export const ProfileSkills = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUpdatedUserProfileInfo);

  const normalizedSkills = useMemo(() => {
    const copySkills = cloneDeep(userInfo.skills);

    return copySkills?.split(", ");
  }, [userInfo.skills]);

  const onInputChange = useCallback(
    (_e, value) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.skills = value.join(", ");

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
    <Card sx={{ pl: "1rem", pr: "1rem" }}>
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
              label="Job Description"
              multiline
              rows={4}
              value={userInfo.about}
              onChange={onChangeJobDescription}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
