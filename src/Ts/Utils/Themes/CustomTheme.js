import { createTheme } from "@mui/material/styles";
// assets
import colors from "../../../Assests/Scss/_themes-vars.module.scss";
// project imports
import componentStyleOverrides from "./ComponentStyleOverride";
import themePalette from "./Palette";
import themeTypography from "./Typography";

export const customTheme = () => {
  const color = colors;

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    // background: color.primaryLight, // Look for Bg color
    background: "#fff", // Look for Bg color
    darkTextPrimary: "#121926",
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
  };

  const themeOptions = {
    direction: "ltr",
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};
