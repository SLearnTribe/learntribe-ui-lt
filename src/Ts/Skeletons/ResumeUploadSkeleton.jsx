import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ProfileTexts } from "../Utils/Text";

export const ResumeUploadSkeleton = () => {
  return (
    <Card sx={{ pl: "1rem", pr: "1rem" }}>
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
              <Skeleton width={"100%"} height={50} />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
