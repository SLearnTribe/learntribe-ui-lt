import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUploadResume } from "../../../Redux/Ducks/ResumeBuilder/ResumeBuilderSlice";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { ResumeUploadSkeleton } from "../../../Skeletons/ResumeUploadSkeleton";
import { ButtonTexts, ProfileTexts } from "../../../Utils/Text";

export const ResumeUploadSection = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsUserDataLoading);

  const [fileName, setFileName] = useState("");

  const onUploadResume = ({ target: { files } }) => {
    setFileName(files[0].name);
    if (files[0] !== null) {
      dispatch(postUploadResume(files[0]));
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
                {fileName}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
