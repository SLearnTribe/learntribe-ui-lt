import { Box, Drawer, useMediaQuery } from "@mui/material";
// material-ui
import { useTheme } from "@mui/material/styles";
import { SideNavListItems } from "../../CommonJsx/SideNavListItems";
import { drawerWidth } from "../../Configs/Themes/ThemesConfig";

// ==============================|| SIDEBAR DRAWER ||============================== //

export const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <Box sx={{ pl: 2, pr: 2 }}>
      <SideNavListItems />
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
      aria-label="mailbox folders">
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            // background: theme.palette.background.default,
            // color: theme.palette.text.primary,
            borderRight: "none",
            // boxShadow: "-10px 50px 20px 1px #aaaaaa",
            [theme.breakpoints.up("md")]: {
              top: "73px", //88px
            },
          },
        }}
        PaperProps={{ elevation: 4 }}
        ModalProps={{ keepMounted: true }}
        color="inherit">
        {drawer}
      </Drawer>
    </Box>
  );
};
