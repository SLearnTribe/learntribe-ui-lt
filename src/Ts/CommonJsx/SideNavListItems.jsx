import { Box } from "@mui/material";
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
import { VerticleDivider } from "./CommonJsxUtils";
import { StyledListItem } from "./SharedJsxStyles";

const CollapsedListItem = ({ row: { path, icon, title }, pathname }) => {
  const isSelected = isEqual(path, pathname);

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

const ExpandedListItem = ({ row: { path, icon, title }, pathname }) => {
  const isSelected = isEqual(path, pathname);

  return (
    <StyledListItem selected={isSelected} button>
      <VerticleDivider isVisible={isSelected} />
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText sx={{ color: "#fff" }} primary={title} />
    </StyledListItem>
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
