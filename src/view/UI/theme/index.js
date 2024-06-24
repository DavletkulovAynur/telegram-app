import { createTheme } from "@mui/material";

//TODO: возможно есть решение получше
const tg = window?.Telegram?.WebApp;

const components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        marginTop: 0,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },
};

const typography = {
  button: {
    textTransform: "none",
  },
};

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: tg?.themeParams.button_color || "#89cffb",
      light: "#8ad6d6",
      contrastText: "rgba(255, 255, 255, 0.87)",
    },
    secondary: {
      main: "#9c81e8",
    },
    background: {
      default: "#f2f6f6",
    },
  },
  components,
  typography,
  body1: {
    color: tg?.themeParams.text_color || "#000 ", // Цвет текста по умолчанию
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: tg?.themeParams.text_color || "#000",
        "&:hover": {
          color: tg?.themeParams.text_color || "#000",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: tg?.themeParams.button_color || "#0db2b2",
      light: "#8ad6d6",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#a48aec",
    },
  },
  components,
  typography,
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: tg?.themeParams.text_color || "#fff",
        "&:hover": {
          color: tg?.themeParams.text_color || "#fff",
        },
      },
    },
  },
  body1: {
    color: tg?.themeParams.text_color || "#fff ", // Цвет текста по умолчанию
  },
});
