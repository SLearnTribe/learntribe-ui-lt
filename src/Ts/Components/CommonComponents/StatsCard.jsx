// @mui
import { Card, Typography } from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

// ----------------------------------------------------------------------

export const IconWrapperStyle = styled("div")(({ theme }) => ({
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

const CardWrapper = styled(Card)(({ theme, darkColor }) => ({
  // backgroundColor: theme.palette.secondary.dark,
  // color: "#fff",
  // overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: darkColor,
    borderRadius: "50%",
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: darkColor,
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));

export default function DashboardStatsCard({
  title,
  total,
  Icon,
  color = "primary",
  sx,
  ...other
}) {
  const theme = useTheme();
  return (
    <CardWrapper
      darkColor={theme.palette[color].dark}
      sx={{
        boxShadow: 3,
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
    </CardWrapper>
  );
}
