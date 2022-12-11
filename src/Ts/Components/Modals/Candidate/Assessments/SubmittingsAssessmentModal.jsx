import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

export const SubmittingsAssessmentModal = () => {
  return (
    <Dialog maxWidth="md" open={true}>
      <DialogTitle id="scroll-dialog-title">{"currentModal"}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText tabIndex={-1}>DialogContentText</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
