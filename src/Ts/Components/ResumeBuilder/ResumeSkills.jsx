import { Grid, Typography } from "@mui/material";
import { cloneDeep, isUndefined } from "lodash";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentResume } from "../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getCurrentEditingResume } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";
import { CommonTexts, ProfileTexts } from "../../Utils/Text";
import { AutoCompleteAddTags } from "../CommonComponents/Controls/AutoComplete";

export const ResumeSkills = () => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector(getCurrentEditingResume);

  const normalizedSkills = useMemo(() => {
    if (isUndefined(resumeDetails?.skills)) {
      return [];
    }
    const copySkills = cloneDeep(resumeDetails?.skills);

    return copySkills?.length > 0 ? copySkills?.split(", ") : [];
  }, [resumeDetails?.skills]);

  const onInputChange = useCallback(
    (_e, value) => {
      const copyResumeDetails = cloneDeep(resumeDetails);

      copyResumeDetails.skills = value.length > 0 ? value.join(", ") : [];

      dispatch(updateCurrentResume(copyResumeDetails));
    },
    [dispatch, resumeDetails]
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
          {ProfileTexts.skills}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <AutoCompleteAddTags
          error={false}
          required={true}
          sx={{ width: "100%", mb: 2 }}
          value={normalizedSkills}
          onInputChange={onInputChange}
          label={CommonTexts.addSkills}
          placeholder={CommonTexts.addSkills}
        />
      </Grid>
    </Grid>
  );
};
