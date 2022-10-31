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
import React from "react";
import { useSelector } from "react-redux";
import sampleImage from "../../../../Assests/Adil.jpeg";
import { getUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { ButtonTexts } from "../../../Utils/Text";
import themes from "../../../Utils/Themes/Themes";

export const ProfileAvatarSection = () => {
  const userInfo = useSelector(getUserProfileInfo);
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 3,
            }}>
            <Avatar
              alt="Remy Sharp"
              src={sampleImage}
              sx={{
                width: 100,
                height: 100,
                border: "thick solid",
                borderColor: themes.light.palette.primary.dark,
              }}></Avatar>
          </Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
            }}
            variant="h4">
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
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              borderRadius: 16,
              marginBottom: 2,
              textTransform: "none",
            }}>
            {ButtonTexts.addPhoto}
          </Button>
        </CardActions>
        <Divider light />
      </Card>
    </Grid>
  );
};
