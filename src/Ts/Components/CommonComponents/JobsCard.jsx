import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { getCandidatesJobs } from "../../Redux/Selectors/Jobs/JobsSelectors";
import { ButtonTexts } from "../../Utils/Text";

export const JobsCard = () => {
  const candidateJobs = useSelector(getCandidatesJobs);

  const onClickViewDetails = () => {};
  return (
    <>
      {candidateJobs.map(
        ({
          location = "Bengaluru",
          businessName,
          companyShortName = businessName[0],
          employmentType,
          title,
        }) => (
          <Grid key={uniqueId()} item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{
                      fontSize: 36,
                      fontWeight: 600,
                      width: 80,
                      height: 80,
                      bgcolor: "#fff",
                      color: "#0F0F0F",
                      border: "1px solid #0F0F0F",
                    }}>
                    {companyShortName}
                  </Avatar>
                }
                action={null} //For adding button at top corner of card
                title={
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    {businessName}
                  </Typography>
                }
                subheader={
                  <Box sx={{ display: "flex" }}>
                    <LocationOnIcon />
                    <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                      {location}
                    </Typography>
                  </Box>
                }
              />
              <CardContent>
                <Box sx={{ display: "flex" }}>
                  <WorkIcon sx={{ mr: 1 }} />
                  <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
                    {title}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <BusinessCenterIcon sx={{ mr: 1 }} />
                  <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
                    {employmentType}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "center", mt: "auto" }}>
                <Button variant="contained" onClick={onClickViewDetails}>
                  {ButtonTexts.viewDetails}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      )}
      <Grid
        sx={{ display: { lg: "none", xs: "none", md: "inherit" } }}
        item
        md={6}></Grid>
    </>
  );
};
