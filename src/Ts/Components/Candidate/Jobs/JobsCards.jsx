import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { capitalize, isEqual, uniqueId } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardWithNoData } from "../../../CommonJsx/CommonJsxUtils";
import {
  Font14Weight500SxStyles,
  Font15Weight500SxStyles,
  Font18Weight400SxStyles,
  Font18Weight600SxStyles,
  Font20Weight600SxStyles,
} from "../../../CommonStyles/CommonSxStyles";
import { JobsStatusMap } from "../../../Configs/Dashboards/DashboardsConfig";
import { assessmentsInstructionsRoute } from "../../../Configs/RoutesConfig";
import { updateAssessmentId } from "../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { setCurrentEditingJob } from "../../../Redux/Ducks/Jobs/JobsSlice";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { getJobs } from "../../../Redux/Selectors/Jobs/JobsSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { JobsCardSkeleton } from "../../../Skeletons/JobsCardSkeleton";
import { AssessmentTexts, CommonTexts, ModalTexts } from "../../../Utils/Text";

export const JobsCards = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const jobsData = useSelector(getJobs);

  const isLoading = useSelector(getIsUserDataLoading);

  const onClickJobCard = useCallback(
    (currentJob) => {
      dispatch(setCurrentEditingJob(currentJob));

      dispatch(setCurrentModal(ModalTexts.jobDescription));
    },
    [dispatch]
  );

  const onClickStartNow = useCallback(
    (e, status, assessmentId) => {
      e.stopPropagation();
      if (status === "PENDING") {
        dispatch(updateAssessmentId(assessmentId));

        navigate(assessmentsInstructionsRoute);
      }
    },
    [dispatch, navigate]
  );
  return isLoading ? (
    <JobsCardSkeleton />
  ) : (
    <>
      {jobsData.length === 0 && (
        <Grid item xs={12} key={uniqueId()}>
          <CardWithNoData text={CommonTexts.noJobsAvailable} />
        </Grid>
      )}
      {jobsData.map(
        (
          {
            title,
            businessName,
            city = "Bengaluru",
            description,
            requiredAssessments = [],
            id,
          },
          index
        ) => (
          <Grid item xs={12} key={uniqueId()}>
            <Card
              sx={{ cursor: "pointer" }}
              onClick={() => onClickJobCard(jobsData[index])}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography sx={Font20Weight600SxStyles}>
                          {title}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={Font18Weight600SxStyles}>
                          {`${businessName}, ${city}`}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography sx={Font18Weight400SxStyles}>
                          {description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={1}>
                    <Divider orientation="vertical" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography sx={Font18Weight600SxStyles}>
                          {AssessmentTexts.assessmentsRequired}
                        </Typography>
                      </Grid>
                      {requiredAssessments?.map(
                        ({ skill, status, id: assessmentId = null }) => (
                          <React.Fragment key={uniqueId()}>
                            <Grid item xs={7} sm={6} md={8} lg={8} xl={8}>
                              <Typography sx={Font15Weight500SxStyles}>
                                {skill}
                              </Typography>
                            </Grid>
                            <Grid item xs={5} sm={6} md={4} lg={4} xl={4}>
                              <Typography
                                onClick={(e) =>
                                  onClickStartNow(e, status, assessmentId)
                                }
                                sx={{
                                  ...Font14Weight500SxStyles,
                                  color: JobsStatusMap?.[status.toLowerCase()],
                                }}>
                                {isEqual(status, "PENDING")
                                  ? "Start Now"
                                  : capitalize(status).replaceAll("_", " ")}
                              </Typography>
                            </Grid>
                          </React.Fragment>
                        )
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )
      )}
    </>
  );
};
