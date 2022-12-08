import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { uniqueId } from "lodash";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Font14Weight500SxStyles,
  Font15Weight500SxStyles,
  Font18Weight400SxStyles,
  Font18Weight600SxStyles,
  Font20Weight600SxStyles,
} from "../../../CommonStyles/CommonSxStyles";
import { JobsStatusMap } from "../../../Configs/Dashboards/DashboardsConfig";
import { setCurrentEditingJob } from "../../../Redux/Ducks/Jobs/JobsSlice";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { getJobs } from "../../../Redux/Selectors/Jobs/JobsSelectors";
import { AssessmentTexts, ModalTexts } from "../../../Utils/Text";
import { AutoCompleteMultiSelect } from "../../CommonComponents/Controls/AutoComplete";

export const JobsCards = () => {
  const dispatch = useDispatch();

  const jobsData = useSelector(getJobs);

  const onClickJobCard = useCallback(
    (currentJob) => {
      dispatch(setCurrentEditingJob(currentJob));

      dispatch(setCurrentModal(ModalTexts.jobDescription));
    },
    [dispatch]
  );

  const onClickStartNow = (e, status) => {
    e.stopPropagation();
    if (status === "start") {
      console.log("clicked");
    }
  };
  return (
    <>
      <Grid item xs={12}>
        <AutoCompleteMultiSelect
          options={[]}
          value={[]}
          //   onChange={onFilterByDifficulty}
          label={"Filter by assessment difficulty level"}
          placeholder={"Select assessment by difficulty level"}
        />
      </Grid>
      {jobsData.map(
        (
          {
            title,
            businessName,
            city = "Bengaluru",
            description,
            requiredAssessments = [],
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
                      {requiredAssessments?.map(({ skill, status }) => (
                        <React.Fragment key={uniqueId()}>
                          <Grid item xs={7} sm={6} md={8} lg={8} xl={8}>
                            <Typography sx={Font15Weight500SxStyles}>
                              {skill}
                            </Typography>
                          </Grid>
                          <Grid item xs={5} sm={6} md={4} lg={4} xl={4}>
                            <Typography
                              onClick={(e) => onClickStartNow(e, status)}
                              sx={{
                                ...Font14Weight500SxStyles,
                                color: JobsStatusMap?.[status.toLowerCase()],
                              }}>
                              {status}
                            </Typography>
                          </Grid>
                        </React.Fragment>
                      ))}
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
