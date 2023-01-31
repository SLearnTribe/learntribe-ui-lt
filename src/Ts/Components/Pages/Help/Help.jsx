import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import {
  ButtonTexts,
  CommonTexts,
  TextFieldLabelsAndTexts,
} from "../../../Utils/Text";

export const Help = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const onChangeQuery = useCallback(({ target: { value } }) => {
    setQuery(value);
  }, []);

  const onChangeName = useCallback(({ target: { value } }) => {
    setName(value);
    setNameError(false);
  }, []);

  const onChangeEmail = useCallback(({ target: { value } }) => {
    setEmail(value);
    setEmailError(false);
  }, []);

  const onChangePhone = useCallback(({ target: { value } }) => {
    setPhone(value);
    setPhoneError(false);
  }, []);

  const onSendInquiry = useCallback(() => {
    if (name.length < 1) {
      setNameError(true);
    }
    if (email.length < 1) {
      setEmailError(true);
    }
    if (phone.toString().length < 1) {
      setPhoneError(true);
    }
  }, [name, email, phone]);

  const onClickEmail = () => {
    window.open(`mailto:support@smilebat.com`);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1">{CommonTexts.CONTACT_US}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{CommonTexts.CONTACT_US_TITLE}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Reach out to us on email{" "}
          <Link onClick={onClickEmail}>support@smilebat.com</Link>. We’ll revert
          within next 24 hours.
        </Typography>
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Typography>Send inquiry with the form below.</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          error={nameError}
          sx={{ width: "30%" }}
          value={name}
          onChange={onChangeName}
          id="outlined-basic"
          label={TextFieldLabelsAndTexts.name}
          placeholder={TextFieldLabelsAndTexts.enterFullName}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          error={emailError}
          sx={{ width: "30%" }}
          value={email}
          onChange={onChangeEmail}
          id="outlined-basic"
          label={CommonTexts.email}
          placeholder={TextFieldLabelsAndTexts.enterEmail}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          error={phoneError}
          sx={{ width: "30%" }}
          value={phone}
          type="number"
          onChange={onChangePhone}
          id="outlined-basic"
          label={CommonTexts.mobileNo}
          placeholder={TextFieldLabelsAndTexts.enterPhoneOrMobileNumber}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ width: "60%" }}
          id="filled-multiline-flexible"
          label="How can we help you?"
          multiline
          rows={8}
          value={query}
          onChange={onChangeQuery}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSendInquiry}>
          {ButtonTexts.sendInquiry}
        </Button>
      </Grid>
    </Grid>
  );
};
