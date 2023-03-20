import {
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { cloneDeep, isNull } from "lodash";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardWithError } from "../../../CommonJsx/SharedJsxStyles";
import { updateUserProfile } from "../../../Redux/Ducks/Profile/ProfileSlice";
import { getUpdatedUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { ExperienceSectionSkeleton } from "../../../Skeletons/ExperienceSectionSkeleton";
import { CommonTexts, ProfileTexts } from "../../../Utils/Text";
import { AutoCompleteSelect } from "../../CommonComponents/Controls/AutoComplete";

const availableForInterviewOptions = [
  { title: "Yes" },
  { title: "No" },
  { title: "Not Immediately" },
];

const availableForInterviewOptionsMap = {
  Yes: "YES",
  N0: "NO",
  "Not Immediately": "NOT_IMMEDIATELY",
};

export const PaySection = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUpdatedUserProfileInfo);

  const isLoading = useSelector(getIsUserDataLoading);

  const {
    currentCtc = null,
    expectedCtc = null,
    noticePeriod = null,
    availableForInterview = null,
  } = userInfo;

  const onChangeCurrentCTC = useCallback(
    ({ target: { value } }) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.currentCtc = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeExpectedCTC = useCallback(
    ({ target: { value } }) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.expectedCtc = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeNP = useCallback(
    ({ target: { value } }) => {
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.noticePeriod = value;

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  const onChangeAvailability = useCallback(
    (_e, { title }) => {
      console.log(availableForInterviewOptionsMap[title]);
      const copyUserInfo = cloneDeep(userInfo);

      copyUserInfo.availableForInterview =
        availableForInterviewOptionsMap[title];

      dispatch(updateUserProfile(copyUserInfo));
    },
    [dispatch, userInfo]
  );

  return isLoading ? (
    <ExperienceSectionSkeleton text={ProfileTexts.compensation} />
  ) : (
    <CardWithError sx={{ pl: "1rem", pr: "1rem", boxShadow: 3 }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            {ProfileTexts.compensation}
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              sx={{ width: "100%" }}
              value={currentCtc}
              type="number"
              onChange={onChangeCurrentCTC}
              id="outlined-basic"
              label={CommonTexts.currentCTC}
              placeholder={CommonTexts.currentCTCPerAnnum}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              sx={{ width: "100%" }}
              value={expectedCtc}
              type="number"
              onChange={onChangeExpectedCTC}
              id="outlined-basic"
              label={CommonTexts.expectedCTC}
              placeholder={CommonTexts.expectedCTCPerAnnum}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              sx={{ width: "100%" }}
              value={noticePeriod}
              type="number"
              onChange={onChangeNP}
              id="outlined-basic"
              label={CommonTexts.noticePeriodInDays}
              placeholder={CommonTexts.noticePeriodInDays}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <AutoCompleteSelect
              options={availableForInterviewOptions}
              value={
                isNull(availableForInterview)
                  ? null
                  : {
                      title: availableForInterview,
                    }
              }
              onChange={onChangeAvailability}
              label={CommonTexts.availableForInterview}
              placeholder={CommonTexts.availableForInterview}
            />
          </Grid>
        </Grid>
      </CardContent>
    </CardWithError>
  );
};
