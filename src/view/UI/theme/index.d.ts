import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Components {
    MuiPaper?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
    MuiFormHelperText?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
    MuiAppBar?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
  }
}

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    components?: Components;
  }
}

export declare const lightTheme: Theme;
export declare const darkTheme: Theme;
