import Badge from "@mui/material/Badge";
import { teal } from "@mui/material/colors";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { styled } from "@mui/material/styles";

export const StyledListItem = styled(ListItem)({
  fontSize: 24,
  // "&:hover": {
  //   backgroundColor: "#6B6CDC",
  //   color: "white",
  //   "& .MuiListItemIcon-root": {
  //     color: "white",
  //   },
  // },
  // "&.Mui-selected:hover": { backgroundColor: "#6B6CDC" },
  "&.Mui-selected": { backgroundColor: "#6B6CDC" },
});

export const StyledListSubheader = styled(ListSubheader)({
  backgroundColor: "#7779F5",
  fontWeight: "bold",
});

export const TealBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: teal.A400,
  },
});
