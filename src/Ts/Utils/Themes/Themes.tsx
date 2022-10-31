import { red } from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};


const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

// A custom theme for this app

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#f50057',
    },
    info: {
      main: '#1AC4A2',
    },
    error: {
      main: red.A400
    },

  }
});


const lightTheme = createTheme({
  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: [
      'Mulish',
      'sans-serif',
    ].join(','),
  },
  palette: {
    mode: "light",
    primary: {
      main: '#7779F5',
    },
    secondary: {
      main: '#f50057',
    },
    info: { ...INFO },
    success: { ...SUCCESS },
    warning: { ...WARNING },
    error: { ...ERROR },
    background: {
      paper: '#fff',
    },
    // text: {
    //   primary: '#fff',
    // },
  }
});

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export default themes;
