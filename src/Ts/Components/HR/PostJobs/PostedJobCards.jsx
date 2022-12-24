import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { isEmpty, uniqueId } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employmentTypeBeToUiMap } from "../../../Configs/AppConfig";
import { PostJobsNoData } from "../../../NoDataAvailable/PostJobs/NoJobsAvailable";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { setCurrentEditingPostJobData } from "../../../Redux/Ducks/PostJobs/PostJobsSlice";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { PostedJobCardsSkelton } from "../../../Skeletons/PostedJobCardsSkeleton";
import { ModalTexts } from "../../../Utils/Text";

export const PostedJobCards = ({ postJobsData }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsUserDataLoading);

  const onClickEditJob = useCallback(
    ({ currentTarget }) => {
      const currentJob = JSON.parse(currentTarget.getAttribute("row-data"));

      dispatch(setCurrentEditingPostJobData(currentJob));

      dispatch(setCurrentModal(ModalTexts.editJob));
    },
    [dispatch]
  );

  return isLoading ? (
    <PostedJobCardsSkelton />
  ) : isEmpty(postJobsData) ? (
    <PostJobsNoData text="No Jobs Available" />
  ) : (
    <>
      {postJobsData?.map(
        (
          {
            title = "N/A",
            businessName = "N/A",
            employmentType = "N/A",
            companyShortName = "N/A",
            location = "N/A",
            jobLocation = location,
            daysBetween = "N/A",
          },
          index
        ) => (
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
                action={
                  <EditOutlinedIcon
                    sx={{ cursor: "pointer" }}
                    row-data={JSON.stringify(postJobsData[index])}
                    onClick={onClickEditJob}
                  />
                } //For adding button at top corner of card
                title={
                  <>
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                        {title}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                        {businessName}
                      </Typography>
                    </Box>
                  </>
                }
                subheader={
                  <Box sx={{ display: "flex" }}>
                    <LocationOnIcon />
                    <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                      {jobLocation}
                    </Typography>
                  </Box>
                }
              />

              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
                  {employmentTypeBeToUiMap[employmentType]}
                </Typography>

                <Typography
                  sx={{ color: "#9D9D9F", fontSize: 16, fontWeight: 400 }}>
                  {daysBetween} days ago
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        )
      )}
    </>
  );
};
