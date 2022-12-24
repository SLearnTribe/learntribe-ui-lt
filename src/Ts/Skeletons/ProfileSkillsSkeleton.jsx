import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { ProfileTexts } from "../Utils/Text";

export const ProfileSkillsSkeleton = () => {
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
            <Skeleton width={"100%"} height={50} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton width={"100%"} height={200} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
