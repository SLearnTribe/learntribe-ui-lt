import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { JustifyContentSpaceBetweenSxStyles } from "../CommonStyles/CommonSxStyles";
import { ProfileTexts } from "../Utils/Text";

export const ExperienceSectionSkeleton = ({
  text = ProfileTexts.experience,
}) => {
  return (
    <Card sx={{ pl: "1rem", pr: "1rem" }}>
      <CardHeader
        title={
          <Typography sx={{ fontSize: 25, fontWeight: 600 }}>{text}</Typography>
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
          <Grid item xs={12} sx={JustifyContentSpaceBetweenSxStyles}>
            <Skeleton width={"100%"} height={50} />
            <Skeleton width={"100%"} height={50} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
