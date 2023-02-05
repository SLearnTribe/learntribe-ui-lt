import { Box, ListItemButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { isEmpty, isEqual, uniqueId } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { DisplayFlexCenter } from "../CommonStyles/CommonSxStyles";
import { sideNavMenuItemsConfig } from "../Configs/AppConfig";
import { getIsSideMenuCollapsed } from "../Redux/Selectors/AppSelectors";
import { getUserDetails } from "../Redux/Selectors/UserSelectors/UserSelectors";
import { SideMenuTexts } from "../Utils/Text";
import { VerticleDivider } from "./CommonJsxUtils";
import { ResumeBuilderBadge, StyledListItem } from "./SharedJsxStyles";

const CollapsedListItem = ({ row: { path, icon, title }, pathname }) => {
  const isSelected = isEqual(path, pathname) || path.includes(pathname);

  return (
    <StyledListItem selected={isSelected} sx={{ pl: 0 }} button>
      <VerticleDivider orientation="horizontal" isVisible={isSelected} />
      <Box sx={{ display: "grid" }}>
        <ListItemIcon sx={DisplayFlexCenter}>{icon}</ListItemIcon>

        <ListItemText
          sx={{ color: "#fff", ...DisplayFlexCenter }}
          primary={title}
        />
      </Box>
    </StyledListItem>
  );
};

const ExpandedListItem = ({
  row: { path, icon, title, level = 1, borderRadius = 12 },
  pathname,
}) => {
  const isSelected =
    isEqual(path, pathname) ||
    pathname.includes(path) ||
    path.includes(pathname);

  const textSx = isSelected ? { fontWeight: 600 } : {};

  return (
    <ListItemButton
      sx={{
        borderRadius: `${borderRadius}px`,
        mb: 0.5,
        alignItems: "flex-start",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      selected={isSelected}
      button>
      <ListItemIcon>{icon}</ListItemIcon>
      {title === SideMenuTexts.resumeBuilder ? (
        <ResumeBuilderBadge badgeContent={"New"}>
          <ListItemText
            primary={
              <Typography sx={textSx} color="inherit">
                {title}
              </Typography>
            }
          />
        </ResumeBuilderBadge>
      ) : (
        <ListItemText
          primary={
            <Typography sx={textSx} color="inherit">
              {title}
            </Typography>
          }
        />
      )}
    </ListItemButton>
  );
};

export const SideNavListItems = () => {
  const location = useLocation();

  const isSideMenuCollapsed = useSelector(getIsSideMenuCollapsed);

  const { role } = useSelector(getUserDetails);

  return (
    <div>
      <List>
        {!isEmpty(role) &&
          sideNavMenuItemsConfig[role].map((row) => (
            <Link
              key={uniqueId()}
              to={row.path}
              style={{ color: "inherit", textDecoration: "inherit" }}>
              {isSideMenuCollapsed ? (
                <ExpandedListItem row={row} pathname={location.pathname} />
              ) : (
                <CollapsedListItem row={row} pathname={location.pathname} />
              )}
            </Link>
          ))}
      </List>
    </div>
  );
};
