import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  ButtonBase,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
// material-ui
import { useTheme } from "@mui/material/styles";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ProfileSection from "./ProfileSection";
import { useNavigate } from "react-router-dom";
import { Font28Weight600SxStyles } from "../../CommonStyles/CommonSxStyles";
import { rolesConfig } from "../../Configs/AppConfig";
import { builResumeRoute, editProfileRoute } from "../../Configs/RoutesConfig";
import { postLogout } from "../../Redux/Ducks/userSlice";
import { getUserDetails } from "../../Redux/Selectors/UserSelectors/UserSelectors";
import { CommonTexts } from "../../Utils/Text";
import { AccountSettingsMenu } from "../CommonComponents/Controls/AccountSettings";
// project imports
// import { Logo } from "./Logo";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { name, given_name, family_name, role } = useSelector(getUserDetails);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const onClickBuildResume = () => {
    navigate(builResumeRoute);
  };

  const onClickSettings = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClickLogout = useCallback(() => {
    setAnchorElUser(null);
    dispatch(postLogout());
  }, [dispatch]);

  const onClickProfile = () => {
    setAnchorElUser(null);
    navigate(editProfileRoute);
  };

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}>
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}>
          <Typography color={"primary"} variant="h1">
            SmileBat
          </Typography>
          {/* <Logo /> */}
        </Box>
        <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: "all .2s ease-in-out",
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              "&:hover": {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light,
              },
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit">
            <MenuIcon />
          </Avatar>
        </ButtonBase>
      </Box>

      {/* header search */}
      {/* <SearchSection /> */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      {/* <NotificationSection /> */}
      {/* <ProfileSection /> */}
      <Box
        sx={{
          alignItems: "center",
          display: {
            xs: "flex",
          },
        }}>
        {rolesConfig[role] === "CANDIDATE" && (
          <Link
            onClick={onClickBuildResume}
            underline="always"
            sx={{
              ...Font28Weight600SxStyles,
              mr: 5,
              cursor: "pointer",
              display: { xs: "none", md: "block" },
            }}>
            {CommonTexts.buildAResumeForFree}
          </Link>
        )}

        <Typography variant="h1" sx={{ pr: 2 }}>
          {name}
        </Typography>
        <Tooltip title="Account settings">
          <IconButton
            sx={{ p: 0 }}
            onClick={handleOpenUserMenu}
            aria-controls={anchorElUser ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorElUser ? "true" : undefined}>
            <Avatar sx={{ bgcolor: theme.palette.primary.main, color: "#fff" }}>
              {given_name?.[0] + family_name?.[0]}
            </Avatar>
          </IconButton>
        </Tooltip>
        <AccountSettingsMenu
          anchorElUser={anchorElUser}
          onClickLogout={onClickLogout}
          onClickSettings={onClickSettings}
          onClickProfile={onClickProfile}
          onClose={handleCloseUserMenu}
        />
      </Box>
    </>
  );
};

export default Header;
