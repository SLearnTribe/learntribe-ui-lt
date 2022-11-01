import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { Divider, Tooltip, Typography } from "@mui/material";
import themes from "../Utils/Themes/Themes";

export const VerticleDivider = ({ isVisible }) => {
  return (
    <Divider
      sx={{
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 3,
        mr: 1,
        visibility: isVisible ? "visible" : "hidden",
      }}
      orientation="vertical"
      flexItem
    />
  );
};

export const SubHeaderText = ({ text }) => {
  return (
    <Typography fontWeight={600} fontSize={24}>
      {text}
    </Typography>
  );
};

export const handleJobSkillIcons = (status) => {
  switch (status) {
    case "Pending":
      return (
        <Tooltip title={status} placement="top-start" arrow>
          <PendingOutlinedIcon
            style={{ color: themes.light.palette.warning.dark }}
          />
        </Tooltip>
      );

    case "Completed":
      return (
        <Tooltip title={status} placement="top-start" arrow>
          <CheckCircleOutlineOutlinedIcon
            style={{ color: themes.light.palette.success.dark }}
          />
        </Tooltip>
      );

    case "Blocked":
      return (
        <Tooltip title={status} placement="top-start" arrow>
          <CancelOutlinedIcon
            style={{ color: themes.light.palette.error.dark }}
          />
        </Tooltip>
      );

    case "start":
      return (
        <Tooltip
          title={"Click to start this assessment"}
          placement="top-start"
          arrow>
          <PlayCircleFilledWhiteOutlinedIcon
            style={{ color: themes.light.palette.primary.main }}
          />
        </Tooltip>
      );

    default:
      break;
  }
};
