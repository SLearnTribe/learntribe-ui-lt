import {
  Button,
  FormControlLabel,
  Grid,
  Pagination,
  PaginationItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import { cloneDeep, isEqual, uniqueId } from "lodash";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postSubmitAssessment,
  updateAssessmentModal,
} from "../../../../Redux/Ducks/Assessments/AssessmentsSlice";
import {
  getAssessmentOfCandidate,
  getAssessmentsModal,
} from "../../../../Redux/Selectors/Assessments/AssessmentsSelectors";
import { ButtonTexts } from "../../../../Utils/Text";

export const CandidateAssessment = () => {
  const dispatch = useDispatch();

  const assessment = useSelector(getAssessmentOfCandidate);

  const { answers: assessmentAnswers } = useSelector(getAssessmentsModal);

  const [page, setPage] = useState(1);

  const [answers, setAnswers] = React.useState({});

  const [pageMap, setPageMap] = React.useState({});

  const onClickOption = useCallback(
    ({ currentTarget }) => {
      const { id, question } = JSON.parse(
        currentTarget.getAttribute("data-row")
      );

      const option = currentTarget.getAttribute("data-value");

      const copyValue = cloneDeep(answers);

      const copyAnswersPostData = cloneDeep(assessmentAnswers);

      copyAnswersPostData[id] = { question, id, answer: option };

      const copyPageMap = cloneDeep(pageMap);

      copyValue[id] = option;

      copyPageMap[page] = true;

      setAnswers(copyValue);

      setPageMap(copyPageMap);

      dispatch(updateAssessmentModal({ answers: copyAnswersPostData }));
    },
    [dispatch, answers, pageMap, page, assessmentAnswers]
  );

  const onChangePage = useCallback((_event, value) => {
    setPage(value);
  }, []);

  const onClickPrev = useCallback(() => {
    setPage((value) => value - 1);
  }, []);

  const onClickNext = useCallback((_event, value) => {
    setPage((value) => value + 1);
  }, []);

  const onClickSubmit = useCallback(() => {
    dispatch(
      postSubmitAssessment({
        assessmentId: assessment.id,
        submitAssessmentDetails: {
          challengeResponses: Object.values(assessmentAnswers),
        },
      })
    );
  }, [dispatch, assessmentAnswers, assessment?.id]);

  return (
    <Grid container spacing={3}>
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
                data-row={JSON.stringify(
                  assessment?.challengeResponses[page - 1]
                )}
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
          variant="outlined"
          siblingCount={assessment?.challengeResponses.length}
          count={assessment?.challengeResponses.length}
          renderItem={(item) => {
            return (
              <PaginationItem
                sx={{
                  m: 0.5,
                  bgcolor: pageMap[item.page]
                    ? (theme) => theme.palette.primary.main
                    : "inherit",
                  color: pageMap[item.page]
                    ? (theme) => theme.palette.background.paper
                    : "inherit",
                }}
                {...item}
                // variant={pageMap[item.page] ? "text" : "outlined"}
              />
            );
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          disabled={isEqual(page, 1)}
          onClick={onClickPrev}
          sx={{ mr: 2 }}
          variant="outlined">
          {ButtonTexts.prev}
        </Button>
        {!isEqual(page, assessment?.challengeResponses.length) ? (
          <Button onClick={onClickNext} variant="contained">
            {ButtonTexts.next}
          </Button>
        ) : (
          <Button onClick={onClickSubmit} variant="contained">
            {ButtonTexts.submit}
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
