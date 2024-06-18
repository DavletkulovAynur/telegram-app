import { createTheme } from "@mui/material";

//TODO: возможно есть решение получше
const tg = window?.Telegram?.WebApp;
//FIXME: стили подправить
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
  MuiIconButton: {
    // Add this block
    styleOverrides: {
      root: {
        color: tg?.themeParams.text_color || "#fff",
        "&:hover": {
          color: tg?.themeParams.text_color || "#fff",
        },
      },
    },
  },
};

const typography = {
  button: {
    textTransform: "none",
  },
  body1: {
    color: tg?.themeParams.text_color || "#cf3247 ", // Цвет текста по умолчанию
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
  components: {
    components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#272727",
          backgroundImage: "none",
        },
      },
    },
  },
  typography,
});
