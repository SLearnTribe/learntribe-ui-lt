import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import moment from "moment";
import React from "react";

export const DatePicker = ({ label, value = null, onAcceptDate, index }) => {
  const [open, setOpen] = React.useState(false);

  const [dateValue, setDateValue] = React.useState(value);

  const [currentlyWorking, setCurrentlyWorking] = React.useState(false);

  const onChangeDate = (e) => {
    const formattedDate = moment(new Date(e?.$d)).format("YYYY-MM-DD");

    setDateValue(formattedDate);
  };

  const onClickOk = () => {
    setOpen(false);
    onAcceptDate({ selectedDate: dateValue, currentlyWorking, index });
  };

  const onClickCancel = () => {
    setDateValue(value);
    setOpen(false);
  };

  const onChangeCurrentlyWorking = ({ target: { checked } }) => {
    setCurrentlyWorking(checked);
  };

  const CustomActionBar = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "flex-end", m: 2 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={onChangeCurrentlyWorking}
                checked={currentlyWorking}
              />
            }
            label="Currently Working here"
          />
        </FormGroup>
        <Button onClick={onClickCancel} variant="text">
          Cancel
        </Button>{" "}
        <Button onClick={onClickOk} variant="text">
          OK
        </Button>
      </Box>
    );
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        mask="____-__-__"
        inputFormat="YYYY-MM-DD"
        label={label}
        value={dateValue}
        components={{
          // Override default <ActionBar /> with a custom one
          ActionBar: CustomActionBar,
        }}
        onChange={onChangeDate}
        renderInput={(params) => (
          <TextField sx={{ width: "100%" }} {...params} />
        )}
      />
    </LocalizationProvider>
  );
};
