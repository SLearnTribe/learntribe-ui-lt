import { Divider, Typography } from "@mui/material";

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
