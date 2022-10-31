import { Card, CardContent, Grid, Typography } from "@mui/material";
import { uniqueId } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import {
  Font18Weight500SxStyles,
  Font21Weight500SxStyles,
} from "../../../../CommonStyles/CommonSxStyles";
import { getUserProfileInfo } from "../../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { CommonTexts } from "../../../../Utils/Text";

export const HrProfileContentSection = () => {
  const userInfo = useSelector(getUserProfileInfo);
  return (
    <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
      <Card sx={{ pl: "1rem", pr: "1rem" }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                color="primary"
                sx={{ fontSize: 30, fontWeight: 700 }}>
                {userInfo.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 22, fontWeight: 500 }}>
                {userInfo.currentRole}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={Font18Weight500SxStyles}>
                {userInfo.city}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="text.secondary"
                sx={{ ...Font18Weight500SxStyles, mt: 3 }}>
                {CommonTexts.description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={Font21Weight500SxStyles}>
                {userInfo.about}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="text.secondary"
                sx={{ ...Font18Weight500SxStyles, mt: 3 }}>
                {CommonTexts.skills}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={Font21Weight500SxStyles}>
                {userInfo.skills}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="text.secondary"
                sx={{ ...Font18Weight500SxStyles, mt: 3 }}>
                {CommonTexts.experience}
              </Typography>
            </Grid>
            {userInfo.workExperiences.map(
              (
                { orgName, location, endDate, startDate, designation },
                index
              ) => (
                <Grid item xs={12} key={uniqueId()}>
                  <Typography
                    sx={
                      Font21Weight500SxStyles
                    }>{`${orgName}, ${location} - ${startDate.slice(
                    0,
                    4
                  )} to ${endDate.slice(0, 4)}`}</Typography>
                  <Typography sx={Font21Weight500SxStyles}>
                    {designation}
                  </Typography>
                </Grid>
              )
            )}
            <Grid item xs={12}>
              <Typography
                color="text.secondary"
                sx={{ ...Font18Weight500SxStyles, mt: 3 }}>
                {CommonTexts.education}
              </Typography>
            </Grid>
            {userInfo.education.map(
              (
                { collegeName, fieldOfStudy, degree, dateOfCompletion },
                index
              ) => (
                <Grid item xs={12} key={uniqueId()}>
                  <Typography sx={Font21Weight500SxStyles}>
                    {collegeName}
                  </Typography>
                  <Typography sx={Font21Weight500SxStyles}>
                    {`${degree}- ${fieldOfStudy}`}
                  </Typography>
                  <Typography sx={Font21Weight500SxStyles}>
                    {dateOfCompletion}
                  </Typography>
                </Grid>
              )
            )}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
