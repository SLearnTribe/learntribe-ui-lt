import { Grid, TextField } from "@mui/material";
import { debounce } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssessments } from "../../../Redux/Ducks/Assessments/AssessmentsSlice";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";

export const AssessmentSearch = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsUserDataLoading);

  const [searchValue, setSearchValue] = useState("");

  const getData = useCallback(
    (searchedText) => {
      dispatch(
        getAssessments({
          page: 1,
          limit: 25,
          keyword: searchedText,
        })
      );
    },
    [dispatch]
  );

  const debounceSave = useMemo(
    () =>
      debounce((val) => {
        getData(val);
      }, 500),
    [getData]
  );

  const onChangeSearchValue = useCallback(
    ({ target: { value } }) => {
      setSearchValue(value);
      debounceSave(value);
    },
    [debounceSave]
  );

  return (
    <Grid item xs={12}>
      <TextField
        disabled={isLoading}
        sx={{ width: "25rem" }}
        value={searchValue}
        onChange={onChangeSearchValue}
        id="outlined-basic"
        label="Search assessments"
        variant="outlined"
      />
    </Grid>
  );
};
