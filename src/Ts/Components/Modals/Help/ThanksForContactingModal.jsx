import {
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { getCurrentModal } from "../../../Redux/Selectors/Modal/ModalSelectors";

export const ThanksForContactingModal = () => {
  const dispatch = useDispatch();

  const currentModal = useSelector(getCurrentModal);

  const onClose = useCallback(() => {
    dispatch(setCurrentModal(null));
  }, [dispatch]);

  return (
    <Dialog maxWidth="md" open={!!currentModal} onClose={onClose}>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h1">
                Thanks for contacting SmileBat
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>We’ll revert within next 24 hours.</Typography>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
