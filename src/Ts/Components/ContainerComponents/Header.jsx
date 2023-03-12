// import EngineeringTwoToneIcon from "@mui/icons-material/EngineeringTwoTone";
import { useOidc } from "@axa-fr/react-oidc";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  ButtonBase,
  FormControlLabel,
  FormGroup,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
// material-ui
import { useTheme } from "@mui/material/styles";
import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
// import ProfileSection from "./ProfileSection";
import { useNavigate } from "react-router-dom";
import { Font28Weight600SxStyles } from "../../CommonStyles/CommonSxStyles";
import { rolesConfig } from "../../Configs/AppConfig";
import { builResumeRoute, editProfileRoute } from "../../Configs/RoutesConfig";
import { getUserDetails } from "../../Redux/Selectors/UserSelectors/UserSelectors";
import { CommonTexts } from "../../Utils/Text";
import { AccountSettingsMenu } from "../CommonComponents/Controls/AccountSettings";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  // const dispatch = useDispatch();

  const navigate = useNavigate();
  const { logout } = useOidc();

  const { name, given_name, family_name, role } = useSelector(getUserDetails);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const normalizedName = useMemo(() => {
    return name?.split(" ")[0];
  }, [name]);

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
    // dispatch(postLogout());
    logout().then(() => {
      window.location.href = window.location.origin;
    });
  }, [logout]);

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
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            flexGrow: 1,
          }}>
          <FormGroup>
            <FormControlLabel
              control={
                <EngineeringOutlinedIcon
                  color="primary"
                  sx={{ width: 64, height: 40 }}
                />
              }
              label={<Typography variant="h2">SmileBat</Typography>}
            />
          </FormGroup>
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
          {`Hi ${normalizedName}!`}
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
