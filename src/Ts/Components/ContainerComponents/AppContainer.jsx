import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Tooltip } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SideNavListItems } from "../../CommonJsx/SideNavListItems";
import {
  PermanentDrawerStyles,
  SideNavExpandCollapseChevronStyles,
  TemporaryDrawerStyles,
} from "../../CommonStyles/CommonSxStyles";
import { profileRoute } from "../../Configs/RoutesConfig";
import { setIsSideMenuCollapsed } from "../../Redux/Ducks/App/AppSlice";
import { postLogout } from "../../Redux/Ducks/userSlice";
import { getIsSideMenuCollapsed } from "../../Redux/Selectors/AppSelectors";
import { getUserDetails } from "../../Redux/Selectors/UserSelectors/UserSelectors";
import RootRouter from "../../Routing/RootRouter";
import { SideMenuTexts } from "../../Utils/Text";
import themes from "../../Utils/Themes/Themes";
import { AccountSettingsMenu } from "../CommonComponents/Controls/AccountSettings";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `100px`,
  [theme.breakpoints.up("sm")]: {
    width: `100px`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const PermanentDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AppContainer(props) {
  const { window } = props;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const open = useSelector(getIsSideMenuCollapsed);

  const { name, given_name, family_name } = useSelector(getUserDetails);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerOpen = React.useCallback(() => {
    dispatch(setIsSideMenuCollapsed(!open));
  }, [dispatch, open]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const onClickProfile = () => {
    setAnchorElUser(null);
    navigate(profileRoute);
  };

  const onClickSettings = () => {
    setAnchorElUser(null);
  };

  const onClickLogout = useCallback(() => {
    setAnchorElUser(null);
    dispatch(postLogout());
  }, [dispatch]);

  const navTitleMarginLeft = !open ? 0 : "2rem";

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        sx={{ bgcolor: "#fff" }}
        color="transparent"
        position="fixed">
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              alignItems: "center",
              display: {
                xs: "flex",
              },
            }}>
            <Typography sx={{ pr: 2 }} variant="h5" component="h5">
              {name}
            </Typography>
            <Tooltip title="Account settings">
              <IconButton
                sx={{ p: 0 }}
                onClick={handleOpenUserMenu}
                aria-controls={anchorElUser ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={anchorElUser ? "true" : undefined}>
                <Avatar sx={{ bgcolor: themes.light.palette.primary.main }}>
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
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        <MuiDrawer
          sx={TemporaryDrawerStyles}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <DrawerHeader
            sx={{ pr: 0, display: "flex", justifyContent: "center" }}>
            <Typography
              sx={{ color: "#fff" }}
              fontSize={36}
              variant="h5"
              component="h5">
              {SideMenuTexts.smileBat}
            </Typography>
          </DrawerHeader>
          <SideNavListItems />
        </MuiDrawer>
        <PermanentDrawer
          sx={{ ...PermanentDrawerStyles, width: open ? 240 : 100 }}
          variant="permanent"
          open={open}>
          <DrawerHeader sx={{ pr: 0 }}>
            <Typography
              sx={{ color: "#fff" }}
              fontSize={36}
              variant="h5"
              component="h5">
              {open ? SideMenuTexts.smileBat : SideMenuTexts.sb}
            </Typography>
            <IconButton
              sx={{
                ...SideNavExpandCollapseChevronStyles,
                ml: navTitleMarginLeft,
              }}
              size="small"
              onClick={handleDrawerOpen}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <SideNavListItems />
        </PermanentDrawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "hidden" }}>
        <DrawerHeader />
        <RootRouter />
      </Box>
    </Box>
  );
}
