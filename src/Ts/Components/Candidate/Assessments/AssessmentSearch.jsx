import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const AssessmentSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = ({ target: { value } }) => {
    setSearchValue(value);
  };
  return (
    <Grid item xs={12}>
      <TextField
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
