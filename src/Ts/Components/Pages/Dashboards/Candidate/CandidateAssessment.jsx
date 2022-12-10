import {
  FormControlLabel,
  Grid,
  Pagination,
  PaginationItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { cloneDeep, uniqueId } from "lodash";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { JustifyContentFlexEndSxStyles } from "../../../../CommonStyles/CommonSxStyles";
import { getAssessmentOfCandidate } from "../../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { CommonTexts } from "../../../../Utils/Text";
import themes from "../../../../Utils/Themes/Themes";

export const CandidateAssessment = () => {
  const assessment = useSelector(getAssessmentOfCandidate);

  const [page, setPage] = useState(1);

  const [answers, setAnswers] = React.useState({});

  const [pageMap, setPageMap] = React.useState({});

  const onClickOption = useCallback(
    ({ currentTarget }) => {
      const id = currentTarget.getAttribute("data-id");

      const option = currentTarget.getAttribute("data-value");

      const copyValue = cloneDeep(answers);

      const copyPageMap = cloneDeep(pageMap);

      copyValue[id] = option;

      copyPageMap[page] = true;

      setAnswers(copyValue);

      setPageMap(copyPageMap);
    },
    [answers, pageMap, page]
  );

  const onChangePage = useCallback((_event, value) => {
    setPage(value);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 32,
            color: themes.light.palette.primary.main,
          }}>
          {`${assessment?.title} ${CommonTexts.assessment}`}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={JustifyContentFlexEndSxStyles}>
        {CommonTexts.timeRemaining}
      </Grid>
      <Grid item lg={9} xl={9} md={8} sm={12} xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>{`Q.${page} ${
            assessment?.challengeResponses[page - 1]?.question
          }`}</Grid>
          <RadioGroup
            sx={{ p: 3 }}
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={
              answers[assessment?.challengeResponses[page - 1]?.id]
                ? answers[assessment?.challengeResponses[page - 1]?.id]
                : null
            }
            data-id={assessment?.challengeResponses[page - 1]?.id}>
            {assessment?.challengeResponses[page - 1]?.options.map((option) => (
              <FormControlLabel
                key={uniqueId()}
                onClick={onClickOption}
                data-id={assessment?.challengeResponses[page - 1]?.id}
                data-value={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid item lg={3} xl={3} md={4} sm={12} xs={12}>
        <Pagination
          page={page}
          onChange={onChangePage}
          color="primary"
          hideNextButton
          selected
          hidePrevButton
          //   variant="outlined"
          siblingCount={assessment?.challengeResponses.length}
          count={assessment?.challengeResponses.length}
          renderItem={(item) => {
            console.log({ item });
            return (
              <PaginationItem
                sx={{
                  m: 0.5,
                  bgcolor: pageMap[item.page]
                    ? themes.light.palette.primary.main
                    : "inherit",
                  color: pageMap[item.page]
                    ? themes.light.palette.background.paper
                    : "inherit",
                }}
                {...item}
                variant={pageMap[item.page] ? "text" : "outlined"}
              />
            );
          }}
        />
      </Grid>
    </Grid>
  );
};