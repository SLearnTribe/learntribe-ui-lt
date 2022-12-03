import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { uniqBy, uniqueId } from "lodash";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SxStylesAskWhy } from "../../../CommonStyles/CommonSxStyles";
import {
  AssessmentDifficultyLevelColorMap,
  AssessmentStatusMap,
} from "../../../Configs/Dashboards/DashboardsConfig";
import {
  setAssessmentInnerFilter,
  setAssessmentsData,
} from "../../../Redux/Ducks/Assessments/AssessmentsSlice";
import {
  getAssessmentInnerFilter,
  getAssessmentsData,
} from "../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import {
  handleFilteredAssessmentsData,
  handleToggleSaveAssessment,
} from "../../../Utils/AssessmentUtils/AssessmentsUtils";
import { AssessmentTexts } from "../../../Utils/Text";
import { AutoCompleteMultiSelect } from "../../CommonComponents/Controls/AutoComplete";

export const AssessmentCards = ({ selectedTab }) => {
  const dispatch = useDispatch();

  const assessmentsData = useSelector(getAssessmentsData);

  const assessmentInnerFilter = useSelector(getAssessmentInnerFilter);

  const onToggleSave = useCallback(
    ({ currentTarget }) => {
      const updatedAssessmentsData = handleToggleSaveAssessment(
        assessmentsData,
        currentTarget
      );

      dispatch(setAssessmentsData(updatedAssessmentsData));
    },
    [dispatch, assessmentsData]
  );

  const difficultyOptions = useMemo(() => {
    const normalizedOptions = assessmentsData.map(({ difficulty }) => {
      return {
        title: difficulty,
      };
    });

    return uniqBy(normalizedOptions, "title");
  }, [assessmentsData]);

  const onFilterByDifficulty = useCallback(
    (_e, value) => {
      dispatch(setAssessmentInnerFilter(value));
    },
    [dispatch]
  );

  const filteredAssessmentsData = useMemo(() => {
    return handleFilteredAssessmentsData(
      assessmentsData,
      assessmentInnerFilter,
      selectedTab
    );
  }, [assessmentsData, selectedTab, assessmentInnerFilter]);

  const onClickAskWhy = () => {};
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AutoCompleteMultiSelect
          options={difficultyOptions}
          value={assessmentInnerFilter}
          onChange={onFilterByDifficulty}
          label={"Filter by assessment difficulty level"}
          placeholder={"Select assessment by difficulty level"}
        />
      </Grid>
      {filteredAssessmentsData.map((row) => {
        const { title, difficulty, description, status } = row;
        return (
          <Grid item xs={12} key={uniqueId()}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}>
              <CardHeader
                action={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link sx={SxStylesAskWhy} onClick={onClickAskWhy}>
                      {AssessmentTexts.askWhy}
                    </Link>
                    <IconButton
                      row-data={JSON.stringify(row)}
                      onClick={onToggleSave}>
                      {status === "SAVED" ? (
                        <BookmarkIcon color="primary" />
                      ) : (
                        <BookmarkBorderIcon color="primary" />
                      )}
                    </IconButton>
                  </Box>
                }
                title={
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 20, fontWeight: 600, pr: 2 }}>
                      {title}
                    </Typography>
                    <Chip
                      sx={{
                        mr: 2,
                        color:
                          AssessmentDifficultyLevelColorMap[difficulty].color,
                        backgroundColor:
                          AssessmentDifficultyLevelColorMap[difficulty].bgColor,
                      }}
                      key={uniqueId()}
                      label={difficulty}
                      size="small"
                    />
                  </Box>
                }
              />
              <CardContent sx={{ pt: 0 }}>
                <Box>
                  <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
                    {description}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  mt: "auto",
                  pr: 3,
                }}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: AssessmentStatusMap[status?.toLowerCase()],
                  }}>
                  {status}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
