import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { CommonTexts } from "../Utils/Text";

export const ApplicantSideViewSkeleton = () => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <CardHeader
        avatar={<Skeleton width={80} height={80} variant="circular" />}
        title={
          <>
            <Box>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                <Skeleton width={200} height={40} />
              </Typography>

              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                <Skeleton width={200} height={30} />
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                <Skeleton width={200} height={30} />
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                <Skeleton width={200} height={30} />
              </Typography>
            </Box>
          </>
        }
      />
      <CardContent>
        <Typography
          sx={{ fontSize: 16, fontWeight: 500, color: "#737272", mb: 1 }}>
          {CommonTexts.description}
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 500, mb: 1 }}>
          <Skeleton width={200} height={20} />
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontWeight: 500, color: "#737272", mb: 1 }}>
          {CommonTexts.experience}
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
          <Skeleton width={200} height={20} />
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton width={300} height={20} />
      </CardActions>
    </Card>
  );
};
