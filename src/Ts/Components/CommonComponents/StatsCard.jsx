// @mui
import { Card, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import PropTypes from "prop-types";
// components
// import Iconify from "./Iconify";

// ----------------------------------------------------------------------

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

DashboardStatsCard.propTypes = {
  color: PropTypes.string,
  Icon: PropTypes.object,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function DashboardStatsCard({
  title,
  total,
  Icon,
  color = "primary",
  sx,
  ...other
}) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        py: 1,
        textAlign: "center",
        color: (theme) => theme.palette[color].darker,
        ...sx,
      }}
      {...other}>
      <IconWrapperStyle
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}>
        <Icon width={24} height={24} />
      </IconWrapperStyle>

      <Typography variant="h3">{total}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
