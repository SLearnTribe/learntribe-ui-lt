import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { getUpdatedUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { CandidateProfileSkeleton } from "../../../Skeletons/CandidateProfileSkeleton";
import { ButtonTexts } from "../../../Utils/Text";

export const ProfileAvatarSection = () => {
  const userInfo = useSelector(getUpdatedUserProfileInfo);

  const isLoading = useSelector(getIsUserDataLoading);

  // const [file, setFile] = useState(sampleImage);

  // const onChangePhoto = (e) => {
  //   if (!isEmpty(e.target.files)) {
  //     setFile(URL.createObjectURL(e.target.files[0]));
  //   }
  // };
  return isLoading ? (
    <CandidateProfileSkeleton />
  ) : (
    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 3,
            }}>
            <Avatar
              alt="Remy Sharp"
              // src={file}
              sx={{
                width: 100,
                height: 100,
                border: "thick solid",
                borderColor: (theme) => theme.palette.primary.dark,
              }}></Avatar>
          </Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
            }}
            variant="h2">
            {userInfo.name}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
            }}
            variant="body2"
            color="text.secondary">
            {userInfo.email}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
            }}
            variant="body2"
            color="text.secondary">
            <LocationOnIcon sx={{ height: 20 }} />
            {userInfo.country}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component="label"
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              borderRadius: 16,
              marginBottom: 2,
            }}>
            {ButtonTexts.uploadPhoto}
            <input
              hidden
              // onChange={onChangePhoto}
              accept="image/*"
              type="file"
            />
          </Button>
        </CardActions>
        <Divider light />
      </Card>
    </Grid>
  );
};
