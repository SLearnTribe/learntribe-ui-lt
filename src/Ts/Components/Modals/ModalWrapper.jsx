import {
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Dialog maxWidth="md" open={true}>
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
