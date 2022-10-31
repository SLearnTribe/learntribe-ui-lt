import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JustifyContentSpaceBetweenAlignCenterSxStyles } from "../../../CommonStyles/CommonSxStyles";
import { setCurrentModal } from "../../../Redux/Ducks/Modal/ModalSlice";
import { getCurrentModal } from "../../../Redux/Selectors/Modal/ModalSelectors";
import { getUserProfileInfo } from "../../../Redux/Selectors/ProfileSelectors/ProfileSelectors";
import { CommonTexts } from "../../../Utils/Text";

export const ProfileContactInfoModal = () => {
  const dispatch = useDispatch();

  const currentModal = useSelector(getCurrentModal);

  const userInfo = useSelector(getUserProfileInfo);

  const onClose = useCallback(() => {
    dispatch(setCurrentModal(null));
  }, [dispatch]);
  return (
    <Dialog maxWidth="md" open={true} onClose={onClose}>
      <DialogTitle sx={JustifyContentSpaceBetweenAlignCenterSxStyles}>
        {currentModal}
        <CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>
              <PhoneIcon />
              <Typography sx={{ fontSize: 16, fontWeight: 600, ml: 2 }}>
                {CommonTexts.phone}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: 14, fontWeight: 500, ml: 5 }}>
              {userInfo.phone}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>
              <EmailOutlinedIcon />
              <Typography sx={{ fontSize: 16, fontWeight: 600, ml: 2 }}>
                {CommonTexts.email}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: 14, fontWeight: 500, ml: 5 }}>
              {userInfo.email}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
