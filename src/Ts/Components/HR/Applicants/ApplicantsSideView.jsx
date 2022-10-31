import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import sampleImage from "../../../../Assests/Adil.jpeg";
import { profileRoute } from "../../../Configs/RoutesConfig";
import { getSelectedApplicantDetails } from "../../../Redux/Selectors/ApplicantSelectors/ApplicantSelectors";
import { ButtonTexts, CommonTexts } from "../../../Utils/Text";

export const ApplicantsSideView = ({ isSelectMultipleActive }) => {
  const navigate = useNavigate();

  const applicantDetails = useSelector(getSelectedApplicantDetails);

  const onClickViewDetails = () => {
    navigate(profileRoute);
  };

  return !isSelectMultipleActive ? (
    <Card sx={{ boxShadow: 0 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            alt="Remy Sharp"
            src={sampleImage}
          />
        }
        title={
          <>
            <Box>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                {applicantDetails.name}
              </Typography>

              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                {applicantDetails.currentRole}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                {applicantDetails.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                {applicantDetails.phone}
              </Typography>
            </Box>
          </>
        }
      />
      <CardContent>
        <Typography
          sx={{ fontSize: 16, fontWeight: 500, color: "#737272", mb: 1 }}>
          {CommonTexts.description}
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 500, mb: 1 }}>
          {applicantDetails.about}
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontWeight: 500, color: "#737272", mb: 1 }}>
          {CommonTexts.experience}
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
          {applicantDetails.about}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={onClickViewDetails}
          sx={{ width: "16rem" }}
          variant="contained">
          {ButtonTexts.viewDetails}
        </Button>
      </CardActions>
    </Card>
  ) : null;
};
