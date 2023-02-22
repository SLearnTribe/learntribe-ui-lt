import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../Configs/TextsConfig";

export const AppBarStyles = {
  width: { sm: `calc(100% - ${drawerWidth}px)` },
  ml: { sm: `${drawerWidth}px` },
};

export const TemporaryDrawerStyles = {
  display: { xs: "block", sm: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
    backgroundColor: (theme) => theme.palette.primary.main,
    color: "#fff",
  },
};

export const PermanentDrawerStyles = {
  display: { xs: "none", sm: "block" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    backgroundColor: (theme) => theme.palette.primary.main,
    // width: drawerWidth
  },
};

export const PermanentDrawerPaperStyles = {
  sx: {
    backgroundColor: (theme) => theme.palette.primary.main,
    color: "#fff",
  },
};

export const DrawerContainerStyles = {
  flexGrow: 1,
  p: 3,
  width: { sm: `calc(100% - ${drawerWidth}px)` },
};

export const AlignCenterStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const WhiteColor = {
  color: "#fff",
};

export const BadgeBgColor = {
  backgroundColor: "#1AC4A2",
};

export const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme) => ({
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

export const StyledDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const StyledDrawer = styled(MuiDrawer, {
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

export const DisplayFlexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const SideNavExpandCollapseChevronStyles = {
  color: "#fff",
  background: "rgba(217, 217, 217, 0.3)",
  borderRadius: "4px 0px 0px 4px",
  pl: 0,
  pr: 0,
};

export const SxStylesAskWhy = {
  fontWeight: 600,
  fontSize: 12,
  color: "#737272",
  cursor: "pointer",
};

export const AccountSettingsPaperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

export const JustifyContentFlexEndSxStyles = {
  display: "flex",
  justifyContent: "flex-end",
};

export const JustifyContentSpaceBetweenSxStyles = {
  display: "flex",
  justifyContent: "space-between",
};

export const HrResumeAssessmentHeaderSxStyles = {
  ...DisplayFlexCenter,
  fontSize: 20,
  fontWeight: 500,
  pb: 0,
};

export const HrProfileAssessementsSxStyles = {
  display: "flex",
  // ml: "5rem",
};

export const ResumeDownloadBtnSxStyles = {
  fontSize: 18,
  fontWeight: 500,
  pl: 0,
};

export const SuccessAlertSxStyles = {
  fontWeight: 700,
  color: "#0f5132",
  bgcolor: "#d1e7dd",
  boxShadow: 3,
};

export const WarningAlertSxStyles = {
  fontWeight: 700,
  color: "#664d03",
  bgcolor: "#fff3cd",
  boxShadow: 3,
};

export const ErrorAlertSxStyles = {
  fontWeight: 700,
  color: "#842029",
  bgcolor: "#f8d7da",
  boxShadow: 3,
};

export const InfoAlertSxStyles = {
  fontWeight: 700,
  color: "#055160",
  bgcolor: "#cff4fc",
};

export const ContactInfoLinkSxStyles = {
  fontSize: 20,
  fontWeight: 500,
  ...DisplayFlexCenter,
  cursor: "pointer",
};

export const Font20Weight500SxStyles = {
  fontSize: 20,
  fontWeight: 500,
};

export const Font20Weight600SxStyles = {
  fontSize: 20,
  fontWeight: 600,
};

export const Font22Weight600SxStyles = {
  fontSize: 22,
  fontWeight: 600,
};

export const Font24Weight600SxStyles = {
  fontSize: 24,
  fontWeight: 600,
};

export const Font28Weight600SxStyles = {
  fontSize: 28,
  fontWeight: 600,
};

export const Font21Weight500SxStyles = {
  fontSize: 21,
  fontWeight: 500,
};

export const Font18Weight500SxStyles = {
  fontSize: 18,
  fontWeight: 500,
};

export const Font18Weight600SxStyles = {
  fontSize: 18,
  fontWeight: 600,
};

export const Font15Weight500SxStyles = {
  fontSize: 15,
  fontWeight: 500,
};

export const Font14Weight500SxStyles = {
  fontSize: 14,
  fontWeight: 500,
};

export const Font18Weight400SxStyles = {
  fontSize: 18,
  fontWeight: 400,
};

export const Font26Weight700SxStyles = {
  fontSize: 26,
  fontWeight: 700,
};

export const scrollAssessmentSxStyles = {
  display: "-webkit-box",
  gap: 1,
  py: 1,
  overflowX: "auto",
  width: "100%",
  // whiteSpace: "nowrap",
  // scrollSnapType: "x mandatory",
  // "& > *": {
  //   scrollSnapAlign: "center",
  // },
  // "::-webkit-scrollbar": { display: "none" },
};

export const HrAssessmentCardSxStyles = {
  borderRadius: 3,
  width: "20rem",
  display: "flex",
  flexDirection: "column",
  mr: "1rem",
  boxShadow: 3,
  ml: "0.2rem",
};

export const JustifyContentSpaceBetweenAlignCenterSxStyles = {
  ...JustifyContentSpaceBetweenSxStyles,
  alignItems: "center",
};
