import { Grid, TextField } from "@mui/material";
import { debounce } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { getApplicantsData } from "../../../Redux/Ducks/Applicants/ApplicantSlice";

export const ApplicantsSearch = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const getData = useCallback(
    (searchedText) => {
      dispatch(
        getApplicantsData({
          page: 1,
          limit: 25,
          skill: "",
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
        sx={{ width: "25rem" }}
        value={searchValue}
        onChange={onChangeSearchValue}
        id="outlined-basic"
        label="Search applicants"
        variant="outlined"
      />
    </Grid>
  );
};
