import { Grid, Link } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getJobs } from "../../../Redux/Selectors/Jobs/JobsSelectors";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { PostJobsViewAllSkeleton } from "../../../Skeletons/ViewAllSkeletion";
import { CommonTexts } from "../../../Utils/Text";
import { PostedJobCards } from "./PostedJobCards";

export const PreviouslyPostedJobs = () => {
  const postJobsData = useSelector(getJobs);

  const isLoading = useSelector(getIsUserDataLoading);

  const [viewAll, setViewAll] = useState(true);

  const filteredPostJobsData = useMemo(() => {
    return viewAll ? postJobsData?.slice(0, 3) : postJobsData;
  }, [viewAll, postJobsData]);

  const onClickViewAll = () => {
    setViewAll(!viewAll);
  };

  return (
    <>
      <PostedJobCards postJobsData={filteredPostJobsData} />
      {isLoading ? (
        <PostJobsViewAllSkeleton />
      ) : (
        <>
          {viewAll && (
            <Grid item xs={12} key={CommonTexts.viewAll}>
              <Link
                sx={{
                  color: "inherit",
                  fontSize: 24,
                  fontWeight: 600,
                  float: "right",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={onClickViewAll}
                underline="always">
                {CommonTexts.viewAll}
              </Link>
            </Grid>
          )}
        </>
      )}
    </>
  );
};
