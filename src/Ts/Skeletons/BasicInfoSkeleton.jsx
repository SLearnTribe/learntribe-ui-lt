import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormLabel,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { ProfileTexts } from "../Utils/Text";

export const BasicInfoSkeleton = () => {
  return (
    <Card sx={{ pl: "1rem", pr: "1rem" }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
            {ProfileTexts.basicInfo}
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Skeleton width={"100%"} height={50} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Skeleton width={"100%"} height={50} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Skeleton width={"100%"} height={50} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Skeleton width={"100%"} height={50} />
          </Grid>
          <Grid item xs={12}>
            <FormControl required>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <Skeleton width={"100%"} height={40} />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
