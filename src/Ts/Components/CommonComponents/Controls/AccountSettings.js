import { Logout } from "@mui/icons-material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import {
  Box,
  CircularProgress,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { AccountSettingsPaperProps } from "../../../CommonStyles/CommonSxStyles";
import { rolesConfig } from "../../../Configs/AppConfig";
import { getUserDetails } from "../../../Redux/Selectors/UserSelectors/UserSelectors";

export const ProfileCompletionBar = ({ percentage }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={percentage} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Typography variant="caption" component="div" color="text.secondary">
          {`${percentage}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export const AccountSettingsMenu = ({
  anchorElUser,
  onClose,
  onClickLogout,
  onClickSettings,
  onClickProfile,
}) => {
  const { role } = useSelector(getUserDetails);

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={AccountSettingsPaperProps}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={onClose}>
      {rolesConfig[role] === "CANDIDATE" && (
        <MenuItem onClick={onClickProfile}>
          <ListItem component="div">
            <ListItemIcon>
              <AccountBoxOutlinedIcon color="primary" />
            </ListItemIcon>
            <ListItemText sx={{ mr: "2rem" }} primary="Profile" />
            <IconButton edge="end" aria-label="delete">
              <ProfileCompletionBar percentage={80} />
            </IconButton>
          </ListItem>
        </MenuItem>
      )}
      <MenuItem onClick={onClickSettings}>
        <ListItem component="div">
          <ListItemIcon>
            <SettingsApplicationsOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </MenuItem>
      <MenuItem onClick={onClickLogout}>
        <ListItem component="div">
          <ListItemIcon>
            <Logout color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </MenuItem>
    </Menu>
  );
};
