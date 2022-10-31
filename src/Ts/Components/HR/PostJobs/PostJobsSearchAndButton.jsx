import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { ButtonTexts, ModalTexts } from "../../../Utils/Text";

export const PostJobsSearchAndButton = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const onClickPostNewJob = useCallback(() => {
    dispatch(setCurrentModal(ModalTexts.postANewJobs));
  }, [dispatch]);

  return (
    <>
      <Grid item xs={6}>
        <TextField
          sx={{ width: "25rem" }}
          value={searchValue}
          onChange={onChangeSearchValue}
          id="outlined-basic"
          label="Search jobs"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={onClickPostNewJob}
          sx={{ textTransform: "none" }}
          startIcon={<AddIcon />}
          variant="contained">
          {ButtonTexts.postNewJob}
        </Button>
      </Grid>
    </>
  );
};
