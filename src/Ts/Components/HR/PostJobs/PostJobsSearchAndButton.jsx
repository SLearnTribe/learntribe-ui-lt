import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { getIsUserDataLoading } from "../../../Redux/Selectors/UserSelectors/UserSelectors";
import { ButtonTexts, ModalTexts } from "../../../Utils/Text";

export const PostJobsSearchAndButton = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsUserDataLoading);

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
          disabled={isLoading}
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
          disabled={isLoading}
          onClick={onClickPostNewJob}
          startIcon={<AddIcon />}
          variant="contained">
          {ButtonTexts.postNewJob}
        </Button>
      </Grid>
    </>
  );
};
