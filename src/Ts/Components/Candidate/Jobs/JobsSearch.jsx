import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";

export const JobsSearchSearch = () => {
  const isLoading = useSelector(getIsUserDataLoading);

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = ({ target: { value } }) => {
    setSearchValue(value);
  };
  return (
    <Grid item xs={12}>
      <TextField
        disabled={isLoading}
        sx={{ width: "25rem" }}
        value={searchValue}
        onChange={onChangeSearchValue}
        id="outlined-basic"
        label="Search jobs"
        variant="outlined"
      />
    </Grid>
  );
};
