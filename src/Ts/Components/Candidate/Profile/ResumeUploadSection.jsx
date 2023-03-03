import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postUploadResume } from "../../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getUpdatedUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { ResumeUploadSkeleton } from "../../../Skeletons/ResumeUploadSkeleton";
import { ButtonTexts, ProfileTexts } from "../../../Utils/Text";

export const ResumeUploadSection = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsUserDataLoading);

  const { name = "Resume", email } = useSelector(getUpdatedUserProfileInfo);

  const onUploadResume = ({ target: { files } }) => {
    if (files[0] !== null) {
      dispatch(postUploadResume({ file: files[0], email }));
    }
  };

  return isLoading ? (
    <ResumeUploadSkeleton />
  ) : (
    <Card sx={{ pl: "1rem", pr: "1rem", boxShadow: 3 }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            {ProfileTexts.resume}
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="outlined" component="label">
                {ButtonTexts.addNewResume}
                <input
                  hidden
                  onChange={onUploadResume}
                  accept=".doc,.docx,.pdf"
                  type="file"
                />
              </Button>
              <Typography
                color="text.secondary"
                sx={{ fontSize: 16, fontWeight: 600 }}>
                {`${name}.pdf`}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
